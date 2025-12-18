import { useState, useEffect } from 'react';
import './partnersProcess.css';

const PartnersProcess = () => {
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

    const section = document.querySelector('.partners-process-wrapper');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const steps = [
    {
      number: 1,
      title: 'Define Your Goals',
      description: 'Set your campaign objectives, target audience, budget parameters, and success metrics. Our platform guides you through creating a comprehensive brief that attracts the right partners.'
    },
    {
      number: 2,
      title: 'Discover Perfect Matches',
      description: 'Browse curated recommendations or let our AI match you with ideal collaborators. Review detailed profiles including audience insights, past performance, and engagement metrics.'
    },
    {
      number: 3,
      title: 'Negotiate & Contract',
      description: 'Use our built-in messaging to discuss terms, share creative direction, and finalize deliverables. Sign contracts digitally with automated milestone and payment scheduling.'
    },
    {
      number: 4,
      title: 'Launch & Monitor',
      description: 'Track campaign performance in real-time with comprehensive analytics. Receive alerts for key milestones, approve content, and measure ROI across all channels.'
    },
    {
      number: 5,
      title: 'Optimize & Scale',
      description: 'Review detailed performance reports, identify top-performing strategies, and reinvest in winning partnerships. Scale successful campaigns across multiple channels and collaborators.'
    }
  ];

  return (
    <section className="partners-process-wrapper">
      <div className="partners-process-container">
        {/* Header */}
        <div className={`partners-process-header ${isVisible ? 'partners-process-fade-in' : ''}`}>
          <h2 className="partners-process-main-title">
            Simple<span className="phoenix-gradient-text"> Process</span>
            <br />
            <h2 className="phoenix-journey-main-heading ">
                From Connection to <span className="phoenix-gradient-text"> Campaign in Days</span>
            </h2>
          </h2>
          <p className="partners-process-description">
            Our streamlined workflow makes launching successful partnerships effortless
          </p>
        </div>

        {/* Content Layout */}
        <div className="partners-process-content">
          {/* Left Side - Image */}
          <div className={`partners-process-left ${isVisible ? 'partners-process-fade-in-left' : ''}`}>
            <img 
              src="/partners-process.png" 
              alt="Partnership Process" 
              className="partners-process-image"
            />
          </div>

          {/* Right Side - Timeline */}
          <div className={`partners-process-right ${isVisible ? 'partners-process-fade-in-right' : ''}`}>
            <div className="partners-process-timeline">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`partners-process-step ${isVisible ? 'partners-process-step-fade-in' : ''}`}
                  style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="partners-process-step-dot"></div>
                  <div className="partners-process-step-content">
                    <h3 className="partners-process-step-title">{step.title}</h3>
                    <p className="partners-process-step-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersProcess;