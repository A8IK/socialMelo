import { useEffect } from "react";
import "./ServiceCoreHowWeWork.css";

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap";

const STEPS = [
  {
    num: "01",
    title: "Brief & Strategy",
    desc: "30-minute brief call. Custom strategy doc within 5 business days covering creator profile, platform split, content brief, and projected reach.",
  },
  {
    num: "02",
    title: "Creator Shortlist",
    desc: "15-30 vetted creators matched to your brief. Audience data, engagement rates, sample content, rate cards. You pick, we negotiate.",
  },
  {
    num: "03",
    title: "Outreach & Production",
    desc: "We handle every email, contract, usage-rights clause, and FTC disclosure. You approve every piece of content before it goes live.",
  },
  {
    num: "04",
    title: "Tracking & Reporting",
    desc: "Real-time dashboard. Weekly emails. Final report within 10 days of close: per-creator performance and renewal recommendations.",
  },
];

export default function SocialMeloHowWeWork() {
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
    <section className="hw">
      <div className="hw-wrap">
        <div className="hw-head">
          <div className="hw-eyebrow">
            <span className="hw-line" />
            <span className="hw-eyebrow-t">How We Work</span>
          </div>
          <h2 className="hw-h2">
            From first brief call to live campaign in{" "}
            <span className="hw-accent">21 days.</span>
          </h2>
        </div>

        <div className="hw-grid">
          {STEPS.map((s) => (
            <div key={s.num} className="hw-card">
              <div className="hw-badge">{s.num}</div>
              <h3 className="hw-card-t">{s.title}</h3>
              <p className="hw-card-d">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
