import { useEffect, useState } from "react";
import "./NewYorkShowcase.css";

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
