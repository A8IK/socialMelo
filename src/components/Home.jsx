import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="hero-section">
       <img 
                src="Vectors.png" 
                alt="Background Vectors" 
                className="hero-background-image"/>
      <div className="hero-container">
        {/* Main Content */}
        <div className="hero-content">
            {/* <img 
                src="Vectors.png" 
                alt="Background Vectors" 
                className="hero-background-image"/> */}
           
          <h1 className="hero-title">
            Connect Brands with<br />
            Creators Worldwide
          </h1>
          
          <p className="hero-description">
            The ultimate AI-powered influencer marketing platform that matches brands with 
            authentic creators. Drive real results with data-driven campaigns and transparent ROI 
            tracking.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-demo"></button>
            <button className="btn-trial">Start Your Trial →</button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="floating-elements">

          {/* Social Media Icons */}
            <img 
            src="Socialicon 2.png" 
            alt="Rotating Social Media Circle" 
            className="rotating-image"/>

          {/* Creator Search Badge */}
          <img src="CreatorSearch.png" style={{top: '0%', right: '-15%'}}
            alt="Creator Search" 
            className="badge-image floating-badge"/>

          {/* Creator Profiles */}
          <div className="creator-card" style={{top: '15%', right: '6%'}}>
            <div className="creator-avatar">
                <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Sarah K." className="avatar-image" />
            </div>
            <div className="creator-info">
                <div className="creator-name">Sarah K.</div>
                <div className="creator-category">Beauty</div>
            </div>
          </div>

            <div className="creator-card" style={{top: '15%', right: '23%'}}>
            <div className="creator-avatar">
                <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="Alex M." className="avatar-image" />
            </div>
            <div className="creator-info">
                <div className="creator-name">Alex M.</div>
                <div className="creator-category">Tech</div>
            </div>
            </div>

            <div className="creator-card" style={{top: '15%', right: '40%'}}>
            <div className="creator-avatar">
                <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="David C." className="avatar-image" />
            </div>
            <div className="creator-info">
                <div className="creator-name">David C.</div>
                <div className="creator-category">Art</div>
            </div>
            </div>

            <div className="creator-card" style={{top: '48%', right: '6%'}}>
            <div className="creator-avatar">
                <img src="https://randomuser.me/api/portraits/women/4.jpg" alt="Emma L." className="avatar-image" />
            </div>
            <div className="creator-info">
                <div className="creator-name">Emma L.</div>
                <div className="creator-category">Beauty</div>
            </div>
            </div>

            <div className="creator-card" style={{top: '48%', right: '23%'}}>
            <div className="creator-avatar">
                <img src="https://randomuser.me/api/portraits/men/5.jpg" alt="SS Sami" className="avatar-image" />
            </div>
            <div className="creator-info">
                <div className="creator-name">SS Sami</div>
                <div className="creator-category">Food</div>
            </div>
            </div>

            <div className="creator-card" style={{top: '48%', right: '40%'}}>
            <div className="creator-avatar">
                <img src="https://randomuser.me/api/portraits/men/6.jpg" alt="Sikhawat" className="avatar-image" />
            </div>
            <div className="creator-info">
                <div className="creator-name">Sikhawat</div>
                <div className="creator-category">Lifestyle</div>
            </div>
            </div>

          {/* Audience Analysis Badge */}
          {/* <div className="floating-badge audience-analysis" style={{bottom: '40%', left: '15%'}}>
            <span>Audience Analysis</span>
          </div> */}
          <img style= {{bottom: '30%', left: '2%'}}
            src="AudienceAnalysis.png" 
            alt="Audience Analysis" 
            className="badge-image floating-badge audience-analysis"
          />

          {/* Stats Circle */}
          {/* <div className="stats-circle" style={{bottom: '25%', left: '20%'}}>
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-value">1.2k</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">40%</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">2.4M</span>
              </div>
            </div>
          </div> */}
          <div className="stats-circle" style={{bottom: '-10%', left: '0%'}}>
            <img 
                src="Rating.png" 
                alt="Stats Circle" 
                className="badge-image"/>
            </div>

          {/* Collaborations Badge */}
          {/* <div className="floating-badge collaborations" style={{bottom: '20%', right: '15%'}}>
            <span>Collaborations</span>
          </div> */}
          <div className="floating-badge collaborations" style={{bottom: '4%', right: '-18%'}}>
            <img 
                src="Colloaborations.png" 
                alt="Collaborations" 
                className="badge-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;