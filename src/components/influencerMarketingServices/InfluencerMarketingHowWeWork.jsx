import { useEffect, useRef, useState } from "react";
import "./InfluencerMarketingHowWeWork.css";

const STEPS = [
  {
    num: "01",
    side: "left",
    title: "Brief & Strategy",
    body: "30-minute brief call to understand your product, goals, timeline, and budget. Within 5 business days, you get a custom strategy document covering target creator profile, platform mix, content brief, deliverable count, and projected reach.",
    pill: "~5 business days",
  },
  {
    num: "02",
    side: "right",
    title: "Creator Shortlist",
    body: "Shortlist of 15 to 30 vetted creators matched to the brief. Each includes audience-quality data, engagement rates, sample content, and rate cards. You pick the creators you want; we negotiate rates and terms from there.",
    pill: "~3 business days",
  },
  {
    num: "03",
    side: "left",
    title: "Outreach, Contracts & Production",
    body: "We handle every email, contract, usage-rights clause, and FTC disclosure requirement. Creators receive the brief, submit drafts through the dashboard, and you approve every piece of content before it goes live.",
    pill: "~10 business days",
  },
  {
    num: "04",
    side: "right",
    title: "Live Tracking & Post-Campaign Report",
    body: "Real-time dashboard during the campaign. Weekly summary emails. Final report within 10 days of campaign close: per-creator performance, revenue attribution, and renewal recommendations.",
    pill: "Ongoing",
  },
];

export default function SocialMeloTimeline() {
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
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className={`tl-section${revealed ? " tl-in" : ""}`}>
      <div className="tl-head">
        <p className="tl-eyebrow">
          <span className="tl-rule" />
          How we work
          <span className="tl-rule" />
        </p>
        <h2 className="tl-title">
          Turn-key campaign management. From first call to live content in 21
          days.
        </h2>
      </div>

      <div className="tl-steps">
        {STEPS.map((s) => (
          <div className={`tl-step tl-step-${s.side}`} key={s.num}>
            <div className="tl-card">
              <h3 className="tl-card-title">{s.title}</h3>
              <p className="tl-card-body">{s.body}</p>
              <span className="tl-pill">{s.pill}</span>
            </div>
            <span className="tl-badge" aria-hidden="true">
              <span className="tl-disc">{s.num}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
