import './TiktokFeature.css';
import { tiktokConfig } from '../config/TiktokConfig';

const TiktokFeature = ({ format = 'mp4' }) => {
  const config = tiktokConfig[format].features;

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">
            {config.title}
          </h2>
          <p className="features-subtitle">
            {config.subtitle}
          </p>
        </div>

        <div className="features-grid">
          {config.items.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon.includes('.png') ? (
                  <img src={feature.icon} alt={feature.title} />
                ) : (
                  <span>{feature.icon}</span>
                )}
              </div>
              <div className="feature-content">
                <h3 className="feature-title">
                  {feature.title}
                </h3>
                <p className="feature-description">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TiktokFeature;