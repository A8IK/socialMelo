import { useEffect } from "react";
import "./MiamiFlLookingForCity.css";

const CITIES = [
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
    city: "Chicago",
    country: "United States · IL",
    cta: "Explore Chicago →",
    href: "/services/influencer-marketing/chicago",
  },
  {
    city: "London",
    country: "United Kingdom",
    cta: "Explore London →",
    href: "/services/influencer-marketing/london-england",
  },
];

export default function SocialMeloMIARelated() {
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
    <section className="miar">
      <div className="miar-container">
        <div className="miar-head">
          <h3>Looking for another city?</h3>
          <a href="/services">See all 27 locations →</a>
        </div>
        <div className="miar-grid">
          {CITIES.map((c) => (
            <a href={c.href} className="miar-card" key={c.city}>
              <div className="miar-city">{c.city}</div>
              <div className="miar-country">{c.country}</div>
              <div className="miar-arrow">{c.cta}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
