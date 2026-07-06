import { useEffect, useRef } from "react";

const CARDS = [
  {
    icon: (
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    ),
    h: "Is this a sales call?",
    p: "No. It is a working strategy session. We spend the time on your goals and which creators fit, not on pitching you a retainer. If there is a fit, we will talk next steps at the end. If there is not, you still leave with a usable direction.",
  },
  {
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </>
    ),
    h: "Do I need to prepare anything?",
    p: "Just bring your goal and a rough budget range if you have one. No brief required. If you have a product, target audience, or campaign in mind, mention it when you book and we will come prepared with relevant creators.",
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    h: "What if I'm not ready to buy?",
    p: "That is completely fine. Plenty of brands book this call while still planning a future quarter. We would rather build a relationship early and be top of mind when you are ready than push you into something before it makes sense.",
  },
];

export default function SocialMeloBookObjections() {
  const gridRef = useRef(null);

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

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = grid.querySelectorAll(".bko-card");
    if (!("IntersectionObserver" in window)) {
      cards.forEach((c) => c.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.classList.add("in");
          // Clear the stagger delay once revealed so hover stays snappy.
          window.setTimeout(() => {
            el.style.transitionDelay = "0s";
          }, 900);
          io.unobserve(el);
        });
      },
      { threshold: 0.15 },
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section className="bko">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap');

        .bko {
          --rose:#D76D77; --purple:#3A1C71; --white:#FFFFFF;
          --brand-gradient: linear-gradient(135deg, #FFAF7B, #D76D77, #3A1C71);
          --bg-warm:#FFF7F2; --surface:#FFFFFF;
          --text:#2D1B69; --text-muted:#6B5B83;
          --border:rgba(58,28,113,0.10);
          --shadow-sm:0 2px 8px rgba(58,28,113,0.06);
          --shadow-warm:0 18px 42px rgba(180,110,130,0.18);
          --radius:20px; --container:1200px;
          font-family:'Krub',system-ui,sans-serif;
          display:block; background:var(--bg-warm); padding:90px 0; color:var(--text-muted);
        }
        .bko *,.bko *::before,.bko *::after { box-sizing:border-box; }
        .bko-container { max-width:var(--container); margin:0 auto; padding:0 32px; }

        .bko-head { text-align:center; max-width:640px; margin:0 auto 56px; }
        .bko-eyebrow {
          font-size:12px; font-weight:600; letter-spacing:0.16em; text-transform:uppercase;
          color:var(--rose); display:inline-flex; align-items:center; justify-content:center; gap:12px;
        }
        .bko-eyebrow::before { content:""; display:inline-block; width:28px; height:1.5px; background:var(--rose); }
        .bko-head h2 { font-size:clamp(28px,3.4vw,40px); margin:18px 0 0; font-weight:700; letter-spacing:-0.02em; background:linear-gradient(90deg,#743974 0%,#9c4b74 18%,#bc5b76 33%,#d96c76 48%,#e37b76 62%,#eb8877 77%,#f09478 100%); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; color:transparent; }

        .bko-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
        .bko-card {
          background:var(--surface); border:1px solid var(--border); border-radius:var(--radius);
          padding:32px; box-shadow:var(--shadow-sm);
          opacity:0; transform:translateY(28px);
          transition:opacity 0.5s ease, transform 0.4s ease, box-shadow 0.28s ease, border-color 0.28s ease;
          will-change:transform, opacity;
        }
        .bko-card.in { opacity:1; transform:translateY(0); }
        .bko-card.in:hover {
          transform:translateY(-6px);
          box-shadow:var(--shadow-warm);
          border-color:var(--rose);
        }
        .bko-icon {
          width:48px; height:48px; border-radius:14px; background:var(--brand-gradient);
          display:flex; align-items:center; justify-content:center; margin-bottom:20px;
          box-shadow:0 4px 12px rgba(58,28,113,0.2);
          transition:transform 0.28s ease, box-shadow 0.28s ease;
        }
        .bko-icon svg { width:24px; height:24px; stroke:var(--white); }
        .bko-card.in:hover .bko-icon { transform:translateY(-2px) scale(1.08); box-shadow:0 10px 24px rgba(58,28,113,0.32); }
        .bko-card h4 { font-size:18px; color:var(--text); margin:0 0 10px; font-weight:700; letter-spacing:-0.02em; }
        .bko-card p { color:var(--text-muted); font-size:14px; line-height:1.65; margin:0; }

        @media (max-width:980px) { .bko-grid { grid-template-columns:1fr; } }
        @media (max-width:640px) {
          .bko { padding:56px 0; }
          .bko-container { padding:0 20px; }
          .bko-card { text-align:center; }
          .bko-icon { margin-left:auto; margin-right:auto; }
        }
        @media (prefers-reduced-motion: reduce) {
          .bko-card { opacity:1; transform:none; transition:none; }
          .bko-card.in:hover { transform:none; box-shadow:var(--shadow-warm); }
          .bko-icon, .bko-card.in:hover .bko-icon { transition:none; transform:none; }
        }
      `}</style>

      <div className="bko-container">
        <div className="bko-head">
          <span className="bko-eyebrow">Before you book</span>
          <h2>The honest answers to what you're probably wondering.</h2>
        </div>
        <div className="bko-grid" ref={gridRef}>
          {CARDS.map((c, i) => (
            <div
              className="bko-card"
              key={c.h}
              style={{ transitionDelay: `${i * 110}ms` }}
            >
              <div className="bko-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {c.icon}
                </svg>
              </div>
              <h4>{c.h}</h4>
              <p>{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
