import { useEffect } from "react";

export default function SocialMeloNYCHero() {
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

  const Check = () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  return (
    <section className="nyhero">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap');

        .nyhero {
          --rose:#D76D77; --purple:#3A1C71; --white:#FFFFFF;
          --brand-gradient: linear-gradient(135deg, #FFAF7B, #D76D77, #3A1C71);
          --brand-gradient-soft: linear-gradient(135deg, #FFAF7B66, #D76D7766, #3A1C7166);
          --text:#2D1B69; --text-body:#3A1C71;
          --pill:50px; --container:1200px;
          font-family:'Krub',system-ui,sans-serif;
          position:relative; overflow:hidden;
          background:var(--brand-gradient-soft);
          padding:64px 0 56px;
          color:var(--text-body);
        }
        .nyhero *,.nyhero *::before,.nyhero *::after { box-sizing:border-box; }
        .nyhero a { color:inherit; text-decoration:none; }
        .nyhero h1 { margin:0; }

        .nyhero::before {
          content:""; position:absolute; inset:0; pointer-events:none;
          background:radial-gradient(ellipse at 10% 20%, rgba(255,175,123,0.20), transparent 50%),
                     radial-gradient(ellipse at 90% 80%, rgba(58,28,113,0.12), transparent 50%);
        }
        .nyhero-container { width:100%; margin:0; padding:0 32px; position:relative; z-index:2; }
        .nyhero-inner { max-width:780px; }

        .nyhero-eyebrow {
          font-size:12px; font-weight:600; letter-spacing:0.16em; text-transform:uppercase;
          color:var(--rose); display:inline-flex; align-items:center; gap:12px;
        }
        .nyhero-eyebrow::before { content:""; display:inline-block; width:28px; height:1.5px; background:var(--rose); }

        .nyhero h1 {
          font-size:clamp(36px,4.6vw,54px); color:var(--text);
          margin:20px 0 20px; font-weight:700; line-height:1.12; letter-spacing:-0.02em;
        }
        .nyhero-grad {
          background:var(--brand-gradient);
          -webkit-background-clip:text; background-clip:text;
          -webkit-text-fill-color:transparent; color:transparent; font-weight:700;
        }
        .nyhero-sub { font-size:1.125rem; color:var(--text-body); max-width:600px; margin-bottom:28px; line-height:1.6; }

        .nyhero-buttons { display:flex; gap:1rem; flex-wrap:wrap; align-items:center; }
        .nyhero-btn {
          display:inline-flex; align-items:center; gap:10px;
          padding:1rem 1.8rem; border-radius:var(--pill);
          font-size:1rem; font-weight:600; transition:all 0.3s ease;
          white-space:nowrap; cursor:pointer; border:2px solid transparent;
        }
        .nyhero-btn-primary {
          background:var(--white); box-shadow:0 4px 15px rgba(58,28,113,0.3); font-weight:700;
        }
        .nyhero-btn-primary span {
          background:var(--brand-gradient);
          -webkit-background-clip:text; background-clip:text;
          -webkit-text-fill-color:transparent; color:transparent;
          display:inline-flex; align-items:center; gap:10px;
        }
        .nyhero-btn-primary:hover { transform:translateY(-2px); box-shadow:0 6px 20px rgba(58,28,113,0.4); }
        .nyhero-btn-outline { background:transparent; color:var(--purple); border:2px solid var(--purple); }
        .nyhero-btn-outline:hover { background:var(--purple); color:var(--white); transform:translateY(-2px); }

        .nyhero-trust { display:flex; gap:28px; margin-top:36px; flex-wrap:wrap; }
        .nyhero-ht { display:flex; align-items:center; gap:8px; font-size:14px; color:var(--text-body); font-weight:500; }
        .nyhero-ht svg { width:18px; height:18px; stroke:var(--rose); flex-shrink:0; }

        @media (max-width:640px) {
          .nyhero { padding:48px 0; }
          .nyhero-container { padding:0 20px; }
          .nyhero-inner { text-align:center; }
          .nyhero-eyebrow { justify-content:center; }
          .nyhero-sub { margin-left:auto; margin-right:auto; }
          .nyhero-buttons { justify-content:center; }
          .nyhero-trust { justify-content:center; }
        }
        @media (prefers-reduced-motion: reduce) {
          .nyhero-btn, .nyhero-btn-primary, .nyhero-btn-outline { transition:none; }
        }
      `}</style>

      <div className="nyhero-container">
        <div className="nyhero-inner">
          <span className="nyhero-eyebrow">📍 New York City</span>
          <h1>
            Hire New York's Best Creators.
            {/* <span className="nyhero-grad">Creators</span>. */}
          </h1>
          <p className="nyhero-sub">
            Browse 850+ verified NYC creators across Fashion, Beauty, F&amp;B,
            Luxury, and Lifestyle. Filter by borough, niche, and platform, then
            let our team run the campaign end-to-end.
          </p>
          <div className="nyhero-buttons">
            <a href="#creators" className="nyhero-btn nyhero-btn-primary">
              <span>Browse NYC Creators ↓</span>
            </a>
            <a href="#contact" className="nyhero-btn nyhero-btn-outline">
              Get a Custom Quote
            </a>
          </div>
          <div className="nyhero-trust">
            <div className="nyhero-ht">
              <Check />
              850+ verified NYC creators
            </div>
            <div className="nyhero-ht">
              <Check />
              On-location shoots available
            </div>
            <div className="nyhero-ht">
              <Check />
              Live in 21 days
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
