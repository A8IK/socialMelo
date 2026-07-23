import { useEffect } from "react";
import "./KansasCityKsLookingForCity.css";

const CITIES = [
  {
    city: "Chicago",
    country: "United States · IL",
    cta: "Explore Chicago →",
    href: "/services/influencer-marketing/chicago",
  },
  {
    city: "New York",
    country: "United States · NY",
    cta: "Explore New York →",
    href: "/services/influencer-marketing/new-york",
  },
  {
    city: "Los Angeles",
    country: "United States · CA",
    cta: "Explore LA →",
    href: "/services/influencer-marketing/los-angeles",
  },
  {
    city: "Miami",
    country: "United States · FL",
    cta: "Explore Miami →",
    href: "/services/influencer-marketing/miami-fl",
  },
];

export default function SocialMeloCLERelated() {
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
    <section className="cler">
      <div className="cler-container">
        <div className="cler-head">
          <h3>Looking for another city?</h3>
          <a href="/services">See all 27 locations →</a>
        </div>
        <div className="cler-grid">
          {CITIES.map((c) => (
            <a href={c.href} className="cler-card" key={c.city}>
              <div className="cler-city">{c.city}</div>
              <div className="cler-country">{c.country}</div>
              <div className="cler-arrow">{c.cta}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
