import React from 'react';
import './BrandCarousel.css';

const BrandCarousel = () => {
  // Brand data - replace with your actual image filenames from public folder
  const brands = [
    { name: 'Adobe', logo: 'Adobe.png' },
    { name: 'Colgate', logo: 'Colgate.png' },
    { name: 'Floxy', logo: 'floxy logo.png' },
    { name: 'Huawei', logo: 'Huawei.png' },
    { name: 'Iceatl', logo: 'Iceatl.png' },
    { name: 'Icecartel', logo: 'Icecartel.png' },
    { name: 'Made in China', logo: 'Made in China 2.png' },
    { name: 'Myliia', logo: 'Myliia.png' },
    { name: 'OterBox', logo: 'OterBox 2.png' },
    { name: 'Sandco', logo: 'sandco.png' },
    { name: 'Socialplug', logo: 'Socialplug.png' },
    { name: 'Sommarnox', logo: 'Sommarnox.png' },
    { name: 'Uproas', logo: 'Uproas.png' },
  ];

  return (
    <div className="brand-carousel-section">
      <div className="brand-container">
        {/* Title */}
        <h2 className="brand-title4">
          Trusted by Leading Brands in 70+ Countries
        </h2>

        {/* Carousel Wrapper */}
        <div className="carousel-wrapper">
          <div className="carousel-track">
            {/* First set of brands */}
            {brands.map((brand, index) => (
              <div key={`first-${index}`} className="brand-item">
                <img
                  src={`/${brand.logo}`}
                  alt={brand.name}
                  className="brand-logo"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {brands.map((brand, index) => (
              <div key={`second-${index}`} className="brand-item">
                <img
                  src={`/${brand.logo}`}
                  alt={brand.name}
                  className="brand-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;