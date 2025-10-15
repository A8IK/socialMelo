import './SnapMannual.css';
import { snapConfig } from '../config/SnapConfig';

const SnapMannual = ({ format = 'mp4' }) => {
  const config = snapConfig[format].manual;

  return (
    <section className="how-to-use-section">
      <div className="how-to-use-container">
        {/* Header */}
        <div className="how-to-use-header">
          <h2 className="how-to-use-title">
            {config.title.split('Free')[0]}
            <span className="gradient-text">
              Free{config.title.split('Free')[1]}
            </span>
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
          {/* Step 01 */}
          <div className="mobile-step-section">
            <div className="step-info-card">
              <h3 className="step-heading">{config.steps[0].title}</h3>
              <p className="step-text">
                {config.steps[0].description}
              </p>
            </div>
            <div className="mobile-connector-wrapper">
              <div className="vertical-connector"></div>
              <div className="step-circle-dot"></div>
              <div className="vertical-connector"></div>
            </div>
            <div className="step-number-indicator">{config.steps[0].number}</div>
          </div>

          {/* Step 02 */}
          <div className="mobile-step-section">
            <div className="step-info-card">
              <h3 className="step-heading">{config.steps[1].title}</h3>
              <p className="step-text">
                {config.steps[1].description}
              </p>
            </div>
            <div className="mobile-connector-wrapper">
              <div className="vertical-connector"></div>
              <div className="step-circle-dot"></div>
              <div className="vertical-connector"></div>
            </div>
            <div className="step-number-indicator">{config.steps[1].number}</div>
          </div>

          {/* Step 03 */}
          <div className="mobile-step-section">
            <div className="step-info-card">
              <h3 className="step-heading">{config.steps[2].title}</h3>
              <p className="step-text">
                {config.steps[2].description}
              </p>
            </div>
            <div className="mobile-connector-wrapper">
              <div className="vertical-connector"></div>
              <div className="step-circle-dot"></div>
              <div className="vertical-connector"></div>
            </div>
            <div className="step-number-indicator">{config.steps[2].number}</div>
          </div>

          {/* Step 04 */}
          <div className="mobile-step-section">
            <div className="step-info-card">
              <h3 className="step-heading">{config.steps[3].title}</h3>
              <p className="step-text">
                {config.steps[3].description}
              </p>
            </div>
            <div className="mobile-connector-wrapper">
              <div className="vertical-connector"></div>
              <div className="step-circle-dot"></div>
            </div>
            <div className="step-number-indicator">{config.steps[3].number}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SnapMannual;