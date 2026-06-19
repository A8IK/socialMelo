import { useEffect, useState } from "react";
import "./ServiceCoreOurServices.css";

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap";

const FILTERS = ["All", "Campaigns", "Platforms", "Industries", "Geos"];

const CATEGORIES = [
  {
    key: "Campaigns",
    num: "01",
    title: "Campaigns & Creator Programs",
    count: "6 services",
    desc: "The work most brands come to us for: identify the right creators, brief them, ship the content, measure the outcome. Single-platform campaigns, multi-platform launches, and self-serve marketplace access.",
    services: [
      {
        featured: true,
        badge: "FLAGSHIP",
        title: "Influencer Marketing Services",
        desc: "Full-service campaigns across every platform, geo, and vertical, our flagship offering.",
        cta: "Explore Influencer Marketing",
      },
      {
        title: "UGC Creators",
        desc: "Raw user-generated content with full usage rights. Files go straight to your ad accounts.",
        cta: "Explore UGC Creators",
      },
      {
        title: "Influencer Shoutouts",
        desc: "Single-creator paid posts and Instagram shoutouts. Fast turnaround, fixed pricing.",
        cta: "Explore Shoutouts",
      },
      {
        title: "Influencer Marketplace",
        desc: "Self-serve access to the verified creator database. Run campaigns yourself, on your timeline.",
        cta: "Explore Marketplace",
      },
      {
        title: "Influencer Giveaways",
        desc: "Multi-creator giveaway campaigns for follower growth and email-list build.",
        cta: "Explore Giveaways",
      },
      {
        title: "Digital Services for Creators",
        desc: "Profile growth, content production support, and monetization tools for creators on our roster.",
        cta: "Explore Creator Services",
      },
    ],
  },
  {
    key: "Platforms",
    num: "02",
    title: "Platform Coverage",
    count: "5 services",
    desc: "Each platform has its own creator economics, content formats, and audience behavior. We run campaigns tailored to each one, on the same toolkit across the board.",
    services: [
      {
        title: "TikTok Campaigns",
        desc: "Short-form viral content, creator-led messaging, and TikTok Shop integrations.",
        cta: "Explore TikTok",
      },
      {
        title: "Instagram Campaigns",
        desc: "Reels, Stories, in-feed posts, and shopping tags.",
        cta: "Explore Instagram",
      },
      {
        title: "YouTube Campaigns",
        desc: "Long-form integrations, dedicated videos, and Shorts.",
        cta: "Explore YouTube",
      },
      {
        title: "Facebook Campaigns",
        desc: "Reach for older audiences, often paired with paid social.",
        cta: "Explore Facebook",
      },
      {
        title: "Pinterest Campaigns",
        desc: "Visual discovery for home, beauty, decor, and weddings.",
        cta: "Explore Pinterest",
      },
    ],
  },
  {
    key: "Industries",
    num: "03",
    title: "Industry Coverage",
    count: "6 services",
    desc: "Each vertical has its own creator economics: audience trust signals, regulatory overhead, and content trends that actually convert.",
    services: [
      {
        title: "CPG Campaigns",
        desc: "Food, beverage, and consumer-goods brands. Heavy on retail and review strategies.",
        cta: "Explore CPG",
      },
      {
        title: "Finance Campaigns",
        desc: "Fintech, neobanks, and crypto. Disclosure- and compliance-aware creator review.",
        cta: "Explore Finance",
      },
      {
        title: "Travel Campaigns",
        desc: "Brands, airlines, destinations, and travel platforms.",
        cta: "Explore Travel",
      },
      {
        title: "Insurance Campaigns",
        desc: "Auto, home, and health. Trust-first messaging and conversion tracking.",
        cta: "Explore Insurance",
      },
      {
        title: "Automotive Campaigns",
        desc: "OEMs, dealerships, and parts & accessories. EV launches.",
        cta: "Explore Automotive",
      },
      {
        title: "Alcohol & Spirits Campaigns",
        desc: "Beer, spirits, and RTDs. Age-gating and TTB-compliant content.",
        cta: "Explore Alcohol",
      },
    ],
  },
  {
    key: "Geos",
    num: "04",
    title: "Geographic Coverage",
    count: "27 cities, 16 countries",
    type: "geo",
    desc: "We run campaigns in 30+ countries with creators on the ground in each market. Local language, cultural fluency, local compliance. Type your city or country below to filter.",
    cities: [
      {
        city: "Aarhus",
        country: "Denmark",
        desc: "Nordic creators for Scandinavian and B2B reach.",
      },
      {
        city: "Amsterdam",
        country: "Netherlands",
        desc: "Ad-tech, fintech, and crypto-native creators.",
      },
      {
        city: "Augusta",
        country: "United States, GA",
        desc: "Southeastern US lifestyle and sports creators.",
      },
      {
        city: "Budapest",
        country: "Hungary",
        desc: "Hungarian creators for gaming, fintech, and SaaS.",
      },
      {
        city: "Charlotte",
        country: "United States, NC",
        desc: "Finance, sports, and Southern US lifestyle.",
      },
      {
        city: "Chicago",
        country: "United States, IL",
        desc: "Midwest reach for CPG and B2B brands.",
      },
      {
        city: "Cleveland",
        country: "United States, OH",
        desc: "Regional US and DTC creator coverage.",
      },
      {
        city: "Delhi",
        country: "India",
        desc: "South Asia reach across lifestyle and tech.",
      },
      {
        city: "Elko",
        country: "United States, NV",
        desc: "Western US regional creator coverage.",
      },
      {
        city: "Enschede",
        country: "Netherlands",
        desc: "Dutch creators for tech and engineering.",
      },
      {
        city: "Frankfurt",
        country: "Germany",
        desc: "DACH reach for finance and B2B brands.",
      },
      {
        city: "Guwahati",
        country: "India",
        desc: "Northeast India regional creator coverage.",
      },
      {
        city: "Hong Kong",
        country: "Hong Kong",
        desc: "APAC gateway for luxury and finance.",
      },
      {
        city: "Kansas City",
        country: "United States, MO",
        desc: "Heartland reach for CPG and sports brands.",
      },
      {
        city: "Lagos",
        country: "Nigeria",
        desc: "West Africa's largest creator market.",
      },
      {
        city: "Ljubljana",
        country: "Slovenia",
        desc: "Central European creators across verticals.",
      },
      {
        city: "London",
        country: "United Kingdom",
        desc: "UK reach for fashion, finance, FMCG, and beauty.",
      },
      {
        city: "Los Angeles",
        country: "United States, CA",
        desc: "Entertainment, beauty, and lifestyle at scale.",
      },
      {
        city: "Madrid",
        country: "Spain",
        desc: "Spanish and LATAM-facing creator reach.",
      },
      {
        city: "Miami",
        country: "United States, FL",
        desc: "Bilingual Latin-US and LATAM creators.",
      },
      {
        city: "Modena",
        country: "Italy",
        desc: "Italian creators for fashion, food, and automotive.",
      },
      {
        city: "New Orleans",
        country: "United States, LA",
        desc: "Culture, music, and Southern US creators.",
      },
      {
        city: "New York",
        country: "United States, NY",
        desc: "Finance, fashion, FMCG, and media creators.",
      },
      {
        city: "Singapore",
        country: "Singapore",
        desc: "APAC hub for finance, luxury, and SaaS.",
      },
      {
        city: "Stockholm",
        country: "Sweden",
        desc: "Nordic reach for sustainability, design, and tech.",
      },
      {
        city: "Sydney",
        country: "Australia",
        desc: "Australian creators for lifestyle, wellness, and FMCG.",
      },
      {
        city: "Vilnius",
        country: "Lithuania",
        desc: "Baltic reach for fintech and SaaS audiences.",
      },
    ],
  },
];

const SearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.4-3.4" />
  </svg>
);

export default function SocialMeloOurServices() {
  const [active, setActive] = useState("All");
  const [geoQuery, setGeoQuery] = useState("");

  useEffect(() => {
    if (typeof document === "undefined" || document.getElementById("smh-fonts"))
      return;
    const pre1 = Object.assign(document.createElement("link"), {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    });
    const pre2 = Object.assign(document.createElement("link"), {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    });
    const link = Object.assign(document.createElement("link"), {
      id: "smh-fonts",
      rel: "stylesheet",
      href: FONT_HREF,
    });
    document.head.append(pre1, pre2, link);
  }, []);

  const shown = CATEGORIES.filter((c) => active === "All" || c.key === active);

  const renderCards = (cat) => (
    <div className="smo-grid">
      {cat.services.map((s) => (
        <div
          key={s.title}
          className={"smo-card" + (s.featured ? " is-feat" : "")}
        >
          {s.badge && <span className="smo-badge">{s.badge}</span>}
          <h4 className="smo-card-t">{s.title}</h4>
          <p className="smo-card-d">{s.desc}</p>
          <a href="#" className="smo-card-cta">
            {s.cta} <span className="smo-arrow">→</span>
          </a>
        </div>
      ))}
    </div>
  );

  const renderGeo = (cat) => {
    const q = geoQuery.trim().toLowerCase();
    const list = cat.cities.filter(
      (c) =>
        !q ||
        c.city.toLowerCase().includes(q) ||
        c.country.toLowerCase().includes(q),
    );
    return (
      <>
        <div className="smo-search">
          <SearchIcon />
          <input
            type="text"
            placeholder="Filter cities: type a city or country…"
            value={geoQuery}
            onChange={(e) => setGeoQuery(e.target.value)}
          />
        </div>
        {list.length === 0 ? (
          <div className="smo-empty-card">
            <h4 className="smo-empty-h">
              We don't have a dedicated page for that city yet.
            </h4>
            <p className="smo-empty-p">
              Tell us where you need coverage. We work with creators in 30+
              countries.
            </p>
            <a href="#contact" className="smo-empty-cta">
              Request a custom proposal <span className="smo-arrow">→</span>
            </a>
          </div>
        ) : (
          <div className="smo-geo-grid">
            {list.map((c) => (
              <div key={c.city + c.country} className="smo-geo-item">
                <div className="smo-geo-city">{c.city}</div>
                <div className="smo-geo-country">{c.country}</div>
                <p className="smo-geo-desc">{c.desc}</p>
                <a href="#" className="smo-geo-cta">
                  Explore campaigns <span className="smo-arrow">→</span>
                </a>
              </div>
            ))}
          </div>
        )}
      </>
    );
  };

  return (
    <section className="smo">
      <div className="smo-wrap">
        <div className="smo-head">
          <div className="smo-eyebrow">
            <span className="smo-line" />
            <span className="smo-eyebrow-t">Our Services</span>
          </div>
          <h2 className="smo-h2">44 service pages across 4 categories.</h2>
          <p className="smo-sub">
            Find what you need fast. Filter by category, or browse all four.
          </p>
        </div>

        <div className="smo-filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={"smo-pill" + (active === f ? " is-active" : "")}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {shown.map((cat) => (
          <div key={cat.key} className="smo-cat">
            <div className="smo-cat-head">
              <span className="smo-num">{cat.num}</span>
              <h3 className="smo-cat-title">{cat.title}</h3>
              <span className="smo-cat-count">{cat.count}</span>
            </div>
            <p className="smo-cat-desc">{cat.desc}</p>
            {cat.type === "geo" ? renderGeo(cat) : renderCards(cat)}
          </div>
        ))}
      </div>
    </section>
  );
}
