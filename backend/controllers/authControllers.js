const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const axios = require('axios');
const { sendSignupEmails } = require('../utils/email');

const PRIVATE_IP_REGEX = /^(::1|127\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[0-1])\.)/;

async function resolveLocationFromIp(ip) {
  if (!ip || PRIVATE_IP_REGEX.test(ip)) return '';
  try {
    const { data } = await axios.get(`https://ipwho.is/${encodeURIComponent(ip)}`, { timeout: 4000 });
    if (data && data.success) {
      const parts = [data.city, data.country].filter(Boolean);
      return parts.join(', ');
    }
  } catch (err) {
    console.warn('IP geolocation failed:', err.message);
  }
  return '';
}

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || '7d'
  });
};

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
const register = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { name, email, password, userType, brandDetails, creatorDetails } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User with this email already exists'
      });
    }

    const forwarded = req.headers['x-forwarded-for'];
    const ipAddress = (typeof forwarded === 'string' && forwarded.length > 0
      ? forwarded.split(',')[0].trim()
      : req.ip) || null;

    const resolvedLocation = await resolveLocationFromIp(ipAddress);

    // Create user object
    const userData = {
      name: name.trim(),
      email: email.toLowerCase(),
      password,
      userType: userType || 'Author',
      ipAddress
    };

    if (userType === 'Join as Brand' && brandDetails && typeof brandDetails === 'object') {
      userData.brandDetails = {
        productTypes: Array.isArray(brandDetails.productTypes) ? brandDetails.productTypes : [],
        desiredInfluencerNiches: Array.isArray(brandDetails.desiredInfluencerNiches) ? brandDetails.desiredInfluencerNiches : [],
        niches: Array.isArray(brandDetails.niches) ? brandDetails.niches : [],
        country: String(brandDetails.country || '').trim(),
        state: String(brandDetails.state || '').trim(),
        location: resolvedLocation
      };
    }

    if (userType === 'Join as Creator' && creatorDetails && typeof creatorDetails === 'object') {
      const rawPlatforms = Array.isArray(creatorDetails.platforms) ? creatorDetails.platforms : [];
      const ageVal = Number(creatorDetails.age);
      const phone = (creatorDetails.phone && typeof creatorDetails.phone === 'object') ? creatorDetails.phone : {};
      userData.creatorDetails = {
        age: Number.isFinite(ageVal) && ageVal >= 13 && ageVal <= 100 ? ageVal : null,
        gender: String(creatorDetails.gender || '').trim(),
        phone: {
          countryCode: String(phone.countryCode || '').trim(),
          number: String(phone.number || '').trim()
        },
        niches: Array.isArray(creatorDetails.niches) ? creatorDetails.niches : [],
        platforms: rawPlatforms
          .filter(p => p && typeof p === 'object' && p.name)
          .map(p => ({
            name: String(p.name).trim(),
            followers: Number.isFinite(Number(p.followers)) ? Number(p.followers) : 0,
            profileLink: String(p.profileLink || '').trim()
          })),
        contentLanguages: Array.isArray(creatorDetails.contentLanguages) ? creatorDetails.contentLanguages : [],
        country: String(creatorDetails.country || '').trim(),
        state: String(creatorDetails.state || '').trim(),
        location: resolvedLocation
      };
    }

    // Create user
    const user = await User.create(userData);

    // Generate token
    const token = generateToken(user._id);

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // Fire-and-forget signup emails (admin notification + user welcome).
    // Awaiting would block the response on SMTP latency.
    sendSignupEmails(user).catch(err => {
      console.error('[email] sendSignupEmails crashed:', err && err.message ? err.message : err);
    });

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        userType: user.userType,
        profilePicture: user.profilePicture,
        createdAt: user.createdAt
      },
      token
    });

  } catch (error) {
    console.error('Registration error:', error);
    
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Email already exists'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error during registration'
    });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { email, password } = req.body;

    // Find user and include password for comparison
    const user = await User.findOne({ email: email.toLowerCase() }).select('+password');
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Check if user has a password (not a Google OAuth user)
    if (!user.password) {
      return res.status(401).json({
        success: false,
        message: 'Please sign in with Google'
      });
    }

    // Check password
    const isPasswordMatch = await user.comparePassword(password);
    
    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Check if user is active
    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        message: 'Account is deactivated. Please contact support.'
      });
    }

    // Generate token
    const token = generateToken(user._id);

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    res.json({
      success: true,
      message: 'Login successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        userType: user.userType,
        profilePicture: user.profilePicture,
        lastLogin: user.lastLogin
      },
      token
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during login'
    });
  }
};

// @desc    Get current user
// @route   GET /api/auth/me
// @access  Private
const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    
    res.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        userType: user.userType,
        profilePicture: user.profilePicture,
        createdAt: user.createdAt,
        lastLogin: user.lastLogin
      }
    });
  } catch (error) {
    console.error('Get me error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = {
  register,
  login,
  getMe
};