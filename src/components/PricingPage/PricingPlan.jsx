import React, { useState } from 'react';
import './PricingPlan.css';

const PricingPlan = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      id: 'professional',
      name: 'Professional',
      price: '$398',
      description: 'Elevate your experience with campaign management and reports.',
      features: [
        'Everything in basic',
        'Post 1 campaign per month',
        'Track live analytics for 5 posts at a time',
        '20 influencer engagement',
        'Up to 150/month for number analytics',
        'Up to 1000/month for search results'
      ],
      isPopular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$998',
      description: 'The all inclusive solution designed to meet higher requirements.',
      features: [
        'Everything in pro',
        'Post unlimited campaigns per month',
        'Track live analytics for 15 posts at a time',
        '50 influencer engagement',
        'Up to 500/month for number analytics',
        'Up to 25,000/month for search results'
      ],
      isPopular: false
    },
    {
      id: 'fullservice',
      name: 'Full Service',
      price: 'We Do The Work',
      description: 'Gain unlimited access to the tools your business needs to scale, streamline, and succeed.',
      features: [
        'End-to-end campaign set up',
        'Influencer sourcing and outreach',
        'Content delivery & approvals',
        'Unlimited engagement',
        'Unlimited for number analytics',
        'Unlimited for search results'
      ],
      isPopular: true
    }
  ];

  return (
    <div className="pricing-plan-container">
      {/* Payment Toggle */}
      <div className="payment-toggle">
        <div className="toggle-buttons">
          <button 
            className={`toggle-btn ${!isAnnual ? 'active' : ''}`}
            onClick={() => setIsAnnual(false)}>
            Monthly payment
          </button>
          <button 
            className={`toggle-btn ${isAnnual ? 'active' : ''}`}
            onClick={() => setIsAnnual(true)}>
            Annual payment
          </button>
        </div>
        <p className="discount-text">Pay annually and get <span className="highlight">20% off</span></p>
      </div>

      {/* Pricing Cards */}
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div key={plan.id} className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}>
            {plan.isPopular && (
              <div className="popular-badge">MOST POPULAR</div>
            )}
            
            <div className="card-header">
              <div className="price">
                {plan.price}
                {plan.id !== 'fullservice' && <span className="period">/month</span>}
              </div>
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
            </div>

            <div className="features-list">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button className="get-started-btn">Get Started</button>
          </div>
        ))}
      </div>

      {/* Compare Section */}
      <div className="compare-section">
        <h2 className="compare-title">
         <span className="highlight-text"> Compare all plans</span>
        </h2>
        
        <div className="compare-content">
          {/* Find Plan Image Section */}
         <div className="image-section">
            <img 
                src="FIND A PLAN THATS RIGHT FOR YOU.png" 
                alt="Find a plan that's right for you" 
                className="plan-image"
            />
            </div>

          {/* Compare Plans */}
          <div className="compare-plans">
            {plans.map((plan) => (
              <div key={plan.id} className="compare-card">
                <h4 className="compare-plan-name">{plan.name}</h4>
                <div className="compare-price">
                  {plan.price}
                  {plan.id !== 'fullservice' && <span className="period">/month</span>}
                </div>
                <p className="compare-description">{plan.description}</p>
                <button className="compare-btn">Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;