import { useEffect } from "react";
import "./LosAngelesWhereOurLA.css";

const NICHES = [
  {
    name: "Beauty",
    count: "280+ creators",
    width: 90,
    desc: "Skincare, MUA, and clean-beauty creators with massive, engaged LA followings.",
  },
  {
    name: "Fashion",
    count: "240+ creators",
    width: 85,
    desc: "From Fairfax streetwear to red-carpet styling, our deepest LA bench.",
  },
  {
    name: "Fitness & Wellness",
    count: "210+ creators",
    width: 80,
    desc: "Trainers, yoga, and wellness creators built for the LA lifestyle audience.",
  },
  {
    name: "Entertainment & Lifestyle",
    count: "190+ creators",
    width: 74,
    desc: "Actors, hosts, and lifestyle accounts for premium and entertainment brands.",
  },
];

export default function SocialMeloLANiches() {
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
    <section className="lan">
      <div className="lan-container">
        <div className="lan-head">
          <span className="lan-eyebrow">Where our LA roster runs deep</span>
          <h2>LA is a Beauty, Fashion &amp; Fitness town. So is our roster.</h2>
        </div>
        <div className="lan-grid">
          {NICHES.map((n) => (
            <div className="lan-row" key={n.name}>
              <div className="lan-head-row">
                <span className="lan-name">{n.name}</span>
                <span className="lan-count">{n.count}</span>
              </div>
              <div className="lan-bar">
                <div className="lan-fill" style={{ width: n.width + "%" }} />
              </div>
              <p className="lan-desc">{n.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
