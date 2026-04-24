const express = require('express');
const { body } = require('express-validator');
const { register, login, getMe } = require('../controllers/authControllers');
const { protect } = require('../middleware/auth');
const passport = require('passport'); 
const jwt = require('jsonwebtoken'); 

const router = express.Router();

// Validation rules
const registerValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please enter a valid email'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  body('userType')
    .isIn(['Author', 'Join as Brand', 'Join as Creator'])
    .withMessage('Invalid user type')
    .custom((value) => {
      if (value === 'Admin') throw new Error('Admin accounts cannot be created via the public API');
      return true;
    })
];

const loginValidation = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please enter a valid email'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
];

// Regular Routes
router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);
router.get('/me', protect, getMe);

// @route   GET /api/auth/google
// @desc    Initiate Google OAuth
// @access  Public
router.get('/google', 
  passport.authenticate('google', { 
    scope: ['profile', 'email'],
    session: false 
  })
);

// @route   GET /api/auth/google/callback
// @desc    Google OAuth callback
// @access  Public
router.get('/google/callback',
  passport.authenticate('google', { 
    failureRedirect: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/register`,
    session: false 
  }),
  async (req, res) => {
    try {
      // Generate JWT token for the authenticated user
      const token = jwt.sign(
        { id: req.user._id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE || '7d' }
      );

      // Prepare user data to send to frontend
      const user = {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        userType: req.user.userType,
        profilePicture: req.user.profilePicture
      };

      // Redirect to frontend callback page with token and user data
      res.redirect(
        `${process.env.FRONTEND_URL || 'http://localhost:5173'}/auth/callback?token=${token}&user=${encodeURIComponent(JSON.stringify(user))}`
      );
    } catch (err) {
      console.error('Google OAuth callback error:', err);
      res.redirect(
        `${process.env.FRONTEND_URL || 'http://localhost:5173'}/register?error=authentication_failed`
      );
    }
  }
);

module.exports = router;