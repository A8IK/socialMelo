import { useEffect, useRef, useState } from "react";
import "./InfluencerMarketingWhySocialMelo.css";

const CARDS = [
  {
    num: "01",
    title: "Verified Network, Not a Marketplace",
    body: "Every creator on our roster is vetted for audience quality, engagement authenticity, and brand safety. Direct relationships, enforceable contracts, faster shortlists.",
  },
  {
    num: "02",
    title: "Audience Match, Not Follower Count",
    body: "We match by interest, geography, intent, and audience-quality scores, not follower size. A 50K creator with the right audience beats a 500K creator with the wrong one.",
  },
  {
    num: "03",
    title: "Performance Data Built In",
    body: "Real-time dashboards. Reach, engagement, CTR, conversion, and revenue per creator. Tied to your Meta and Google ads via UTMs. Renew what worked.",
  },
  {
    num: "04",
    title: "Legal Compliance Handled",
    body: "FTC disclosure clauses, usage rights, image rights, and industry-specific compliance (FDA, FCA, SEC), all built into our contract templates. No surprises.",
  },
  {
    num: "05",
    title: "One Team, End-to-End",
    body: "Strategy, discovery, contracts, content approvals, paid amplification, reporting, all on the same team. Same Slack channel from brief to final report.",
  },
];

export default function SocialMeloWhy() {
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
    <section ref={ref} className={`wy-section${revealed ? " wy-in" : ""}`}>
      <div className="wy-wrap">
        <div className="wy-head">
          <p className="wy-eyebrow">
            <span className="wy-rule" />
            Why SocialMelo
          </p>
          <h2 className="wy-title">
            What makes us different from a <br className="wy-br" />
            creator marketplace or a <br className="wy-br" />
            generalist agency.
          </h2>
          <p className="wy-lead">
            Most influencer agencies broker creators from third-party
            marketplaces. We don't. Here's what that means for your campaigns.
          </p>
        </div>

        <div className="wy-grid">
          {CARDS.map((c) => (
            <article className="wy-card" key={c.num}>
              <span className="wy-badge" aria-hidden="true">
                {c.num}
              </span>
              <h3 className="wy-card-title">{c.title}</h3>
              <p className="wy-card-body">{c.body}</p>
            </article>
          ))}
        </div>

        <div className="wy-cta-wrap">
          <button type="button" className="wy-cta">
            <span className="wy-accent">Get a Custom Quote →</span>
          </button>
        </div>
      </div>
    </section>
  );
}
