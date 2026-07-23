import { useEffect, useState } from "react";
import "./LosAngelesShowcase.css";

const CREATORS = [
  {
    initials: "CR",
    tone: 1,
    name: "Chloe R.",
    handle: "@chloe.la.style · Hollywood",
    tags: ["Fashion", "Editorial"],
    rate: "$2.2K",
    eng: "5.4%",
    followers: "220K",
    platform: "ig",
    niche: "fashion",
    area: "hollywood",
  },
  {
    initials: "MT",
    tone: 2,
    name: "Mia T.",
    handle: "@miaglowbeauty · Santa Monica",
    tags: ["Beauty", "Skincare"],
    rate: "$5.0K",
    eng: "7.5%",
    followers: "1.4M",
    platform: "tt",
    niche: "beauty",
    area: "santa-monica",
  },
  {
    initials: "JK",
    tone: 3,
    name: "Jaden K.",
    handle: "@jadenmoves · Venice",
    tags: ["Fitness", "Wellness"],
    rate: "$1.6K",
    eng: "8.2%",
    followers: "145K",
    platform: "ig",
    niche: "fitness",
    area: "venice",
  },
  {
    initials: "SV",
    tone: 4,
    name: "Sofia V.",
    handle: "@sofialifela · Downtown",
    tags: ["Lifestyle", "Travel"],
    rate: "$3.4K",
    eng: "4.6%",
    followers: "480K",
    platform: "ig",
    niche: "lifestyle",
    area: "downtown",
  },
  {
    initials: "TB",
    tone: 2,
    name: "Tyler B.",
    handle: "@tylerbts · Hollywood",
    tags: ["Entertainment", "BTS"],
    rate: "$6.5K",
    eng: "6.1%",
    followers: "920K",
    platform: "tt",
    niche: "entertainment",
    area: "hollywood",
  },
  {
    initials: "AM",
    tone: 3,
    name: "Aria M.",
    handle: "@ariastylela · Santa Monica",
    tags: ["Fashion", "Streetwear"],
    rate: "$4.8K",
    eng: "5.7%",
    followers: "660K",
    platform: "ig",
    niche: "fashion",
    area: "santa-monica",
  },
  {
    initials: "ML",
    tone: 1,
    name: "Marcus L.",
    handle: "@marcusfitla · Venice",
    tags: ["Fitness", "Nutrition"],
    rate: "$2.0K",
    eng: "9.0%",
    followers: "130K",
    platform: "tt",
    niche: "fitness",
    area: "venice",
  },
  {
    initials: "NC",
    tone: 4,
    name: "Nina C.",
    handle: "@ninabeautyla · Downtown",
    tags: ["Beauty", "MUA"],
    rate: "$1.5K",
    eng: "6.9%",
    followers: "158K",
    platform: "ig",
    niche: "beauty",
    area: "downtown",
  },
];

const NICHES = [
  { val: "all", label: "All" },
  { val: "fashion", label: "Fashion" },
  { val: "beauty", label: "Beauty" },
  { val: "fitness", label: "Fitness" },
  { val: "entertainment", label: "Entertainment" },
  { val: "lifestyle", label: "Lifestyle" },
];
const AREAS = [
  { val: "all", label: "All" },
  { val: "hollywood", label: "Hollywood" },
  { val: "santa-monica", label: "Santa Monica" },
  { val: "venice", label: "Venice" },
  { val: "downtown", label: "Downtown" },
];

export default function SocialMeloLAShowcase() {
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
    <section className="las" id="creators">
      <div className="las-container">
        <div className="las-bar" style={{ top: barTop }}>
          <div className="las-filter-stack">
            <div className="las-row">
              <span className="las-label">Niche</span>
              {NICHES.map((n) => (
                <button
                  key={n.val}
                  type="button"
                  className={"las-chip" + (niche === n.val ? " active" : "")}
                  onClick={() => setNiche(n.val)}
                >
                  {n.label}
                </button>
              ))}
            </div>
            <div className="las-row">
              <span className="las-label">Area</span>
              {AREAS.map((a) => (
                <button
                  key={a.val}
                  type="button"
                  className={"las-chip" + (area === a.val ? " active" : "")}
                  onClick={() => setArea(a.val)}
                >
                  {a.label}
                </button>
              ))}
            </div>
          </div>
          <div className="las-count">
            <strong>{visible.length}</strong> of 1,200+ LA creators
          </div>
        </div>

        <div className="las-grid">
          {visible.length === 0 ? (
            <div className="las-empty">
              No creators match those filters yet. Try widening your selection.
            </div>
          ) : (
            visible.map((c) => (
              <div className="las-card" key={c.name}>
                <div className="las-photo" data-tone={c.tone}>
                  <span className="las-initials">{c.initials}</span>
                  <span className="las-verified">
                    <VerifyIcon />
                    Verified
                  </span>
                  <span className="las-platform">{c.platform}</span>
                  <span className="las-followers">{c.followers}</span>
                </div>
                <div className="las-body">
                  <div className="las-name">{c.name}</div>
                  <div className="las-handle">{c.handle}</div>
                  <div className="las-tags">
                    {c.tags.map((t) => (
                      <span className="las-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="las-foot">
                    <div className="las-rate">
                      from <strong>{c.rate}</strong>
                    </div>
                    <div className="las-eng">
                      <EngIcon />
                      {c.eng} eng
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="las-cta-wrap">
          <a href="#contact" className="las-btn-solid">
            Request the Full LA Roster →
          </a>
          <p className="las-note">
            Showing 8 sample creators. Full roster of 1,200+ shared after your
            brief call, matched to your campaign.
          </p>
        </div>
      </div>
    </section>
  );
}
