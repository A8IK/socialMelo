import { useState, useEffect } from 'react';
import './resources.css';

const Resources = () => {
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

    const section = document.querySelector('.partners-resources-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const resources = [
    {
      image: '/ultimate-partnership.jpg',
      tag: 'Guide',
      title: 'Ultimate Partnership Playbook',
      description: 'Complete 50-page guide covering strategy development, partner selection, contract negotiation, and campaign optimization.',
      linkText: 'Download Now',
      linkUrl: '#'
    },
    {
      image: '/Scaling_Influencer.jpg',
      tag: 'Webinar',
      title: 'Scaling Influencer Programs',
      description: 'Watch our expert panel discuss how top brands scale from 10 to 1000+ creator partnerships while maintaining quality.',
      linkText: 'Watch Recording',
      linkUrl: '#'
    },
    {
      image: '/partnership_trends.jpg',
      tag: 'Report',
      title: '2025 Partnership Trends',
      description: 'Data-driven insights from analyzing 50K+ partnerships: emerging trends, benchmark metrics, and platform predictions.',
      linkText: 'Read Report',
      linkUrl: '#'
    },
    {
      image: '/contract_lib.jpg',
      tag: 'Template',
      title: 'Contract Templates Library',
      description: 'Legal-reviewed templates for every partnership type: affiliate agreements, sponsored content, brand ambassadors, and more.',
      linkText: 'Access Templates',
      linkUrl: '#'
    },
    {
      image: '/dtc_brand.jpg',
      tag: 'Case Study',
      title: 'DTC Brand Success Stories',
      description: 'In-depth analysis of how direct-to-consumer brands achieved 10x ROI through strategic creator partnerships.',
      linkText: 'Read Stories',
      linkUrl: '#'
    },
    {
      image: '/partnership_certificate.jpg',
      tag: 'Course',
      title: 'Partnership Certification',
      description: 'Free 6-week course covering partnership fundamentals, advanced strategies, and platform mastery with certification.',
      linkText: 'Enroll Now',
      linkUrl: '#'
    }
  ];

  return (
    <section className="partners-resources-section">
      <div className="partners-resources-container">
        {/* Header */}
        <div className={`partners-resources-header ${isVisible ? 'partners-resources-visible' : ''}`}>
          <h2 className="partners-resources-title">
            Resources to<span className="phoenix-gradient-text"> Maximize Your Success</span>
          </h2>
          <p className="partners-resources-subtitle">
            Expert guides, templates, and insights to help you create winning partnerships
          </p>
        </div>

        {/* Resources Grid */}
        <div className="partners-resources-cards-grid">
          {resources.map((resource, index) => (
            <div
              key={index}
              className={`partners-resource-item ${isVisible ? 'partners-resource-item-visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="partners-resource-img-wrapper">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="partners-resource-img"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <span className="partners-resource-badge">{resource.tag}</span>
              </div>
              <div className="partners-resource-body">
                <h3 className="partners-resource-heading">{resource.title}</h3>
                <p className="partners-resource-text">{resource.description}</p>
                <a href={resource.linkUrl} className="partners-resource-action">
                  {resource.linkText}
                  <svg className="partners-resource-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;