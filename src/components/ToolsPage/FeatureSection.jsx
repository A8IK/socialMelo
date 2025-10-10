import './FeatureSection.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: 'checked.png',
      title: 'HD Quality Downloads',
      description: 'Download videos in original HD quality without any compression'
    },
    {
      icon: 'traffic-signal.png',
      title: 'No Watermarks',
      description: 'Clean downloads without any watermarks or branding'
    },
    {
      icon: 'thunder.png',
      title: 'Lightning Fast',
      description: 'Ultra-fast processing and download speeds'
    },
    {
      icon: 'padlock.png',
      title: '100% Secure',
      description: 'Your privacy is protected with secure downloads'
    },
    {
      icon: 'device.png',
      title: 'All Devices',
      description: 'Works on mobile, tablet, and desktop devices'
    },
    {
      icon: 'free.png',
      title: 'Always Free',
      description: 'No hidden fees or subscription required'
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        {/* Header */}
        <div className="features-header">
          <h2 className="features-title">
            Save Instagram Videos Forever with SocialMelo IG Video Downloader
          </h2>
          <p className="features-subtitle">
            Instagram Video Downloader with SocialMelo — Fast, secure, and watermark-free video downloads. Save HD Instagram videos instantly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
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

export default FeaturesSection;
