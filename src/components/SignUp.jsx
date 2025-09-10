import React, { useState, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, AlertCircle, Eye, EyeOff, Mail, Lock, UserPlus, Badge, Camera, Upload, X } from 'lucide-react';
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
    userType: 'Author',
    profilePicture: null
  });
  const [profilePreview, setProfilePreview] = useState(null);
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

  const handleProfilePictureChange = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('Please select a valid image file');
        return;
      }
      
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB');
        return;
      }

      setFormData(prev => ({
        ...prev,
        profilePicture: file
      }));

      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const removeProfilePicture = useCallback(() => {
    setFormData(prev => ({
      ...prev,
      profilePicture: null
    }));
    setProfilePreview(null);
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
      const submitData = new FormData();
      submitData.append('name', formData.name.trim());
      submitData.append('email', formData.email);
      submitData.append('password', formData.password);
      submitData.append('userType', formData.userType);
      
      if (formData.profilePicture) {
        submitData.append('profilePicture', formData.profilePicture);
      }

    //   const response = await fetch('http://localhost:9000/api/auth/register', {
    //     method: 'POST',
    //     body: submitData,
    //   });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError('Network error occurred');
    } finally {
      setLoading(false);
    }
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
              {/* Profile Picture Upload */}
              <div className="form-group">
                <label className="form-label">Profile Picture</label>
                <div className="profile-upload-section">
                  <div className="profile-preview">
                    <div className="profile-preview-container">
                      {profilePreview ? (
                        <img 
                          src={profilePreview} 
                          alt="Profile preview" 
                          className="profile-image"
                        />
                      ) : (
                        <Camera className="profile-placeholder-icon" />
                      )}
                    </div>
                    {profilePreview && (
                      <button
                        type="button"
                        onClick={removeProfilePicture}
                        className="remove-photo-btn"
                      >
                        <X className="remove-icon" />
                      </button>
                    )}
                  </div>
                  
                  <div className="upload-section">
                    <label className="upload-label">
                      <div className="upload-button">
                        <Upload className="upload-icon" />
                        <span className="upload-text">
                          {formData.profilePicture ? 'Change Photo' : 'Upload Photo'}
                        </span>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleProfilePictureChange}
                        className="hidden-input"
                      />
                    </label>
                    <p className="upload-hint">Max 5MB, JPG/PNG/GIF supported</p>
                  </div>
                </div>
              </div>

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
                            onClick={() => handleSelectChange('Author')}>
                            Author
                        </div>
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
                    Authors can create content, Reviewers can review and approve content
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