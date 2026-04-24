import React, { useState, useCallback, useEffect, useRef, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, Link } from 'react-router-dom';
import { User, AlertCircle, Eye, EyeOff, Mail, Lock, UserPlus, Badge, Package, Tag, MapPin, Users, Link2, Globe, Share2, ChevronDown } from 'lucide-react';
import {toast} from 'react-toastify';
import './SignUp.css';
import { usePageMeta } from '../usePageMeta';

const PRODUCT_CATEGORIES = [
  'Beauty & Cosmetics',
  'Fashion & Apparel',
  'Technology & Electronics',
  'Food & Beverage',
  'Health & Wellness',
  'Fitness & Sports',
  'Travel & Hospitality',
  'Gaming',
  'Lifestyle',
  'Home & Decor',
  'Finance',
  'Education',
  'Entertainment',
  'Automotive',
  'Other'
];

const NICHE_OPTIONS = [
  'Beauty',
  'Fashion',
  'Tech',
  'Food',
  'Fitness',
  'Travel',
  'Gaming',
  'Lifestyle',
  'Parenting',
  'Education',
  'Finance',
  'Entertainment',
  'Music',
  'Art',
  'Sports',
  'Comedy',
  'Other'
];

const PLATFORM_OPTIONS = [
  'Instagram',
  'YouTube',
  'TikTok',
  'Twitter/X',
  'Facebook',
  'LinkedIn',
  'Snapchat',
  'Pinterest',
  'Twitch',
  'Other'
];

const COUNTRY_OPTIONS = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Argentina', 'Armenia', 'Australia',
  'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium',
  'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei',
  'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde',
  'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo',
  'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica',
  'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea',
  'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia',
  'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana',
  'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland',
  'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya',
  'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya',
  'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives',
  'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia',
  'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia',
  'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea',
  'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama',
  'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania',
  'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines',
  'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia',
  'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia',
  'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname',
  'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste',
  'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda',
  'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan',
  'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe', 'Other'
];

const LANGUAGE_OPTIONS = [
  'English',
  'Spanish',
  'French',
  'German',
  'Portuguese',
  'Russian',
  'Arabic',
  'Hindi',
  'Bengali',
  'Urdu',
  'Chinese',
  'Japanese',
  'Korean',
  'Italian',
  'Turkish',
  'Indonesian',
  'Other'
];

