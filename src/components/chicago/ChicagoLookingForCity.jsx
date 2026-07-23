import { useEffect } from "react";
import "./ChicagoLookingForCity.css";

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

export default function SocialMeloCHIRelated() {
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
    <section className="chir">
      <div className="chir-container">
        <div className="chir-head">
          <h3>Looking for another city?</h3>
          <a href="/services">See all 27 locations →</a>
        </div>
        <div className="chir-grid">
          {CITIES.map((c) => (
            <a href={c.href} className="chir-card" key={c.city}>
              <div className="chir-city">{c.city}</div>
              <div className="chir-country">{c.country}</div>
              <div className="chir-arrow">{c.cta}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
