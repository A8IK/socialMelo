import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './UserReview.css';

const UserReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Marketing Director, IT Group",
      review: "TikTech's digital marketing services have been a game-changer for our business. Their strategies are spot on, and the results have exceeded our expectations. Professional team with outstanding expertise.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "CEO, Tech Solutions",
      review: "TikTech is a game-changer! Their innovative office services have transformed my business operations completely. The team's dedication and expertise are truly remarkable.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Startup Founder",
      review: "Working with TikTech has been an incredible journey. Their creative solutions and strategic approach have helped us scale rapidly. Highly recommend their services!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Thompson",
      title: "Product Manager, Innovation Corp",
      review: "The results speak for themselves. TikTech's digital transformation services have revolutionized our workflow and boosted our productivity significantly.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Lisa Wang",
      title: "Operations Director, Future Tech",
      review: "Exceptional service quality and attention to detail. TikTech's team goes above and beyond to deliver outstanding results every time.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Alex Kumar",
      title: "Digital Strategy Lead",
      review: "TikTech's expertise in digital marketing is unmatched. They've helped us achieve remarkable growth and establish a strong online presence.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  };

  const [currentItemsPerView, setCurrentItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCurrentItemsPerView(itemsPerView.mobile);
      } else if (window.innerWidth < 1024) {
        setCurrentItemsPerView(itemsPerView.tablet);
      } else {
        setCurrentItemsPerView(itemsPerView.desktop);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - currentItemsPerView);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-carousel__container">
        {/* Main Content */}
        <div className="testimonial-carousel__content">
            {/* Image Section */}
            <div className="app-image-section">
                <img src="Reviews.png" alt="Digital Marketing Team"
                    className="app-main-image"/>
            </div>

          {/* Right Side - Testimonials Carousel */}
          <div className="testimonial-carousel__testimonials-section">
            <div className="testimonial-carousel__header">
              <h2 className="testimonial-carousel__title gradient-text">
                Our Users Love Us
              </h2>
            </div>
            <div 
              className="testimonials-wrapper"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}>
              {/* Testimonials Container */}
              <div 
                className="testimonials-container"
                style={{
                  transform: `translateX(-${currentIndex * (100 / currentItemsPerView)}%)`,
                  width: '140%', 
                  padding: '0 3.5rem', 
                  marginLeft: '-2%',
                }}>
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id}
                    className={`testimonial-slide ${
                      currentItemsPerView === 1 ? 'testimonial-slide--full' :
                      currentItemsPerView === 2 ? 'testimonial-slide--half' : 'testimonial-slide--third'
                    }`}>
                    <div className="testimonial-card">
                      {/* Quote Icon */}
                      <div className="testimonial-card__quote">
                        <svg className="quote-icon" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                        </svg>
                      </div>
                      
                      {/* Review Text */}
                      <p className="testimonial-card__review">
                        {testimonial.review}
                      </p>
                      
                      {/* User Info */}
                      <div className="testimonial-card__user">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="user-avatar"/>
                        <div className="user-info">
                          <h4 className="user-name gradient-text">
                            {testimonial.name}
                          </h4>
                          <p className="user-title">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="nav-arrow nav-arrow--prev"
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="nav-arrow__icon" />
              </button>
              
              <button 
                onClick={nextSlide}
                className="nav-arrow nav-arrow--next"
                disabled={currentIndex === maxIndex}
              >
                <ChevronRight className="nav-arrow__icon" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="dots-indicator">
              {Array.from({ length: maxIndex + 1 }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`dot ${index === currentIndex ? 'dot--active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;