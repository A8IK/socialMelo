const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const session = require('express-session');
const MongoStore = require('connect-mongo'); 
const path = require('path');
require('dotenv').config();

// Import database connection
const connectDB = require('./config/database');

const authRoutes = require('./routes/auth');
const downloadRoutes = require('./routes/download');

// Create Express app
const app = express();

// Connect to MongoDB
connectDB();

// Security middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again later.'
  }
});

app.use(limiter);

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://socialmelo.com', 'https://www.socialmelo.com'] 
    : ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Body parser middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-fallback-secret-key-change-this',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI,
    touchAfter: 24 * 3600 // Lazy session update
  }),
  cookie: { 
    secure: process.env.NODE_ENV === 'production', 
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Passport configuration
const passport = require('./config/passport'); 
app.use(passport.initialize());
app.use(passport.session());

// Serve static files (uploaded images)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Routes
app.use('/api/auth', authRoutes);

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'SocialMelo API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Root route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to SocialMelo API',
    version: '1.0.0'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found',
    path: req.path
  });
});

// Global error handler
app.use((error, req, res, next) => {
  console.error('Global error:', error);
  
  if (error.name === 'MulterError') {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'File size too large. Maximum size allowed is 5MB.'
      });
    }
  }
  
  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === 'production' 
      ? 'Something went wrong!' 
      : error.message
  });
});

// Start server
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
  console.log(`✅ MongoDB Connected`);
  console.log(`🌐 API Health Check: http://localhost:${PORT}/api/health`);
  console.log(`🔐 Google OAuth: http://localhost:${PORT}/api/auth/google`);
});