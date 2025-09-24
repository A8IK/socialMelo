import React, { useState, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, AlertCircle, Eye, EyeOff, Mail, Lock, Sparkles } from 'lucide-react';
import {toast} from 'react-toastify';
import './Login.css';
import { usePageMeta } from '../usePageMeta';

const Login = () => {

  usePageMeta(
      'Login | SocialMelo Influencer Marketing Platform', 
      'Log in to your SocialMelo account to manage influencer campaigns, track performance and connect with brands for secure access to your marketing hub.'
    );

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  }, [error]);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword(prev => !prev);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:9000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(`Welcome back, ${data.user.name}! 🎉`);

        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);

        setTimeout(() => {
          window.dispatchEvent(new Event('authChange'));
        }, 100);
        
        navigate('/');
        console.log('Login successful:', data.user);
      } else {
        toast.error(data.message || 'Login failed. ',error);
        // setError(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Network error. Please try again.');
      // setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      {/* Animated background elements */}
      <div className="background-wrapper">
        <div className="background-inner">
          <div className="bg-circle bg-circle-1"></div>
          <div className="bg-circle bg-circle-2"></div>
          <div className="bg-circle bg-circle-3"></div>
        </div>
      </div>

      {/* Main card */}
      <div className="login-card-wrapper">
        <div className="login-card">
          {/* Glassmorphism overlay */}
          <div className="glassmorphism-overlay"></div>
          
          <div className="card-content">
            {/* Header */}
            <div className="header-section">
              <div className="logo-container">
                <img 
                    src="/SocialMeloIcon.png" 
                    alt="SocialMelo Logo" 
                    className="logo-image"/>
                </div>
              <h1 className="welcome-title">Welcome Back</h1>
              <p className="welcome-subtitle">Sign in to continue your journey</p>
            </div>

            {/* Error message */}
            {error && (
              <div className="error-container">
                <div className="error-content">
                  <AlertCircle className="error-icon" />
                  <p className="error-text">{error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="login-form">
              {/* Email field */}
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <div className="input-wrapper">
                  <div className="input-icon-left">
                    <Mail className="input-icon" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your email"
                    autoComplete="email"
                  />
                </div>
              </div>

              {/* Password field */}
              <div className="form-group">
                <label className="form-label">Password</label>
                <div className="input-wrapper">
                  <div className="input-icon-left">
                    <Lock className="input-icon" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="form-input form-input-password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="password-toggle">
                    {showPassword ? <EyeOff className="toggle-icon" /> : <Eye className="toggle-icon" />}
                  </button>
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className={`submit-button ${loading ? 'submit-button-loading' : ''}`} >
                {loading ? (
                  <div className="loading-content">
                    <div className="loading-spinner"></div>
                    Signing In...
                  </div>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            {/* Links */}
            <div className="links-section">
              <p className="signup-text">
                Don't have an account?{' '}
                <Link to="/register" className="signup-link">
                  Sign up
                </Link>
              </p>
              
              <Link to="/newsfeed" className="guest-link">
                Continue as guest
              </Link>
            </div>

            {/* Demo accounts */}
            <div className="demo-section">
              <h3 className="demo-title">
                <User className="demo-icon" />
                Demo Accounts
              </h3>
              <div className="demo-content">
                <div className="demo-row">
                  <span className="demo-label">Admin:</span>
                  {/* <span className="demo-value">admin@yourapp.com</span> */}
                </div>
                <div className="demo-row">
                  <span className="demo-label">Password:</span>
                  {/* <span className="demo-value">AdminPass123!</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;