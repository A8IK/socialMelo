import { useEffect } from "react";
import "./KansasCityKsOnTheGround.css";

const STATS = [
  { num: "240+", label: "Verified KCK creators" },
  { num: "600+", label: "KCK campaigns delivered" },
  { num: "8", label: "KCK areas covered" },
  { num: "21d", label: "Brief to live content" },
];

export default function SocialMeloKCKProof() {
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
    <section className="kckp">
      <div className="kckp-container">
        <div className="kckp-grid">
          <div className="kckp-side">
            <span className="kckp-eyebrow">On the ground in KCK</span>
            <h2>
              A real KCK creator network, not a database with "Kansas City" in
              the filter.
            </h2>
            <p>
              SocialMelo runs as a remote-first team, but our Kansas City, KS
              creator operations are built for Wyandotte County: on-location
              shoots from Strawberry Hill and Argentine to The Legends and
              Children's Mercy Park, same-day creator briefings, and activations
              timed to Sporting KC matches, Kansas Speedway race weekends, and
              BBQ season.
            </p>
            <p>
              Every creator on our KCK roster is vetted in person or via
              verified portfolio: audience-quality scored, engagement-checked,
              brand-safety reviewed. You see the data before you sign off.
            </p>
            <div className="kckp-stats">
              {STATS.map((s) => (
                <div className="kckp-stat" key={s.label}>
                  <div className="kckp-num">{s.num}</div>
                  <div className="kckp-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="kckp-map-card">
            <div className="kckp-map">
              <div className="kckp-grid-lines" />
              <div className="kckp-boro kckp-mb1">Strawberry Hill</div>
              <div className="kckp-boro kckp-mb2">Argentine</div>
              <div className="kckp-boro kckp-mb3">Rosedale</div>
              <div className="kckp-boro kckp-mb4">The Legends</div>
              <div className="kckp-pin-wrap">
                <div className="kckp-pulse" />
                <div className="kckp-pin" />
              </div>
              <div className="kckp-map-label">
                Kansas City, KS
                <div className="kckp-ll">
                  39.1141° N · 94.6275° W · [Address coming soon]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
