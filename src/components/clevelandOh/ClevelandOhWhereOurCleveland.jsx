import { useEffect } from "react";
import "./ClevelandOhWhereOurCleveland.css";

const NICHES = [
  {
    name: "Food & Beverage",
    count: "95+ creators",
    width: 88,
    desc: "From the West Side Market to Tremont's dining scene, our deepest Cleveland bench.",
  },
  {
    name: "Lifestyle & Family",
    count: "80+ creators",
    width: 82,
    desc: "Midwest lifestyle and family creators with loyal, local Cleveland audiences.",
  },
  {
    name: "Sports & Fandom",
    count: "75+ creators",
    width: 78,
    desc: "Browns, Guardians, and Cavs creators with passionate Cleveland followings.",
  },
  {
    name: "Home & DIY",
    count: "60+ creators",
    width: 70,
    desc: "Home, renovation, and DIY creators for regional and home-brand campaigns.",
  },
];

export default function SocialMeloCLENiches() {
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
    <section className="clen">
      <div className="clen-container">
        <div className="clen-head">
          <span className="clen-eyebrow">
            Where our Cleveland roster runs deep
          </span>
          <h2>
            Cleveland is a Food, Sports &amp; Lifestyle town. So is our roster.
          </h2>
        </div>
        <div className="clen-grid">
          {NICHES.map((n) => (
            <div className="clen-row" key={n.name}>
              <div className="clen-head-row">
                <span className="clen-name">{n.name}</span>
                <span className="clen-count">{n.count}</span>
              </div>
              <div className="clen-bar">
                <div className="clen-fill" style={{ width: n.width + "%" }} />
              </div>
              <p className="clen-desc">{n.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
