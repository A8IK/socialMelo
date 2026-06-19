import { useEffect } from "react";
import "./ServiceCoreSpecialization.css";

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap";

const ICON = {
  strategy: (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m8.5 11 1.8 1.8 3.7-3.8" />
      <path d="m20 20-3.4-3.4" />
    </svg>
  ),
  shield: (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  chart: (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 7h6v6" />
      <path d="m22 7-8.5 8.5-5-5L2 17" />
    </svg>
  ),
};

const CARDS = [
  {
    color: "#DD6D83",
    icon: ICON.strategy,
    title: "Custom Campaign Strategy",
    desc: "Every campaign starts with a free brief consultation and a custom strategy doc. No off-the-shelf packages. Strategy tied to your business goal (revenue, awareness, or audience expansion) before we touch the creator database.",
  },
  {
    color: "#2D1963",
    icon: ICON.shield,
    title: "Verified Creator Network",
    desc: "10,000+ vetted creators across 30+ countries. Every creator passes audience-quality screening, engagement-rate checks, and brand-safety review before they enter the database. You see the data before you sign off.",
  },
  {
    color: "#E0795F",
    icon: ICON.chart,
    title: "Performance, Not Vanity Metrics",
    desc: "We measure campaigns in conversions, revenue, and CAC, not likes. Real-time dashboard during live campaigns. Post-campaign reports tie spend to outcomes. If a creator underperforms, we say so.",
  },
];

export default function SocialMeloSpecialization() {
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
    <section className="sms">
      <div className="sms-wrap">
        <div className="sms-eyebrow">
          <span className="sms-line" />
          <span className="sms-eyebrow-t">Specialization</span>
        </div>

        <h2 className="sms-h2">
          Broad capabilities. Specialist creators. One team running it.
        </h2>

        <p className="sms-lead">
          Running a campaign crosses creator discovery, content production, paid
          amplification, contracts, and analytics. Each step has its own
          complexity. We've spent 8+ years building the team and tooling for
          every step, so brands don't have to assemble five vendors to run one
          campaign.
        </p>

        <div className="sms-cards">
          {CARDS.map((c) => (
            <div key={c.title} className="sms-card">
              <span className="sms-bar" />
              <span className="sms-icon" style={{ color: c.color }}>
                {c.icon}
              </span>
              <h3 className="sms-card-t">{c.title}</h3>
              <p className="sms-card-d">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
