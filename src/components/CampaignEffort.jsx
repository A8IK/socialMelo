import React from 'react';
import { ArrowRight } from 'lucide-react';
import './CampaignEffort.css';

const CampaignEffort = () => {
  return (
    <div className="influencer-campaign-container">
      <div className="influencer-campaign-content">
        {/* Left Image Section */}
        <div className="influencer-image-section">
          <div className="influencer-image-container">
            <img 
              src="CampaignEffort.png" 
              alt="Influencer Campaign Management Dashboard" 
              className="influencer-section-image"
            />
          </div>
        </div>

        {/* Right Content Section */}
        <div className="influencer-content-section">
          <div className="influencer-content-text">
            <span className="influencer-section-label">INFLUENCER CAMPAIGN MANAGEMENT</span>
            
            <h2 className="influencer-main-heading">
              Scale your campaign efforts
            </h2>
            
            <p className="influencer-description">
              Manage campaigns at scale optimizing manual processes like 
              outreach or payments. Create Influencer programs to send products 
              to influencers, track coupon discounts and sales.
            </p>
            
            <div className="influencer-cta-section">
              <a href="#" className="influencer-explore-link">
                Start Your Trial
                <ArrowRight className="influencer-arrow-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignEffort;