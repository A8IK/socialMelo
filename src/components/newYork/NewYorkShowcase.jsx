import { useEffect, useState } from "react";
import "./NewYorkShowcase.css";

import BriannaDelgadoLopezImg from "../../assets/images/Brianna Delgado Lopez.webp";
import MadelenaCagninaImg from "../../assets/images/Madelena Cagnina.webp";
import MichaelStoddartImg from "../../assets/images/Michael Stoddart.webp";
import SesiliaEvelynImg from "../../assets/images/Sesilia Evelyn.webp";

const CREATORS = [
  {
    initials: "MS",
    tone: 1,
    name: "Michael Stoddart",
    handle: "@ig_mikeyds",
    tags: ["Lifestyle", "Sports"],
    rate: "$2.5K",
    eng: "2.74%",
    followers: "9.5K",
    platform: "tiktok",
    niche: "fashion",
    boro: "brooklyn",
    img: MichaelStoddartImg,
  },
  {
    initials: "SE",
    tone: 2,
    name: "Sesilia Evelyn",
    handle: "@sevelyn",
    tags: ["UGC", "Creator"],
    rate: "$900",
    eng: "2.33%",
    followers: "2.2K",
    platform: "tiktok",
    niche: "lifestyle",
    boro: "queens",
    img: SesiliaEvelynImg,
  },
  {
    initials: "MC",
    tone: 3,
    name: "Madelena Cagnina",
    handle: "@disconova5",
    tags: ["Enthusiast", "Music"],
    rate: "$1.8K",
    eng: "2.42%",
    followers: "510",
    platform: "tiktok",
    niche: "music",
    boro: "manhattan",
    img: MadelenaCagninaImg,
  },
  {
    initials: "BD",
    tone: 4,
    name: "Brianna Delgado Lopez",
    handle: "@briannadelgadolop",
    tags: ["Beauty", "Lifestyle"],
    rate: "$1.2K",
    eng: "1.55%",
    followers: "6.7K",
    platform: "tiktok",
    niche: "beauty",
    boro: "bronx",
    img: BriannaDelgadoLopezImg,
  },
  // {
  //   initials: "JT",
  //   tone: 2,
  //   name: "Jordan T.",
  //   handle: "@jordan.bk · Brooklyn",
  //   tags: ["Lifestyle", "Wellness"],
  //   rate: "$900",
  //   eng: "9.1%",
  //   followers: "95K",
  //   platform: "tt",
  //   niche: "lifestyle",
  //   boro: "brooklyn",
  // },
  // {
  //   initials: "MR",
  //   tone: 3,
  //   name: "Maya R.",
  //   handle: "@mayarstyle · Manhattan",
  //   tags: ["Fashion", "Streetwear"],
  //   rate: "$5.2K",
  //   eng: "5.9%",
  //   followers: "720K",
  //   platform: "ig",
  //   niche: "fashion",
  //   boro: "manhattan",
  // },
  // {
  //   initials: "TC",
  //   tone: 1,
  //   name: "Tariq C.",
  //   handle: "@tariqcooks · Brooklyn",
  //   tags: ["F&B", "Recipes"],
  //   rate: "$2.6K",
  //   eng: "8.3%",
  //   followers: "410K",
  //   platform: "tt",
  //   niche: "food",
  //   boro: "brooklyn",
  // },
  // {
  //   initials: "NP",
  //   tone: 4,
  //   name: "Nina P.",
  //   handle: "@ninaglow · Queens",
  //   tags: ["Beauty", "MUA"],
  //   rate: "$1.4K",
  //   eng: "6.7%",
  //   followers: "128K",
  //   platform: "ig",
  //   niche: "beauty",
  //   boro: "queens",
  // },
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
  // Render a platform glyph so the badge stays inside its circle regardless of
  // whether the data says "tiktok" / "tt", "instagram" / "ig", "youtube" / "yt".
  const PlatformIcon = ({ p }) => {
    const k = (p || "").toLowerCase();
    if (k === "tiktok" || k === "tt") {
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-label="TikTok">
          <path d="M16.6 3h-2.7v12.3a2.3 2.3 0 1 1-2-2.3V10.2a5 5 0 1 0 4.7 5V8.7a6.3 6.3 0 0 0 3.4 1V6.9a3.7 3.7 0 0 1-3.4-3.9z" />
        </svg>
      );
    }
    if (k === "instagram" || k === "ig") {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-label="Instagram"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle
            cx="17.3"
            cy="6.7"
            r="1.1"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );
    }
    if (k === "youtube" || k === "yt") {
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-label="YouTube">
          <path d="M23 12s0-3.7-.5-5.5a2.9 2.9 0 0 0-2-2C18.7 4 12 4 12 4s-6.7 0-8.5.5a2.9 2.9 0 0 0-2 2C1 8.3 1 12 1 12s0 3.7.5 5.5a2.9 2.9 0 0 0 2 2C5.3 20 12 20 12 20s6.7 0 8.5-.5a2.9 2.9 0 0 0 2-2C23 15.7 23 12 23 12z" />
          <polygon points="10 8.3 16 12 10 15.7" fill="#fff" />
        </svg>
      );
    }
    return <span className="nys-platform-txt">{p}</span>;
  };

  return (
    <section className="nys" id="creators">
      <div className="nys-container">
        {/* <div className="nys-bar" style={{ top: barTop }}>
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
            temporary hide
            <strong>{visible.length}</strong> of 850+ NYC creators
          </div>
        </div> */}

        <div className="nys-grid">
          {visible.length === 0 ? (
            <div className="nys-empty">
              No creators match those filters yet. Try widening your selection.
            </div>
          ) : (
            visible.map((c) => (
              <div className="nys-card" key={c.name}>
                <div className="nys-photo" data-tone={c.tone}>
                  {c.img && (
                    <img
                      className="nys-photo-img"
                      src={c.img}
                      alt={c.name}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  )}
                  <span className="nys-initials">{c.initials}</span>
                  <span className="nys-verified">
                    <VerifyIcon />
                    Verified
                  </span>
                  <span className="nys-platform">
                    <PlatformIcon p={c.platform} />
                  </span>
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
                  {/* <div className="nys-foot">
                    <div className="nys-rate">
                      from <strong>{c.rate}</strong>
                    </div>
                    <div className="nys-eng">
                      <EngIcon />
                      {c.eng} eng
                    </div>
                  </div> */}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="nys-cta-wrap">
          <a href="/book-a-call" className="nys-btn-solid">
            Request the Full NYC Roster →
          </a>
          {/* temporary hide */}
          {/* <p className="nys-note">
            Showing 8 sample creators. Full roster of 850+ shared after your
            brief call, matched to your campaign.
          </p> */}
        </div>
      </div>
    </section>
  );
}
