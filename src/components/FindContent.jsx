import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Heart, Paintbrush, ShoppingBag, Home, Users, Grid3X3 } from 'lucide-react';
import './FindContent.css';

const FindContent = () => {
  const [activeTab, setActiveTab] = useState('UGC Videos');
  const [activeCategory, setActiveCategory] = useState('Health');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleVideos, setVisibleVideos] = useState(4);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef(null);

  const tabs = ['UGC Videos', 'Tiktok Shop', 'Instagram', 'Amazon', 'YouTube', 'Images'];
  
  const categories = [
    { name: 'Health', icon: Heart, color: 'health-color' },
    { name: 'Beauty', icon: Paintbrush, color: 'beauty-color' },
    { name: 'Fashion', icon: ShoppingBag, color: 'fashion-color' },
    { name: 'Pets', icon: Users, color: 'pets-color' },
    { name: 'Home', icon: Home, color: 'home-color' },
    { name: 'Others', icon: Grid3X3, color: 'others-color' }
  ];

  // Sample video data
  const videos = [
    { id: 1, thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop' },
    { id: 2, thumbnail: 'https://images.unsplash.com/photo-1594824483509-e4b26efb7dc5?w=400&h=600&fit=crop' },
    { id: 3, thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=600&fit=crop' },
    { id: 4, thumbnail: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=600&fit=crop' },
    { id: 5, thumbnail: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&h=600&fit=crop' },
    { id: 6, thumbnail: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=600&fit=crop' }
  ];

  const getVisibleVideos = () => {
    if (window.innerWidth >= 1440) return 4;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  useEffect(() => {
    const handleResize = () => {
      setVisibleVideos(getVisibleVideos());
    };
    
    setVisibleVideos(getVisibleVideos());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    const autoPlay = setInterval(() => {
      if (!isDragging) {
        setCurrentSlide(prev => {
          if (prev + visibleVideos >= videos.length) {
            return 0; // Reset to beginning
          }
          return prev + 1;
        });
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(autoPlay);
  }, [visibleVideos, videos.length, isDragging]);

  const nextSlide = () => {
    if (currentSlide + visibleVideos < videos.length) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  // Drag functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentX = e.clientX;
    const diff = startX - currentX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    const threshold = 50; // minimum drag distance to trigger slide
    
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0 && currentSlide + visibleVideos < videos.length) {
        // Dragged left, go to next slide
        setCurrentSlide(prev => prev + 1);
      } else if (dragOffset < 0 && currentSlide > 0) {
        // Dragged right, go to previous slide
        setCurrentSlide(prev => prev - 1);
      }
    }
    
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
    }
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    handleMouseUp(); // Use the same logic
  };

  // Calculate transform including drag offset
  const getTransform = () => {
    const slideOffset = currentSlide * (100 / visibleVideos);
    const dragOffsetPercent = isDragging ? (dragOffset / window.innerWidth) * 100 : 0;
    return `translateX(-${slideOffset + dragOffsetPercent}%)`;
  };

  return (
    <div className="content-discovery-container">
      {/* Header */}
      <div className="header-section">
        <h1 className="main-title">
          Find Sample Content for any task
        </h1>
        
        {/* Top Navigation Tabs */}
        <div className="nav-tabs">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
            >
              <span className="tab-number">{index + 1}.</span>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="main-content-card">
        {/* Active Tab Header */}
        <div className="tab-header">
          <h2 className="tab-title">
            {activeTab}/ <span className="active-category">{activeCategory}</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="content-grid">
          {/* Left Sidebar */}
          <div className="sidebar">
            <div className="categories-list">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`category-button ${activeCategory === category.name ? 'active' : ''}`}
                  >
                    <IconComponent className={`category-icon ${category.color}`} />
                    <span className="category-name">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Video Carousel */}
          <div className="carousel-container">
            <div className="carousel-wrapper">
              {/* Navigation Buttons */}
              <div className="nav-buttons">
                <button
                  onClick={prevSlide}
                  className="nav-button prev-button"
                  disabled={currentSlide === 0}
                >
                  <ChevronLeft className="nav-icon" />
                </button>
                <button
                  onClick={nextSlide}
                  className="nav-button next-button"
                  disabled={currentSlide + visibleVideos >= videos.length}
                >
                  <ChevronRight className="nav-icon" />
                </button>
              </div>

              {/* Carousel Container */}
              <div className="carousel-overflow">
                <div 
                  ref={carouselRef}
                  className={`carousel-track ${isDragging ? 'dragging' : ''}`}
                  style={{
                    transform: getTransform(),
                    transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
                  }}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseLeave}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {videos.map((video) => (
                    <div 
                      key={video.id} 
                      className="video-item"
                      style={{ minWidth: `${100 / visibleVideos}%` }}
                    >
                      <div className="video-thumbnail">
                        <img 
                          src={video.thumbnail} 
                          alt={`Video ${video.id}`}
                          className="thumbnail-image"
                          draggable={false}
                        />
                        
                        {/* Play Button Overlay */}
                        <div className="play-overlay">
                          <div className="play-button">
                            <Play className="play-icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="cta-section">
          <div className="cta-content">
            <p className="cta-text">Ready to get started?</p>
            <button className="cta-button">
              Sign up now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindContent;