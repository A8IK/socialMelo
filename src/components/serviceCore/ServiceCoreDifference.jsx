import { useEffect } from "react";
import "./ServiceCoreDifference.css";

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap";

const ITEMS = [
  {
    num: "01",
    title: "Two-Sided Platform, Not Just an Agency",
    desc: "SocialMelo is both an agency and a platform — the creators we work with are on our roster, not bought from a third-party marketplace. Faster shortlists, direct relationships, enforceable contract terms. Most agencies broker creators. We onboard them.",
  },
  {
    num: "02",
    title: "Real Data, Not Sales-Deck Numbers",
    desc: "Every campaign has a real-time dashboard tracking reach, engagement, click-through, and revenue attribution. Weekly emails during live campaigns. Post-campaign reports tie spend to revenue per creator. You renew the creators that actually worked.",
  },
  {
    num: "03",
    title: "Transparent Pricing, No Markup Games",
    desc: "We publish budget tiers (Starter / Growth / Enterprise) on every campaign page. No hidden markup on creator fees — you see what the creator gets and what our fee is. Brands waste a lot of money on opaque-bid agency pricing; we don't operate that way.",
  },
  {
    num: "04",
    title: "One Team, End-to-End",
    desc: "Strategy, creator discovery, contracts, content approvals, paid amplification, and reporting all sit on the same team. You don't get handed off from a strategist to an account manager to a media buyer. Same Slack channel for the whole campaign.",
  },
];

export default function SocialMeloDifference() {
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
    <section className="od">
      <div className="od-wrap">
        <div className="od-head">
          <div className="od-eyebrow">
            <span className="od-line" />
            <span className="od-eyebrow-t">Our Difference</span>
          </div>
          <h2 className="od-h2">
            How we're different from a typical influencer agency.
          </h2>
        </div>

        <div className="od-list">
          {ITEMS.map((it) => (
            <div key={it.num} className="od-item">
              <span className="od-num">{it.num}</span>
              <div className="od-body">
                <h3 className="od-title">{it.title}</h3>
                <p className="od-desc">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
