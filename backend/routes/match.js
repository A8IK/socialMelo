const express = require('express');
const User = require('../models/User');
const { protect, requireAdmin } = require('../middleware/auth');
const { scoreMatch } = require('../utils/matching');
const { publicProfile } = require('../utils/publicProfile');

const router = express.Router();

async function topMatchesFor(user, { limit = 24, exposeFull = false } = {}) {
  const expose = (u) => (exposeFull ? u : publicProfile(u));

  if (user.userType === 'Join as Brand') {
    const creators = await User.find({ userType: 'Join as Creator' })
      .select('-password -__v')
      .lean();

    return creators
      .map(c => ({ user: expose(c), ...scoreMatch(user, c) }))
      .filter(m => m.tier !== 'below')
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  }

  if (user.userType === 'Join as Creator') {
    const brands = await User.find({ userType: 'Join as Brand' })
      .select('-password -__v')
      .lean();

    return brands
      .map(b => ({ user: expose(b), ...scoreMatch(b, user) }))
      .filter(m => m.tier !== 'below')
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  }

  return [];
}

router.get('/for-me', protect, async (req, res) => {
  try {
    const matches = await topMatchesFor(req.user);
    res.json({ success: true, matches });
  } catch (err) {
    console.error('Match /for-me error:', err);
    res.status(500).json({ success: false, message: 'Failed to compute matches' });
  }
});

router.get('/admin/:userId', protect, requireAdmin, async (req, res) => {
  try {
    const target = await User.findById(req.params.userId).lean();
    if (!target) return res.status(404).json({ success: false, message: 'User not found' });
    const matches = await topMatchesFor(target, { exposeFull: true });
    res.json({ success: true, matches });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({ success: false, message: 'Invalid user id' });
    }
    console.error('Match admin error:', err);
    res.status(500).json({ success: false, message: 'Failed to compute matches' });
  }
});

module.exports = router;
