import React, { useEffect } from "react";

const STATS = [
  { num: "850+", label: "Verified NYC creators" },
  { num: "2,400+", label: "NYC campaigns delivered" },
  { num: "5", label: "Boroughs covered" },
  { num: "21d", label: "Brief to live content" },
];

export default function SocialMeloNYCProof() {
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
    <section className="nyp">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap');

        .nyp {
          --rose:#D76D77; --purple:#3A1C71; --white:#FFFFFF;
          --brand-gradient: linear-gradient(135deg, #FFAF7B, #D76D77, #3A1C71);
          --bg-warm:#FFF7F2; --surface:#FFFFFF;
          --text:#2D1B69; --text-body:#4B5563; --text-muted:#6B5B83;
          --border:rgba(58,28,113,0.10);
          --shadow-sm:0 2px 8px rgba(58,28,113,0.06); --shadow-md:0 6px 20px rgba(58,28,113,0.18);
          --radius:20px; --radius-lg:28px; --pill:50px; --container:1200px;
          font-family:'Krub',system-ui,sans-serif;
          background:var(--bg-warm); position:relative; overflow:hidden; padding:100px 0;
          color:var(--text-body);
        }
        .nyp *,.nyp *::before,.nyp *::after { box-sizing:border-box; }
        .nyp-container { max-width:var(--container); margin:0 auto; padding:0 32px; }

        .nyp-grid { display:grid; grid-template-columns:1fr 1.1fr; gap:60px; align-items:center; }
        .nyp-eyebrow {
          font-size:12px; font-weight:600; letter-spacing:0.16em; text-transform:uppercase;
          color:var(--rose); display:inline-flex; align-items:center; gap:12px; margin-bottom:20px;
        }
        .nyp-eyebrow::before { content:""; display:inline-block; width:28px; height:1.5px; background:var(--rose); }
        .nyp-side h2 {
          font-size:clamp(28px,3.4vw,40px); line-height:1.2; margin:0 0 20px;
          font-weight:700; letter-spacing:-0.02em;
          background:linear-gradient(90deg, #743974 0%, #9c4b74 18%, #bc5b76 33%, #d96c76 48%, #e37b76 62%, #eb8877 77%, #f09478 100%);
          -webkit-background-clip:text; background-clip:text;
          -webkit-text-fill-color:transparent; color:transparent;
        }
        .nyp-side p { color:var(--text-body); font-size:16px; line-height:1.7; margin:0 0 16px; }

        .nyp-stats { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:36px; }
        .nyp-stat {
          background:var(--surface); border:1px solid var(--border); border-radius:var(--radius);
          padding:28px; box-shadow:var(--shadow-sm); position:relative; overflow:hidden;
        }
        .nyp-stat::before { content:""; position:absolute; top:0; left:0; width:50%; height:4px; background:var(--brand-gradient); }
        .nyp-num {
          font-size:36px; font-weight:700; line-height:1; margin-bottom:8px;
          background:var(--brand-gradient); -webkit-background-clip:text; background-clip:text;
          -webkit-text-fill-color:transparent; color:transparent;
        }
        .nyp-stat-label { font-size:14px; color:var(--text-muted); font-weight:500; }

        .nyp-map-card { background:var(--surface); border:1px solid var(--border); border-radius:var(--radius-lg); padding:12px; box-shadow:var(--shadow-md); }
        .nyp-map { position:relative; aspect-ratio:1/1; border-radius:var(--radius); overflow:hidden; background:var(--brand-gradient); }
        .nyp-map::before {
          content:""; position:absolute; inset:0;
          background:radial-gradient(circle at 35% 35%, rgba(255,255,255,0.18), transparent 40%),
                     radial-gradient(circle at 70% 65%, rgba(255,255,255,0.12), transparent 40%);
        }
        .nyp-grid-lines {
          position:absolute; inset:0;
          background-image:linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px);
          background-size:44px 44px;
        }
        .nyp-pin-wrap { position:absolute; top:46%; left:50%; transform:translate(-50%,-50%); }
        .nyp-pin {
          width:38px; height:38px; background:var(--white); border-radius:50% 50% 50% 0;
          rotate:-45deg; box-shadow:0 8px 24px rgba(0,0,0,0.28);
          display:flex; align-items:center; justify-content:center; position:relative; z-index:2;
        }
        .nyp-pin::after { content:""; width:15px; height:15px; border-radius:50%; background:var(--brand-gradient); rotate:45deg; }
        .nyp-pulse {
          position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);
          width:38px; height:38px; border-radius:50%; background:rgba(255,255,255,0.45);
          animation:nypPulse 2.2s ease-out infinite;
        }
        @keyframes nypPulse {
          0% { transform:translate(-50%,-50%) scale(1); opacity:0.8; }
          100% { transform:translate(-50%,-50%) scale(3.4); opacity:0; }
        }
        .nyp-boro {
          position:absolute; padding:5px 12px; background:rgba(255,255,255,0.92); backdrop-filter:blur(6px);
          border-radius:var(--pill); font-size:11px; font-weight:700; color:var(--purple); box-shadow:0 3px 10px rgba(0,0,0,0.12);
        }
        .nyp-mb1 { top:22%; left:18%; }
        .nyp-mb2 { top:34%; right:14%; }
        .nyp-mb3 { bottom:24%; left:24%; }
        .nyp-mb4 { bottom:30%; right:20%; }
        .nyp-map-label {
          position:absolute; bottom:16px; left:16px; background:rgba(255,255,255,0.95); backdrop-filter:blur(8px);
          padding:10px 14px; border-radius:10px; font-size:13px; color:var(--text); font-weight:700;
        }
        .nyp-ll { font-size:11px; color:var(--text-muted); font-weight:500; margin-top:2px; }

        @media (max-width:1024px) { .nyp-grid { grid-template-columns:1fr; gap:40px; } }
        @media (max-width:640px) {
          .nyp { padding:64px 0; }
          .nyp-container { padding:0 20px; }
          .nyp-stats { grid-template-columns:1fr 1fr; }
          .nyp-side { text-align:center; }
          .nyp-eyebrow { justify-content:center; }
          .nyp-stat { text-align:center; }
        }
        @media (prefers-reduced-motion: reduce) { .nyp-pulse { animation:none; } }
      `}</style>

      <div className="nyp-container">
        <div className="nyp-grid">
          <div className="nyp-side">
            <span className="nyp-eyebrow">On the ground in NYC</span>
            <h2>
              A real NYC creator network, not a database with "New York" in the
              filter.
            </h2>
            <p>
              SocialMelo runs as a remote-first team, but our NYC creator
              operations are built for the city: on-location shoots across all
              five boroughs, same-day creator briefings, and event activations
              timed to Fashion Week, restaurant openings, and product drops.
            </p>
            <p>
              Every creator on our NYC roster is vetted in person or via
              verified portfolio: audience-quality scored, engagement-checked,
              brand-safety reviewed. You see the data before you sign off.
            </p>
            <div className="nyp-stats">
              {STATS.map((s) => (
                <div className="nyp-stat" key={s.label}>
                  <div className="nyp-num">{s.num}</div>
                  <div className="nyp-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="nyp-map-card">
            <div className="nyp-map">
              <div className="nyp-grid-lines" />
              <div className="nyp-boro nyp-mb1">Manhattan</div>
              <div className="nyp-boro nyp-mb2">Queens</div>
              <div className="nyp-boro nyp-mb3">Brooklyn</div>
              <div className="nyp-boro nyp-mb4">Bronx</div>
              <div className="nyp-pin-wrap">
                <div className="nyp-pulse" />
                <div className="nyp-pin" />
              </div>
              <div className="nyp-map-label">
                New York, NY
                <div className="nyp-ll">
                  40.7128° N · 74.0060° W · [Address coming soon]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
