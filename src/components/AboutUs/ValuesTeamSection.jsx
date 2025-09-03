import './ValuesTeamSection.css';

const ValuesTeamSection = () => {
  return (
    <section className="aurora-values-team-main-container">
      <div className="aurora-values-team-content-wrapper">
        
        {/* Values Section */}
        <div className="aurora-values-section">
          <h2 className="aurora-values-main-heading">
            Our <span className="aurora-gradient-text">Values</span>
          </h2>
          
          <div className="aurora-values-grid-container">
            <div className="aurora-value-card">
              <div className="aurora-value-icon">
                <img src="security.png" alt="Transparency" className="aurora-icon-img" />
              </div>
              <h3 className="aurora-value-title">Transparency</h3>
            </div>
            
            <div className="aurora-value-card">
              <div className="aurora-value-icon">
                <img src="collaboration.png" alt="Team Work" className="aurora-icon-img" />
              </div>
              <h3 className="aurora-value-title">Team Work</h3>
            </div>
            
            <div className="aurora-value-card">
              <div className="aurora-value-icon">
                <img src="puzzle.png" alt="Resilience" className="aurora-icon-img" />
              </div>
              <h3 className="aurora-value-title">Resilience</h3>
            </div>
            
            <div className="aurora-value-card">
              <div className="aurora-value-icon">
                <img src="originally.png" alt="Originality" className="aurora-icon-img" />
              </div>
              <h3 className="aurora-value-title">Originality</h3>
            </div>
            
            <div className="aurora-value-card">
              <div className="aurora-value-icon">
                <img src="creativity.png" alt="Creativity" className="aurora-icon-img" />
              </div>
              <h3 className="aurora-value-title">Creativity</h3>
            </div>
            
            <div className="aurora-value-card">
              <div className="aurora-value-icon">
                <img src="trend.png" alt="Trend Analysis" className="aurora-icon-img" />
              </div>
              <h3 className="aurora-value-title">Trend Analysis</h3>
            </div>
          </div>
        </div>

        {/* CEO Quote Section */}
        <div className="aurora-ceo-quote-section">
          <div className="aurora-ceo-content-wrapper">
            <div className="aurora-ceo-image-container">
              <div className="aurora-ceo-image-wrapper">
                <img src="Abdullah-Mahmud-SEO-Expert.webp" alt="CEO" className="aurora-ceo-image" />
              </div>
            </div>
            
            <div className="aurora-ceo-text-container">
              <div className="aurora-ceo-quote-text">
                <p className="aurora-quote-paragraph">
                  As the CEO of SocialMelo, I take immense pride in stating that we design experiences that naturally draw people in. Every campaign we create is way more than just about public exposure. We believe in building real bonds, the kind that stick together and form trust amongst audiences. For us at SocialMelo, every client is special. We take the time to study what makes a brand unique and formulate strategies that truly reflect their vision. We serve our client goals with absolute diligence and approach every project with sheer passion to the best of our ability.
                </p>
                
                <p className="aurora-quote-paragraph">
                  A core value of ours, will and always will be: Trust That's a promise we stand by, and that's what we bring to the table.
                </p>
                
                <div className="aurora-ceo-signature">
                  <p className="aurora-ceo-name">Abdullah Mahmud</p>
                  <p className="aurora-ceo-title">Founder & CEO,</p>
                  <p className="aurora-ceo-company">Socialmelo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="aurora-team-section">
          <h2 className="aurora-team-main-heading">
            Meet the <span className="aurora-gradient-text">Socialmelo team</span>
          </h2>
          
          <div className="aurora-team-grid-container">
            <div className="aurora-team-member-card">
              <div className="aurora-member-image-container">
                <img src="Organic-Growth-Head.png" alt="Nisha Parwani" className="aurora-member-image" />
              </div>
              <h4 className="aurora-member-name">Nisha Parwani</h4>
              <p className="aurora-member-position">Organic Growth Head</p>
              <a href="#" className="aurora-linkedin-link">
                <img src="LinkedIn.png" alt="LinkedIn" className="aurora-linkedin-icon" />
              </a>
            </div>
            
            <div className="aurora-team-member-card">
              <div className="aurora-member-image-container">
                <img src="Business-Development-Head.png" alt="Ankush Royal" className="aurora-member-image" />
              </div>
              <h4 className="aurora-member-name">Ankush Royal</h4>
              <p className="aurora-member-position">Business Development Head</p>
              <a href="#" className="aurora-linkedin-link">
                <img src="LinkedIn.png" alt="LinkedIn" className="aurora-linkedin-icon" />
              </a>
            </div>
            
            <div className="aurora-team-member-card">
              <div className="aurora-member-image-container">
                <img src="Creative-Head.png" alt="Misley Zehra" className="aurora-member-image" />
              </div>
              <h4 className="aurora-member-name">Misley Zehra</h4>
              <p className="aurora-member-position">Creative Head</p>
              <a href="#" className="aurora-linkedin-link">
                <img src="LinkedIn.png" alt="LinkedIn" className="aurora-linkedin-icon" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ValuesTeamSection;