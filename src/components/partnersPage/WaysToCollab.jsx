import { useState, useEffect } from 'react';
import './waysToCollab.css';

const WaysToCollab = () => {
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

    const section = document.querySelector('.ways-collab-wrapper');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const collaborationWays = [
    {
      icon: '/affiliate.png',
      title: 'Affiliate Programs',
      description: 'Earn commissions through performance-based partnerships with unique tracking links for sales.'
    },
    {
      icon: '/product-gifting.png',
      title: 'Product Gifting',
      description: 'Send products to creators for authentic reviews, unboxings, and organic content creation.'
    },
    {
      icon: '/sponsored.png',
      title: 'Sponsored Content',
      description: 'Pay creators for dedicated posts, videos, stories, or content series featuring your brand.'
    },
    {
      icon: '/brand-ambassador.png',
      title: 'Brand Ambassadors',
      description: 'Long-term partnerships with creators who become authentic voices for your brand over time.'
    },
    {
      icon: '/affiliate.png',
      title: 'Affiliate Programs',
      description: 'Collaborative content development where brands and creators work together on campaigns.'
    },
    {
      icon: '/product-gifting.png',
      title: 'Product Gifting',
      description: 'Collaborate on product launches, virtual events, webinars, or experiential marketing campaigns.'
    },
    {
      icon: '/sponsored.png',
      title: 'Sponsored Content',
      description: 'Partner on limited edition products, special collections, or exclusive offers for creator audiences.'
    },
    {
      icon: '/brand-ambassador.png',
      title: 'Brand Ambassadors',
      description: 'High-level partnerships for brand collaborations, co-marketing initiatives, and joint ventures.'
    }
  ];

  return (
    <section className="ways-collab-wrapper">
      <div className="ways-collab-container">
        {/* Header */}
        <div className={`ways-collab-header ${isVisible ? 'ways-collab-fade-in' : ''}`}>
          <h2 className="ways-collab-main-title">
            Multiple<span className="phoenix-gradient-text"> Ways to Collaborate</span>
          </h2>
          <p className="ways-collab-description">
            Choose the partnership structure that aligns with your business goals
          </p>
        </div>

        {/* Grid */}
        <div className="ways-collab-grid">
          {collaborationWays.map((way, index) => (
            <div
              key={index}
              className={`ways-collab-card ${isVisible ? 'ways-collab-fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="ways-collab-icon-wrapper">
                <img
                  src={way.icon}
                  alt={way.title}
                  className="ways-collab-icon"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
              </div>
              <h3 className="ways-collab-title">{way.title}</h3>
              <p className="ways-collab-card-description">{way.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaysToCollab;