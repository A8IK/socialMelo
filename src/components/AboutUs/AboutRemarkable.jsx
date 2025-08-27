import React from 'react';
import './AboutRemarkable.css';

const AboutRemarkable = () => {
  return (
    <section className="phoenix-journey-main-container">
      <div className="phoenix-journey-content-wrapper">
        
        {/* Title Section */}
        <div className="phoenix-journey-title-section">
          <h2 className="phoenix-journey-main-heading">
            Our Remark<span className="phoenix-gradient-text">able Journey</span>
          </h2>
        </div>

        {/* Timeline Section */}
        <div className="phoenix-timeline-container">
          <div className="phoenix-timeline-wrapper">
            
            {/* Timeline Item 1 */}
            <div className="phoenix-timeline-item">
              <div className="phoenix-timeline-content">
                <p className="phoenix-timeline-description">
                  Incorporated SocialMelo, Onboarded first client in Nov'17, Crossed 10 clientele by March'18
                </p>
              </div>
              <div className="phoenix-timeline-marker phoenix-marker-filled"></div>
              <div className="phoenix-timeline-year">2017-2018</div>
            </div>

            {/* Timeline Item 2 */}
            <div className="phoenix-timeline-item">
              <div className="phoenix-timeline-content">
                <p className="phoenix-timeline-description">
                  Became one of the biggest Vendors of Tik-tok and ShareIT in Bangladesh, Onboarded 50+ Clients by 2019, Expansion in Indonesia.
                </p>
              </div>
              <div className="phoenix-timeline-marker phoenix-marker-filled"></div>
              <div className="phoenix-timeline-year">2019-2020</div>
            </div>

            {/* Timeline Item 3 */}
            <div className="phoenix-timeline-item">
              <div className="phoenix-timeline-content">
                <p className="phoenix-timeline-description">
                  SocialMelo expands in worldwide, Onboarded Snapchat as our client, Awarded by Economic Times for the best campaign.
                </p>
              </div>
              <div className="phoenix-timeline-marker phoenix-marker-filled"></div>
              <div className="phoenix-timeline-year">2021-2022</div>
            </div>

            {/* Timeline Item 4 */}
            <div className="phoenix-timeline-item">
              <div className="phoenix-timeline-content">
                <p className="phoenix-timeline-description">
                  Expanded in USA, AI Dashboard launch, launched product launch services
                </p>
              </div>
              <div className="phoenix-timeline-marker phoenix-marker-outline"></div>
              <div className="phoenix-timeline-year phoenix-future-year">2023-2025</div>
            </div>

          </div>
          
          {/* Timeline Line */}
          <div className="phoenix-timeline-line"></div>
        </div>

        {/* Vision Mission Cards */}
        <div className="phoenix-vision-mission-container">
          
          <div className="phoenix-vision-mission-wrapper">
            
            {/* Our Vision */}
            <div className="phoenix-vision-card">
              <h3 className="phoenix-card-title">Our Vision</h3>
              <p className="phoenix-card-description">
                SocialMelo aims to become the first choice for brands seeking influencer marketing services across the world! We strive to be the one-stop solution for influencer marketing on YouTube, Instagram, LinkedIn, Facebook and Twitter by crafting personalized strategies, selecting the influencers creatively and delivering real values to the brand.
              </p>
            </div>

            {/* Divider */}
            <div className="phoenix-card-divider"></div>

            {/* Our Mission */}
            <div className="phoenix-mission-card">
              <h3 className="phoenix-card-title">Our Mission</h3>
              <p className="phoenix-card-description">
                We are on a mission to revolutionize the influencer marketing industry elevating our brands to unprecedented heights and assisting them in achieving their objectives with unparalleled style and creativity.
              </p>
              <p className="phoenix-card-description">
                With a team of seasoned marketers, scriptwriters, strategists, and influencer marketing experts, we're committed to developing unique, creative-first campaigns that make a real impact.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutRemarkable;