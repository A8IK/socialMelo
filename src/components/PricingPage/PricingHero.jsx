import React from 'react';
import { Link } from 'react-router-dom';
import './PricingHero.css';
import { usePageMeta } from '../../usePageMeta';

const PricingHero = () => {
    usePageMeta(
    'SocialMelo Pricing | Influencer Marketing Plans', 
    'View SocialMelo pricing. From Professional to Premium, choose influencer marketing plans with analytics, campaigns, and engagement tools.'
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
  <Link to="/register" className="demo-button">
    <span className="demo-button-text">Get Your Demo</span>
  </Link>
</div>

{/* Start Your Trial Button */}
<Link to="/register" className="trial-button">
  Start Your Trial →
</Link>
        </div>
      </div>
    </div>
  );
};

export default PricingHero;