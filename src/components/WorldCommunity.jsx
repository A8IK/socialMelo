import './WorldCommunity.css';

const WorldwideCommunity = () => {
  const countries = [
    { name: 'Netherlands', code: 'NL', position: 'netherlands', color: 'orange' },
    { name: 'Nigeria', code: 'NG', position: 'nigeria', color: 'green' },
    { name: 'United Kingdom', code: 'GB', position: 'uk', color: 'blue' },
    { name: 'Germany', code: 'DE', position: 'germany', color: 'red' },
    { name: 'France', code: 'FR', position: 'france', color: 'blue-dark' },
    { name: 'Spain', code: 'ES', position: 'spain', color: 'yellow' },
    { name: 'Singapore', code: 'SG', position: 'singapore', color: 'red-dark' },
    { name: 'Argentina', code: 'AR', position: 'argentina', color: 'blue-light' },
    { name: 'Italy', code: 'IT', position: 'italy', color: 'green-light' },
    { name: 'Canada', code: 'CA', position: 'canada', color: 'red-canada' },
    { name: 'Japan', code: 'JP', position: 'japan', color: 'red' },
    { name: 'Brazil', code: 'BR', position: 'brazil', color: 'green-light' },
    { name: 'South Africa', code: 'ZA', position: 'south-africa', color: 'yellow' },
    { name: 'UAE', code: 'AE', position: 'uae', color: 'green' }
  ];

  return (
    <div className="worldwide-community">
      <div className="community-container">
        {/* Main Title */}
        <div className="title-section">
          <h2 className="main-title">
            <span className="title-normal">Building a worldwide </span>
            <span className="title-gradient">community of creators</span>
          </h2>
        </div>

        {/* Countries Container */}
        <div className="countries-wrapper">
          {/* Country Badges - Desktop */}
          {countries.map((country, index) => (
            <div
              key={country.name}
              className={`country-badge desktop-only ${country.position}`}
              style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="badge-content">
                <div className={`flag-circle ${country.color}`}>
                  
                </div>
                <span className="country-name">{country.name}</span>
              </div>
            </div>
          ))}

          {/* Mobile View - Grid Layout */}
          <div className="mobile-grid1">
            {countries.slice(0, 12).map((country, index) => (
              <div key={country.name} className="mobile-country-item">
                <div className="mobile-badge-content">
                  <div className={`flag-circle ${country.color}`}>
                    <span className="country-initial">{country.code.charAt(0)}</span>
                  </div>
                  <span className="mobile-country-name">{country.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* +156 more badge - Desktop */}
          <div className="more-badge desktop-only">
            <div className="more-badge-content">
              <span className="more-text1">+156 more</span>
            </div>
          </div>

          {/* +156 more badge - Mobile */}
          <div className="more-badge-mobile">
            <div className="more-badge-content">
              <span className="more-text1">+156 more</span>
            </div>
          </div>

          {/* Connecting Lines - Desktop only */}
          <svg className="connecting-lines">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFAF7B" />
                <stop offset="50%" stopColor="#D76D77" />
                <stop offset="100%" stopColor="#3A1C71" />
              </linearGradient>
            </defs>
            <path
              d="M200,150 Q400,200 600,180"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              fill="none"
              className="line-1"
            />
            <path
              d="M150,300 Q350,250 550,320"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              fill="none"
              className="line-2"
            />
            <path
              d="M300,450 Q500,400 700,430"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              fill="none"
              className="line-3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WorldwideCommunity;