import './PricingCta.css';

const PricingCta = () => {
  return (
    <section className="testimonial-showcase-wrapper2">
      <div className="testimonial-grid-layout3">
        {/* Left Side - Phone Mockups */}
        <div className="mockup-visual-container3">
          <img 
            src="High performance clients.png" 
            alt="High performance clients" 
            className="client-showcase-graphic1"
          />
        </div>

        {/* Right Side - Content Section */}
        <div className="conversion-content-zone3">
          <div className="marketing-message-block2">
            <h2 className="performance-headline-text2">
              Join 1600+ high performing clients
            </h2>
            <p className="trust-indicator-subtitle3">
              Discover why professionals worldwide trust us as their top-rated solution.
            </p>
            <div className="action-button-cluster2">
              <button className="demo-request-btn3">
                <span className="demo-gradient-text">Get Your Demo</span>
              </button>
              <div className="cta-buttons">
              <button className="btn-trial">Start Your Trial →</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCta;