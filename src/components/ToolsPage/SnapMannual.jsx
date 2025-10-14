import './SnapMannual.css';

const SnapMannual = () => {
  return (
    <section className="how-to-use-section">
      <div className="how-to-use-container">
        {/* Header */}
        <div className="how-to-use-header">
          <h2 className="how-to-use-title">
            Start Using SocialMelo <span className="gradient-text">Free Instagram Video Downloader</span>
          </h2>
          <p className="how-to-use-subtitle">
            Simple steps to download any Instagram video in seconds
          </p>
        </div>

        <div className="steps-wrapper desktop-steps">
          {/* Left Section - Step 01 */}
          <div className="step-section step-left-section">
            <div className="step-number-indicator">01</div>
            <div className="circle-with-line">
              <div className="step-circle-dot"></div>
              <div className="vertical-connector"></div>
            </div>
            <div className="step-info-card">
              <h3 className="step-heading">Copy Video URL</h3>
              <p className="step-text">
                Copy the Instagram video URL from your browser or app
              </p>
            </div>
          </div>

          {/* Center Section - Step 02 */}
          <div className="step-section step-center-section">
            <div className="step-info-card step-card-top">
              <h3 className="step-heading">Paste & Click Download</h3>
              <p className="step-text">
                Paste the URL in our tool and click the download button
              </p>
            </div>
            <div className="circle-with-line">
              <div className="vertical-connector"></div>
              <div className="step-circle-dot"></div>
            </div>
            <div className="step-number-indicator">02</div>
          </div>

          {/* Right Section - Step 03 */}
          <div className="step-section step-right-section">
            <div className="step-number-indicator">03</div>
            <div className="circle-with-line">
              <div className="step-circle-dot"></div>
              <div className="vertical-connector"></div>
            </div>
            <div className="step-info-card">
              <h3 className="step-heading">Save to Device</h3>
              <p className="step-text">
                Your video will be downloaded in HD quality instantly
              </p>
            </div>
          </div>

          {/* Horizontal Line Connecting All Steps */}
          <svg className="horizontal-line-svg">
            <line x1="16%" y1="50%" x2="84%" y2="50%" stroke="#D76D77" strokeWidth="2"/>
          </svg>
        </div>

        {/* Steps Flow - Mobile/Tablet */}
        <div className="steps-wrapper mobile-steps">
          {/* Step 01 */}
          <div className="mobile-step-section">
            <div className="step-info-card">
              <h3 className="step-heading">Copy Video URL</h3>
              <p className="step-text">
                Copy the Instagram video URL from your browser or app
              </p>
            </div>
            <div className="mobile-connector-wrapper">
              <div className="vertical-connector"></div>
              <div className="step-circle-dot"></div>
              <div className="vertical-connector"></div>
            </div>
            <div className="step-number-indicator">01</div>
          </div>

          {/* Step 02 */}
          <div className="mobile-step-section">
            <div className="step-info-card">
              <h3 className="step-heading">Paste & Click Download</h3>
              <p className="step-text">
                Paste the URL in our tool and click the download button
              </p>
            </div>
            <div className="mobile-connector-wrapper">
              <div className="vertical-connector"></div>
              <div className="step-circle-dot"></div>
              <div className="vertical-connector"></div>
            </div>
            <div className="step-number-indicator">02</div>
          </div>

          {/* Step 03 */}
          <div className="mobile-step-section">
            <div className="step-info-card">
              <h3 className="step-heading">Save to Device</h3>
              <p className="step-text">
                Your video will be downloaded in HD quality instantly
              </p>
            </div>
            <div className="mobile-connector-wrapper">
              <div className="vertical-connector"></div>
              <div className="step-circle-dot"></div>
            </div>
            <div className="step-number-indicator">03</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SnapMannual;