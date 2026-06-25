import { useEffect } from "react";

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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap');

        .nyn {
          --rose:#D76D77; --purple:#3A1C71;
          --brand-gradient: linear-gradient(135deg, #FFAF7B, #D76D77, #3A1C71);
          --bg:#FFFCFB; --bg-warm:#FFF7F2;
          --text:#2D1B69; --text-muted:#6B5B83;
          --container:1200px; --pill:50px;
          font-family:'Krub',system-ui,sans-serif;
          background:var(--bg); padding:100px 0; color:var(--text-muted);
        }
        .nyn *,.nyn *::before,.nyn *::after { box-sizing:border-box; }
        .nyn-container { max-width:var(--container); margin:0 auto; padding:0 32px; }

        .nyn-head { max-width:740px; margin:0 auto 64px; text-align:center; }
        .nyn-eyebrow {
          font-size:12px; font-weight:600; letter-spacing:0.16em; text-transform:uppercase;
          color:var(--rose); display:inline-flex; align-items:center; gap:12px;
        }
        .nyn-eyebrow::before { content:""; display:inline-block; width:28px; height:1.5px; background:var(--rose); }
        .nyn-head h2 {
          font-size:clamp(32px,4vw,46px); margin:20px 0 0; font-weight:700; letter-spacing:-0.02em;
          background:linear-gradient(90deg, #743974 0%, #9c4b74 18%, #bc5b76 33%, #d96c76 48%, #e37b76 62%, #eb8877 77%, #f09478 100%);
          -webkit-background-clip:text; background-clip:text;
          -webkit-text-fill-color:transparent; color:transparent;
        }

        .nyn-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:40px 64px; max-width:980px; margin:0 auto; }
        .nyn-head-row { display:flex; justify-content:space-between; align-items:baseline; margin-bottom:10px; }
        .nyn-name { font-size:18px; font-weight:700; color:var(--text); }
        .nyn-count { font-size:14px; color:var(--text-muted); font-weight:600; }
        .nyn-bar { height:10px; background:var(--bg-warm); border-radius:var(--pill); overflow:hidden; }
        .nyn-fill { height:100%; background:var(--brand-gradient); border-radius:var(--pill); transition:width 1s ease; }
        .nyn-desc { font-size:13px; color:var(--text-muted); margin:10px 0 0; line-height:1.55; }

        @media (max-width:1024px) { .nyn-grid { grid-template-columns:1fr; gap:28px; } }
        @media (max-width:640px) { .nyn { padding:64px 0; } .nyn-container { padding:0 20px; } }
        @media (prefers-reduced-motion: reduce) { .nyn-fill { transition:none; } }
      `}</style>

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
