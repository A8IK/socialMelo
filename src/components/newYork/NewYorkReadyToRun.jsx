import { useEffect } from "react";

export default function SocialMeloNYCFinalCTA() {
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
    <section className="nyfc">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap');

        .nyfc {
          --white:#FFFFFF;
          --brand-gradient: linear-gradient(135deg, #FFAF7B, #D76D77, #3A1C71);
          --pill:50px; --container:1200px;
          font-family:'Krub',system-ui,sans-serif;
          padding:120px 0; background:var(--brand-gradient); color:var(--white);
          text-align:center; position:relative; overflow:hidden;
        }
        .nyfc *,.nyfc *::before,.nyfc *::after { box-sizing:border-box; }
        .nyfc a { text-decoration:none; }
        .nyfc::before {
          content:""; position:absolute; inset:0; pointer-events:none;
          background:radial-gradient(ellipse at 30% 20%, rgba(255,175,123,0.4), transparent 50%),
                     radial-gradient(ellipse at 70% 80%, rgba(215,109,119,0.5), transparent 50%);
        }
        .nyfc-container { max-width:var(--container); margin:0 auto; padding:0 32px; position:relative; z-index:2; }
        .nyfc h2 {
          font-size:clamp(36px,5vw,60px); margin:0 auto 24px; color:var(--white);
          max-width:800px; line-height:1.1; font-weight:700; letter-spacing:-0.02em;
        }
        .nyfc p { font-size:1.125rem; color:rgba(255,255,255,0.92); max-width:580px; margin:0 auto 40px; line-height:1.6; }

        .nyfc-btn {
          display:inline-flex; align-items:center; gap:10px;
          padding:1rem 1.8rem; border-radius:var(--pill); font-size:1rem; font-weight:700;
          background:var(--white); box-shadow:0 4px 15px rgba(58,28,113,0.3);
          transition:all 0.3s ease; cursor:pointer; border:2px solid transparent;
        }
        .nyfc-btn span {
          background:var(--brand-gradient);
          -webkit-background-clip:text; background-clip:text;
          -webkit-text-fill-color:transparent; color:transparent;
          display:inline-flex; align-items:center; gap:10px;
        }
        .nyfc-btn:hover { transform:translateY(-2px); box-shadow:0 6px 20px rgba(58,28,113,0.4); }

        @media (max-width:640px) { .nyfc { padding:80px 0; } .nyfc-container { padding:0 20px; } }
        @media (prefers-reduced-motion: reduce) { .nyfc-btn { transition:none; } }
      `}</style>

      <div className="nyfc-container">
        <h2>Ready to run an NYC creator campaign that converts?</h2>
        <p>
          Get a custom proposal in 48 hours, built around your brand, your NYC
          audience, and your budget.
        </p>
        <a href="#contact" className="nyfc-btn">
          <span>Get a Custom Quote →</span>
        </a>
      </div>
    </section>
  );
}
