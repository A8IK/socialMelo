import React, { useEffect } from "react";
import "./MiamiFlOnTheGround.css";

const STATS = [
  { num: "540+", label: "Verified Miami creators" },
  { num: "1,500+", label: "Miami campaigns delivered" },
  { num: "14", label: "Miami areas covered" },
  { num: "21d", label: "Brief to live content" },
];

export default function SocialMeloMIAProof() {
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
    <section className="miap">
      <div className="miap-container">
        <div className="miap-grid">
          <div className="miap-side">
            <span className="miap-eyebrow">On the ground in Miami</span>
            <h2>
              A real Miami creator network, not a database with "Miami" in the
              filter.
            </h2>
            <p>
              SocialMelo runs as a remote-first team, but our Miami creator
              operations are built for the city: on-location shoots from South
              Beach and Wynwood to Brickell and Little Havana, same-day creator
              briefings, often bilingual, and activations timed to Miami Swim
              Week, Art Basel, Ultra, and the winter season.
            </p>
            <p>
              Every creator on our Miami roster is vetted in person or via
              verified portfolio: audience-quality scored, engagement-checked,
              brand-safety reviewed. You see the data before you sign off.
            </p>
            <div className="miap-stats">
              {STATS.map((s) => (
                <div className="miap-stat" key={s.label}>
                  <div className="miap-num">{s.num}</div>
                  <div className="miap-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="miap-map-card">
            <div className="miap-map">
              <div className="miap-grid-lines" />
              <div className="miap-boro miap-mb1">South Beach</div>
              <div className="miap-boro miap-mb2">Wynwood</div>
              <div className="miap-boro miap-mb3">Brickell</div>
              <div className="miap-boro miap-mb4">Little Havana</div>
              <div className="miap-pin-wrap">
                <div className="miap-pulse" />
                <div className="miap-pin" />
              </div>
              <div className="miap-map-label">
                Miami, FL
                <div className="miap-ll">
                  25.7617° N · 80.1918° W · [Address coming soon]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
