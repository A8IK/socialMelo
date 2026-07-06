import { useEffect } from "react";

export default function SocialMeloBookAlt() {
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
    <section className="bka">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap');

        .bka {
          --rose:#D76D77; --purple:#3A1C71; --white:#FFFFFF;
          --bg:#FFFCFB;
          --text:#2D1B69; --text-muted:#6B5B83;
          --pill:50px; --container:1200px;
          font-family:'Krub',system-ui,sans-serif;
          display:block; background:var(--bg); padding:80px 0 0; text-align:center; color:var(--text-muted);
        }
        .bka *,.bka *::before,.bka *::after { box-sizing:border-box; }
        .bka a { text-decoration:none; }
        .bka-container { max-width:var(--container); margin:0 auto; padding:0 32px; }
        .bka h3 { font-size:24px; margin:0 0 12px; font-weight:700; letter-spacing:-0.02em; background:linear-gradient(90deg,#743974 0%,#9c4b74 18%,#bc5b76 33%,#d96c76 48%,#e37b76 62%,#eb8877 77%,#f09478 100%); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; color:transparent; }
        .bka p { color:var(--text-muted); font-size:15px; max-width:520px; margin:0 auto 28px; line-height:1.6; }
        .bka-links { display:flex; gap:16px; justify-content:center; flex-wrap:wrap; }

        .bka-btn {
          display:inline-flex; align-items:center; gap:10px;
          padding:1rem 1.8rem; border-radius:var(--pill); font-size:1rem; font-weight:600;
          transition:all 0.3s ease; white-space:nowrap; cursor:pointer; border:2px solid transparent;
        }
        .bka-btn-outline { background:transparent; color:var(--purple); border:2px solid var(--purple); }
        .bka-btn-outline:hover { background:var(--purple); color:var(--white); transform:translateY(-2px); }
        .bka-btn-solid { background:var(--purple); color:var(--white); border:2px solid var(--purple); }
        .bka-btn-solid:hover { transform:translateY(-2px); box-shadow:0 6px 20px rgba(58,28,113,0.4); }

        .bka-bottombar {
          width:100%; height:4px; margin-top:80px;
          background:linear-gradient(90deg,#f9a57b 0%,#e88979 25%,#d06977 50%,#8d4774 75%,#613073 100%);
        }

        @media (max-width:640px) { .bka { padding:56px 0 0; } .bka-container { padding:0 20px; } .bka-bottombar { margin-top:56px; } }
        @media (prefers-reduced-motion: reduce) { .bka-btn, .bka-btn-outline, .bka-btn-solid { transition:none; } .bka-btn:hover { transform:none; } }
      `}</style>

      <div className="bka-container">
        <h3>Prefer to send details first?</h3>
        <p>
          If you would rather share your campaign in writing and have us come
          back with a shortlist, skip the call and send a brief instead. We
          reply within one business day.
        </p>
        <div className="bka-links">
          <a href="/contact" className="bka-btn bka-btn-outline">
            Send a Brief Instead
          </a>
          <a
            href="mailto:hello@socialmelo.com"
            className="bka-btn bka-btn-solid"
          >
            Email the Team
          </a>
        </div>
      </div>

      <div className="bka-bottombar" aria-hidden="true" />
    </section>
  );
}
