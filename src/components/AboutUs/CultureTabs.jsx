import React, { useState } from 'react';
import './CultureTabs.css';

const CultureTabs = () => {
  const [activeTab, setActiveTab] = useState('Culture');

  const tabContent = {
    Culture: {
      image: 'TripImage.jpg',
      text: `At SocialMelo, our influencer and brand strategists flourish in a dynamic, collaborative environment that values creativity and work-life harmony. We blend influencer marketing with brand storytelling to craft campaigns that are authentic, data-driven, and culturally relevant. Our close-knit team works hand-in-hand with content creators, public relations, and media buyers to ensure every brand voice resonates across platforms. Agile workflows supported by tech, analytics, and community management allow us to pivot quickly while staying aligned with client goals. We prioritize flexibility, trust, and originality—encouraging bold ideas that ethically amplify brand presence. Growth is central to our culture: through constant learning, open feedback, and mentorship, we empower each team member to lead and innovate. With strong backend support, our creatives stay focused on what we love most: turning influence into impact and helping brands thrive online.`
    },
    Trip: {
      image: 'TripImage.jpg',
      text: `Our team trips are more than just getaways—they're essential to building the strong relationships that fuel our creativity. From annual retreats in scenic destinations to quarterly team-building adventures, we believe that shared experiences outside the office translate into better collaboration within it. These trips give us the opportunity to disconnect from deadlines and reconnect with each other as individuals. Whether we're exploring new cities, trying adventure sports, or simply sharing meals and stories, these moments create lasting bonds that enhance our teamwork. Our trip experiences often spark the most innovative campaign ideas, as fresh perspectives and relaxed environments encourage out-of-the-box thinking. We invest in these experiences because we know that a team that plays together, creates magic together.`
    },
    Office: {
      image: 'TripImage.jpg',
      text: `Our office space is designed to inspire creativity and foster collaboration. With open-concept work areas, comfortable meeting pods, and dedicated creative zones, every corner of our workspace encourages innovation. Natural light floods through large windows, while plants and modern furnishings create an energizing yet calming atmosphere. We've equipped our office with state-of-the-art technology for content creation, including professional photography and video equipment, high-speed internet, and multiple monitor setups for our designers and strategists. Flexible seating arrangements allow team members to choose the environment that best suits their work style, whether that's a quiet corner for deep focus or a collaborative space for brainstorming. Our kitchen area serves as an informal meeting space where the best ideas often emerge over coffee and conversation.`
    }
  };

  return (
    <section className="nebula-culture-tabs-main-container">
      <div className="nebula-culture-content-wrapper">
        
        {/* Title Section */}
        <div className="nebula-culture-title-section">
          <h2 className="nebula-culture-main-heading">
            Our <span className="nebula-gradient-text">Culture</span>
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="nebula-tab-navigation">
          <button 
            className={`nebula-tab-button ${activeTab === 'Culture' ? 'nebula-tab-active' : ''}`}
            onClick={() => setActiveTab('Culture')}>
            Culture
          </button>
          <button 
            className={`nebula-tab-button ${activeTab === 'Trip' ? 'nebula-tab-active' : ''}`}
            onClick={() => setActiveTab('Trip')}>
            Trip
          </button>
          <button 
            className={`nebula-tab-button ${activeTab === 'Office' ? 'nebula-tab-active' : ''}`}
            onClick={() => setActiveTab('Office')}>
            Office
          </button>
        </div>

        {/* Tab Content */}
        <div className="nebula-tab-content-section">
          
          {/* Image Container */}
          <div className="nebula-content-image-container">
            <img 
              src={tabContent[activeTab].image} 
              alt={`${activeTab} at SocialMelo`} 
              className="nebula-content-image"
            />
          </div>

          {/* Text Content */}
          <div className="nebula-content-text-container">
            <p className="nebula-content-text">
              {tabContent[activeTab].text}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CultureTabs;