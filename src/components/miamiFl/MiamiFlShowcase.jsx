import { useEffect, useState } from "react";
import "./MiamiFlShowcase.css";

const CREATORS = [
  {
    initials: "CR",
    tone: 1,
    name: "Camila R.",
    handle: "@camilastylemia · South Beach",
    tags: ["Fashion", "Swim"],
    rate: "$2.0K",
    eng: "6.2%",
    followers: "280K",
    platform: "ig",
    niche: "fashion",
    area: "south-beach",
  },
  {
    initials: "MG",
    tone: 2,
    name: "Mateo G.",
    handle: "@mateoeatsmia · Little Havana",
    tags: ["Food", "Cuban"],
    rate: "$1.3K",
    eng: "7.8%",
    followers: "160K",
    platform: "tt",
    niche: "food",
    area: "little-havana",
  },
  {
    initials: "VC",
    tone: 3,
    name: "Valentina C.",
    handle: "@valglowmia · Brickell",
    tags: ["Beauty", "Skincare"],
    rate: "$1.6K",
    eng: "6.9%",
    followers: "220K",
    platform: "ig",
    niche: "beauty",
    area: "brickell",
  },
  {
    initials: "DH",
    tone: 4,
    name: "Diego H.",
    handle: "@diegomiamilife · Wynwood",
    tags: ["Lifestyle", "Nightlife"],
    rate: "$1.4K",
    eng: "5.6%",
    followers: "175K",
    platform: "tt",
    niche: "lifestyle",
    area: "wynwood",
  },
  {
    initials: "SM",
    tone: 2,
    name: "Sofia M.",
    handle: "@sofiabeachfit · South Beach",
    tags: ["Fitness", "Wellness"],
    rate: "$1.1K",
    eng: "8.4%",
    followers: "130K",
    platform: "ig",
    niche: "fitness",
    area: "south-beach",
  },
  {
    initials: "LP",
    tone: 3,
    name: "Lucas P.",
    handle: "@lucasstylemia · Wynwood",
    tags: ["Fashion", "Streetwear"],
    rate: "$1.8K",
    eng: "5.9%",
    followers: "240K",
    platform: "ig",
    niche: "fashion",
    area: "wynwood",
  },
  {
    initials: "IT",
    tone: 1,
    name: "Isabella T.",
    handle: "@isabeautymia · Brickell",
    tags: ["Beauty", "MUA"],
    rate: "$1.2K",
    eng: "6.5%",
    followers: "150K",
    platform: "ig",
    niche: "beauty",
    area: "brickell",
  },
  {
    initials: "AS",
    tone: 4,
    name: "Antonio S.",
    handle: "@antoniofoodmia · Little Havana",
    tags: ["Food", "Reviews"],
    rate: "$950",
    eng: "7.2%",
    followers: "110K",
    platform: "tt",
    niche: "food",
    area: "little-havana",
  },
];

const NICHES = [
  { val: "all", label: "All" },
  { val: "fashion", label: "Fashion" },
  { val: "beauty", label: "Beauty" },
  { val: "lifestyle", label: "Lifestyle" },
  { val: "food", label: "Food" },
  { val: "fitness", label: "Fitness" },
];
const AREAS = [
  { val: "all", label: "All" },
  { val: "south-beach", label: "South Beach" },
  { val: "wynwood", label: "Wynwood" },
  { val: "brickell", label: "Brickell" },
  { val: "little-havana", label: "Little Havana" },
];

export default function SocialMeloMIAShowcase() {
  const [niche, setNiche] = useState("all");
  const [area, setArea] = useState("all");
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
      (area === "all" || c.area === area),
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
    <section className="mias" id="creators">
      <div className="mias-container">
        <div className="mias-bar" style={{ top: barTop }}>
          <div className="mias-filter-stack">
            <div className="mias-row">
              <span className="mias-label">Niche</span>
              {NICHES.map((n) => (
                <button
                  key={n.val}
                  type="button"
                  className={"mias-chip" + (niche === n.val ? " active" : "")}
                  onClick={() => setNiche(n.val)}
                >
                  {n.label}
                </button>
              ))}
            </div>
            <div className="mias-row">
              <span className="mias-label">Area</span>
              {AREAS.map((a) => (
                <button
                  key={a.val}
                  type="button"
                  className={"mias-chip" + (area === a.val ? " active" : "")}
                  onClick={() => setArea(a.val)}
                >
                  {a.label}
                </button>
              ))}
            </div>
          </div>
          <div className="mias-count">
            <strong>{visible.length}</strong> of 540+ Miami creators
          </div>
        </div>

        <div className="mias-grid">
          {visible.length === 0 ? (
            <div className="mias-empty">
              No creators match those filters yet. Try widening your selection.
            </div>
          ) : (
            visible.map((c) => (
              <div className="mias-card" key={c.name}>
                <div className="mias-photo" data-tone={c.tone}>
                  <span className="mias-initials">{c.initials}</span>
                  <span className="mias-verified">
                    <VerifyIcon />
                    Verified
                  </span>
                  <span className="mias-platform">{c.platform}</span>
                  <span className="mias-followers">{c.followers}</span>
                </div>
                <div className="mias-body">
                  <div className="mias-name">{c.name}</div>
                  <div className="mias-handle">{c.handle}</div>
                  <div className="mias-tags">
                    {c.tags.map((t) => (
                      <span className="mias-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mias-foot">
                    <div className="mias-rate">
                      from <strong>{c.rate}</strong>
                    </div>
                    <div className="mias-eng">
                      <EngIcon />
                      {c.eng} eng
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mias-cta-wrap">
          <a href="#contact" className="mias-btn-solid">
            Request the Full Miami Roster →
          </a>
          <p className="mias-note">
            Showing 8 sample creators. Full roster of 540+ shared after your
            brief call, matched to your campaign.
          </p>
        </div>
      </div>
    </section>
  );
}
