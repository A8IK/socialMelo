import { useEffect } from "react";
import "./NewYorkWhereOurNYC.css";

const NICHES = [
  {
    name: "Fashion",
    count: "240+ creators",
    width: 92,
    desc: "From Lower East Side streetwear to UES editorial, our deepest NYC bench.",
  },
  {
    name: "Beauty",
    count: "180+ creators",
    width: 78,
    desc: "Skincare, MUA, and clean-beauty creators with engaged NYC audiences.",
  },
  {
    name: "Food & Beverage",
    count: "200+ creators",
    width: 84,
    desc: "Restaurant reviewers, recipe creators, and NYC food-scene tastemakers.",
  },
  {
    name: "Luxury & Lifestyle",
    count: "130+ creators",
    width: 62,
    desc: "High-end lifestyle accounts for premium brands and luxury launches.",
  },
];

export default function SocialMeloNYCNiches() {
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
    <section className="nyn">
      <div className="nyn-container">
        <div className="nyn-head">
          <span className="nyn-eyebrow">Where our NYC roster runs deep</span>
          <h2>
            NYC is a Fashion, Beauty &amp; F&amp;B town. So is our roster.
          </h2>
        </div>
        <div className="nyn-grid">
          {NICHES.map((n) => (
            <div className="nyn-row" key={n.name}>
              <div className="nyn-head-row">
                <span className="nyn-name">{n.name}</span>
                <span className="nyn-count">{n.count}</span>
              </div>
              <div className="nyn-bar">
                <div className="nyn-fill" style={{ width: n.width + "%" }} />
              </div>
              <p className="nyn-desc">{n.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
