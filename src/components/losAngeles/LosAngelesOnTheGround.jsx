import { useEffect } from "react";
import "./LosAngelesOnTheGround.css";

const STATS = [
  { num: "1,200+", label: "Verified LA creators" },
  { num: "3,100+", label: "LA campaigns delivered" },
  { num: "12", label: "LA areas covered" },
  { num: "21d", label: "Brief to live content" },
];

export default function SocialMeloLAProof() {
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
    <section className="lap">
      <div className="lap-container">
        <div className="lap-grid">
          <div className="lap-side">
            <span className="lap-eyebrow">On the ground in LA</span>
            <h2>
              A real LA creator network, not a database with "Los Angeles" in
              the filter.
            </h2>
            <p>
              SocialMelo runs as a remote-first team, but our LA creator
              operations are built for the city: on-location shoots from the
              Westside to Hollywood to DTLA, same-day creator briefings, and
              activations timed to award season, premieres, and product
              launches.
            </p>
            <p>
              Every creator on our LA roster is vetted in person or via verified
              portfolio: audience-quality scored, engagement-checked,
              brand-safety reviewed. You see the data before you sign off.
            </p>
            <div className="lap-stats">
              {STATS.map((s) => (
                <div className="lap-stat" key={s.label}>
                  <div className="lap-num">{s.num}</div>
                  <div className="lap-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lap-map-card">
            <div className="lap-map">
              <div className="lap-grid-lines" />
              <div className="lap-boro lap-mb1">Hollywood</div>
              <div className="lap-boro lap-mb2">Santa Monica</div>
              <div className="lap-boro lap-mb3">Venice</div>
              <div className="lap-boro lap-mb4">DTLA</div>
              <div className="lap-pin-wrap">
                <div className="lap-pulse" />
                <div className="lap-pin" />
              </div>
              <div className="lap-map-label">
                Los Angeles, CA
                <div className="lap-ll">
                  34.0522° N · 118.2437° W · [Address coming soon]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
