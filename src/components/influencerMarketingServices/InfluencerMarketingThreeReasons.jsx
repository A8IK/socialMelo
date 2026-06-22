import { useEffect, useRef, useState } from "react";
import "./InfluencerMarketingThreeReasons.css";

const ICONS = {
  target: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="24"
      height="24"
    >
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3.2" fill="currentColor" stroke="none" />
    </svg>
  ),
  shield: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="24"
      height="24"
    >
      <path d="M12 2.5 19 5.2 V11 c0 4.7-3.2 8.1-7 9.4 C8.2 19.1 5 15.7 5 11 V5.2 Z" />
      <path d="M9.2 11.6 11.2 13.6 15 9.6" />
    </svg>
  ),
  chart: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="24"
      height="24"
    >
      <path d="M4 16 9 10.5 13 14 20 6.5" />
      <path d="M15 6.5 H20 V11.5" />
    </svg>
  ),
};

const CARDS = [
  {
    num: "01",
    icon: "target",
    iconColor: "#D06B7A",
    title: "Reach the Right Audience",
    body: "Break into untapped markets through creators whose audiences match your buyer profile by interest, geography, and intent, not just follower count. Match algorithm plus human vetting ships shortlists in 5 business days.",
  },
  {
    num: "02",
    icon: "shield",
    iconColor: "#2D1963",
    title: "Build Real Brand Trust",
    body: "We match you with creators who've earned credibility in their niche, not the highest bidder, not the biggest account. Audience trust transfers when the partnership fits. We make sure the partnership fits.",
  },
  {
    num: "03",
    icon: "chart",
    iconColor: "#EC8C6A",
    title: "Drive Measurable Action",
    body: "Every campaign is built to convert: UTM tracking, revenue attribution, CTR and conversion data per creator. You measure spend against outcome, renew what worked, drop what didn't.",
  },
];

export default function SocialMeloReasons() {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!document.getElementById("smh-fonts")) {
      const link = document.createElement("link");
      link.id = "smh-fonts";
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className={`rs-section${revealed ? " rs-in" : ""}`}>
      <div className="rs-wrap">
        <div className="rs-head">
          <p className="rs-eyebrow">
            <span className="rs-rule" />
            Three reasons brands switch
          </p>
          <h2 className="rs-title-main">
            Built around the metrics that actually grow your business.
          </h2>
        </div>

        <div className="rs-grid">
          {CARDS.map((c) => (
            <article className="rs-card" key={c.num}>
              <span className="rs-bar" aria-hidden="true" />
              <span className="rs-num" aria-hidden="true">
                {c.num}
              </span>
              <div
                className="rs-tile"
                style={{ color: c.iconColor }}
                aria-hidden="true"
              >
                {ICONS[c.icon]}
              </div>
              <h3 className="rs-card-title">{c.title}</h3>
              <p className="rs-card-body">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
