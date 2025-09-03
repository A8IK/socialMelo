import React from 'react';
import { Play } from 'lucide-react';
import './CreatorsSection.css';

const CreatorsSection = () => {
  // Mock data for creators - you can replace with actual data
  const creators = [
    {
      id: 1,
      name: "Sarah Johnson",
      handle: "@sarah_creates",
      thumbnail: "Tiktok1.png",
      videoUrl: "/videos/creator1.mp4",
      likes: "2.3k",
      description: "Amazing skincare routine ✨"
    },
    {
      id: 2,
      name: "Maya Chen",
      handle: "@maya_beauty",
      thumbnail: "Tiktok2.png",
      videoUrl: "/videos/creator1.mp4",
      likes: "1.8k",
      description: "Perfect foundation match 💄"
    },
    {
      id: 3,
      name: "Alex Rivera",
      handle: "@alex_style",
      thumbnail: "Tiktok3.png",
      videoUrl: "/videos/creator1.mp4",
      likes: "3.1k",
      description: "Hair transformation goals 🔥"
    },
    {
      id: 4,
      name: "Emma Wilson",
      handle: "@emma_glow",
      thumbnail: "Tiktok4.png",
      videoUrl: "/videos/creator1.mp4",
      likes: "4.2k",
      description: "Skincare that actually works! 🌟"
    },
    {
      id: 5,
      name: "Jordan Kim",
      handle: "@jordan_makeup",
      thumbnail: "Tiktok5.png",
      videoUrl: "/videos/creator1.mp4",
      likes: "2.7k",
      description: "Bold look of the day 💋"
    },
    {
      id: 6,
      name: "Zoe Martinez",
      handle: "@zoe_natural",
      thumbnail: "Tiktok6.png",
      videoUrl: "/videos/creator1.mp4",
      likes: "1.9k",
      description: "Natural beauty essentials 🌿"
    },
    {
      id: 7,
      name: "Riley Johnson",
      handle: "@riley_reviews",
      thumbnail: "Tiktok7.png",
      videoUrl: "/videos/creator1.mp4",
      likes: "3.5k",
      description: "Honest product reviews 📱"
    },
    {
      id: 8,
      name: "Sam Chen",
      handle: "@sam_trends",
      thumbnail: "Tiktok8.png",
      videoUrl: "/videos/creator1.mp4",
      likes: "2.1k",
      description: "Latest beauty trends 💫"
    },
    {
      id: 9,
      name: "Sam Chen",
      handle: "@sam_trends",
      thumbnail: "Tiktok9.png",
      videoUrl: "/videos/creator1.mp4",
      likes: "2.1k",
      description: "Latest beauty trends 💫"
    },
    {
      id: 10,
      name: "Sam Chen",
      handle: "@sam_trends",
      thumbnail: "Tiktok10.png",
      videoUrl: "/videos/creator1.mp4",
      likes: "2.1k",
      description: "Latest beauty trends 💫"
    },
  ];

  // Creator image component
  const CreatorImage = ({ creator, index }) => (
    <div 
      className={`creator-image-wrapper ${index % 2 === 0 ? 'rotate-left' : 'rotate-right'}`}
      style={{ zIndex: creators.length - index }}>
      <img 
        src={creator.thumbnail} 
        alt={creator.name}
        className="creator-image"/>
      <div className="creator-overlay">
        <h3 className="creator-name1">{creator.name}</h3>
        <p className="creator-handle">{creator.handle}</p>
      </div>
      <div className="play-overlay">
      <div className="play-button">
        <Play className="play-icon"/>
      </div>
    </div>
    </div>
  );

  return (
    <section className="creators-section">
      {/* Main content container */}
      <div className="container">
        {/* Header */}
        <div className="header">
          <h2 className="main-title">
            Meet Our Creators
          </h2>
          <p className="subtitle2">
            Within minutes of posting your jobs, creators apply and you get to see their portfolios and choose the perfect match!
          </p>
        </div>
        
        {/* Mobile mockups grid */}
        <div className="mockups-container">
          
          {/* Desktop and tablet layout */}
          <div className="desktop-grid">
            {creators.slice(0, 5).map((creator, index) => (
              <div key={creator.id} className={`grid-item ${getDesktopItemClass(index)}`}>
                <CreatorImage creator={creator} index={index} />
              </div>
            ))}
          </div>
          
          {/* Second row for desktop */}
          <div className="desktop-second-row">
            {creators.slice(5, 10).map((creator, index) => (
              <div key={creator.id} className={`grid-item ${index === 1 ? 'offset-up' : ''}`}>
                <CreatorImage creator={creator} index={index + 5} />
              </div>
            ))}
          </div>
          
          {/* Mobile and small tablet layout */}
          <div className="mobile-grid">
            <div className="mobile-first-row">
              {creators.slice(0, 4).map((creator, index) => (
                <div key={creator.id} className={`grid-item ${index % 2 === 1 ? 'offset-down' : ''}`}>
                  <CreatorImage creator={creator} index={index} />
                </div>
              ))}
            </div>
            <div className="mobile-second-row">
              {creators.slice(4, 8).map((creator, index) => (
                <CreatorImage key={creator.id} creator={creator} index={index + 4} />
              ))}
            </div>
            <div className="mobile-third-row">
              {creators.slice(8, 10).map((creator, index) => (
                <CreatorImage key={creator.id} creator={creator} index={index + 8} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="bottom-section">
          <p className="more-text">
            and 250,000+ more...
          </p>
          
          <button className="cta-button1">
            Get Started for free
          </button>
        </div>
      </div>
      
      {/* Background decoration placeholder */}
      <div className="background-decoration">
        {/* This is where your background image will go */}
      </div>
    </section>
  );
};

// Helper function for desktop grid item classes
const getDesktopItemClass = (index) => {
  if (index === 2) return 'offset-down-large';
  if (index % 2 === 1) return 'offset-down';
  return '';
};

export default CreatorsSection;