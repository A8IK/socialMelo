import { useEffect } from "react";
import "./LosAngelesHowItWorks.css";

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap";

const STEPS = [
  {
    num: "01",
    title: "Tell Us Your Brief",
    desc: "Share your goal, target audience, budget, and timeline. 30-minute call or the form below.",
  },
  {
    num: "02",
    title: "Get Your LA Shortlist",
    desc: "Within 48 hours, a matched shortlist of LA creators with audience data, rates, and sample work.",
  },
  {
    num: "03",
    title: "Approve & We Produce",
    desc: "You pick the creators. We handle contracts, FTC disclosure, on-location shoots, and content approvals.",
  },
  {
    num: "04",
    title: "Track & Report",
    desc: "Real-time dashboard, booking/conversion attribution, final report with renewal recommendations.",
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
    <section className="la-hw">
      <div className="la-hw-wrap">
        <div className="la-hw-head">
          <div className="la-hw-eyebrow">
            <span className="la-hw-line" />
            <span className="la-hw-eyebrow-t">How IT Work</span>
          </div>
          <h2 className="la-hw-h2">
            Browse creators, we run{" "}
            <span className="la-hw-accent">the campaign.</span>
          </h2>
        </div>

        <div className="la-hw-grid">
          {STEPS.map((s) => (
            <div key={s.num} className="la-hw-card">
              <div className="la-hw-badge">{s.num}</div>
              <h3 className="la-hw-card-t">{s.title}</h3>
              <p className="la-hw-card-d">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
