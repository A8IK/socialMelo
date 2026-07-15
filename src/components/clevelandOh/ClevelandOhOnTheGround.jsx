import React, { useEffect } from "react";
import "./ClevelandOhOnTheGround.css";

const STATS = [
  { num: "320+", label: "Verified Cleveland creators" },
  { num: "900+", label: "Cleveland campaigns delivered" },
  { num: "10", label: "Cleveland areas covered" },
  { num: "21d", label: "Brief to live content" },
];

export default function SocialMeloCLEProof() {
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
    <section className="clep">
      <div className="clep-container">
        <div className="clep-grid">
          <div className="clep-side">
            <span className="clep-eyebrow">On the ground in Cleveland</span>
            <h2>
              A real Cleveland creator network, not a database with "Cleveland"
              in the filter.
            </h2>
            <p>
              SocialMelo runs as a remote-first team, but our Cleveland creator
              operations are built for the city: on-location shoots from Ohio
              City and Tremont to Downtown and the lakefront, same-day creator
              briefings, and activations timed to game days, the West Side
              Market, and seasonal festivals.
            </p>
            <p>
              Every creator on our Cleveland roster is vetted in person or via
              verified portfolio: audience-quality scored, engagement-checked,
              brand-safety reviewed. You see the data before you sign off.
            </p>
            <div className="clep-stats">
              {STATS.map((s) => (
                <div className="clep-stat" key={s.label}>
                  <div className="clep-num">{s.num}</div>
                  <div className="clep-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="clep-map-card">
            <div className="clep-map">
              <div className="clep-grid-lines" />
              <div className="clep-boro clep-mb1">Downtown</div>
              <div className="clep-boro clep-mb2">Ohio City</div>
              <div className="clep-boro clep-mb3">Tremont</div>
              <div className="clep-boro clep-mb4">Lakewood</div>
              <div className="clep-pin-wrap">
                <div className="clep-pulse" />
                <div className="clep-pin" />
              </div>
              <div className="clep-map-label">
                Cleveland, OH
                <div className="clep-ll">
                  41.4993° N · 81.6944° W · [Address coming soon]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
