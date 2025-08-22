import React from 'react';
import './PricingCta.css';

const PricingCta = () => {
  return (
    <section className="pricing-cta">
      <div className="pricing-cta-container">
        {/* Left Side - Image Section (keeping as is) */}
        <div className="cta-image-section">
          <img 
            src="High performance clients.png" 
            alt="High performance clients" 
            className="cta-image"
          />
        </div>

        {/* Right Side - Content Section (fixed) */}
        <div className="cta-content-section">
          <div className="cta-content">
            <h2 className="cta-title">
              Join 1600+ high performing clients
            </h2>
            <p className="cta-subtitle">
              Discover why professionals worldwide trust us as their top-rated solution.
            </p>
            <div className="cta-buttons">
              <button className="btn-demo">
              </button>
              <button className="btn-trial">
                Start Your Trial
                <span className="arrow-icon">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCta;