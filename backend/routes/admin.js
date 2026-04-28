const express = require('express');
const User = require('../models/User');
const { protect, requireAdmin } = require('../middleware/auth');

const router = express.Router();

router.use(protect, requireAdmin);

router.get('/stats', async (req, res) => {
  try {
    const [total, brands, creators, admins] = await Promise.all([
      User.countDocuments({ userType: { $ne: 'Admin' } }),
      User.countDocuments({ userType: 'Join as Brand' }),
      User.countDocuments({ userType: 'Join as Creator' }),
      User.countDocuments({ userType: 'Admin' })
    ]);
    res.json({ success: true, stats: { total, brands, creators, admins } });
  } catch (err) {
    console.error('Admin stats error:', err);
    res.status(500).json({ success: false, message: 'Failed to load stats' });
  }
});

router.get('/users', async (req, res) => {
  try {
    const { userType, search, page = 1, limit = 25 } = req.query;
    const query = { userType: { $ne: 'Admin' } };

    if (userType && ['Join as Brand', 'Join as Creator', 'Author'].includes(userType)) {
      query.userType = userType;
    }

    if (search && typeof search === 'string' && search.trim()) {
      const needle = search.trim();
      const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const rx = new RegExp(escaped, 'i');
      query.$or = [{ name: rx }, { email: rx }];
    }

    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.min(100, Math.max(1, parseInt(limit, 10) || 25));
    const skip = (pageNum - 1) * limitNum;

    const [users, totalCount] = await Promise.all([
      User.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limitNum)
        .lean(),
      User.countDocuments(query)
    ]);

    res.json({
      success: true,
      users,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total: totalCount,
        totalPages: Math.ceil(totalCount / limitNum)
      }
    });
  } catch (err) {
    console.error('Admin list users error:', err);
    res.status(500).json({ success: false, message: 'Failed to load users' });
  }
});

router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean();
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.json({ success: true, user });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({ success: false, message: 'Invalid user id' });
    }
    console.error('Admin get user error:', err);
    res.status(500).json({ success: false, message: 'Failed to load user' });
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    if (req.user && String(req.user._id) === String(req.params.id)) {
      return res.status(400).json({ success: false, message: 'You cannot delete your own admin account.' });
    }
    const target = await User.findById(req.params.id);
    if (!target) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    if (target.userType === 'Admin') {
      return res.status(403).json({ success: false, message: 'Admin accounts cannot be deleted from the dashboard.' });
    }
    await target.deleteOne();
    res.json({ success: true, message: 'User deleted', id: req.params.id });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({ success: false, message: 'Invalid user id' });
    }
    console.error('Admin delete user error:', err);
    res.status(500).json({ success: false, message: 'Failed to delete user' });
  }
});

module.exports = router;
