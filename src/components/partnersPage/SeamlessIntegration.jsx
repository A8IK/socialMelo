import { useState, useEffect } from 'react';
import './seamlessIntegration.css';

const SeamlessIntegration = () => {
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

    const section = document.querySelector('.seamless-integrations-wrapper');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const integrations = [
    { logo: '/Salesforce.png', name: 'Salesforce' },
    { logo: '/Mixmax.png', name: 'Mixmax' },
    { logo: '/S.png', name: 'Segment' },
    { logo: '/mParticle.png', name: 'mParticle' },
    { logo: '/Trio.png', name: 'Bing' },
    { logo: '/Avast.png', name: 'HubSpot' },
    { logo: '/Sugarcrm.png', name: 'SugarCRM' },
    { logo: '/Kite.png', name: 'Remarkety' }
  ];

  return (
    <section className="seamless-integrations-wrapper">
      <div className="seamless-integrations-container">
        {/* Header */}
        <div className={`seamless-integrations-header ${isVisible ? 'seamless-integrations-fade-in' : ''}`}>
          <h2 className="seamless-integrations-title">
            Seamless<span className="phoenix-gradient-text"> Integration</span>
          </h2>
          <p className="seamless-integrations-subtitle">
            Connect with the tools you already use for a unified workflow
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="seamless-integrations-grid">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className={`seamless-integration-card ${isVisible ? 'seamless-integration-fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={integration.logo}
                alt={integration.name}
                className="seamless-integration-logo"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeamlessIntegration;