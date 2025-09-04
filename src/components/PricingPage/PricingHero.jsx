import React from 'react';
import './PricingHero.css';
import { usePageMeta } from '../../usePageMeta';

const PricingHero = () => {
    usePageMeta(
    'Influencer Marketing Platform Pricing & Packages | SocialMelo', 
    'View SocialMelo pricing. From Professional to Premium, find influencer marketing packages with analytics, campaigns, and engagement included.'
  );
  return (
    <div className="pricing-container">
      <div className="pricing-content">
        {/* Trial Badge */}
        <div className="trial-badge">
          7-Day Free Trial on All Plans
        </div>
        
        {/* Main Heading */}
        <h1 className="main-heading">
          Choose Your Plan
        </h1>
        
        {/* Subtitle */}
        <p className="subtitle">
          Finally, a solution that lets you pay for what you need, when you need it.
        </p>
        
        {/* Button Container */}
        <div className="button-container">
          {/* Get Your Demo Button */}
          <div className="demo-button-wrapper">
            <button className="demo-button">
              <span className="demo-button-text">Get Your Demo</span>
            </button>
          </div>
          
          {/* Start Your Trial Button */}
          <button className="trial-button">
            Start Your Trial
            <span className="arrow-icon">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingHero;