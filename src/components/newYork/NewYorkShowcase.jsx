import { useEffect, useState } from "react";

const CREATORS = [
  {
    initials: "AM",
    tone: 1,
    name: "Ava M.",
    handle: "@ava.styles · Manhattan",
    tags: ["Fashion", "Editorial"],
    rate: "$1.8K",
    eng: "5.2%",
    followers: "182K",
    platform: "ig",
    niche: "fashion",
    boro: "manhattan",
  },
  {
    initials: "SK",
    tone: 2,
    name: "Sara K.",
    handle: "@sarakbeauty · Brooklyn",
    tags: ["Beauty", "Skincare"],
    rate: "$4.5K",
    eng: "7.8%",
    followers: "1.2M",
    platform: "tt",
    niche: "beauty",
    boro: "brooklyn",
  },
  {
    initials: "DC",
    tone: 3,
    name: "Diego C.",
    handle: "@diegoeatsnyc · Queens",
    tags: ["F&B", "Restaurants"],
    rate: "$2.2K",
    eng: "6.4%",
    followers: "340K",
    platform: "ig",
    niche: "food",
    boro: "queens",
  },
  {
    initials: "EL",
    tone: 4,
    name: "Elena L.",
    handle: "@elenaluxenyc · Manhattan",
    tags: ["Luxury", "Lifestyle"],
    rate: "$6.0K",
    eng: "4.1%",
    followers: "560K",
    platform: "ig",
    niche: "luxury",
    boro: "manhattan",
  },
  {
    initials: "JT",
    tone: 2,
    name: "Jordan T.",
    handle: "@jordan.bk · Brooklyn",
    tags: ["Lifestyle", "Wellness"],
    rate: "$900",
    eng: "9.1%",
    followers: "95K",
    platform: "tt",
    niche: "lifestyle",
    boro: "brooklyn",
  },
  {
    initials: "MR",
    tone: 3,
    name: "Maya R.",
    handle: "@mayarstyle · Manhattan",
    tags: ["Fashion", "Streetwear"],
    rate: "$5.2K",
    eng: "5.9%",
    followers: "720K",
    platform: "ig",
    niche: "fashion",
    boro: "manhattan",
  },
  {
    initials: "TC",
    tone: 1,
    name: "Tariq C.",
    handle: "@tariqcooks · Brooklyn",
    tags: ["F&B", "Recipes"],
    rate: "$2.6K",
    eng: "8.3%",
    followers: "410K",
    platform: "tt",
    niche: "food",
    boro: "brooklyn",
  },
  {
    initials: "NP",
    tone: 4,
    name: "Nina P.",
    handle: "@ninaglow · Queens",
    tags: ["Beauty", "MUA"],
    rate: "$1.4K",
    eng: "6.7%",
    followers: "128K",
    platform: "ig",
    niche: "beauty",
    boro: "queens",
  },
];

const NICHES = [
  { val: "all", label: "All" },
  { val: "fashion", label: "Fashion" },
  { val: "beauty", label: "Beauty" },
  { val: "food", label: "F&B" },
  { val: "luxury", label: "Luxury" },
  { val: "lifestyle", label: "Lifestyle" },
];
const BOROS = [
  { val: "all", label: "All" },
  { val: "manhattan", label: "Manhattan" },
  { val: "brooklyn", label: "Brooklyn" },
  { val: "queens", label: "Queens" },
];

export default function SocialMeloNYCShowcase() {
  const [niche, setNiche] = useState("all");
  const [boro, setBoro] = useState("all");
  const [barTop, setBarTop] = useState(76);

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

  // Mirror the site header's hide-on-scroll behavior: when the header is
  // visible the bar sits below it (top:76px); when the header hides on
  // scroll-down the bar rises to top:0 so no gap opens above it.
  useEffect(() => {
    const HEADER_H = 76;
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      if (Math.abs(delta) < 4) return;
      if (y <= HEADER_H) setBarTop(HEADER_H);
      else if (delta > 0) setBarTop(0);
      else setBarTop(HEADER_H);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visible = CREATORS.filter(
    (c) =>
      (niche === "all" || c.niche === niche) &&
      (boro === "all" || c.boro === boro),
  );

  const EngIcon = () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
  const VerifyIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  return (
    <section className="nys" id="creators">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap');

        .nys {
          --rose:#D76D77; --purple:#3A1C71; --white:#FFFFFF;
          --brand-gradient: linear-gradient(135deg, #FFAF7B, #D76D77, #3A1C71);
          --brand-gradient-wash: linear-gradient(135deg, #FFAF7B14, #D76D7714, #3A1C7114);
          --bg:#FFFCFB; --bg-warm:#FFF7F2; --surface:#FFFFFF;
          --text:#2D1B69; --text-muted:#6B5B83; --text-faint:#9387AA;
          --border:rgba(58,28,113,0.10); --border-2:rgba(58,28,113,0.18);
          --shadow-md:0 6px 20px rgba(58,28,113,0.18);
          --radius:20px; --radius-lg:28px; --pill:50px; --container:1200px;
          font-family:'Krub',system-ui,sans-serif;
          padding:64px 0 100px; background:var(--bg); position:relative; margin-top:-32px;
          color:var(--text-muted);
        }
        .nys *,.nys *::before,.nys *::after { box-sizing:border-box; }
        .nys a { color:inherit; text-decoration:none; }
        .nys button { font-family:inherit; cursor:pointer; border:none; background:none; color:inherit; }
        .nys-container { max-width:var(--container); margin:0 auto; padding:0 32px; }

        .nys-bar {
          background:var(--surface); border:1px solid var(--border);
          border-radius:var(--radius-lg); box-shadow:var(--shadow-md);
          padding:24px; margin-bottom:40px;
          display:grid; grid-template-columns:1fr auto; gap:20px; align-items:center;
          position:sticky; top:76px; z-index:20; transition:top 0.28s ease;
        }
        .nys-filter-stack { display:flex; flex-direction:column; gap:12px; }
        .nys-row { display:flex; flex-wrap:wrap; gap:10px; align-items:center; }
        .nys-label { font-size:12px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:var(--text-faint); margin-right:4px; }
        .nys-chip {
          padding:9px 18px; border-radius:var(--pill); font-size:13px; font-weight:600;
          color:var(--text-muted); background:var(--bg-warm); border:1.5px solid transparent;
          transition:all 0.2s ease; cursor:pointer;
        }
        .nys-chip:hover:not(.active) { color:var(--purple); border-color:var(--border-2); }
        .nys-chip.active { background:var(--purple); color:var(--white); }
        .nys-count { font-size:14px; color:var(--text-muted); font-weight:600; white-space:nowrap; }
        .nys-count strong { color:var(--text); }

        .nys-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
        .nys-card {
          background:var(--surface); border:1px solid var(--border);
          border-radius:var(--radius); overflow:hidden;
          transition:transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          cursor:pointer; display:flex; flex-direction:column;
        }
        .nys-card:hover { transform:translateY(-4px); box-shadow:var(--shadow-md); border-color:var(--rose); }

        .nys-photo {
          aspect-ratio:4/5; position:relative; display:flex; align-items:center; justify-content:center; overflow:hidden;
        }
        .nys-photo[data-tone="1"] { background:linear-gradient(135deg, #FFAF7B, #D76D77); }
        .nys-photo[data-tone="2"] { background:linear-gradient(135deg, #D76D77, #3A1C71); }
        .nys-photo[data-tone="3"] { background:linear-gradient(135deg, #3A1C71, #2D1B69); }
        .nys-photo[data-tone="4"] { background:linear-gradient(135deg, #FFAF7B, #3A1C71); }
        .nys-initials { font-size:48px; font-weight:700; color:rgba(255,255,255,0.9); letter-spacing:-0.03em; }

        .nys-platform {
          position:absolute; top:12px; right:12px; width:32px; height:32px; border-radius:50%;
          background:rgba(255,255,255,0.95); backdrop-filter:blur(8px);
          display:flex; align-items:center; justify-content:center;
          font-size:13px; font-weight:700; color:var(--purple); box-shadow:0 2px 8px rgba(0,0,0,0.15);
        }
        .nys-verified {
          position:absolute; top:12px; left:12px;
          background:rgba(255,255,255,0.95); backdrop-filter:blur(8px);
          padding:4px 10px; border-radius:var(--pill); font-size:10px; font-weight:700; color:var(--purple);
          display:flex; align-items:center; gap:4px; box-shadow:0 2px 8px rgba(0,0,0,0.12);
        }
        .nys-verified svg { width:11px; height:11px; stroke:var(--rose); }
        .nys-followers {
          position:absolute; bottom:12px; left:12px;
          background:rgba(45,27,105,0.78); backdrop-filter:blur(8px);
          padding:5px 12px; border-radius:var(--pill); font-size:12px; font-weight:700; color:var(--white);
        }
        .nys-body { padding:16px 18px 18px; display:flex; flex-direction:column; flex:1; }
        .nys-name { font-size:16px; font-weight:700; color:var(--text); margin-bottom:2px; }
        .nys-handle { font-size:13px; color:var(--text-muted); margin-bottom:10px; }
        .nys-tags { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:14px; }
        .nys-tag { font-size:11px; font-weight:600; color:var(--rose); background:var(--brand-gradient-wash); padding:3px 10px; border-radius:var(--pill); }
        .nys-foot { margin-top:auto; padding-top:14px; border-top:1px solid var(--border); display:flex; align-items:center; justify-content:space-between; }
        .nys-rate { font-size:13px; color:var(--text-muted); }
        .nys-rate strong { color:var(--text); font-size:15px; font-weight:700; }
        .nys-eng { font-size:12px; font-weight:600; color:var(--purple); display:flex; align-items:center; gap:4px; }
        .nys-eng svg { width:13px; height:13px; stroke:var(--rose); fill:none; }

        .nys-empty {
          grid-column:1 / -1; text-align:center; padding:60px 20px;
          border:1.5px dashed var(--border-2); border-radius:var(--radius); color:var(--text-faint);
          font-size:15px; font-weight:500;
        }

        .nys-cta-wrap { text-align:center; margin-top:48px; }
        .nys-btn-solid {
          display:inline-flex; align-items:center; gap:10px;
          padding:1rem 1.8rem; border-radius:var(--pill); font-size:1rem; font-weight:600;
          background:var(--purple); color:var(--white) !important; border:2px solid var(--purple);
          transition:all 0.3s ease; cursor:pointer;
        }
        .nys-btn-solid:hover { transform:translateY(-2px); box-shadow:0 6px 20px rgba(58,28,113,0.4); }
        .nys-note { text-align:center; margin-top:16px; font-size:13px; color:var(--text-faint); font-style:italic; }

        @media (max-width:1024px) {
          .nys-grid { grid-template-columns:repeat(2,1fr); }
          .nys-bar { grid-template-columns:1fr; gap:14px; position:static; }
        }
        @media (max-width:640px) {
          .nys-container { padding:0 20px; }
          .nys-grid { grid-template-columns:1fr; }
          .nys-row { justify-content:center; }
          .nys-count { text-align:center; }
        }
        @media (prefers-reduced-motion: reduce) {
          .nys-card, .nys-chip, .nys-btn-solid, .nys-bar { transition:none; }
        }
      `}</style>

      <div className="nys-container">
        <div className="nys-bar" style={{ top: barTop }}>
          <div className="nys-filter-stack">
            <div className="nys-row">
              <span className="nys-label">Niche</span>
              {NICHES.map((n) => (
                <button
                  key={n.val}
                  type="button"
                  className={"nys-chip" + (niche === n.val ? " active" : "")}
                  onClick={() => setNiche(n.val)}
                >
                  {n.label}
                </button>
              ))}
            </div>
            <div className="nys-row">
              <span className="nys-label">Borough</span>
              {BOROS.map((b) => (
                <button
                  key={b.val}
                  type="button"
                  className={"nys-chip" + (boro === b.val ? " active" : "")}
                  onClick={() => setBoro(b.val)}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>
          <div className="nys-count">
            <strong>{visible.length}</strong> of 850+ NYC creators
          </div>
        </div>

        <div className="nys-grid">
          {visible.length === 0 ? (
            <div className="nys-empty">
              No creators match those filters yet. Try widening your selection.
            </div>
          ) : (
            visible.map((c) => (
              <div className="nys-card" key={c.name}>
                <div className="nys-photo" data-tone={c.tone}>
                  <span className="nys-initials">{c.initials}</span>
                  <span className="nys-verified">
                    <VerifyIcon />
                    Verified
                  </span>
                  <span className="nys-platform">{c.platform}</span>
                  <span className="nys-followers">{c.followers}</span>
                </div>
                <div className="nys-body">
                  <div className="nys-name">{c.name}</div>
                  <div className="nys-handle">{c.handle}</div>
                  <div className="nys-tags">
                    {c.tags.map((t) => (
                      <span className="nys-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="nys-foot">
                    <div className="nys-rate">
                      from <strong>{c.rate}</strong>
                    </div>
                    <div className="nys-eng">
                      <EngIcon />
                      {c.eng} eng
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="nys-cta-wrap">
          <a href="#contact" className="nys-btn-solid">
            Request the Full NYC Roster →
          </a>
          <p className="nys-note">
            Showing 8 sample creators. Full roster of 850+ shared after your
            brief call, matched to your campaign.
          </p>
        </div>
      </div>
    </section>
  );
}
