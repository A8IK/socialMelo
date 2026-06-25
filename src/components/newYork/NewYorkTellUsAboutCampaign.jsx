import { useEffect, useRef, useState } from "react";
import "./NewYorkTellUsAboutCampaign.css";

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap";

const CHEVRON_BG = `url("data:image/svg+xml;utf8,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="%232D1963" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
)}")`;

const ROLES = ["Brand", "Agency", "Creator"];

const LOOKING = [
  "Select...",
  "Influencer campaign",
  "UGC content",
  "Paid amplification",
  "Always-on creator program",
  "Not sure yet",
];
const BUDGET = [
  "Select...",
  "Under $10k",
  "$10k - $25k",
  "$25k - $50k",
  "$50k - $100k",
  "$100k+",
];

const BENEFITS = [
  {
    t: "NYC shortlist within 48 hours",
    d: "Real creators matched to your brief, with rates and audience data.",
  },
  {
    t: "3 budget tiers, no markup games",
    d: "You see what creators get paid and what our fee is.",
  },
  {
    t: "No sales pressure",
    d: "If it's not a fit, we'll tell you. Sometimes a smaller boutique is the right call.",
  },
];

export default function SocialMeloBriefForm() {
  const [role, setRole] = useState("Brand");
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

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

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Label = ({ children }) => (
    <span className="tu-label">
      {children}
      <span className="tu-req">*</span>
    </span>
  );

  return (
    <section className={"tu" + (inView ? " in" : "")} ref={ref}>
      <div className="tu-wrap">
        {/* form */}
        <div className="tu-card tu-rev">
          <h2 className="tu-title">Tell us about your NYC campaign</h2>
          <p className="tu-lead">
            60-second form. We reply within 1 business day with a matched NYC
            shortlist.
          </p>

          <div className="tu-grid2">
            <label className="tu-field">
              <Label>First Name</Label>
              <input className="tu-input" type="text" />
            </label>
            <label className="tu-field">
              <Label>Last Name</Label>
              <input className="tu-input" type="text" />
            </label>
            <label className="tu-field">
              <Label>Work Email</Label>
              <input
                className="tu-input"
                type="email"
                placeholder="you@company.com"
              />
            </label>
            <label className="tu-field">
              <Label>Company</Label>
              <input className="tu-input" type="text" />
            </label>
          </div>

          <div className="tu-block">
            <span className="tu-label">
              I'm a...<span className="tu-req">*</span>
            </span>
            <div className="tu-seg" role="group" aria-label="I am a">
              {ROLES.map((r) => (
                <button
                  key={r}
                  type="button"
                  className={"tu-seg-btn" + (role === r ? " on" : "")}
                  aria-pressed={role === r}
                  onClick={() => setRole(r)}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div className="tu-grid2" style={{ marginTop: "18px" }}>
            <label className="tu-field">
              <Label>Niche</Label>
              <select
                className="tu-select"
                defaultValue="Select..."
                style={{ backgroundImage: CHEVRON_BG }}
              >
                {LOOKING.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
            <label className="tu-field">
              <Label>Budget Range</Label>
              <select
                className="tu-select"
                defaultValue="Select..."
                style={{ backgroundImage: CHEVRON_BG }}
              >
                {BUDGET.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
          </div>
          <p className="tu-help">
            NYC budgets run higher — we've adjusted the tiers
          </p>

          <label className="tu-field tu-block">
            <span className="tu-label">Tell us about the campaign</span>
            <textarea
              className="tu-area"
              placeholder="Goals, timeline, any creators from the roster you're interested in.."
            />
          </label>

          <button type="button" className="tu-submit">
            Send My Brief →
          </button>
        </div>

        {/* why */}
        <div className="tu-right">
          <div className="tu-rev" style={{ transitionDelay: "90ms" }}>
            <div className="tu-eyebrow">
              <span className="tu-eyebrow-line" />
              <span className="tu-eyebrow-t">
                Why NYC brands send their brief
              </span>
            </div>
            <h2 className="tu-h2">
              You won't get a sales deck. You'll get a matched NYC shortlist.
            </h2>
          </div>
          {BENEFITS.map((b, i) => (
            <div
              key={b.t}
              className="tu-item tu-rev"
              style={{ transitionDelay: 170 + i * 90 + "ms" }}
            >
              <span className="tu-check" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <div>
                <h3 className="tu-item-t">{b.t}</h3>
                <p className="tu-item-d">{b.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="tu-bottombar" aria-hidden="true" />
    </section>
  );
}
