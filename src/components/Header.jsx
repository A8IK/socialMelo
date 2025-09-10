import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Handle scroll effect for header shadow and smart sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrolled = currentScrollY > 10;
      
      // Smart sticky behavior
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMenuOpen(false); // Close mobile menu when hiding
      }
      
      setScrolled(isScrolled);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
      
      // Close mobile menu when resizing to desktop
      if (newWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive breakpoints
  const isDesktop = windowWidth >= 1024;
  const isTablet = windowWidth >= 768;
  const isMobile = windowWidth < 640;

  const isLargeDesktop = windowWidth >= 1200;
  const isSmallDesktop = windowWidth >= 1024 && windowWidth < 1200;

  // Helper function to check if a nav link is active
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  // Get nav link styles with active state
  const getNavLinkStyle = (path) => {
    const baseStyle = {
      color: '#374151',
      fontWeight: '500',
      textDecoration: 'none',
      transition: 'all 0.1s cubic-bezier(0, 0, 2, 0)',
      fontSize: isDesktop ? '1.1rem' : '1rem',
      padding: '0.5rem 0',
      position: 'relative'
    };

    if (isActiveLink(path)) {
      return {
        ...baseStyle,
        background: 'linear-gradient(135deg, #3A1C71 0%, #3A1C71 50%, #FFAF7B 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        fontWeight: '700',
        borderBottom: '3px solid',
        borderImage: 'linear-gradient(135deg, #3A1C71 0%, #3A1C71 50%, #FFAF7B 100%) 1'
      };
    }

    return baseStyle;
  };

  // Get mobile nav link styles with active state
  const getMobileNavLinkStyle = (path) => {
    const baseStyle = {
      color: '#374151',
      fontWeight: '500',
      padding: '0.75rem 1rem',
      borderRadius: '0.5rem',
      textDecoration: 'none',
      transition: 'all 0.2s ease',
      fontSize: '1rem'
    };

    if (isActiveLink(path)) {
      return {
        ...baseStyle,
        background: 'linear-gradient(135deg, #3A1C71 0%, #3A1C71 50%, #FFAF7B 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        fontWeight: '700',
        borderLeft: '4px solid',
        borderImage: 'linear-gradient(135deg, #3A1C71 0%, #3A1C71 50%, #FFAF7B 100%) 1',
        backgroundColor: 'rgba(58, 28, 113, 0.05)'
      };
    }

    return baseStyle;
  };

  // Header-specific styles defined within the component
  const headerStyles = {
    header: {
      backgroundColor: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      fontFamily: 'Krub, sans-serif',
      transition: 'all 0.3s ease, transform 0.3s ease-in-out',
      transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
      boxShadow: scrolled 
        ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' 
        : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      borderBottom: '1px solid #e5e7eb'
    },
    container: {
      maxWidth: '1920px',
      margin: '0 auto',
      padding: isDesktop ? '0 1.5rem' : isTablet ? '0 1.5rem' : '0 1rem'
    },
    flexContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: isDesktop ? '4.5rem' : '4rem',
      gap: '2rem'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none'
    },
    logoImage: {
      height: isDesktop ? '2.5rem' : isTablet ? '2.25rem' : isMobile ? '1.75rem' : '2rem',
      width: 'auto',
      objectFit: 'contain',
      maxWidth: isTablet ? '200px' : '150px',
      minWidth: isMobile ? '100px' : '120px',
      transition: 'all 0.3s ease'
    },
    nav: {
      display: isDesktop ? 'flex' : 'none',
      alignItems: 'center',
      gap: isLargeDesktop ? '2rem' : isSmallDesktop ? '1rem' : '1.5rem',
      marginLeft: 'auto',
      marginRight: '7rem'
    },
    buttonContainer: {
      display: isDesktop ? 'flex' : 'none',
      alignItems: 'center',
      gap: isDesktop ? '0.75rem' : '0.75rem'
    },
    loginButton: {
      color: '#374151',
      fontWeight: '500',
      padding: isDesktop ? '0.5rem 1rem' : '0.5rem 1rem',
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: '9999px',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      fontSize: isDesktop ? '1.1rem' : '1rem',
      textDecoration: 'none',
      display: 'inline-block'
    },
    brandButton: {
      color: 'white',
      fontWeight: '500',
      padding: isDesktop ? '0.625rem 1.5rem' : '0.5rem 1.25rem',
      border: 'none',
      borderRadius: '9999px',
      background: 'linear-gradient(135deg, #64478A 0%, #E38E8D 50%, #EDA580 100%)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      fontSize: isDesktop ? '1rem' : '0.875rem',
      textDecoration: 'none',
      display: 'inline-block'
    },
   creatorButton: {
        fontWeight: '500',
        padding: isDesktop ? '0.625rem 1.5rem' : '0.5rem 1.25rem',
        border: '2px solid transparent',
        borderRadius: '9999px',
        background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #422071 0%, #CD6877 50%, #FDAB7B 100%) border-box',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        fontSize: isDesktop ? '1rem' : '0.875rem',
        textDecoration: 'none',
        display: 'inline-block',
        backgroundColor: 'transparent'
    },
    mobileButton: {
    display: isDesktop ? 'none' : 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.5rem',
    borderRadius: '0.375rem',
    color: '#374151',
    backgroundColor: 'transparent',
    border: 'none',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    width: '2.5rem',
    height: '2.5rem'
  },

    mobileCreatorButton: {
    width: '100%',
    fontWeight: '500',
    padding: '0.75rem 1.5rem',
    border: '2px solid transparent',
    borderRadius: '9999px',
    background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #422071 0%, #CD6877 50%, #FDAB7B 100%) border-box',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'block',
    textAlign: 'center',
    fontSize: '1rem',
    backgroundColor: 'transparent'
    },
    mobileMenu: {
      display: isMenuOpen && !isDesktop ? 'block' : 'none',
      borderTop: '1px solid #e5e7eb',
      backgroundColor: 'white',
      padding: '1rem 0',
      position: 'relative',
      zIndex: 40
    },
    mobileMenuContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem'
    },
    mobileButtonSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      paddingTop: '1rem',
      marginTop: '1rem',
      borderTop: '1px solid #e5e7eb'
    },
    mobileLoginButton: {
      textAlign: 'center',
      color: '#374151',
      fontWeight: '500',
      padding: '0.75rem 1rem',
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: '0.5rem',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      fontSize: '1rem',
      textDecoration: 'none',
      display: 'block'
    },
    mobileBrandButton: {
      width: '100%',
      color: 'white',
      fontWeight: '500',
      padding: '0.75rem 1.5rem',
      border: 'none',
      borderRadius: '9999px',
      background: 'linear-gradient(135deg, #64478A 0%, #E38E8D 50%, #EDA580 100%)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'block',
      textAlign: 'center',
      fontSize: '1rem'
    }
  };

  // Event handlers
  const handleNavLinkHover = (e) => {
    e.target.style.color = '#111827';
  };

  const handleNavLinkLeave = (e) => {
    e.target.style.color = '#374151';
  };

  const handleLoginButtonHover = (e) => {
    e.target.style.backgroundColor = '#f9fafb';
    e.target.style.color = '#111827';
  };

  const handleLoginButtonLeave = (e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.color = '#374151';
  };

  const handleGradientButtonHover = (e) => {
    e.target.style.transform = 'scale(1.05)';
    e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
  };

  const handleGradientButtonLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.boxShadow = 'none';
  };

  const handleMobileNavHover = (e) => {
    e.target.style.backgroundColor = '#f9fafb';
    e.target.style.color = '#111827';
  };

  const handleMobileNavLeave = (e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.color = '#374151';
  };

  const handleMobileButtonHover = (e) => {
    e.target.style.backgroundColor = '#f3f4f6';
    e.target.style.color = '#111827';
  };

  const handleMobileButtonLeave = (e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.color = '#374151';
  };

  const handleLogoHover = (e) => {
    e.target.style.transform = 'scale(1.02)';
    e.target.style.filter = 'brightness(1.05)';
  };

  const handleLogoLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.filter = 'brightness(1)';
  };

  return (
    <header style={headerStyles.header}>
      <div style={headerStyles.container}>
        <div style={headerStyles.flexContainer}>
          
          {/* Logo */}
          <Link to="/" style={headerStyles.logo}>
            <img 
              src="/SocialMelo.png" 
              alt="SocialMelo" 
              style={headerStyles.logoImage}
              onMouseEnter={handleLogoHover}
              onMouseLeave={handleLogoLeave}/>
          </Link>
          
          {/* Desktop Navigation */}
          <nav style={headerStyles.nav}>
            <Link 
              to="/pricing" 
              style={getNavLinkStyle('/pricing')}
              onMouseEnter={!isActiveLink('/pricing') ? handleNavLinkHover : undefined}
              onMouseLeave={!isActiveLink('/pricing') ? handleNavLinkLeave : undefined}>
              Pricing
            </Link>
            <Link 
              to="/about" 
              style={getNavLinkStyle('/about')}
              onMouseEnter={!isActiveLink('/about') ? handleNavLinkHover : undefined}
              onMouseLeave={!isActiveLink('/about') ? handleNavLinkLeave : undefined}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              style={getNavLinkStyle('/contact')}
              onMouseEnter={!isActiveLink('/contact') ? handleNavLinkHover : undefined}
              onMouseLeave={!isActiveLink('/contact') ? handleNavLinkLeave : undefined}
            >
              Contact Us
            </Link>
          </nav>
          
          {/* Desktop CTA Buttons */}
          <div style={headerStyles.buttonContainer}>
            <Link 
              to="/login"
              style={headerStyles.loginButton}
              onMouseEnter={handleLoginButtonHover}
              onMouseLeave={handleLoginButtonLeave}
            >
              Log in
            </Link>
            <Link to="/brands">
              <button 
                style={headerStyles.brandButton}
                onMouseEnter={handleGradientButtonHover}
                onMouseLeave={handleGradientButtonLeave}
              >
                Join as Brand
              </button>
            </Link>
            <Link to="/creators">
            <button 
                style={headerStyles.creatorButton}
                onMouseEnter={handleGradientButtonHover}
                onMouseLeave={handleGradientButtonLeave}>
                <span style={{ color: '#422071' }}>Join as </span>
                <span style={{ 
                background: 'linear-gradient(135deg, #CD6877 0%, #FDAB7B 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
                }}>Creator</span>
            </button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            style={headerStyles.mobileButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onMouseEnter={handleMobileButtonHover}
            onMouseLeave={handleMobileButtonLeave}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        <div style={headerStyles.mobileMenu}>
          <div style={headerStyles.mobileMenuContainer}>
            {/* Mobile Navigation Links */}
            <Link 
              to="/pricing" 
              style={getMobileNavLinkStyle('/pricing')}
              onMouseEnter={!isActiveLink('/pricing') ? handleMobileNavHover : undefined}
              onMouseLeave={!isActiveLink('/pricing') ? handleMobileNavLeave : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              style={getMobileNavLinkStyle('/about')}
              onMouseEnter={!isActiveLink('/about') ? handleMobileNavHover : undefined}
              onMouseLeave={!isActiveLink('/about') ? handleMobileNavLeave : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              style={getMobileNavLinkStyle('/contact')}
              onMouseEnter={!isActiveLink('/contact') ? handleMobileNavHover : undefined}
              onMouseLeave={!isActiveLink('/contact') ? handleMobileNavLeave : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            
            {/* Mobile CTA Buttons */}
            <div style={headerStyles.mobileButtonSection}>
              <Link 
                to="/login"
                style={headerStyles.mobileLoginButton}
                onMouseEnter={handleMobileNavHover}
                onMouseLeave={handleMobileNavLeave}
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </Link>
              <Link to="/brands" onClick={() => setIsMenuOpen(false)}  style={{ textDecoration: 'none' }}>
                <button 
                  style={headerStyles.mobileBrandButton}
                  onMouseEnter={handleGradientButtonHover}
                  onMouseLeave={handleGradientButtonLeave}
                >
                  Join as Brand
                </button>
              </Link>
              <Link to="/creators" onClick={() => setIsMenuOpen(false)}  style={{ textDecoration: 'none' }}>
                <button 
                    style={headerStyles.mobileCreatorButton}
                    onMouseEnter={handleGradientButtonHover}
                    onMouseLeave={handleGradientButtonLeave}>
                    <span style={{ color: '#422071' }}>Join as </span>
                    <span style={{ 
                    background: 'linear-gradient(135deg, #CD6877 0%, #FDAB7B 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent'
                    }}>Creator</span>
                </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;