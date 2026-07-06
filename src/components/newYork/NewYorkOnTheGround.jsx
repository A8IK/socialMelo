import React, { useEffect } from "react";
import "./NewYorkOnTheGround.css";

const STATS = [
  { num: "850+", label: "Verified NYC creators" },
  { num: "2,400+", label: "NYC campaigns delivered" },
  { num: "5", label: "Boroughs covered" },
  { num: "21d", label: "Brief to live content" },
];

export default function SocialMeloNYCProof() {
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
    <section className="nyp">
      <div className="nyp-container">
        <div className="nyp-grid">
          <div className="nyp-side">
            <span className="nyp-eyebrow">On the ground in NYC</span>
            <h2>
              A real NYC creator network, not a database with "New York" in the
              filter.
            </h2>
            <p>
              SocialMelo runs as a remote-first team, but our NYC creator
              operations are built for the city: on-location shoots across all
              five boroughs, same-day creator briefings, and event activations
              timed to Fashion Week, restaurant openings, and product drops.
            </p>
            <p>
              Every creator on our NYC roster is vetted in person or via
              verified portfolio: audience-quality scored, engagement-checked,
              brand-safety reviewed. You see the data before you sign off.
            </p>
            <div className="nyp-stats">
              {STATS.map((s) => (
                <div className="nyp-stat" key={s.label}>
                  <div className="nyp-num">{s.num}</div>
                  <div className="nyp-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="nyp-map-card">
            <div className="nyp-map">
              <div className="nyp-grid-lines" />
              <div className="nyp-boro nyp-mb1">Manhattan</div>
              <div className="nyp-boro nyp-mb2">Queens</div>
              <div className="nyp-boro nyp-mb3">Brooklyn</div>
              <div className="nyp-boro nyp-mb4">Bronx</div>
              <div className="nyp-pin-wrap">
                <div className="nyp-pulse" />
                <div className="nyp-pin" />
              </div>
              <div className="nyp-map-label">
                New York, NY
                <div className="nyp-ll">
                  40.7128° N · 74.0060° W · [Address coming soon]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
