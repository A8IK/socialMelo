import { useState, useEffect } from 'react';
import './powerfulTools.css';

const PowerfulTools = () => {
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

    const section = document.querySelector('.powerful-tools-wrapper');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const topTools = [
    {
      icon: '/Discovery.png',
      title: 'Advanced Discovery',
      description: 'Filter by niche, audience demographics, engagement rate, follower count, location, content style, and over 50 other criteria.'
    },
    {
      icon: '/Performance.png',
      title: 'Performance Analytics',
      description: 'Track impressions, reach, engagement, clicks, conversions, and revenue attribution across all campaigns and channels.'
    },
    {
      icon: '/Collaboration1.png',
      title: 'Collaboration Hub',
      description: 'Built-in messaging, file sharing, content approval workflows, and campaign management tools in one centralized platform.'
    },
    {
      icon: '/Automated.png',
      title: 'Automated Payments',
      description: 'Schedule milestone-based payments, handle multi-currency transactions, and generate detailed financial reports automatically.'
    }
  ];

  const bottomTools = [
    {
      icon: '/AI.png',
      title: 'AI-Powered Insights',
      description: 'Machine learning algorithms predict campaign success, recommend optimal partnerships, and identify emerging trends.'
    },
    {
      icon: '/Fraud.png',
      title: 'Fraud Detection',
      description: 'Advanced algorithms detect fake followers, suspicious engagement patterns, and ensure authentic partnership quality.'
    },
    {
      icon: '/API-Integration.png',
      title: 'API Integration',
      description: 'Connect with your existing CRM, marketing automation, analytics, and e-commerce platforms for seamless data flow.'
    },
    {
      icon: '/Teams.png',
      title: 'Team Collaboration',
      description: 'Multi-user accounts with role-based permissions, approval workflows, and team performance tracking.'
    }
  ];

  return (
    <section className="powerful-tools-wrapper">
      <div className="powerful-tools-container">
        {/* Header */}
        <div className={`powerful-tools-header ${isVisible ? 'powerful-tools-fade-in' : ''}`}>
          <h2 className="powerful-tools-main-title">
            Powerful Tools for<span className="phoenix-gradient-text"> Partnership Management</span>
          </h2>
          <p className="powerful-tools-description">
            Enterprise-grade features designed to streamline every aspect of collaboration
          </p>
        </div>

        {/* Top Section: Image Left + 4 Cards Right */}
        <div className="powerful-tools-top-section">
          {/* Left Image */}
          <div className={`powerful-tools-left-image ${isVisible ? 'powerful-tools-fade-in-left' : ''}`}>
            <img 
              src="/Tools1.png" 
              alt="Partnership Tools" 
              className="powerful-tools-image-left"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>

          {/* Right Cards */}
          <div className="powerful-tools-right-cards">
            {topTools.map((tool, index) => (
              <div
                key={index}
                className={`powerful-tools-card ${isVisible ? 'powerful-tools-fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="powerful-tools-card-icon">
                  <img
                    src={tool.icon}
                    alt={tool.title}
                    className="powerful-tools-icon-img"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                </div>
                <div className="powerful-tools-card-content">
                  <h3 className="powerful-tools-card-title">{tool.title}</h3>
                  <p className="powerful-tools-card-description">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: 4 Cards Left + Image Right */}
        <div className="powerful-tools-bottom-section">
          {/* Left Cards */}
          <div className="powerful-tools-left-cards">
            {bottomTools.map((tool, index) => (
              <div
                key={index}
                className={`powerful-tools-card ${isVisible ? 'powerful-tools-fade-in-up' : ''}`}
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <div className="powerful-tools-card-icon">
                  <img
                    src={tool.icon}
                    alt={tool.title}
                    className="powerful-tools-icon-img"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                </div>
                <div className="powerful-tools-card-content">
                  <h3 className="powerful-tools-card-title">{tool.title}</h3>
                  <p className="powerful-tools-card-description">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className={`powerful-tools-right-image ${isVisible ? 'powerful-tools-fade-in-right' : ''}`}>
            <img 
              src="/Tools2.png" 
              alt="Collaboration Tools" 
              className="powerful-tools-image-right"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerfulTools;