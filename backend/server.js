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

// Import routes
const authRoutes = require('./routes/auth');
const downloadRoutes = require('./routes/download');
const adminRoutes = require('./routes/admin');

// Create Express app
const app = express();

// Connect to MongoDB with promise handling
connectDB()
  .then(() => console.log('🎉 MongoDB connection established'))
  .catch((err) => {
    console.error(' Failed to connect to MongoDB:', err.message);
    process.exit(1);
  });

// Security middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" },
  contentSecurityPolicy: false
}));

// Trust proxy
app.set('trust proxy', 1);

// CORS configuration
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173', 
  'http://localhost:5174',
  'https://socialmelo.com',
  'https://www.socialmelo.com'
];

const corsOptions = {
  origin: function (origin, callback) {
    console.log('🔍 CORS Check - Origin:', origin);
    
    // Allow requests with no origin (mobile apps, curl, Postman)
    if (!origin) {
      console.log('✅ CORS: No origin (allowed)');
      return callback(null, true);
    }
    
    if (allowedOrigins.includes(origin)) {
      console.log('✅ CORS: Origin allowed');
      callback(null, true);
    } else {
      console.log('❌ CORS: Origin blocked');
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
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
    touchAfter: 24 * 3600,
    crypto: {
      secret: process.env.SESSION_SECRET || 'fallback-secret'
    }
  }),
  cookie: { 
    secure: process.env.NODE_ENV === 'production', 
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax'
  },
  name: 'socialmelo.sid'
}));

// Passport configuration
const passport = require('./config/passport'); 
app.use(passport.initialize());
app.use(passport.session());

// Request logging (development only)
if (process.env.NODE_ENV !== 'production') {
  app.use((req, res, next) => {
    console.log(`📨 [${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
  });
}

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again later.'
  }
});

const downloadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Download limit reached. Please try again in 15 minutes.'
  }
});

// 1. Root route (no rate limit)
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to SocialMelo API',
    version: '1.0.0'
  });
});

// 2. Health check route (no rate limit) - MUST BE BEFORE /api catch-all
app.get('/api/health', (req, res) => {
  // console.log('✅ Health check requested');
  res.json({
    success: true,
    message: 'SocialMelo API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      download: '/api/download',
      health: '/api/health'
    }
  });
});

// 3. Specific API routes with their own rate limits
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/download', downloadLimiter, downloadRoutes);

// 4. General rate limiter for any other /api routes (catch-all)
app.use('/api', generalLimiter);

// 404 handler
app.use((req, res) => {
  // console.log('❌ 404:', req.method, req.path);
  res.status(404).json({
    success: false,
    message: 'API endpoint not found',
    path: req.path
  });
});

// Global error handler
app.use((error, req, res, next) => {
  console.error('=== ERROR ===');
  console.error('Path:', req.path);
  console.error('Error:', error.message);
  
  if (error.message === 'Not allowed by CORS') {
    return res.status(403).json({
      success: false,
      message: 'CORS policy: Origin not allowed'
    });
  }
  
  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === 'production' 
      ? 'Something went wrong!' 
      : error.message
  });
});

const PORT = process.env.PORT || 9000;

const server = app.listen(PORT, () => {
  console.log('🚀 SocialMelo API Server Started');
  console.log(`📡 Port: ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 URL: http://localhost:${PORT}`);
  console.log('✅ Ready to accept connections');
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use`);
    process.exit(1);
  } else {
    console.error('❌ Server error:', error);
    process.exit(1);
  }
});

module.exports = app;