import { useState, useEffect } from 'react';
import './succesStories.css';

const SuccesStories = () => {
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

    const section = document.querySelector('.success-stories-wrapper');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const stories = [
    {
      image: '/brand-growth.jpg',
      metric: '350%',
      label: 'ROI Increase',
      title: 'Fitness Brand Growth',
      description: 'A fitness apparel brand scaled from 50 to 300+ creator partnerships, generating $2.1M in attributed revenue while reducing their cost per acquisition by 45%.'
    },
    {
      image: '/Beauty-brand.png',
      metric: '15M+',
      label: 'ROI Increase',
      title: 'Beauty Brand Launch',
      description: 'New beauty brand reached 15M impressions in first quarter through 75 micro-influencer partnerships, achieving 8.5% average engagement rate.'
    },
    {
      image: '/gaming-platform.png',
      metric: '92%',
      label: 'ROI Increase',
      title: 'Gaming Platform Expansion',
      description: 'Gaming platform partnered with 300+ streamers, resulting in 60K new user acquisitions and 92% retention rate after 90 days.'
    }
  ];

  return (
    <section className="success-stories-wrapper">
      <div className="success-stories-container">
        {/* Header */}
        <div className={`success-stories-header ${isVisible ? 'success-stories-fade-in' : ''}`}>
          <h2 className="success-stories-main-title">
             Success<span className="phoenix-gradient-text"> Stories from Our Clients</span>
          </h2>
          <p className="success-stories-description">
            Real brands achieving remarkable results through strategic collaborations
          </p>
        </div>

        {/* Stories Grid */}
        <div className="success-stories-grid">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`success-story-card ${isVisible ? 'success-stories-fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="success-story-image-wrapper">
                <img
                  src={story.image}
                  alt={story.title}
                  className="success-story-image"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
              </div>
              <div className="success-story-content">
                <div className="success-story-metric">{story.metric}</div>
                <div className="success-story-label">{story.label}</div>
                <h3 className="success-story-title">{story.title}</h3>
                <p className="success-story-description">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccesStories;