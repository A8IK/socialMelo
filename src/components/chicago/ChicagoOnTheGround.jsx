import { useEffect } from "react";
import "./ChicagoOnTheGround.css";

const STATS = [
  { num: "620+", label: "Verified Chicago creators" },
  { num: "1,800+", label: "Chicago campaigns delivered" },
  { num: "18", label: "Chicago areas covered" },
  { num: "21d", label: "Brief to live content" },
];

export default function SocialMeloCHIProof() {
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
    <section className="chip">
      <div className="chip-container">
        <div className="chip-grid">
          <div className="chip-side">
            <span className="chip-eyebrow">On the ground in Chicago</span>
            <h2>
              A real Chicago creator network, not a database with "Chicago" in
              the filter.
            </h2>
            <p>
              SocialMelo runs as a remote-first team, but our Chicago creator
              operations are built for the city: on-location shoots from the
              West Loop and Wicker Park to the Magnificent Mile and the
              lakefront, same-day creator briefings, and activations timed to
              Cubs and Bears game days, Lollapalooza, and the summer festival
              season.
            </p>
            <p>
              Every creator on our Chicago roster is vetted in person or via
              verified portfolio: audience-quality scored, engagement-checked,
              brand-safety reviewed. You see the data before you sign off.
            </p>
            <div className="chip-stats">
              {STATS.map((s) => (
                <div className="chip-stat" key={s.label}>
                  <div className="chip-num">{s.num}</div>
                  <div className="chip-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="chip-map-card">
            <div className="chip-map">
              <div className="chip-grid-lines" />
              <div className="chip-boro chip-mb1">The Loop</div>
              <div className="chip-boro chip-mb2">Wicker Park</div>
              <div className="chip-boro chip-mb3">Lincoln Park</div>
              <div className="chip-boro chip-mb4">West Loop</div>
              <div className="chip-pin-wrap">
                <div className="chip-pulse" />
                <div className="chip-pin" />
              </div>
              <div className="chip-map-label">
                Chicago, IL
                <div className="chip-ll">
                  41.8781° N · 87.6298° W · [Address coming soon]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
