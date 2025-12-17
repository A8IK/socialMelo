import { useState, useEffect } from 'react';
import './transformPartnership.css';

const TransformPartnership = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

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

    const section = document.querySelector('.transform-partnership-wrapper');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
  };

  return (
    <section className="transform-partnership-wrapper">
      <div className="transform-partnership-container">
        {/* Left Side - Image */}
        <div className={`transform-partnership-image ${isVisible ? 'transform-partnership-fade-in-left' : ''}`}>
          <img
            src="/Transform.png"
            alt="Partnership Collaboration"
            className="transform-partnership-img"
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />
        </div>

        {/* Right Side - Content */}
        <div className={`transform-partnership-content ${isVisible ? 'transform-partnership-fade-in-right' : ''}`}>
          <h2 className="transform-partnership-title">
            Ready to Transform Your <span className="transform-partnership-highlight">Partnerships?</span>
          </h2>
          <p className="transform-partnership-description">
            Join 5,000+ brands creating authentic collaborations that drive real business results
          </p>

          {/* CTA Form */}
          <form className="transform-partnership-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="transform-partnership-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="transform-partnership-button">
              Start Free Trial
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TransformPartnership;