import { useEffect } from "react";
import "./MiamiFlWhereOurMiami.css";

const NICHES = [
  {
    name: "Fashion & Swim",
    count: "150+ creators",
    width: 90,
    desc: "From Miami Swim Week to Design District runway, our deepest Miami bench.",
  },
  {
    name: "Beauty & Lifestyle",
    count: "130+ creators",
    width: 85,
    desc: "Beauty, nightlife, and lifestyle creators with engaged, often bilingual Miami audiences.",
  },
  {
    name: "Food & Hospitality",
    count: "115+ creators",
    width: 80,
    desc: "Cuban, Latin, and Wynwood dining creators, plus hotel and nightlife coverage.",
  },
  {
    name: "Fitness & Wellness",
    count: "95+ creators",
    width: 72,
    desc: "Beach, wellness, and fitness creators built for the South Florida lifestyle audience.",
  },
];

export default function SocialMeloMIANiches() {
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
    <section className="mian">
      <div className="mian-container">
        <div className="mian-head">
          <span className="mian-eyebrow">Where our Miami roster runs deep</span>
          <h2>Miami is a Fashion, Beauty &amp; Food town. So is our roster.</h2>
        </div>
        <div className="mian-grid">
          {NICHES.map((n) => (
            <div className="mian-row" key={n.name}>
              <div className="mian-head-row">
                <span className="mian-name">{n.name}</span>
                <span className="mian-count">{n.count}</span>
              </div>
              <div className="mian-bar">
                <div className="mian-fill" style={{ width: n.width + "%" }} />
              </div>
              <p className="mian-desc">{n.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
