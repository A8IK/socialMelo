import React, { useEffect } from "react";

export default function SocialMeloNYCHeader() {
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
    <div className="nyh">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap');

        .nyh {
          --rose:#D76D77; --purple:#3A1C71; --white:#FFFFFF;
          --bg-warm:#FFF7F2;
          --text:#2D1B69; --text-muted:#6B5B83; --text-faint:#9387AA;
          --border:rgba(58,28,113,0.10);
          --container:1200px;
          font-family:'Krub',system-ui,sans-serif;
          color:#3A1C71;
        }
        .nyh *,.nyh *::before,.nyh *::after { box-sizing:border-box; }
        .nyh a { color:inherit; text-decoration:none; }

        .nyh-crumb {
          background:var(--bg-warm); border-bottom:1px solid var(--border);
          padding:14px 0; font-size:13px; color:var(--text-muted);
        }
        .nyh-crumb-inner {
          width:100%; margin:0; padding:0 32px;
          display:flex; align-items:center; gap:8px; flex-wrap:wrap;
        }
        .nyh-crumb a { color:var(--text-muted); transition:color 0.2s ease; }
        .nyh-crumb a:hover { color:var(--rose); }
        .nyh-crumb .nyh-sep { color:var(--text-faint); }
        .nyh-crumb .nyh-current { color:var(--text); font-weight:600; }

        @media (max-width:640px) {
          .nyh-crumb-inner { padding-left:20px; padding-right:20px; justify-content:center; }
        }
      `}</style>

      <nav className="nyh-crumb" aria-label="Breadcrumb">
        <div className="nyh-crumb-inner">
          <a href="/">Home</a>
          <span className="nyh-sep">›</span>
          <a href="/services">Services</a>
          <span className="nyh-sep">›</span>
          <a href="/services/influencer-marketing">Influencer Marketing</a>
          <span className="nyh-sep">›</span>
          <span className="nyh-current">New York</span>
        </div>
      </nav>
    </div>
  );
}
