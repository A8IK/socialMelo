import React, { useState } from 'react';
import './partnershipPlan.css';

const PartnershipPlan = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const monthlyPlans = [
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

  const annualPlans = [
    {
      id: 'professional',
      name: 'Professional',
      price: '$318',
      description: 'Elevate your experience with campaign management and reports.',
      features: [
        'Everything in basic',
        'Post 1 campaign per year',
        'Track live analytics for 5 posts at a time',
        '20 influencer engagement',
        'Up to 150/year for number analytics',
        'Up to 1000/year for search results'
      ],
      isPopular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$798',
      description: 'The all inclusive solution designed to meet higher requirements.',
      features: [
        'Everything in pro',
        'Post unlimited campaigns per year',
        'Track live analytics for 15 posts at a time',
        '50 influencer engagement',
        'Up to 500/year for number analytics',
        'Up to 25,000/year for search results'
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

  const plans = isAnnual ? annualPlans : monthlyPlans;

  return (
    <div className="partners-pricing-wrapper">
      {/* Section Header */}
      <div className="partners-pricing-header-section">
        <h2 className="partners-pricing-section-title">
          Choose<span className="phoenix-gradient-text"> Your Partnership Plan</span>
        </h2>
        <p className="partners-pricing-section-subtitle">
          Select the perfect plan to elevate your influencer marketing campaigns
        </p>
      </div>
      
      {/* Payment Toggle */}
      <div className="partners-pricing-toggle-wrapper">
        <div className="partners-pricing-toggle-buttons">
          <button 
            className={`partners-pricing-toggle-btn ${!isAnnual ? 'partners-pricing-toggle-active' : ''}`}
            onClick={() => setIsAnnual(false)}>
            Monthly payment
          </button>
          <button 
            className={`partners-pricing-toggle-btn ${isAnnual ? 'partners-pricing-toggle-active' : ''}`}
            onClick={() => setIsAnnual(true)}>
            Annual payment
          </button>
        </div>
        <p className="partners-pricing-discount-info">
          Pay annually and get <span className="partners-pricing-discount-highlight">20% off</span>
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="partners-pricing-cards-grid">
        {plans.map((plan, index) => (
          <div key={plan.id} className={`partners-pricing-plan-card ${plan.isPopular ? 'partners-pricing-plan-popular' : ''}`}>
            {plan.isPopular && (
              <div className="partners-pricing-popular-tag">MOST POPULAR</div>
            )}
            
            <div className="partners-pricing-card-top">
              <div className="partners-pricing-amount">
                {plan.price}
                {plan.id !== 'fullservice' && <span className="partners-pricing-duration">/{isAnnual ? 'year' : 'month'}</span>}
              </div>
              <h3 className="partners-pricing-plan-title">{plan.name}</h3>
              <p className="partners-pricing-plan-desc">{plan.description}</p>
            </div>

            <div className="partners-pricing-features-wrapper">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="partners-pricing-feature-row">
                  <svg className="partners-pricing-feature-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button className="partners-pricing-cta-button">Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnershipPlan;