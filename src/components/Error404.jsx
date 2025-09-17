import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Error404.css';

const Error404 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    window.history.back();
  };

  // Hide header and footer when component mounts
  useEffect(() => {
    // Add class to body to hide header/footer
    document.body.classList.add('error-404-page');
    
    // Force URL to show /404 if it's not already
    if (location.pathname !== '/404') {
      navigate('/404', { replace: true });
    }
    
    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove('error-404-page');
    };
  }, [navigate, location.pathname]);

  return (
    <div className="error-container">
      {/* ... rest of your JSX stays exactly the same ... */}
      <div className="floating-icons">
        <div className="icon icon-1">📱</div>
        <div className="icon icon-2">💬</div>
        <div className="icon icon-3">👥</div>
        <div className="icon icon-4">🔔</div>
        <div className="icon icon-5">❤️</div>
        <div className="icon icon-6">📷</div>
        <div className="icon icon-7">🌟</div>
        <div className="icon icon-8">🔍</div>
      </div>

      <div className="error-content">
        <div className="content-wrapper">
          <div className="error-code">
            <span className="four">4</span>
            <span className="zero">0</span>
            <span className="four">4</span>
          </div>

          <div className="brand-container">
            <h1 className="brand-name">socialMelo</h1>
          </div>

          <div className="message-container">
            <h2 className="error-message">Oops! Page Not Found</h2>
            <p className="error-description">
              The page you're looking for seems to have wandered off into the social media void. 
              Don't worry, let's get you back on track!
            </p>
          </div>

          <div className="action-buttons">
            <Link to="/" className="btn btn-primary">
              <span className="btn-icon">🏠</span>
              Go Home
            </Link>
            <button onClick={handleGoBack} className="btn btn-secondary">
              <span className="btn-icon">↩️</span>
              Go Back
            </button>
            <Link to="/contact" className="btn btn-tertiary">
              <span className="btn-icon">📧</span>
              Contact
            </Link>
          </div>

          <div className="lost-character">
            <div className="character">🤔</div>
            <div className="thought-bubble">
              <div className="bubble">Where am I?</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
    </div>
  );
};

export default Error404;