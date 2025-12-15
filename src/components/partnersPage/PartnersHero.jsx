import { useState, useEffect } from 'react';
import './partnersHero.css';

const PartnersHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { value: '500K+', label: 'Active Creators' },
    { value: '2.5B+', label: 'Monthly Reach' },
    { value: '95%', label: 'Success Rate' },
    { value: '$120M+', label: 'Revenue Generated' }
  ];

  return (
    <section className="partners-hero-wrapper">
      <div className="partners-hero-inner-container">
        {/* Left Content */}
        <div className={`partners-hero-left-content ${isVisible ? 'partners-fade-in-up' : ''}`}>
          <h1 className="partners-main-title">
            Transform Your <br/> Brand with{' '}
            <span className="partners-gradient-text">Strategic Partnerships</span>
          </h1>
          
          <p className="partners-main-description">
            Connect with premium brands and influencers through our data-driven 
            collaboration platform. Scale your reach, maximize ROI, and create authentic 
            partnerships that drive real results.
          </p>

          <div className="partners-action-buttons">
            <button className="partners-btn-primary">
              <span className="partners-btn-primary-text">Start Partnership</span>
            </button>
            <button className="partners-btn-secondary">
              Watch Demo
              <svg 
                className="partners-arrow-icon" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Stats Grid */}
        <div className={`partners-stats-container ${isVisible ? 'partners-fade-in-right' : ''}`}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="partners-stat-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="partners-stat-value">{stat.value}</div>
              <div className="partners-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="partners-floating-shape partners-shape-1"></div>
      <div className="partners-floating-shape partners-shape-2"></div>
      <div className="partners-floating-shape partners-shape-3"></div>
    </section>
  );
};

export default PartnersHero;