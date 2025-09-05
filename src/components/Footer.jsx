import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive breakpoints
  const isDesktop = windowWidth >= 1024;
  const isTablet = windowWidth >= 768;
  const isMobile = windowWidth < 640;

  const footerStyles = {
    footer: {
      backgroundColor: '#3A1C71',
      color: 'white',
      fontFamily: 'Krub, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    },
    backgroundDecoration: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: isDesktop ? '550px' : isTablet ? '400px' : '300px',
      height: isDesktop ? '300px' : isTablet ? '200px' : '200px',
      opacity: 0.3,
      zIndex: 1
    },
    container: {
      maxWidth: '1920px',
      margin: '0 auto',
      padding: isDesktop ? '4rem 2rem 2rem' : isTablet ? '3rem 1.5rem 2rem' : '2rem 1rem 1.5rem',
      position: 'relative',
      zIndex: 2
    },
    logoSection: {
      marginBottom: isDesktop ? '3rem' : '2rem'
    },
    logo: {
        height: isDesktop ? '2rem' : '1.75rem',
        width: 'auto',
        objectFit: 'contain',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
    },
    mainContent: {
      display: 'grid',
      gridTemplateColumns: isDesktop 
        ? 'repeat(6, 1fr)' 
        : isTablet 
          ? 'repeat(3, 1fr)' 
          : 'repeat(2, 1fr)',
      gap: isDesktop ? '3rem' : isTablet ? '2rem' : '1.5rem',
      marginBottom: isDesktop ? '4rem' : '3rem'
    },
    column: {
      display: 'flex',
      flexDirection: 'column'
    },
    columnTitle: {
      fontSize: isDesktop ? '1.125rem' : '1rem',
      fontWeight: '600',
      marginBottom: isDesktop ? '1.5rem' : '1rem',
      color: 'white'
    },
    linkList: {
      display: 'flex',
      flexDirection: 'column',
      gap: isDesktop ? '0.75rem' : '0.5rem'
    },
    link: {
      color: 'rgba(255, 255, 255, 0.8)',
      textDecoration: 'none',
      fontSize: isDesktop ? '0.875rem' : '0.8rem',
      transition: 'color 0.2s ease',
      cursor: 'pointer'
    },
    bottomSection: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '2rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '1rem' : '0'
    },
    copyright: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: '0.875rem'
    },
    socialLinks: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center'
    },
    socialIcon: {
      width: '2rem',
      height: '2rem',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textDecoration: 'none',
      transition: 'all 0.2s ease',
      cursor: 'pointer'
    }
  };

  // Event handlers
  const handleLinkHover = (e) => {
    e.target.style.color = 'white';
  };

  const handleLinkLeave = (e) => {
    e.target.style.color = 'rgba(255, 255, 255, 0.8)';
  };

  const handleSocialHover = (e) => {
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    e.target.style.transform = 'scale(1.1)';
  };

  const handleSocialLeave = (e) => {
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    e.target.style.transform = 'scale(1)';
  };

  return (
    <footer style={footerStyles.footer}>
      <img 
        src="Vector.png" 
        alt="" 
        style={footerStyles.backgroundDecoration}/>
      
      <div style={footerStyles.container}>
        {/* Logo section */}
        <div style={footerStyles.logoSection}>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <img 
                src="Socialmelo 2.png" 
                alt="SocialMelo" 
                style={footerStyles.logo}
                onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.02)';
                    e.target.style.filter = 'brightness(1.1)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.filter = 'brightness(1)';
                }}
                />
            </Link>
        </div>

        {/* Main content with links */}
        <div style={footerStyles.mainContent}>
          
          {/* Get in touch */}
          <div style={footerStyles.column}>
            <h3 style={footerStyles.columnTitle}>Get in touch</h3>
            <div style={footerStyles.linkList}>
              <Link 
                to="/contact" 
                style={footerStyles.link}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}>
                Contacts
              </Link>
              <Link 
                to="/faq" 
                style={footerStyles.link}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}>
                FAQ
              </Link>
            </div>
          </div>

          {/* Who we serve */}
          <div style={footerStyles.column}>
            <h3 style={footerStyles.columnTitle}>Who we serve</h3>
            <div style={footerStyles.linkList}>
              <Link 
                to="/brands" 
                style={footerStyles.link}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}>
                Brands
              </Link>
              <Link 
                to="/agencies" 
                style={footerStyles.link}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}>
                Agencies
              </Link>
              <Link to="/ecommerce" 
                style={footerStyles.link}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}>
                E-Commerce
              </Link>
            </div>
          </div>

          {/* Solutions */}
          <div style={footerStyles.column}>
            <h3 style={footerStyles.columnTitle}>Solutions</h3>
            <div style={footerStyles.linkList}>
              <Link 
                to="/influencer-marketing" 
                style={footerStyles.link}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}>
                Influencer Marketing
              </Link>
              <Link 
                to="/social-media-management" 
                style={footerStyles.link}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}>
                Social Media Management
              </Link>
              <Link 
                to="/social-listening" 
                style={footerStyles.link}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}>
                Social Listening
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div style={footerStyles.column}>
            <h3 style={footerStyles.columnTitle}>Resources</h3>
            <div style={footerStyles.linkList}>
              <a 
                href="https://socialmelo.com/blog/" 
                target="_blank"
                rel="noopener noreferrer"
                style={footerStyles.link}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}>
                Blog
              </a>
              <Link 
                to="/knowledge-base" 
                style={footerStyles.link}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}>
                Knowledge Base
              </Link>
              <Link 
                to="/ebooks" 
                style={footerStyles.link}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}>
                eBooks
              </Link>
              <Link 
                to="/guides" 
                style={footerStyles.link}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}>
                Guides
              </Link>
              <Link 
                to="/studies" 
                style={footerStyles.link}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}>
                Studies
              </Link>
              <Link 
                to="/videos" 
                style={footerStyles.link}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}>
                Videos
              </Link>
              <Link 
                to="/infographics" 
                style={footerStyles.link}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}>
                Infographics
              </Link>
            </div>
          </div>

          {/* About */}
          <div style={footerStyles.column}>
            <h3 style={footerStyles.columnTitle}>About</h3>
            <div style={footerStyles.linkList}>
              <Link 
                to="/our-advantage" 
                style={footerStyles.link}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}>
                Our Advantage
              </Link>
              <Link 
                to="/about" 
                style={footerStyles.link}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}>
                Company
              </Link>
              <Link 
                to="/testimonials" 
                style={footerStyles.link}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}>
                Testimonials
              </Link>
              <Link 
                to="/careers" 
                style={footerStyles.link}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}>
                Careers
              </Link>
              <Link 
                to="/affiliate-program" 
                style={footerStyles.link}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}>
                Affiliate Program
              </Link>
            </div>
          </div>

          {/* Legal & Cookies */}
          <div style={footerStyles.column}>
            <h3 style={footerStyles.columnTitle}>Legal & Cookies</h3>
            <div style={footerStyles.linkList}>
              <Link 
                to="/compliance" 
                style={footerStyles.link}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave} >
                Compliance
              </Link>
              <Link 
                to="/legal" 
                style={footerStyles.link}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}>
                Legal
              </Link>
              <Link 
                to="/privacy" 
                style={footerStyles.link}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}>
                Privacy & Cookie notice
              </Link>
              <Link 
                to="/accessibility" 
                style={footerStyles.link}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}>
                Accessibility
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright and social links */}
        <div style={footerStyles.bottomSection}>
          <p style={footerStyles.copyright}>
            © 2024 SocialMelo. All Rights Reserved.
          </p>
          
          <div style={footerStyles.socialLinks}>
            <a href="https://www.facebook.com/profile.php?id=61579842195137" 
              target="_blank" 
              rel="noopener noreferrer"
              style={footerStyles.socialIcon}
              onMouseEnter={handleSocialHover}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={footerStyles.socialIcon}
              onMouseEnter={handleSocialHover}
              onMouseLeave={handleSocialLeave}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="https://www.pinterest.com/socialmelo/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={footerStyles.socialIcon}
              onMouseEnter={handleSocialHover}
              onMouseLeave={handleSocialLeave}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/socialmelo/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={footerStyles.socialIcon}
              onMouseEnter={handleSocialHover}
              onMouseLeave={handleSocialLeave}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;