import { useEffect } from "react";
import "./ChicagoWhereOurChicago.css";

const NICHES = [
  {
    name: "Food & Dining",
    count: "160+ creators",
    width: 90,
    desc: "From West Loop tasting menus to deep-dish institutions, our deepest Chicago bench.",
  },
  {
    name: "Fashion & Style",
    count: "130+ creators",
    width: 84,
    desc: "Magnificent Mile and Wicker Park style creators with engaged Chicago audiences.",
  },
  {
    name: "Sports & Fandom",
    count: "120+ creators",
    width: 80,
    desc: "Cubs, Bears, Bulls, and Blackhawks creators with passionate Chicago followings.",
  },
  {
    name: "Lifestyle & Home",
    count: "110+ creators",
    width: 74,
    desc: "Lakefront lifestyle, architecture, and home creators across the city and suburbs.",
  },
];

export default function SocialMeloCHINiches() {
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
    <section className="chin">
      <div className="chin-container">
        <div className="chin-head">
          <span className="chin-eyebrow">
            Where our Chicago roster runs deep
          </span>
          <h2>
            Chicago is a Food, Fashion &amp; Sports town. So is our roster.
          </h2>
        </div>
        <div className="chin-grid">
          {NICHES.map((n) => (
            <div className="chin-row" key={n.name}>
              <div className="chin-head-row">
                <span className="chin-name">{n.name}</span>
                <span className="chin-count">{n.count}</span>
              </div>
              <div className="chin-bar">
                <div className="chin-fill" style={{ width: n.width + "%" }} />
              </div>
              <p className="chin-desc">{n.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
