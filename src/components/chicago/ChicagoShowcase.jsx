import { useEffect, useState } from "react";
import "./ChicagoShowcase.css";

const CREATORS = [
  {
    initials: "OM",
    tone: 1,
    name: "Olivia M.",
    handle: "@oliviaeatschi · West Loop",
    tags: ["Food", "Dining"],
    rate: "$1.8K",
    eng: "6.4%",
    followers: "210K",
    platform: "ig",
    niche: "food",
    area: "west-loop",
  },
  {
    initials: "MJ",
    tone: 2,
    name: "Marcus J.",
    handle: "@chicagosportsdaily · The Loop",
    tags: ["Sports", "Fandom"],
    rate: "$2.2K",
    eng: "8.4%",
    followers: "320K",
    platform: "tt",
    niche: "sports",
    area: "the-loop",
  },
  {
    initials: "PS",
    tone: 3,
    name: "Priya S.",
    handle: "@priyastylechi · Wicker Park",
    tags: ["Fashion", "Streetwear"],
    rate: "$1.5K",
    eng: "5.9%",
    followers: "180K",
    platform: "ig",
    niche: "fashion",
    area: "wicker-park",
  },
  {
    initials: "DK",
    tone: 4,
    name: "Danny K.",
    handle: "@dannydeepdish · West Loop",
    tags: ["Food", "Reviews"],
    rate: "$1.2K",
    eng: "7.6%",
    followers: "140K",
    platform: "tt",
    niche: "food",
    area: "west-loop",
  },
  {
    initials: "SL",
    tone: 2,
    name: "Sophia L.",
    handle: "@sophiachilife · Lincoln Park",
    tags: ["Lifestyle", "Local"],
    rate: "$1.4K",
    eng: "5.2%",
    followers: "165K",
    platform: "ig",
    niche: "lifestyle",
    area: "lincoln-park",
  },
  {
    initials: "TW",
    tone: 3,
    name: "Tyrese W.",
    handle: "@tyresehoopschi · The Loop",
    tags: ["Sports", "Basketball"],
    rate: "$1.7K",
    eng: "8.9%",
    followers: "240K",
    platform: "tt",
    niche: "sports",
    area: "the-loop",
  },
  {
    initials: "HB",
    tone: 1,
    name: "Hannah B.",
    handle: "@hannahhomechi · Lincoln Park",
    tags: ["Home", "Design"],
    rate: "$900",
    eng: "6.1%",
    followers: "95K",
    platform: "ig",
    niche: "home",
    area: "lincoln-park",
  },
  {
    initials: "AR",
    tone: 4,
    name: "Aisha R.",
    handle: "@aishastylechi · Wicker Park",
    tags: ["Fashion", "Editorial"],
    rate: "$2.0K",
    eng: "6.7%",
    followers: "260K",
    platform: "ig",
    niche: "fashion",
    area: "wicker-park",
  },
];

const NICHES = [
  { val: "all", label: "All" },
  { val: "food", label: "Food" },
  { val: "fashion", label: "Fashion" },
  { val: "sports", label: "Sports" },
  { val: "lifestyle", label: "Lifestyle" },
  { val: "home", label: "Home" },
];
const AREAS = [
  { val: "all", label: "All" },
  { val: "the-loop", label: "The Loop" },
  { val: "west-loop", label: "West Loop" },
  { val: "wicker-park", label: "Wicker Park" },
  { val: "lincoln-park", label: "Lincoln Park" },
];

export default function SocialMeloCHIShowcase() {
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
    <section className="chis" id="creators">
      <div className="chis-container">
        <div className="chis-bar" style={{ top: barTop }}>
          <div className="chis-filter-stack">
            <div className="chis-row">
              <span className="chis-label">Niche</span>
              {NICHES.map((n) => (
                <button
                  key={n.val}
                  type="button"
                  className={"chis-chip" + (niche === n.val ? " active" : "")}
                  onClick={() => setNiche(n.val)}
                >
                  {n.label}
                </button>
              ))}
            </div>
            <div className="chis-row">
              <span className="chis-label">Area</span>
              {AREAS.map((a) => (
                <button
                  key={a.val}
                  type="button"
                  className={"chis-chip" + (area === a.val ? " active" : "")}
                  onClick={() => setArea(a.val)}
                >
                  {a.label}
                </button>
              ))}
            </div>
          </div>
          <div className="chis-count">
            <strong>{visible.length}</strong> of 620+ Chicago creators
          </div>
        </div>

        <div className="chis-grid">
          {visible.length === 0 ? (
            <div className="chis-empty">
              No creators match those filters yet. Try widening your selection.
            </div>
          ) : (
            visible.map((c) => (
              <div className="chis-card" key={c.name}>
                <div className="chis-photo" data-tone={c.tone}>
                  <span className="chis-initials">{c.initials}</span>
                  <span className="chis-verified">
                    <VerifyIcon />
                    Verified
                  </span>
                  <span className="chis-platform">{c.platform}</span>
                  <span className="chis-followers">{c.followers}</span>
                </div>
                <div className="chis-body">
                  <div className="chis-name">{c.name}</div>
                  <div className="chis-handle">{c.handle}</div>
                  <div className="chis-tags">
                    {c.tags.map((t) => (
                      <span className="chis-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="chis-foot">
                    <div className="chis-rate">
                      from <strong>{c.rate}</strong>
                    </div>
                    <div className="chis-eng">
                      <EngIcon />
                      {c.eng} eng
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="chis-cta-wrap">
          <a href="#contact" className="chis-btn-solid">
            Request the Full Chicago Roster →
          </a>
          <p className="chis-note">
            Showing 8 sample creators. Full roster of 620+ shared after your
            brief call, matched to your campaign.
          </p>
        </div>
      </div>
    </section>
  );
}
