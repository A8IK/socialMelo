const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

// Determine callback URL based on environment
const callbackURL = process.env.NODE_ENV === 'production'
  ? `${process.env.BACKEND_URL}/api/auth/google/callback`
  : 'http://localhost:9000/api/auth/google/callback';

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: callbackURL,
    proxy: true // Important for production with load balancers/proxies
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Log for debugging (remove in production or use proper logging)
      if (process.env.NODE_ENV === 'development') {
        console.log('Google Profile:', profile);
      }
      
      // Validate email
      if (!profile.emails || !profile.emails[0]) {
        return done(new Error('No email found in Google profile'), null);
      }

      const email = profile.emails[0].value;
      
      // Check if user already exists with this email
      let user = await User.findOne({ email: email.toLowerCase() });
      
      if (user) {
        // If user exists but doesn't have googleId, add it
        if (!user.googleId) {
          user.googleId = profile.id;
          user.isVerified = true;
          
          // Update profile picture if not set
          if (!user.profilePicture && profile.photos && profile.photos[0]) {
            user.profilePicture = profile.photos[0].value;
          }
          
          await user.save();
          
          if (process.env.NODE_ENV === 'development') {
            console.log('✅ Updated existing user with Google ID');
          }
        }
        
        // Update last login
        user.lastLogin = new Date();
        await user.save();
        
        return done(null, user);
        
      } else {
        // Create new user
        const newUser = new User({
          name: profile.displayName,
          email: email.toLowerCase(),
          googleId: profile.id,
          profilePicture: profile.photos && profile.photos[0] ? profile.photos[0].value : null,
          userType: 'None', // Default type
          isVerified: true,
          isActive: true,
          lastLogin: new Date()
        });
        
        user = await newUser.save();
        
        if (process.env.NODE_ENV === 'development') {
          console.log('✅ New Google user created:', user.email);
        }
        
        return done(null, user);
      }
      
    } catch (err) {
      console.error('❌ Google Strategy Error:', err);
      return done(err, null);
    }
  }
));

// Serialize user for the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user from the session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id).select('-password');
    done(null, user);
  } catch (err) {
    console.error('❌ Deserialize user error:', err);
    done(err, null);
  }
});

module.exports = passport;