import { useEffect } from "react";
import "./KansasCityKsWhereOurKCK.css";

const NICHES = [
  {
    name: "Food & BBQ",
    count: "70+ creators",
    width: 86,
    desc: "From Strawberry Hill bakeries to KC barbecue, our deepest Wyandotte County bench.",
  },
  {
    name: "Sports & Fandom",
    count: "60+ creators",
    width: 80,
    desc: "Sporting KC and Kansas Speedway creators with passionate Wyandotte County followings.",
  },
  {
    name: "Lifestyle & Family",
    count: "55+ creators",
    width: 78,
    desc: "Local lifestyle and family creators with loyal, hyper-local KCK audiences.",
  },
  {
    name: "Home & DIY",
    count: "45+ creators",
    width: 68,
    desc: "Home, renovation, and DIY creators for regional and home-brand campaigns.",
  },
];

export default function SocialMeloKCKNiches() {
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
    <section className="kckn">
      <div className="kckn-container">
        <div className="kckn-head">
          <span className="kckn-eyebrow">Where our KCK roster runs deep</span>
          <h2>KCK is a BBQ, Sports &amp; Lifestyle town. So is our roster.</h2>
        </div>
        <div className="kckn-grid">
          {NICHES.map((n) => (
            <div className="kckn-row" key={n.name}>
              <div className="kckn-head-row">
                <span className="kckn-name">{n.name}</span>
                <span className="kckn-count">{n.count}</span>
              </div>
              <div className="kckn-bar">
                <div className="kckn-fill" style={{ width: n.width + "%" }} />
              </div>
              <p className="kckn-desc">{n.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
