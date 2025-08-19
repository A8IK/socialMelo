import React from 'react';
import { ArrowRight } from 'lucide-react';
import './ManageChannel.css';

const ManageChannels = () => {
  return (
    <div className="social-media-container">
      <div className="social-media-content">
        {/* Left Content Section */}
        <div className="content-section">
          <div className="content-text">
            <span className="section-label">SOCIAL MEDIA MANAGEMENT</span>
            
            <h2 className="main-heading">
              Manage all your channels straightforwardly
            </h2>
            
            <p className="description">
              Take the stress out of community management and customer support. 
              Engage customers and prospects with one social inbox for all your 
              social media channels.
            </p>
            
            <div className="cta-section">
              <a href="#" className="explore-link">
                Explore our Social Hub features
                <ArrowRight className="arrow-icon" />
              </a>

            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="image-section">
            <div className="image-container">
                <img 
                src="Manage All Your Channels 2.png" 
                alt="Social Media Management Dashboard" 
                className="dashboard-image"
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ManageChannels;