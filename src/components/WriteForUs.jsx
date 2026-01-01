import { useState, useEffect } from 'react';
import './writeForUs.css';
import { usePageMeta } from '../usePageMeta';

const WriteForUs = () => {

  usePageMeta(
      'Write for Us: Guest Post | Social Media, Marketing, Business', 
      'Socialmelo invites guest posts on social media, marketing & business strategy. High-quality backlinks included. Submit your content now!'
    );

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: '👥',
      title: 'Reach Growing Audience',
      description: 'Connect with brand marketers, agencies, and creators passionate about influencer marketing'
    },
    {
      icon: '🎯',
      title: 'Establish Authority',
      description: 'Position yourself as a thought leader in the creator economy and influencer marketing'
    },
    {
      icon: '📊',
      title: 'Showcase Your Work',
      description: 'Share campaign results, frameworks, and strategies with industry professionals'
    },
    {
      icon: '💼',
      title: 'Build Your Brand',
      description: 'Grow your professional portfolio and personal brand in the marketing space'
    }
  ];

  const topics = [
    'Influencer marketing strategy',
    'Campaign planning & execution',
    'UGC and creator-led ads',
    'Successful campaign case studies',
    'Influencer selection & management',
    'Creator pricing & negotiation',
    'Analytics & ROI measurement',
    'Platform-specific strategies',
    'Tools & tech stack reviews',
    'Creator economy & social commerce',
    'Data-driven insight & experiments related to creator campaigns'
  ];

  const audience = [
    'Brand managers and marketing leads',
    'Performance & growth marketers',
    'Influencer & partnership managers',
    'Agencies and marketing consultants',
    'Content creators and UGC creators',
    'Startup founders and eCommerce owners'
  ];

  const requirements = [
    { label: 'Word Count', value: '1,000–2,000 words' },
    { label: 'Content Type', value: 'Original & unpublished' },
    { label: 'Style', value: 'Actionable & practical' },
    { label: 'Writing Style', value: 'Clear & engaging' },
    { label: 'Language', value: 'English only' },
    { label: 'Supporting Content', value: 'Data & examples' },
    { label: 'References', value: 'Proper citations' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="write-for-us-page">
      {/* Hero Section */}
      <section className="wfu-hero-section">
        <div className="wfu-hero-container">
          <div className={`wfu-hero-content ${isVisible ? 'wfu-fade-in-up' : ''}`}>
            <h1 className="wfu-hero-title">
              Submit Your Guest Post on <span className="wfu-gradient-text">Social Media Marketing & Business Growth</span>
            </h1>
            <p className="wfu-hero-description">
              Share your influencer marketing insights with brand marketers, agencies, and creators. 
              Publish case studies, thought leadership content, and build authority in the creator economy.
            </p>
            <a href="#submit-pitch" className="wfu-cta-button">
              Start Contributing
              <svg className="wfu-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Why Write Section */}
        <section className="wfu-why-write-section">
        <div className="wfu-container">
            <h2 className="wfu-section-title">
            Why Write for <span className="wfu-gradient-text">SocialMelo?</span>
            </h2>
            <p className="wfu-section-description1">
            By contributing to SocialMelo, you can
            </p>
            
            {/* Benefits List */}
            <div className="wfu-benefits-list-wrapper">
            <ul className="wfu-benefits-text-list">
                <li className={`wfu-benefits-list-item ${isVisible ? 'wfu-fade-in-up' : ''}`} style={{ animationDelay: '0s' }}>
                <svg className="wfu-check-icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Reach a growing audience of brand marketers, agencies, and creators
                </li>
                <li className={`wfu-benefits-list-item ${isVisible ? 'wfu-fade-in-up' : ''}`} style={{ animationDelay: '0.1s' }}>
                <svg className="wfu-check-icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Establish yourself as a thought leader in influencer marketing
                </li>
                <li className={`wfu-benefits-list-item ${isVisible ? 'wfu-fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>
                <svg className="wfu-check-icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Showcase your campaign results, frameworks, and strategies
                </li>
                <li className={`wfu-benefits-list-item ${isVisible ? 'wfu-fade-in-up' : ''}`} style={{ animationDelay: '0.3s' }}>
                <svg className="wfu-check-icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Build your professional portfolio and personal brand
                </li>
                <li className={`wfu-benefits-list-item ${isVisible ? 'wfu-fade-in-up' : ''}`} style={{ animationDelay: '0.4s' }}>
                <svg className="wfu-check-icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Share your knowledge with a community passionate about influencer and creator-led growth
                </li>
            </ul>
            </div>
        </div>
        </section>

      {/* Audience Section */}
      <section className="wfu-audience-section">
        <div className="wfu-container">
          <div className="wfu-two-column-layout">
            <div className="wfu-column">
              <h2 className="wfu-section-title">
                Our <span className="wfu-gradient-text">Audience</span>
              </h2>
              <p className="wfu-section-description">
                Your content will reach a diverse community of marketing professionals and creators:
              </p>
              <ul className="wfu-audience-list">
                {audience.map((item, index) => (
                  <li key={index} className="wfu-audience-item">
                    <svg className="wfu-check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="wfu-column">
              <div className="wfu-image-placeholder">
                <img src="/Target_Audience.jpg" alt="Our Audience" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="wfu-topics-section">
        <div className="wfu-container">
          <h2 className="wfu-section-title">
            Content We're <span className="wfu-gradient-text">Looking For</span>
          </h2>
          <p className="wfu-section-description1">
            We're especially interested in these topics
          </p>
          <div className="wfu-topics-grid">
            {topics.map((topic, index) => (
              <div
                key={index}
                className={`wfu-topic-tag ${isVisible ? 'wfu-fade-in' : ''}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {topic}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="wfu-requirements-section">
        <div className="wfu-container">
          <h2 className="wfu-section-title">
            Content <span className="wfu-gradient-text">Requirements</span>
          </h2>
          <div className="wfu-requirements-grid">
            {requirements.map((req, index) => (
              <div key={index} className="wfu-requirement-card">
                <div className="wfu-requirement-label">{req.label}</div>
                <div className="wfu-requirement-value">{req.value}</div>
              </div>
            ))}
          </div>
          <div className="wfu-requirements-list">
            <h2 className="wfu-section-title">
            Submission <span className="wfu-gradient-text">Guidelines</span>
          </h2>
          
            <h3 className="wfu-subsection-title">Article Standards</h3>
             <p className="wfu-subsection-description">To maintain quality for our readers, we look for:</p>
            <ul className="wfu-standards-list">
              <li>Original, plagiarism-free content</li>
              <li>Professional yet friendly, conversational tone</li>
              <li>Expert-level or practitioner-level insights</li>
              <li>Clear structure with headings and examples</li>
              <li>Up-to-date tactics and best practices</li>
              <li>Actionable takeaways for readers</li>
            </ul>
          </div>

          {/* Format Requirements */}
            <div className="wfu-requirements-list wfu-format-requirements">
            <h3 className="wfu-subsection-title">Format Requirements</h3>
            <p className="wfu-subsection-description">Please submit your content with:</p>
            <ul className="wfu-standards-list">
                <li>Microsoft Word or Google Docs format</li>
                <li>Relevant images, charts, or screenshots (with proper usage rights/attribution)</li>
                <li>An author bio (1–3 sentences) – one relevant backlink allowed</li>
                <li>A professional headshot (optional but recommended)</li>
                <li>Clear H2/H3 headings and subheadings</li>
                <li>Any external sources properly cited</li>
            </ul>
            </div>
        </div>
      </section>

      {/* Submission Process */}
      <section className="wfu-process-section">
        <div className="wfu-container">
          <h2 className="wfu-section-title">
            How to <span className="wfu-gradient-text">Submit</span>
          </h2>
          <div className="wfu-process-steps">
            <div className="wfu-step-card">
              <div className="wfu-step-number">1</div>
              <h3 className="wfu-step-title">Send Your Pitch</h3>
              <p className="wfu-step-description">
                Email your pitch to <a href="mailto:danyel@socialmelo.com">danyel@socialmelo.com</a> with:
              </p>
              <ul className="wfu-step-list">
                <li>Your name and professional background</li>
                <li>A short author bio</li>
                <li>1–3 article topics you'd like to write about</li>
                <li>Brief outline for each topic</li>
                <li>Writing samples (if available)</li>
              </ul>
            </div>

            <div className="wfu-step-card">
              <div className="wfu-step-number">2</div>
              <h3 className="wfu-step-title">Full Submission</h3>
              <p className="wfu-step-description">
                Once approved, submit your complete article with:
              </p>
              <ul className="wfu-step-list">
                <li>Full article in Word or Google Docs</li>
                <li>Supporting images and screenshots</li>
                <li>Author headshot (optional)</li>
                <li>Final author bio</li>
              </ul>
            </div>

            <div className="wfu-step-card">
              <div className="wfu-step-number">3</div>
              <h3 className="wfu-step-title">Review & Publish</h3>
              <p className="wfu-step-description">
                We'll review, edit if needed, and publish your article:
              </p>
              <ul className="wfu-step-list">
                <li>Editorial review and suggestions</li>
                <li>Final approval and scheduling</li>
                <li>Promotion via our channels</li>
                <li>Author notification when live</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial & Review Process Section */}
        <section className="wfu-editorial-section">
        <div className="wfu-container">
            <h2 className="wfu-section-title">
            Editorial & Review <span className="wfu-gradient-text">Process</span>
            </h2>
            <p className="wfu-section-description">
            Here's what you can expect:
            </p>
            
            <div className="wfu-editorial-list-wrapper">
            <ul className="wfu-editorial-list">
                <li className={`wfu-editorial-item ${isVisible ? 'wfu-fade-in-up' : ''}`} style={{ animationDelay: '0s' }}>
                <div className="wfu-editorial-icon">📋</div>
                <div className="wfu-editorial-content">
                    <h4 className="wfu-editorial-title">Initial review</h4>
                    <p className="wfu-editorial-text">We review pitches and drafts for relevance and quality</p>
                </div>
                </li>
                <li className={`wfu-editorial-item ${isVisible ? 'wfu-fade-in-up' : ''}`} style={{ animationDelay: '0.1s' }}>
                <div className="wfu-editorial-icon">✏️</div>
                <div className="wfu-editorial-content">
                    <h4 className="wfu-editorial-title">Editorial suggestions</h4>
                    <p className="wfu-editorial-text">We may request edits for clarity, depth, or structure</p>
                </div>
                </li>
                <li className={`wfu-editorial-item ${isVisible ? 'wfu-fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>
                <div className="wfu-editorial-icon">✅</div>
                <div className="wfu-editorial-content">
                    <h4 className="wfu-editorial-title">Final approval & scheduling</h4>
                    <p className="wfu-editorial-text">Approved articles are queued for publication</p>
                </div>
                </li>
                <li className={`wfu-editorial-item ${isVisible ? 'wfu-fade-in-up' : ''}`} style={{ animationDelay: '0.3s' }}>
                <div className="wfu-editorial-icon">📢</div>
                <div className="wfu-editorial-content">
                    <h4 className="wfu-editorial-title">Promotion</h4>
                    <p className="wfu-editorial-text">Published pieces may be promoted via SocialMelo's social channels and newsletter (where applicable)</p>
                </div>
                </li>
                <li className={`wfu-editorial-item ${isVisible ? 'wfu-fade-in-up' : ''}`} style={{ animationDelay: '0.4s' }}>
                <div className="wfu-editorial-icon">🔔</div>
                <div className="wfu-editorial-content">
                    <h4 className="wfu-editorial-title">Author notification</h4>
                    <p className="wfu-editorial-text">You'll be notified once your article is live</p>
                </div>
                </li>
            </ul>
            </div>
        </div>
        </section>

    {/* Terms Section */}
    <section className="wfu-terms-section">
    <div className="wfu-container">
        <h2 className="wfu-section-title">
        <span className="wfu-gradient-text">Terms</span>
        </h2>
        <p className="wfu-section-description">
        Please note:
        </p>
        
        <div className="wfu-terms-list-wrapper">
        <ul className="wfu-terms-list">
            <li className={`wfu-terms-item ${isVisible ? 'wfu-fade-in-up' : ''}`} style={{ animationDelay: '0s' }}>
            <svg className="wfu-check-icon-terms" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            SocialMelo reserves the right to edit content for clarity, style, and formatting
            </li>
            <li className={`wfu-terms-item ${isVisible ? 'wfu-fade-in-up' : ''}`} style={{ animationDelay: '0.1s' }}>
            <svg className="wfu-check-icon-terms" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            We may update articles periodically to keep information accurate and relevant
            </li>
            <li className={`wfu-terms-item ${isVisible ? 'wfu-fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>
            <svg className="wfu-check-icon-terms" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            You retain rights to your original content, but grant us permission to publish and maintain it on socialmelo.com
            </li>
            <li className={`wfu-terms-item ${isVisible ? 'wfu-fade-in-up' : ''}`} style={{ animationDelay: '0.3s' }}>
            <svg className="wfu-check-icon-terms" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            All published articles include author attribution
            </li>
            <li className={`wfu-terms-item ${isVisible ? 'wfu-fade-in-up' : ''}`} style={{ animationDelay: '0.4s' }}>
            <svg className="wfu-check-icon-terms" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            We may add internal links to relevant SocialMelo pages or resources where appropriate
            </li>
        </ul>
        </div>
    </div>
    </section>

      {/* Contact Form Section */}
      <section id="submit-pitch" className="wfu-contact-section">
        <div className="wfu-container">
          <div className="wfu-contact-wrapper">
            <div className="wfu-contact-info">
              <h2 className="wfu-section-title">
                Let's Grow Your Brand With <span className="wfu-gradient-text">Creators</span>
              </h2>
              <p className="wfu-contact-description">
                Tell us about your brand and goals, and we'll help you plan impactful influencer campaigns.
              </p>
              <div className="wfu-contact-details">
                <div className="wfu-contact-item">
                  <svg className="wfu-contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:danyel@socialmelo.com">danyel@socialmelo.com</a>
                </div>
              </div>
            </div>

            <form className="wfu-contact-form" onSubmit={handleSubmit}>
              <div className="wfu-form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="wfu-form-group">
                <label htmlFor="email">Email*</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="wfu-form-group">
                <label htmlFor="website">Brand / Website URL</label>
                <input type="url" id="website" name="website" />
              </div>

              <div className="wfu-form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" />
              </div>

              <div className="wfu-form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>

              <button type="submit" className="wfu-submit-button">
                Submit
                <svg className="wfu-submit-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WriteForUs;