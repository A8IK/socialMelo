import { useEffect } from "react";
import "./LosAngelesLookingForCity.css";

const CITIES = [
  {
    city: "New York",
    country: "United States · CA",
    cta: "Explore NY →",
    href: "/services/influencer-marketing-new-york",
  },
  {
    city: "Chicago",
    country: "United States · IL",
    cta: "Explore Chicago →",
    href: "/services/influencer-marketing-chicago",
  },
  // {
  //   city: "Miami",
  //   country: "United States · FL",
  //   cta: "Explore Miami →",
  //   href: "/services/influencer-marketing-miami",
  // },
  {
    city: "Kansas City",
    country: "United States",
    cta: "Explore Kansas City →",
    href: "/services/influencer-marketing-kansas-city",
  },
  {
    city: "Cleveland",
    country: "United States",
    cta: "Explore Cleveland →",
    href: "/services/influencer-marketing-cleveland",
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
          <a href="/services">See all locations →</a>
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
