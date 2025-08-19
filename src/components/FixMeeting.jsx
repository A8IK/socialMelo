import React from 'react';
import './FixMeeting.css';

const FixMeeting = () => {
  return (
    <section className="team-platform-section">
      <div className="container">
        <div className="content-wrapper">
          {/* Calendar Section */}
          <div className="calendar-section">
            <div className="calendar-image-container">
              <img src="Calender.png" alt="Calendar image" className="calendar-image" />
            </div>
          </div>

          {/* Text Content Section */}
          <div className="text-content-section">
            <h1 className="main-heading">
              Looking for a Platform Your Team Will Love?
            </h1>
            <p className="sub-description">
              Discover why professionals worldwide trust us as their top-rated solution.
            </p>
            <div className="cta-buttons">
              <button className="btn-demo"></button>
              <button className="btn-trial">Start Your Trial →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FixMeeting;