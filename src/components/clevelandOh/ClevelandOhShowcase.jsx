import { useEffect, useState } from "react";
import "./ClevelandOhShowcase.css";

const CREATORS = [
  {
    initials: "ED",
    tone: 1,
    name: "Emma D.",
    handle: "@emmaeatscle · Ohio City",
    tags: ["Food", "Reviews"],
    rate: "$900",
    eng: "7.2%",
    followers: "88K",
    platform: "ig",
    niche: "food",
    area: "ohio-city",
  },
  {
    initials: "MT",
    tone: 2,
    name: "Marcus T.",
    handle: "@clevelandsportsguy · Downtown",
    tags: ["Sports", "Fandom"],
    rate: "$1.4K",
    eng: "8.6%",
    followers: "145K",
    platform: "tt",
    niche: "sports",
    area: "downtown",
  },
  {
    initials: "HB",
    tone: 3,
    name: "Hannah B.",
    handle: "@hannahhomecle · Lakewood",
    tags: ["Home", "DIY"],
    rate: "$750",
    eng: "6.4%",
    followers: "62K",
    platform: "ig",
    niche: "home",
    area: "lakewood",
  },
  {
    initials: "DM",
    tone: 4,
    name: "Derek M.",
    handle: "@derekeatscle · Tremont",
    tags: ["Food", "Recipes"],
    rate: "$1.1K",
    eng: "7.9%",
    followers: "110K",
    platform: "tt",
    niche: "food",
    area: "tremont",
  },
  {
    initials: "SK",
    tone: 2,
    name: "Sophia K.",
    handle: "@sophiaclelife · Downtown",
    tags: ["Lifestyle", "Local"],
    rate: "$1.0K",
    eng: "5.8%",
    followers: "95K",
    platform: "ig",
    niche: "lifestyle",
    area: "downtown",
  },
  {
    initials: "TR",
    tone: 3,
    name: "Tyler R.",
    handle: "@tylerrunscle · Ohio City",
    tags: ["Sports", "Fitness"],
    rate: "$1.3K",
    eng: "9.1%",
    followers: "78K",
    platform: "tt",
    niche: "sports",
    area: "ohio-city",
  },
  {
    initials: "OP",
    tone: 1,
    name: "Olivia P.",
    handle: "@oliviafamcle · Lakewood",
    tags: ["Family", "Lifestyle"],
    rate: "$850",
    eng: "6.7%",
    followers: "70K",
    platform: "ig",
    niche: "family",
    area: "lakewood",
  },
  {
    initials: "NC",
    tone: 4,
    name: "Nathan C.",
    handle: "@nathanhomecle · Tremont",
    tags: ["Home", "Decor"],
    rate: "$700",
    eng: "5.5%",
    followers: "54K",
    platform: "ig",
    niche: "home",
    area: "tremont",
  },
];

const NICHES = [
  { val: "all", label: "All" },
  { val: "food", label: "Food" },
  { val: "lifestyle", label: "Lifestyle" },
  { val: "sports", label: "Sports" },
  { val: "home", label: "Home" },
  { val: "family", label: "Family" },
];
const AREAS = [
  { val: "all", label: "All" },
  { val: "downtown", label: "Downtown" },
  { val: "ohio-city", label: "Ohio City" },
  { val: "tremont", label: "Tremont" },
  { val: "lakewood", label: "Lakewood" },
];

export default function SocialMeloCLEShowcase() {
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
    <section className="cles" id="creators">
      <div className="cles-container">
        <div className="cles-bar" style={{ top: barTop }}>
          <div className="cles-filter-stack">
            <div className="cles-row">
              <span className="cles-label">Niche</span>
              {NICHES.map((n) => (
                <button
                  key={n.val}
                  type="button"
                  className={"cles-chip" + (niche === n.val ? " active" : "")}
                  onClick={() => setNiche(n.val)}
                >
                  {n.label}
                </button>
              ))}
            </div>
            <div className="cles-row">
              <span className="cles-label">Area</span>
              {AREAS.map((a) => (
                <button
                  key={a.val}
                  type="button"
                  className={"cles-chip" + (area === a.val ? " active" : "")}
                  onClick={() => setArea(a.val)}
                >
                  {a.label}
                </button>
              ))}
            </div>
          </div>
          <div className="cles-count">
            <strong>{visible.length}</strong> of 320+ Cleveland creators
          </div>
        </div>

        <div className="cles-grid">
          {visible.length === 0 ? (
            <div className="cles-empty">
              No creators match those filters yet. Try widening your selection.
            </div>
          ) : (
            visible.map((c) => (
              <div className="cles-card" key={c.name}>
                <div className="cles-photo" data-tone={c.tone}>
                  <span className="cles-initials">{c.initials}</span>
                  <span className="cles-verified">
                    <VerifyIcon />
                    Verified
                  </span>
                  <span className="cles-platform">{c.platform}</span>
                  <span className="cles-followers">{c.followers}</span>
                </div>
                <div className="cles-body">
                  <div className="cles-name">{c.name}</div>
                  <div className="cles-handle">{c.handle}</div>
                  <div className="cles-tags">
                    {c.tags.map((t) => (
                      <span className="cles-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="cles-foot">
                    <div className="cles-rate">
                      from <strong>{c.rate}</strong>
                    </div>
                    <div className="cles-eng">
                      <EngIcon />
                      {c.eng} eng
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cles-cta-wrap">
          <a href="#contact" className="cles-btn-solid">
            Request the Full Cleveland Roster →
          </a>
          <p className="cles-note">
            Showing 8 sample creators. Full roster of 320+ shared after your
            brief call, matched to your campaign.
          </p>
        </div>
      </div>
    </section>
  );
}
