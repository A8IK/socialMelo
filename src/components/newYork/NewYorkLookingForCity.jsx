import { useEffect } from "react";
import "./NewYorkLookingForCity.css";

const CITIES = [
  {
    city: "Los Angeles",
    country: "United States · CA",
    cta: "Explore LA →",
    href: "/services/influencer-marketing/los-angeles",
  },
  {
    city: "Chicago",
    country: "United States · IL",
    cta: "Explore Chicago →",
    href: "/services/influencer-marketing/chicago",
  },
  {
    city: "Miami",
    country: "United States · FL",
    cta: "Explore Miami →",
    href: "/services/influencer-marketing/miami-fl",
  },
  {
    city: "London",
    country: "United Kingdom",
    cta: "Explore London →",
    href: "/services/influencer-marketing/london-england",
  },
];

export default function SocialMeloNYCRelated() {
  useEffect(() => {
    if (!document.getElementById("smh-fonts")) {
      const l = document.createElement("link");
      l.id = "smh-fonts";
      l.rel = "stylesheet";
      l.href =
        "https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap";
      document.head.appendChild(l);
    }
  }, []);

  return (
    <section className="nyr">
      <div className="nyr-container">
        <div className="nyr-head">
          <h3>Looking for another US city?</h3>
          <a href="/services">See all 27 locations →</a>
        </div>
        <div className="nyr-grid">
          {CITIES.map((c) => (
            <a href={c.href} className="nyr-card" key={c.city}>
              <div className="nyr-city">{c.city}</div>
              <div className="nyr-country">{c.country}</div>
              <div className="nyr-arrow">{c.cta}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
