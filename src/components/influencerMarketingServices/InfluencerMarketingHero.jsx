import { useEffect } from "react";
import "./InfluencerMarketingHero.css";

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap";

const CREATORS = [
  {
    initials: "AM",
    name: "Alex M.",
    role: "Tech",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
    x: 173,
    y: 62,
    d: "-4s",
    dur: "6.5s",
  },
  {
    initials: "SK",
    name: "Sarah K.",
    role: "Beauty",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    x: 359,
    y: 62,
    d: "-1.5s",
    dur: "7.8s",
  },
  {
    initials: "DC",
    name: "David C.",
    role: "Food",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    x: 173,
    y: 260,
    d: "0s",
    dur: "7.1s",
  },
  {
    initials: "EL",
    name: "Emma L.",
    role: "Lifestyle",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
    x: 379,
    y: 260,
    d: "-2.6s",
    dur: "8.4s",
  },
];

const STATS = [
  { n: "10,000+", l: "Verified creators" },
  { n: "35,000+", l: "Campaigns delivered" },
  { n: "30+", l: "Countries served" },
];

export default function SocialMeloIMHero() {
  useEffect(() => {
    if (typeof document === "undefined" || document.getElementById("smh-fonts"))
      return;
    const pre1 = Object.assign(document.createElement("link"), {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    });
    const pre2 = Object.assign(document.createElement("link"), {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    });
    const link = Object.assign(document.createElement("link"), {
      id: "smh-fonts",
      rel: "stylesheet",
      href: FONT_HREF,
    });
    document.head.append(pre1, pre2, link);
  }, []);

  return (
    <section className="ims">
      <div className="ims-wrap">
        {/* left */}
        <div className="ims-left">
          <div className="ims-eyebrow">
            <span className="ims-eyebrow-line" />
            <span className="ims-eyebrow-t">Influencer Marketing</span>
          </div>
          <h1 className="ims-h1">
            Influencer Marketing Services That Drive Real Revenue, Not Just
            Reach.
          </h1>
          <p className="ims-p">
            End-to-end campaigns across TikTok, Instagram, YouTube, Facebook,
            and Pinterest, from creator discovery to revenue attribution.
            Trusted by brands in 30+ countries.
          </p>
          <div className="ims-ctas">
            <a href="#" className="ims-btn ims-btn-primary">
              <span className="ims-accent">Get a Custom Quote →</span>
            </a>
            <a href="#" className="ims-btn ims-btn-ghost">
              See How It Works
            </a>
          </div>
          <div className="ims-stats">
            {STATS.map((s) => (
              <div key={s.l}>
                <div className="ims-stat-n">{s.n}</div>
                <div className="ims-stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* right orbital cluster */}
        <div className="ims-orbit" aria-hidden="true">
          <span className="ims-ring" />
          <span className="ims-ring-in" />
          <span className="ims-pill" style={{ top: "184px", left: "-43px" }}>
            Audience Analysis
          </span>
          <span
            className="ims-pill"
            style={{ top: "386px", left: "115px", animationDelay: "-3s" }}
          >
            + 42% CTR
          </span>
          {CREATORS.map((c) => (
            <div
              key={c.initials}
              className="ims-card"
              style={{
                top: c.y + "px",
                left: c.x + "px",
                animationDelay: c.d,
                animationDuration: c.dur,
              }}
            >
              <span className="ims-av">
                {c.img ? (
                  <img className="ims-av-img" src={c.img} alt="" />
                ) : (
                  c.initials
                )}
              </span>
              <div>
                <div className="ims-name">{c.name}</div>
                <div className="ims-role">{c.role}</div>
              </div>
            </div>
          ))}
          <div className="ims-disc" style={{ top: "422px", left: "36px" }}>
            <b>3.2x</b>
            <span>ROI Avg</span>
          </div>
        </div>
      </div>
    </section>
  );
}
