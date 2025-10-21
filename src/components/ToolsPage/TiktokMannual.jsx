import './TiktokMannual.css';
import { tiktokConfig } from '../config/TiktokConfig';

const TiktokMannual = ({ format = 'mp4' }) => {
  const config = tiktokConfig[format].manual;

  const getTitleParts = () => {
    const title = config.title;

    if (title.includes('Tiktok')) {
      const parts = title.split('Tiktok');
      return {
        before: parts[0],
        highlight: 'Tiktok ' + parts[1],
        after: ''
      };
    }

    return {
      before: '',
      highlight: title,
      after: ''
    };
  };

  const titleParts = getTitleParts();

  return (
    <section className="how-to-use-section">
      <div className="how-to-use-container">
        {/* Header - FIXED */}
        <div className="how-to-use-header">
          <h2 className="how-to-use-title">
            {titleParts.before}
            <span className="gradient-text">
              {titleParts.highlight}
            </span>
            {titleParts.after}
          </h2>
          <p className="how-to-use-subtitle">
            {config.subtitle}
          </p>
        </div>

        {/* Desktop Steps - 4 Steps */}
        <div className="steps-wrapper desktop-steps steps-4">
          {/* Step 01 */}
          <div className="step-section step-left-section">
            <div className="step-number-indicator">{config.steps[0].number}</div>
            <div className="circle-with-line">
              <div className="step-circle-dot"></div>
              <div className="vertical-connector"></div>
            </div>
            <div className="step-info-card">
              <h3 className="step-heading">{config.steps[0].title}</h3>
              <p className="step-text">
                {config.steps[0].description}
              </p>
            </div>
          </div>

          {/* Step 02 */}
          <div className="step-section step-center-section">
            <div className="step-info-card step-card-top">
              <h3 className="step-heading">{config.steps[1].title}</h3>
              <p className="step-text">
                {config.steps[1].description}
              </p>
            </div>
            <div className="circle-with-line">
              <div className="vertical-connector"></div>
              <div className="step-circle-dot"></div>
            </div>
            <div className="step-number-indicator">{config.steps[1].number}</div>
          </div>

          {/* Step 03 */}
          <div className="step-section step-right-section">
            <div className="step-number-indicator">{config.steps[2].number}</div>
            <div className="circle-with-line">
              <div className="step-circle-dot"></div>
              <div className="vertical-connector"></div>
            </div>
            <div className="step-info-card">
              <h3 className="step-heading">{config.steps[2].title}</h3>
              <p className="step-text">
                {config.steps[2].description}
              </p>
            </div>
          </div>

          {/* Step 04 */}
          <div className="step-section step-center-section">
            <div className="step-info-card step-card-top">
              <h3 className="step-heading">{config.steps[3].title}</h3>
              <p className="step-text">
                {config.steps[3].description}
              </p>
            </div>
            <div className="circle-with-line">
              <div className="vertical-connector"></div>
              <div className="step-circle-dot"></div>
            </div>
            <div className="step-number-indicator">{config.steps[3].number}</div>
          </div>

          {/* Horizontal Line Connecting All Steps */}
          <svg className="horizontal-line-svg">
            <line x1="12%" y1="50%" x2="88%" y2="50%" stroke="#D76D77" strokeWidth="2"/>
          </svg>
        </div>

        {/* Steps Flow - Mobile/Tablet */}
        <div className="steps-wrapper mobile-steps">
          {config.steps.map((step, index) => (
            <div key={index} className="mobile-step-section">
              <div className="step-info-card">
                <h3 className="step-heading">{step.title}</h3>
                <p className="step-text">{step.description}</p>
              </div>
              <div className="mobile-connector-wrapper">
                <div className="vertical-connector"></div>
                <div className="step-circle-dot"></div>
                {index < config.steps.length - 1 && <div className="vertical-connector"></div>}
              </div>
              <div className="step-number-indicator">{step.number}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TiktokMannual;