const MultiSelectDropdown = ({ options, value, onToggle, placeholder, icon: Icon }) => {
  const [open, setOpen] = useState(false);
  const [panelStyle, setPanelStyle] = useState(null);
  const wrapperRef = useRef(null);
  const panelRef = useRef(null);

  const recomputePosition = useCallback(() => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    setPanelStyle({
      position: 'fixed',
      top: rect.bottom + 6,
      left: rect.left,
      width: rect.width
    });
  }, []);

  useLayoutEffect(() => {
    if (!open) return;
    recomputePosition();
  }, [open, recomputePosition]);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e) => {
      const insideTrigger = wrapperRef.current && wrapperRef.current.contains(e.target);
      const insidePanel = panelRef.current && panelRef.current.contains(e.target);
      if (!insideTrigger && !insidePanel) setOpen(false);
    };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const onReflow = () => recomputePosition();
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onReflow);
    window.addEventListener('scroll', onReflow, true);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onReflow);
      window.removeEventListener('scroll', onReflow, true);
    };
  }, [open, recomputePosition]);

  return (
    <div className={`multi-select ${open ? 'multi-select-open' : ''}`} ref={wrapperRef}>
      <div className="input-wrapper">
        {Icon && (
          <div className="input-icon-left">
            <Icon className="input-icon" />
          </div>
        )}
        <button
          type="button"
          className={`multi-select-trigger ${Icon ? 'multi-select-with-icon' : ''}`}
          onClick={() => setOpen(o => !o)}
        >
          {value.length === 0 ? (
            <span className="multi-select-placeholder">{placeholder}</span>
          ) : (
            <div className="multi-select-tags">
              {value.map(v => (
                <span key={v} className="multi-select-tag">
                  {v}
                  <span
                    className="multi-select-tag-remove"
                    role="button"
                    tabIndex={-1}
                    onClick={(e) => { e.stopPropagation(); onToggle(v); }}
                  >
                    ×
                  </span>
                </span>
              ))}
            </div>
          )}
          <ChevronDown className={`multi-select-chevron ${open ? 'open' : ''}`} />
        </button>
      </div>

      {open && panelStyle && createPortal(
        <div
          className="multi-select-panel"
          style={panelStyle}
          ref={panelRef}
          onMouseDown={(e) => e.stopPropagation()}
        >
          {options.map(opt => {
            const checked = value.includes(opt);
            return (
              <label
                key={opt}
                className={`multi-select-option ${checked ? 'multi-select-option-active' : ''}`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => onToggle(opt)}
                />
                <span>{opt}</span>
              </label>
            );
          })}
        </div>,
        document.body
      )}
    </div>
  );
};

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
    userType: 'None',
    brandProductTypes: [],
    brandDesiredNiches: [],
    brandNiches: [],
    brandCountry: '',
    brandState: '',
    creatorNiches: [],
    creatorPlatforms: [],
    creatorPlatformData: {},
    creatorContentLanguages: [],
    creatorCountry: '',
    creatorState: ''
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

  const toggleInArray = useCallback((fieldName, value) => {
    setFormData(prev => {
      const arr = prev[fieldName] || [];
      const exists = arr.includes(value);
      return {
        ...prev,
        [fieldName]: exists ? arr.filter(v => v !== value) : [...arr, value]
      };
    });
  }, []);

  const toggleCreatorPlatform = useCallback((platform) => {
    setFormData(prev => {
      const exists = prev.creatorPlatforms.includes(platform);
      const nextPlatforms = exists
        ? prev.creatorPlatforms.filter(p => p !== platform)
        : [...prev.creatorPlatforms, platform];
      const nextData = { ...prev.creatorPlatformData };
      if (exists) {
        delete nextData[platform];
      } else {
        nextData[platform] = { followers: '', profileLink: '' };
      }
      return {
        ...prev,
        creatorPlatforms: nextPlatforms,
        creatorPlatformData: nextData
      };
    });
  }, []);

  const updatePlatformField = useCallback((platform, field, value) => {
    setFormData(prev => ({
      ...prev,
      creatorPlatformData: {
        ...prev.creatorPlatformData,
        [platform]: {
          ...(prev.creatorPlatformData[platform] || { followers: '', profileLink: '' }),
          [field]: value
        }
      }
    }));
    if (error) setError('');
  }, [error]);

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

    if (!formData.userType || formData.userType === 'None') {
      setError('Please select a user type');
      return;
    }

    if (formData.userType === 'Join as Brand') {
      if (formData.brandProductTypes.length === 0) {
        setError('Please select at least one product category');
        return;
      }
      if (formData.brandDesiredNiches.length === 0) {
        setError('Please select at least one influencer type you are looking for');
        return;
      }
      if (formData.brandNiches.length === 0) {
        setError('Please select at least one brand niche');
        return;
      }
      if (!formData.brandCountry) {
        setError('Please select your country');
        return;
      }
      if (!formData.brandState.trim()) {
        setError('Please enter your state / region');
        return;
      }
    }

    if (formData.userType === 'Join as Creator') {
      if (formData.creatorNiches.length === 0) {
        setError('Please select at least one niche');
        return;
      }
      if (formData.creatorPlatforms.length === 0) {
        setError('Please select at least one platform');
        return;
      }
      for (const platform of formData.creatorPlatforms) {
        const pd = formData.creatorPlatformData[platform] || {};
        const followersNum = Number(pd.followers);
        if (!pd.followers || !Number.isFinite(followersNum) || followersNum < 0) {
          setError(`Please enter a valid follower/subscriber count for ${platform}`);
          return;
        }
        if (!pd.profileLink || !pd.profileLink.trim()) {
          setError(`Please enter your ${platform} profile link`);
          return;
        }
      }
      if (formData.creatorContentLanguages.length === 0) {
        setError('Please select at least one content language');
        return;
      }
      if (!formData.creatorCountry) {
        setError('Please select your country');
        return;
      }
      if (!formData.creatorState.trim()) {
        setError('Please enter your state / region');
        return;
      }
    }

    setLoading(true);

    try {
      const submitData = {
        name: formData.name.trim(),
        email: formData.email,
        password: formData.password,
        userType: formData.userType
      };

      if (formData.userType === 'Join as Brand') {
        submitData.brandDetails = {
          productTypes: formData.brandProductTypes,
          desiredInfluencerNiches: formData.brandDesiredNiches,
          niches: formData.brandNiches,
          country: formData.brandCountry,
          state: formData.brandState.trim()
        };
      }

      if (formData.userType === 'Join as Creator') {
        submitData.creatorDetails = {
          niches: formData.creatorNiches,
          platforms: formData.creatorPlatforms.map(name => {
            const pd = formData.creatorPlatformData[name] || {};
            return {
              name,
              followers: Number(pd.followers) || 0,
              profileLink: (pd.profileLink || '').trim()
            };
          }),
          contentLanguages: formData.creatorContentLanguages,
          country: formData.creatorCountry,
          state: formData.creatorState.trim()
        };
      }

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

              {/* Brand-specific fields */}
              {formData.userType === 'Join as Brand' && (
                <div className="role-section">
                  <div className="role-section-title">Brand Details</div>

                  <div className="form-group">
                    <label className="form-label">Product Categories *</label>
                    <MultiSelectDropdown
                      icon={Package}
                      placeholder="Select product categories"
                      options={PRODUCT_CATEGORIES}
                      value={formData.brandProductTypes}
                      onToggle={(v) => toggleInArray('brandProductTypes', v)}
                    />
                    <p className="field-hint">Select all categories your products fit into.</p>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Looking For (Influencer Type) *</label>
                    <MultiSelectDropdown
                      icon={Tag}
                      placeholder="Select influencer niches"
                      options={NICHE_OPTIONS}
                      value={formData.brandDesiredNiches}
                      onToggle={(v) => toggleInArray('brandDesiredNiches', v)}
                    />
                    <p className="field-hint">Pick all influencer niches you want to collaborate with.</p>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Brand Niche *</label>
                    <MultiSelectDropdown
                      icon={Tag}
                      placeholder="Select your niches"
                      options={NICHE_OPTIONS}
                      value={formData.brandNiches}
                      onToggle={(v) => toggleInArray('brandNiches', v)}
                    />
                    <p className="field-hint">Select every niche that describes your brand.</p>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Country *</label>
                    <div className="input-wrapper">
                      <div className="input-icon-left">
                        <MapPin className="input-icon" />
                      </div>
                      <select
                        name="brandCountry"
                        required
                        value={formData.brandCountry}
                        onChange={handleInputChange}
                        className="form-input form-select"
                      >
                        <option value="">Select your country</option>
                        {COUNTRY_OPTIONS.map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">State / Region *</label>
                    <div className="input-wrapper">
                      <div className="input-icon-left">
                        <MapPin className="input-icon" />
                      </div>
                      <input
                        type="text"
                        name="brandState"
                        required
                        value={formData.brandState}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="e.g. California"
                      />
                    </div>
                  </div>

                  {/* <p className="field-hint auto-detect-hint">
                    <MapPin className="inline-icon" /> Your location and IP will be detected automatically.
                  </p> */}
                </div>
              )}

              {/* Creator-specific fields */}
              {formData.userType === 'Join as Creator' && (
                <div className="role-section">
                  <div className="role-section-title">Creator Details</div>

                  <div className="form-group">
                    <label className="form-label">Niches *</label>
                    <MultiSelectDropdown
                      icon={Tag}
                      placeholder="Select your niches"
                      options={NICHE_OPTIONS}
                      value={formData.creatorNiches}
                      onToggle={(v) => toggleInArray('creatorNiches', v)}
                    />
                    <p className="field-hint">Pick every niche that describes your content.</p>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Platforms *</label>
                    <MultiSelectDropdown
                      icon={Share2}
                      placeholder="Select platforms"
                      options={PLATFORM_OPTIONS}
                      value={formData.creatorPlatforms}
                      onToggle={toggleCreatorPlatform}
                    />
                    <p className="field-hint">Select every platform you create content on — follower count and profile link will be asked for each one.</p>
                  </div>

                  {formData.creatorPlatforms.length > 0 && (
                    <div className="platform-details-list">
                      {formData.creatorPlatforms.map(platform => {
                        const pd = formData.creatorPlatformData[platform] || { followers: '', profileLink: '' };
                        return (
                          <div key={platform} className="platform-card">
                            <div className="platform-card-header">
                              <Share2 className="inline-icon" />
                              <span>{platform}</span>
                            </div>

                            <div className="form-group">
                              <label className="form-label">Followers / Subscribers *</label>
                              <div className="input-wrapper">
                                <div className="input-icon-left">
                                  <Users className="input-icon" />
                                </div>
                                <input
                                  type="number"
                                  min="0"
                                  required
                                  value={pd.followers}
                                  onChange={(e) => updatePlatformField(platform, 'followers', e.target.value)}
                                  className="form-input"
                                  placeholder="e.g. 12500"
                                />
                              </div>
                            </div>

                            <div className="form-group">
                              <label className="form-label">Profile Link *</label>
                              <div className="input-wrapper">
                                <div className="input-icon-left">
                                  <Link2 className="input-icon" />
                                </div>
                                <input
                                  type="url"
                                  required
                                  value={pd.profileLink}
                                  onChange={(e) => updatePlatformField(platform, 'profileLink', e.target.value)}
                                  className="form-input"
                                  placeholder={`https://${platform.toLowerCase().replace('/x', '.com').replace(/[^a-z.]/g, '')}.com/yourhandle`}
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <div className="form-group">
                    <label className="form-label">Content Languages *</label>
                    <MultiSelectDropdown
                      icon={Globe}
                      placeholder="Select languages"
                      options={LANGUAGE_OPTIONS}
                      value={formData.creatorContentLanguages}
                      onToggle={(v) => toggleInArray('creatorContentLanguages', v)}
                    />
                    <p className="field-hint">Pick every language you produce content in.</p>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Country *</label>
                    <div className="input-wrapper">
                      <div className="input-icon-left">
                        <MapPin className="input-icon" />
                      </div>
                      <select
                        name="creatorCountry"
                        required
                        value={formData.creatorCountry}
                        onChange={handleInputChange}
                        className="form-input form-select"
                      >
                        <option value="">Select your country</option>
                        {COUNTRY_OPTIONS.map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">State / Region *</label>
                    <div className="input-wrapper">
                      <div className="input-icon-left">
                        <MapPin className="input-icon" />
                      </div>
                      <input
                        type="text"
                        name="creatorState"
                        required
                        value={formData.creatorState}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="e.g. California"
                      />
                    </div>
                  </div>

                  {/* <p className="field-hint auto-detect-hint">
                    <MapPin className="inline-icon" /> Your location and IP will be detected automatically.
                  </p> */}
                </div>
              )}

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