import { useEffect } from "react";

export default function SocialMeloBookBreadcrumb() {
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
    <nav className="bkc" aria-label="Breadcrumb">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap');

        .bkc {
          --rose:#D76D77; --bg-warm:#FFF7F2;
          --text:#2D1B69; --text-muted:#6B5B83; --text-faint:#9387AA;
          --border:rgba(58,28,113,0.10); --container:1200px;
          font-family:'Krub',system-ui,sans-serif;
          display:block; background:var(--bg-warm); border-bottom:1px solid var(--border);
          padding:14px 0; font-size:13px; color:var(--text-muted);
        }
        .bkc *,.bkc *::before,.bkc *::after { box-sizing:border-box; }
        .bkc a { color:var(--text-muted); text-decoration:none; transition:color 0.2s ease; }
        .bkc a:hover { color:var(--rose); }
        .bkc-inner { max-width:1920px; margin:0 auto; padding:0 32px; display:flex; align-items:center; gap:8px; flex-wrap:wrap; }
        .bkc-sep { color:var(--text-faint); }
        .bkc-current { color:var(--text); font-weight:600; }

        @media (max-width:640px) { .bkc-inner { padding-left:20px; padding-right:20px; justify-content:center; } }
        @media (prefers-reduced-motion: reduce) { .bkc a { transition:none; } }
      `}</style>

      <div className="bkc-inner">
        <a href="/">Home</a>
        <span className="bkc-sep">›</span>
        <span className="bkc-current">Book a Call</span>
      </div>
    </nav>
  );
}
