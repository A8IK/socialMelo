import { useEffect } from "react";
import "./KansasCityKsHero.css";

export default function SocialMeloNYCHero() {
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

  const Check = () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  return (
    <section className="nyhero">
      <div className="nyhero-container">
        <div className="nyhero-inner">
          <span className="nyhero-eyebrow">📍 Kansas City, Kansas</span>
          <h1>Influencer Marketing Agency in Kansas City</h1>
          <p className="nyhero-sub">
            Browse 240+ verified Kansas City, KS creators across Food, Sports,
            Lifestyle, Family, and Home. Filter by area, niche, and platform,
            then let our team run the campaign end-to-end.
          </p>
          <div className="nyhero-buttons">
            <a href="#creators" className="nyhero-btn nyhero-btn-primary">
              <span>Browse KCK Creators ↓</span>
            </a>
            <a href="#contact" className="nyhero-btn nyhero-btn-outline">
              Get a Custom Quote
            </a>
          </div>
          <div className="nyhero-trust">
            <div className="nyhero-ht">
              <Check />
              240+ verified KCK creators
            </div>
            <div className="nyhero-ht">
              <Check />
              On-location shoots available
            </div>
            <div className="nyhero-ht">
              <Check />
              Live in 21 days
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
