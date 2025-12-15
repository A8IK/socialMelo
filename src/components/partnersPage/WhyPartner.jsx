import { useState, useEffect } from 'react';
import './whypartner.css';

const WhyPartner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.partners-features-wrapper');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const features = [
    {
      icon: 'Component 7.png',
      title: 'Precision Matching',
      description: 'Our AI-powered algorithm connects you with perfect-fit partners based on audience demographics, engagement rates, content style, and brand values.'
    },
    {
      icon: 'Component 6.png',
      title: 'Real-Time Analytics',
      description: 'Track campaign performance with comprehensive dashboards showing reach, engagement, conversions, and ROI metrics in real-time.'
    },
    {
      icon: 'Component 5.png',
      title: 'Contract Management',
      description: 'Streamline agreements with built-in contract templates, e-signatures, milestone tracking, and automated payment processing.'
    },
    {
      icon: 'Component 4.png',
      title: 'Creative Resources',
      description: 'Access our library of best practices, content templates, brand guidelines, and creative briefs to ensure campaign excellence.'
    },
    {
      icon: 'Component 3.png', 
      title: 'Brand Safety',
      description: 'Comprehensive vetting process and ongoing monitoring to ensure all partnerships align with your brand values and standards.'
    },
    {
      icon: 'Component 2.png',
      title: 'Scalable Growth',
      description: 'Start with single campaigns and scale to enterprise-level programs managing hundreds of simultaneous collaborations.'
    }
  ];

  return (
    <section className="partners-features-wrapper">
      <div className="partners-features-container">
        {/* Header */}
        <div className={`partners-features-header ${isVisible ? 'partners-features-fade-in' : ''}`}>
          <h2 className="partners-features-main-title">
            Why Partner<span className="phoenix-gradient-text"> With Us??</span>
            <br />
            <h2 className="phoenix-journey-main-heading ">
            Everything You<span className="phoenix-gradient-text"> Need to Succeed</span>
          </h2>
          </h2>
          <p className="partners-features-description">
            Our comprehensive platform provides all the tools, insights, and support to
            create impactful brand collaborations
          </p>
        </div>

        {/* Features Grid */}
        <div className="partners-features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`partners-feature-card ${isVisible ? 'partners-features-fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="partners-feature-icon-wrapper">
                <div className="partners-feature-icon">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="partners-feature-icon-img"
                  />
                </div>
              </div>
              <h3 className="partners-feature-title">{feature.title}</h3>
              <p className="partners-feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;