import { useEffect, useState } from "react";
import "./KansasCityKsShowcase.css";

const CREATORS = [
  {
    initials: "LG",
    tone: 1,
    name: "Lucia G.",
    handle: "@luciaeatskck · Strawberry Hill",
    tags: ["Food", "BBQ"],
    rate: "$700",
    eng: "7.4%",
    followers: "64K",
    platform: "ig",
    niche: "food",
    area: "strawberry-hill",
  },
  {
    initials: "MW",
    tone: 2,
    name: "Marcus W.",
    handle: "@sportingkcfan · The Legends",
    tags: ["Sports", "Soccer"],
    rate: "$1.1K",
    eng: "8.8%",
    followers: "120K",
    platform: "tt",
    niche: "sports",
    area: "legends",
  },
  {
    initials: "HB",
    tone: 3,
    name: "Hannah B.",
    handle: "@hannahhomekc · Rosedale",
    tags: ["Home", "DIY"],
    rate: "$500",
    eng: "6.2%",
    followers: "48K",
    platform: "ig",
    niche: "home",
    area: "rosedale",
  },
  {
    initials: "DR",
    tone: 4,
    name: "Diego R.",
    handle: "@diegobbqkck · Argentine",
    tags: ["Food", "BBQ"],
    rate: "$850",
    eng: "7.7%",
    followers: "92K",
    platform: "tt",
    niche: "food",
    area: "argentine",
  },
  {
    initials: "SL",
    tone: 2,
    name: "Sophie L.",
    handle: "@sophiekclife · The Bundens",
    tags: ["Lifestyle", "Local"],
    rate: "$750",
    eng: "5.6%",
    followers: "70K",
    platform: "ig",
    niche: "lifestyle",
    area: "legends",
  },
  {
    initials: "TM",
    tone: 3,
    name: "Tyler M.",
    handle: "@tylermotorkc · Strawberry Hill",
    tags: ["Sports", "Motorsports"],
    rate: "$1.0K",
    eng: "9.0%",
    followers: "58K",
    platform: "tt",
    niche: "sports",
    area: "strawberry-hill",
  },
  {
    initials: "OP",
    tone: 1,
    name: "Olivia P.",
    handle: "@oliviafamkck · Rosedale",
    tags: ["Family", "Lifestyle"],
    rate: "$600",
    eng: "6.8%",
    followers: "52K",
    platform: "ig",
    niche: "family",
    area: "rosedale",
  },
  {
    initials: "NC",
    tone: 4,
    name: "Nathan C.",
    handle: "@nathanhomekck · Argentine",
    tags: ["Home", "Decor"],
    rate: "$450",
    eng: "5.4%",
    followers: "40K",
    platform: "ig",
    niche: "home",
    area: "argentine",
  },
];

const NICHES = [
  { val: "all", label: "All" },
  { val: "food", label: "Food" },
  { val: "sports", label: "Sports" },
  { val: "lifestyle", label: "Lifestyle" },
  { val: "family", label: "Family" },
  { val: "home", label: "Home" },
];
const AREAS = [
  { val: "all", label: "All" },
  { val: "strawberry-hill", label: "Strawberry Hill" },
  { val: "argentine", label: "Argentine" },
  { val: "rosedale", label: "Rosedale" },
  { val: "legends", label: "The Legends" },
];

export default function SocialMeloKCKShowcase() {
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
    <section className="kcks" id="creators">
      <div className="kcks-container">
        <div className="kcks-bar" style={{ top: barTop }}>
          <div className="kcks-filter-stack">
            <div className="kcks-row">
              <span className="kcks-label">Niche</span>
              {NICHES.map((n) => (
                <button
                  key={n.val}
                  type="button"
                  className={"kcks-chip" + (niche === n.val ? " active" : "")}
                  onClick={() => setNiche(n.val)}
                >
                  {n.label}
                </button>
              ))}
            </div>
            <div className="kcks-row">
              <span className="kcks-label">Area</span>
              {AREAS.map((a) => (
                <button
                  key={a.val}
                  type="button"
                  className={"kcks-chip" + (area === a.val ? " active" : "")}
                  onClick={() => setArea(a.val)}
                >
                  {a.label}
                </button>
              ))}
            </div>
          </div>
          <div className="kcks-count">
            <strong>{visible.length}</strong> of 240+ KCK creators
          </div>
        </div>

        <div className="kcks-grid">
          {visible.length === 0 ? (
            <div className="kcks-empty">
              No creators match those filters yet. Try widening your selection.
            </div>
          ) : (
            visible.map((c) => (
              <div className="kcks-card" key={c.name}>
                <div className="kcks-photo" data-tone={c.tone}>
                  <span className="kcks-initials">{c.initials}</span>
                  <span className="kcks-verified">
                    <VerifyIcon />
                    Verified
                  </span>
                  <span className="kcks-platform">{c.platform}</span>
                  <span className="kcks-followers">{c.followers}</span>
                </div>
                <div className="kcks-body">
                  <div className="kcks-name">{c.name}</div>
                  <div className="kcks-handle">{c.handle}</div>
                  <div className="kcks-tags">
                    {c.tags.map((t) => (
                      <span className="kcks-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="kcks-foot">
                    <div className="kcks-rate">
                      from <strong>{c.rate}</strong>
                    </div>
                    <div className="kcks-eng">
                      <EngIcon />
                      {c.eng} eng
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="kcks-cta-wrap">
          <a href="#contact" className="kcks-btn-solid">
            Request the Full KCK Roster →
          </a>
          <p className="kcks-note">
            Showing 8 sample creators. Full roster of 240+ shared after your
            brief call, matched to your campaign.
          </p>
        </div>
      </div>
    </section>
  );
}
