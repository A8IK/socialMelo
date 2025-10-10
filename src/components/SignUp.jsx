import React, { useState, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, AlertCircle, Eye, EyeOff, Mail, Lock, UserPlus, Badge } from 'lucide-react';
import {toast} from 'react-toastify';
import './SignUp.css';
import { usePageMeta } from '../usePageMeta';

const SignUp = () => {
  usePageMeta(
    'Sign Up | Join SocialMelo to Connect with Brands & Influencers', 
    'Create your SocialMelo account to connect with brands, manage campaigns, and grow your influence. All in one easy, powerful platform.'
  );
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'None'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
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

  const toggleConfirmPasswordVisibility = useCallback(() => {
    setShowConfirmPassword(prev => !prev);
  }, []);

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, userType: value }));
    setDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (!formData.name.trim()) {
      setError('Name is required');
      return;
    }

    if (!formData.userType) {
      setError('Please select a user type');
      return;
    }

    setLoading(true);

    try {
      const submitData = {
        name: formData.name.trim(),
        email: formData.email,
        password: formData.password,
        userType: formData.userType
      };

      const response = await fetch('http://localhost:9000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success('🎉 Successful! Welcome to SocialMelo!');
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
        navigate('/');
      } else {
        toast.error(data.message || 'Registration failed.');
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = () => {
    // Store the selected userType in sessionStorage before redirecting
    sessionStorage.setItem('pendingUserType', formData.userType);
    
    // Redirect to Google OAuth endpoint
    window.location.href = 'http://localhost:9000/api/auth/google';
  };

  return (
    <div className="signup-container">
      {/* Animated background elements */}
      <div className="background-wrapper">
        <div className="background-inner">
          <div className="bg-circle bg-circle-1"></div>
          <div className="bg-circle bg-circle-2"></div>
          <div className="bg-circle bg-circle-3"></div>
        </div>
      </div>

      {/* Main card */}
      <div className="signup-card-wrapper">
        <div className="signup-card">
          <div className="glassmorphism-overlay"></div>
          
          <div className="card-content">
            {/* Header */}
            <div className="header-section">
              <div className="logo-container1">
                <img 
                  src="/SocialMeloIcon.png" 
                  alt="SocialMelo Logo" 
                  className="logo-image"
                />
              </div>
              <h1 className="welcome-title">Join Us Today</h1>
              <p className="welcome-subtitle">Create your account and start your journey</p>
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

            <form onSubmit={handleSubmit} className="signup-form">
              {/* Name field */}
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <div className="input-wrapper">
                  <div className="input-icon-left">
                    <User className="input-icon" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your full name"
                    autoComplete="name"
                  />
                </div>
              </div>

              {/* Email field */}
              <div className="form-group">
                <label className="form-label">Email Address *</label>
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

              {/* User Type Selection */}
              <div className="form-group">
                <label className="form-label">User Type *</label>
                <div className="input-wrapper">
                  <div className="input-icon-left">
                    <Badge className="input-icon" />
                  </div>
                  <div className="custom-select" onClick={() => setDropdownOpen(!dropdownOpen)}>
                    <span className="selected-value">{formData.userType}</span>
                    <div className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`}>▼</div>
                    {dropdownOpen && (
                      <div className="dropdown-options">
                        <div 
                          className="dropdown-option" 
                          onClick={() => handleSelectChange('Join as Brand')}>
                          Join as Brand
                        </div>
                        <div 
                          className="dropdown-option" 
                          onClick={() => handleSelectChange('Join as Creator')}>
                          Join as Creator
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <p className="field-hint">
                  Select your role.
                </p>
              </div>

              {/* Password field */}
              <div className="form-group">
                <label className="form-label">Password *</label>
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
                    placeholder="Create a password"
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="password-toggle"
                  >
                    {showPassword ? <EyeOff className="toggle-icon" /> : <Eye className="toggle-icon" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password field */}
              <div className="form-group">
                <label className="form-label">Confirm Password *</label>
                <div className="input-wrapper">
                  <div className="input-icon-left">
                    <Lock className="input-icon" />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    required
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="form-input form-input-password"
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="password-toggle"
                  >
                    {showConfirmPassword ? <EyeOff className="toggle-icon" /> : <Eye className="toggle-icon" />}
                  </button>
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className={`submit-button ${loading ? 'submit-button-loading' : ''}`}
              >
                {loading ? (
                  <div className="loading-content">
                    <div className="loading-spinner"></div>
                    Creating Account...
                  </div>
                ) : (
                  <div className="button-content">
                    <UserPlus className="button-icon" />
                    Create Account
                  </div>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="divider-container">
              <div className="divider-line"></div>
              <span className="divider-text">or</span>
              <div className="divider-line"></div>
            </div>

            {/* Google Sign Up Button */}
            <button
              type="button"
              onClick={handleGoogleSignUp}
              className="google-signup-button"
            >
              <svg className="google-icon" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="google-button-text">Continue with Google</span>
            </button>

            {/* Links */}
            <div className="links-section">
              <p className="signin-text">
                Already have an account?{' '}
                <Link to="/login" className="signin-link">
                  Sign in
                </Link>
              </p>
            </div>

            {/* Selected user type info */}
            <div className="user-type-info">
              <div className="user-type-header">
                <div className="user-type-label">
                  <Badge className="user-type-icon" />
                  <span className="user-type-text">Selected Role:</span>
                </div>
                <span className={`user-type-badge ${formData.userType === 'Author' ? 'author-badge' : 'reviewer-badge'}`}>
                  {formData.userType}
                </span>
              </div>
              <p className="user-type-description">
                {formData.userType === 'Author' 
                  ? 'You can create and submit blog posts for review.' 
                  : 'You can review and approve submitted content.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;