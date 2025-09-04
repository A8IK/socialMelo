import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Heart, Paintbrush, ShoppingBag, Home, Users, Grid3X3 } from 'lucide-react';

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

  const videos = [
    { id: 1, thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop' },
    { id: 2, thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8' },
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
            return 0;
          }
          return prev + 1;
        });
      }
    }, 3000);

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

  // Fixed drag functionality
  const handleMouseDown = (e) => {
    e.preventDefault();
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

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const threshold = 50; 
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
    const threshold = 50;
    
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0 && currentSlide + visibleVideos < videos.length) {
        setCurrentSlide(prev => prev + 1);
      } else if (dragOffset < 0 && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      }
    }
    
    setIsDragging(false);
    setDragOffset(0);
  };

  const getTransform = () => {
    const slideOffset = currentSlide * (100 / visibleVideos);
    const dragOffsetPercent = isDragging ? (dragOffset / window.innerWidth) * 100 : 0;
    return `translateX(-${slideOffset + dragOffsetPercent}%)`;
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '2rem 1rem'
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h2 style={{
          fontSize: '2.50rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          background: 'linear-gradient(135deg, #3A1C71  0%, #D76D77 50%, #FFAF7B 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: '1.2'
        }}>
          Find Sample Content for any task
        </h2>
        
        {/* Top Navigation Tabs */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '0.75rem 1rem',
                fontSize: '1rem',
                fontWeight: '500',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                color: activeTab === tab ? '#D76D77' : '#6b7280',
                position: 'relative',
                borderBottom: activeTab === tab ? '2px solid #D76D77' : 'none'
              }}
            >
              <span style={{ marginRight: '0.5rem', color: '#9ca3af' }}>{index + 1}.</span>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Card */}
      <div style={{
        background: 'white',
        borderRadius: '1.5rem',
        boxShadow: window.innerWidth >= 768 ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
      }}>
        {/* Active Tab Header */}
        <div style={{
          padding: '1.5rem',
          borderBottom: '1px solid #f3f4f6'
        }}>
          <h2 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#374151'
          }}>
            {activeTab}/ <span style={{
              background: 'linear-gradient(135deg, #FFAF7B 0%, #D76D77 50%, #3A1C71 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>{activeCategory}</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div style={{
          display: 'flex',
          flexDirection: window.innerWidth >= 768 ? 'row' : 'column'
        }}>
          {/* Left Sidebar */}
          <div style={{
            width: window.innerWidth >= 1440 ? '288px' : window.innerWidth >= 1024 ? '250px' : window.innerWidth >= 768 ? '200px' : '100%',
            padding: '1.5rem',
            borderBottom: window.innerWidth >= 768 ? 'none' : '1px solid #f3f4f6',
            borderRight: window.innerWidth >= 768 ? '1px solid #f3f4f6' : 'none'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              {categories.map((category) => {
                const IconComponent = category.icon;
                const iconColors = {
                  'health-color': '#f87171',
                  'beauty-color': '#f472b6',
                  'fashion-color': '#a78bfa',
                  'pets-color': '#fb923c',
                  'home-color': '#60a5fa',
                  'others-color': '#34d399'
                };
                
                return (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.75rem',
                      background: activeCategory === category.name ? '#f9fafb' : 'none',
                      border: 'none',
                      borderRadius: '0.5rem',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      color: activeCategory === category.name ? '#111827' : '#6b7280'
                    }}
                  >
                    <IconComponent style={{
                      width: '1.25rem',
                      height: '1.25rem',
                      color: iconColors[category.color]
                    }} />
                    <span style={{ fontWeight: '500' }}>{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Video Carousel */}
          <div style={{
            flex: 1,
            padding: '1.5rem'
          }}>
            <div style={{ position: 'relative' }}>
              {/* Navigation Buttons - Hidden on mobile */}
              {window.innerWidth >= 768 && (
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0 1rem',
                  zIndex: 10
                }}>
                  <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    style={{
                      width: window.innerWidth >= 1024 ? '3rem' : '2.5rem',
                      height: window.innerWidth >= 1024 ? '3rem' : '2.5rem',
                      borderRadius: '50%',
                      border: '1px solid #e5e7eb',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      background: '#111827',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                      opacity: currentSlide === 0 ? 0.5 : 1,
                      zIndex: 11
                    }}
                  >
                    <ChevronLeft style={{
                      width: window.innerWidth >= 1024 ? '1.5rem' : '1.25rem',
                      height: window.innerWidth >= 1024 ? '1.5rem' : '1.25rem',
                      color: '#6b7280'
                    }} />
                  </button>
                  <button
                    onClick={nextSlide}
                    disabled={currentSlide + visibleVideos >= videos.length}
                    style={{
                      width: window.innerWidth >= 1024 ? '3rem' : '2.5rem',
                      height: window.innerWidth >= 1024 ? '3rem' : '2.5rem',
                      borderRadius: '50%',
                      border: '1px solid #e5e7eb',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: currentSlide + visibleVideos >= videos.length ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      background: '#111827',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                      opacity: currentSlide + visibleVideos >= videos.length ? 0.5 : 1,
                      zIndex: 11
                    }}>
                    <ChevronRight style={{
                      width: window.innerWidth >= 1024 ? '1.5rem' : '1.25rem',
                      height: window.innerWidth >= 1024 ? '1.5rem' : '1.25rem',
                      color: 'white'
                    }} />
                  </button>
                </div>
              )}

              {/* Carousel Container */}
              <div style={{ overflow: 'hidden' }}>
                <div 
                  ref={carouselRef}
                  style={{
                    display: 'flex',
                    transform: getTransform(),
                    transition: isDragging ? 'none' : 'transform 0.5s ease-in-out',
                    gap: '1rem',
                    cursor: isDragging ? 'grabbing' : 'grab',
                    paddingRight: '1rem'
                  }}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseLeave}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}>
                  {videos.map((video, index) => (
                    <div 
                      key={video.id} 
                      style={{
                        position: 'relative',
                        cursor: 'pointer',
                        minWidth: `${100 / visibleVideos}%`
                      }}
                      className={`video-item-${index}`}>
                      <div 
                        style={{
                          position: 'relative',
                          aspectRatio: '3/4',
                          background: '#e5e7eb',
                          borderRadius: window.innerWidth >= 1024 ? '1rem' : '0.75rem',
                          overflow: 'hidden',
                          transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.02)';
                          const img = e.currentTarget.querySelector('img');
                          if (img) img.style.transform = 'scale(1.05)';
                          const overlay = e.currentTarget.querySelector('.play-overlay');
                          if (overlay) overlay.style.opacity = '1';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          const img = e.currentTarget.querySelector('img');
                          if (img) img.style.transform = 'scale(1)';
                          const overlay = e.currentTarget.querySelector('.play-overlay');
                          if (overlay) overlay.style.opacity = '0';
                        }}>
                        <img 
                          src={video.thumbnail} 
                          alt={`Video ${video.id}`}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease'
                          }}
                          draggable={false}/>
                        
                        {/* Play Button Overlay */}
                        <div 
                          className="play-overlay"
                          style={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(0, 0, 0, 0.2)',
                            opacity: 0,
                            transition: 'opacity 0.3s ease'
                          }}>
                          <div style={{
                            width: window.innerWidth >= 1440 ? '4rem' : window.innerWidth >= 1024 ? '4rem' : window.innerWidth >= 768 ? '2.5rem' : '3rem',
                            height: window.innerWidth >= 1440 ? '4rem' : window.innerWidth >= 1024 ? '4rem' : window.innerWidth >= 768 ? '2.5rem' : '3rem',
                            background: 'rgba(255, 255, 255, 0.9)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <Play style={{
                              width: window.innerWidth >= 1440 ? '2rem' : window.innerWidth >= 1024 ? '2rem' : window.innerWidth >= 768 ? '1.25rem' : '1.5rem',
                              height: window.innerWidth >= 1440 ? '2rem' : window.innerWidth >= 1024 ? '2rem' : window.innerWidth >= 768 ? '1.25rem' : '1.5rem',
                              color: '#374151',
                              marginLeft: '0.125rem'
                            }} />
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
        <div style={{
          padding: window.innerWidth < 768 ? '1.5rem 1rem' : '2rem',
          background: '#f9fafb',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            maxWidth: '28rem',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: window.innerWidth < 768 ? '1rem' : '1.5rem',
            flexDirection: 'row',
            textAlign: window.innerWidth < 768 ? 'left' : 'center',
            justifyContent: 'center',
            marginTop: window.innerWidth < 768 ? '1.95rem' : '0'
          }}>
            <p style={{
              color: '#374151',
              fontSize: window.innerWidth < 768 ? '1rem' : '1.125rem',
              marginBottom: window.innerWidth < 768 ? '0' : '1rem',
              whiteSpace: window.innerWidth < 768 ? 'nowrap' : 'normal'
            }}>
              Ready to get started?
            </p>
            <button style={{
              padding: window.innerWidth < 768 ? '0.5rem 1.5rem' : '0.75rem 2rem',
              color: 'white',
              fontWeight: '600',
              border: 'none',
              borderRadius: '9999px',
              background: '#D76D77',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              marginTop: window.innerWidth < 768 ? '0' : '-10px',
              fontSize: window.innerWidth < 768 ? '0.875rem' : '1rem'
            }}>
              Sign up now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindContent;