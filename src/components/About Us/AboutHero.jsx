import './AboutHero.css';

const AboutHero = () => {
  return (
    <div className="zephyr-influencer-main-wrapper">
      {/* Hero Section */}
      <section className="zephyr-hero-masthead-container">
        <div className="zephyr-hero-background-image">
            <img src="Vector 3.png" alt="Background" className="zephyr-bg-img" />
        </div>
        
        <div className="zephyr-hero-content-wrapper">
          <div className="zephyr-hero-text-section">
            <h1 className="zephyr-hero-primary-heading">
              Trusted Global Partner in<br />
              Influencer Campaigns
            </h1>
            <p className="zephyr-hero-description-text">
              SocialMedia is a Global influencer marketing company, with a presence across the worldwide.
            </p>
            <button className="zephyr-hero-gradient-cta-btn">
              Hire Us
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="zephyr-stats-showcase-section">
        <div className="zephyr-stats-container-wrapper">
          <div className="zephyr-stats-grid-layout">
            {/* Row 1 */}
            <div className="zephyr-stat-card-item zephyr-location-card">
              <h3 className="zephyr-stat-primary-number">Dhaka, US</h3>
              <p className="zephyr-stat-description-label">Headquarters</p>
            </div>
            
            <div className="zephyr-stat-card-item zephyr-experience-card">
              <h3 className="zephyr-stat-primary-number zephyr-number-highlight">8+</h3>
              <p className="zephyr-stat-description-label">Year of experience</p>
            </div>
            
            <div className="zephyr-stat-card-item zephyr-campaigns-card">
              <h3 className="zephyr-stat-primary-number zephyr-number-highlight">35,000+</h3>
              <p className="zephyr-stat-description-label">Personalized Influencer Campaigns<br />Executed</p>
            </div>

            {/* Row 2 */}
            <div className="zephyr-stat-card-item zephyr-creators-card">
              <h3 className="zephyr-stat-primary-number zephyr-number-highlight">300M+</h3>
              <p className="zephyr-stat-description-label">Global Content Creators & Social<br />Media Influencers</p>
            </div>
            
            <div className="zephyr-stat-card-item zephyr-brands-card">
              <h3 className="zephyr-stat-primary-number zephyr-number-highlight">1300+</h3>
              <p className="zephyr-stat-description-label">Top-Notch Brands Trust Us For<br />Their Influencer Campaign</p>
            </div>
            
            <div className="zephyr-stat-card-item zephyr-experts-card">
              <h3 className="zephyr-stat-primary-number zephyr-number-highlight">40+</h3>
              <p className="zephyr-stat-description-label">Experts</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;