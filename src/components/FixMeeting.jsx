import './FixMeeting.css';
import { Link } from 'react-router-dom';

const FixMeeting = () => {
  return (
    <section className="team-platform-section">
      <div className="container5">
        <div className="content-wrapper5">
          {/* Calendar Section */}
          <div className="calendar-section">
            <div className="calendar-image-container">
              <img src="Calender.png" alt="Calendar image" className="calendar-image" />
            </div>
          </div>

          {/* Text Content Section */}
          <div className="text-content-section">
            <h2 className="main-heading2">
              Looking for a Platform Your Team Will Love?
            </h2>
            <p className="sub-description">
              Discover why professionals worldwide trust us as their top-rated solution.
            </p>
            <div className="cta-buttons">
              <Link to="/register" className="btn-demo"></Link>
              <Link to="/register" className="btn-trial">Start Your Trial →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FixMeeting;