const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter a valid email'
    ]
  },
  password: {
    type: String,
    // [true, 'Password is required']'
    minlength: [6, 'Password must be at least 6 characters']
  },
  googleId: { 
    type: String,
    unique: true,
    sparse: true
  },
  userType: {
    type: String,
    required: [true, 'User type is required'],
    enum: ['Author', 'Join as Brand', 'Join as Creator', 'Admin'],
    default: 'Author'
  },
  brandDetails: {
    productTypes: { type: [String], default: [] },
    desiredInfluencerNiches: { type: [String], default: [] },
    niches: { type: [String], default: [] },
    country: { type: String, trim: true, default: '' },
    state: { type: String, trim: true, default: '' },
    location: { type: String, trim: true, default: '' }
  },
  creatorDetails: {
    niches: { type: [String], default: [] },
    platforms: {
      type: [{
        _id: false,
        name: { type: String, trim: true, required: true },
        followers: { type: Number, default: 0, min: 0 },
        profileLink: { type: String, trim: true, default: '' }
      }],
      default: []
    },
    contentLanguages: { type: [String], default: [] },
    country: { type: String, trim: true, default: '' },
    state: { type: String, trim: true, default: '' },
    location: { type: String, trim: true, default: '' }
  },
  ipAddress: {
    type: String,
    default: null
  },
  profilePicture: {
    type: String,
    default: null
  },
  isVerified: { 
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  lastLogin: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  // Only hash if password exists and is modified
  if (!this.password || !this.isModified('password')) {
    return next();
  }
  
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  // Return false if no password is set (Google users)
  if (!this.password) {
    return false;
  }
  return await bcrypt.compare(candidatePassword, this.password);
};

// Remove password from JSON output
userSchema.methods.toJSON = function() {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

module.exports = mongoose.model('User', userSchema);