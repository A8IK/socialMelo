// src/components/SocialNetworks.jsx
import React from 'react';
import './SocialNetworks.css';

const SocialNetworks = () => {
  const tableData = {
    sections: [
      {
        title: "SOCIAL NETWORKS YOU CAN SEARCH",
        rows: [
          { feature: "Instagram", col1: "✓", col2: "✓", col3: "Unlimited" },
          { feature: "TikTok", col1: "✓", col2: "✓", col3: "Unlimited" },
          { feature: "YouTube", col1: "✓", col2: "✓", col3: "Unlimited" }
        ]
      },
      {
        title: "SEARCHES AND RESULTS",
        rows: [
          { feature: "Access to 200M+ influencers", col1: "✓", col2: "✓", col3: "✓" },
          { feature: "Number of searches", col1: "Unlimited", col2: "Unlimited", col3: "Unlimited" },
          { feature: "Total results", col1: "Up to 1000/month", col2: "Up to 25,000/month", col3: "Unlimited" },
          { feature: "Buy more results", col1: "✓", col2: "✓", col3: "-" }
        ]
      },
      {
        title: "FILTERS TO FIND YOUR IDEAL INFLUENCER",
        rows: [
          { feature: "Influencer demographics", col1: "✓", col2: "✓", col3: "✓", subtitle: "Gender, age, location, languages, etc." },
          { feature: "Audience demographics", col1: "✓", col2: "✓", col3: "✓", subtitle: "Gender, age, location, languages, interests, etc." },
          { feature: "Performance metrics", col1: "✓", col2: "✓", col3: "✓", subtitle: "Followers, avg. views/likes, engagement rate, etc." }
        ]
      },
      {
        title: "ACTIONS YOU CAN TAKE WITH YOUR SEARCHES",
        rows: [
          { feature: "Save searches", col1: "✓", col2: "✓", col3: "✓" },
          { feature: "Export results", col1: "✓", col2: "✓", col3: "✓" }
        ]
      },
      {
        title: "STORAGE",
        rows: [
          { feature: "Profile storage", col1: "Unlimited", col2: "Unlimited", col3: "Unlimited" }
        ]
      },
      {
        title: "ANALYZE INFLUENCERS & PROFILES",
        rows: [
          { feature: "Number of analyses", col1: "Up to 150/month", col2: "Up to 500/month", col3: "Unlimited" },
          { feature: "Contact information", col1: "Up to number of analysis", col2: "Up to number of analysis", col3: "Unlimited" }
        ]
      },
      {
        title: "FIND US DETAILED INSIGHTS",
        rows: [
          { feature: "Performance", col1: "✓", col2: "✓", col3: "✓" },
          { feature: "Followers quality", col1: "✓", col2: "✓", col3: "✓" },
          { feature: "Likers quality", col1: "✓", col2: "✓", col3: "✓" }
        ]
      },
      {
        title: "ACTIONS YOU CAN TAKE WITH YOUR MENTIONS",
        rows: [
          { feature: "Preview", col1: "-", col2: "✓", col3: "✓" },
          { feature: "Sort", col1: "-", col2: "✓", col3: "✓" },
          { feature: "Filters", col1: "-", col2: "✓", col3: "✓" }
        ]
      },
      {
        title: "GENERAL",
        rows: [
          { feature: "Brands", col1: "1", col2: "1", col3: "Unlimited" },
          { feature: "AI Assistant credits", col1: "50", col2: "50", col3: "Unlimited" },
          { feature: "Users", col1: "5", col2: "15", col3: "Unlimited" },
          { feature: "Support", col1: "-", col2: "Chats & Email", col3: "Chats, Email & Phone" },
          { feature: "Dedicated account manager", col1: "-", col2: "-", col3: "✓" }
        ]
      }
    ]
  };

  const renderCell = (content) => {
    if (content === "✓") {
      return <span className="check-icon">✓</span>;
    } else if (content === "-") {
      return <span className="dash-icon">-</span>;
    } else {
      return <span className="text-content">{content}</span>;
    }
  };

  return (
    <div className="social-networks-container">
      <div className="table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th className="feature-header"></th>
              <th className="plan-header">Basic</th>
              <th className="plan-header">Premium</th>
              <th className="plan-header">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {tableData.sections.map((section, sectionIndex) => (
              <React.Fragment key={sectionIndex}>
                <tr className="section-header">
                  <td colSpan="4" className="section-title">
                    {section.title}
                  </td>
                </tr>
                {section.rows.map((row, rowIndex) => (
                  <tr key={`${sectionIndex}-${rowIndex}`} className="feature-row">
                    <td className="feature-cell">
                      <div className="feature-content">
                        <span className="feature-name">{row.feature}</span>
                        {row.subtitle && (
                          <span className="feature-subtitle">{row.subtitle}</span>
                        )}
                      </div>
                    </td>
                    <td className="plan-cell">
                      {renderCell(row.col1)}
                    </td>
                    <td className="plan-cell">
                      {renderCell(row.col2)}
                    </td>
                    <td className="plan-cell">
                      {renderCell(row.col3)}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SocialNetworks;