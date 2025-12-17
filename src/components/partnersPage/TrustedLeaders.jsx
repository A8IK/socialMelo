import { useState, useEffect } from 'react';
import './trustedLeaders.css';

const TrustedLeaders = () => {
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

    const section = document.querySelector('.trusted-leaders-wrapper');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const testimonials = [
    {
      rating: 5,
      comment: "I've been consistently impressed with the quality of service provided by this website. They have exceeded my expectations and delivers exceptional results. Highly recommended!",
      image: '/Josep.png',
      name: 'Joosep Seitam',
      position: 'Growth Lead, Legiit'
    },
    {
      rating: 5,
      comment: "Outstanding experience from start to finish. The quality of work and attention to detail truly impressed me.",
      image: '/David.png',
      name: 'David',
      position: 'SEO Manager, Templater'
    },
    {
      rating: 5,
      comment: "Exceptional performance and reliable service. I'm very happy with the outcome and would recommend it without hesitation.",
      image: '/Mark.png',
      name: 'Mark',
      position: 'Head of SEO, SearchEngineLannd'
    },
    {
      rating: 5,
      comment: "Professional approach, excellent support, and top-notch quality. Will definitely work with them again.",
      image: '/Martin.png',
      name: 'Martin',
      position: 'Digital Strategist, Legiit'
    }
  ];

  const renderStars = (rating) => {
  return (
    <div className="trusted-leaders-stars">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`trusted-leaders-star ${index === 4 ? 'trusted-leaders-star-light' : 'trusted-leaders-star-filled'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

  return (
    <section className="trusted-leaders-wrapper">
      <div className="trusted-leaders-container">
        {/* Header */}
        <div className={`trusted-leaders-header ${isVisible ? 'trusted-leaders-fade-in' : ''}`}>
          <h2 className="trusted-leaders-main-title">
            Trusted by<span className="phoenix-gradient-text"> Industry Leaders</span>
          </h2>
          <p className="trusted-leaders-subtitle">
            What partners say
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="trusted-leaders-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`trusted-leaders-testimonial ${isVisible ? 'trusted-leaders-fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Comment Card */}
              <div className="trusted-leaders-card">
                {renderStars(testimonial.rating)}
                <p className="trusted-leaders-comment">{testimonial.comment}</p>
              </div>

              {/* Author Info */}
              <div className="trusted-leaders-author">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="trusted-leaders-avatar"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="trusted-leaders-author-info">
                  <h4 className="trusted-leaders-name">{testimonial.name}</h4>
                  <p className="trusted-leaders-position">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedLeaders;