import { useEffect, useState } from "react";
import "./InfluencerMarketingFaq.css";

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap";

const FAQS = [
  {
    q: "How much does influencer marketing cost?",
    a: "Campaign budgets range from $5K for a single-creator UGC drop to $250K+ for multi-creator, multi-platform launches. Cost depends on creator tier (nano-creators start around $200/post; macro-creators can run $50K+ per post), content count, exclusivity terms, and paid amplification. After a 30-minute brief call we ship a custom proposal within 48 hours with three budget tiers (Starter / Growth / Enterprise) so you can pick what fits.",
  },
  {
    q: "How do you measure influencer marketing ROI?",
    a: "We track reach, engagement, CTR, conversions, and revenue attribution per creator via UTMs and discount codes. Every campaign has a real-time dashboard. Post-campaign reports tie spend to outcome, so you'll know which creators converted, which didn't, and what to renew next quarter. No vanity metrics, no fluff.",
  },
  {
    q: "What is an influencer marketing audit, and do I need one?",
    a: "A free audit reviews your past creator campaigns, identifies what worked and what didn't, and benchmarks your performance against competitors. Useful if you've run influencer campaigns before and want to understand what to keep or change. Not required for first-time buyers, we can go straight to strategy.",
  },
  {
    q: "How do you handle FTC disclosure and legal compliance?",
    a: "Every creator contract includes FTC disclosure clauses (#ad, #sponsored placement rules) and we monitor live posts for compliance. For regulated industries we layer in additional review: FDA for supplements and beauty, FCA/SEC for finance and crypto, TTB/ASA for alcohol. Compliance review is built into the workflow, not bolted on after the fact.",
  },
  {
    q: "What's an image rights agreement and why does it matter?",
    a: "When a creator posts content featuring your product, they technically own the rights to that content. An image rights agreement gives you permission to repurpose the content in your paid ads, email, website, and retail, long after the original post is live. We negotiate these rights upfront on every campaign so you're not paying twice for the same content.",
  },
  {
    q: "How is SocialMelo different from a marketplace like Aspire or Upfluence?",
    a: "Marketplaces are self-serve creator databases: you do the discovery, outreach, contracts, and reporting yourself. SocialMelo is a full-service agency on top of our proprietary creator network. You get a dedicated team running every part of the campaign, and our creators are vetted directly (not scraped from public APIs). Faster, cleaner, but more hands-on than a marketplace.",
  },
  {
    q: "How fast can a campaign launch from first brief call?",
    a: "Standard timeline is 21 days from brief call to live content. Faster is possible for time-sensitive launches (we've shipped 7-day turnarounds for product drops and PR moments), but the standard timeline gives creators enough lead time to ship quality content without rushing. Strategy in week 1, shortlists in week 2, contracts and content production in week 3.",
  },
];

const Chevron = () => (
  <svg viewBox="0 0 13 9" fill="currentColor" aria-hidden="true">
    <path d="M0 0h13L6.5 9z" />
  </svg>
);

export default function SocialMeloIMFAQ() {
  const [open, setOpen] = useState(0);

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
    <section className="ifq">
      <div className="ifq-wrap">
        <div className="ifq-head">
          <div className="ifq-eyebrow">
            <span className="ifq-eyebrow-line" />
            <span className="ifq-eyebrow-text">FAQs</span>
          </div>
          <h2 className="ifq-h2">Questions buyers ask before signing.</h2>
        </div>

        <div className="ifq-list">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={"ifq-item" + (isOpen ? " open" : "")}>
                <button
                  type="button"
                  className="ifq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="ifq-q-t">{f.q}</span>
                  <span className="ifq-chev">
                    <Chevron />
                  </span>
                </button>
                <div className="ifq-ans">
                  <div className="ifq-ans-inner">
                    <p className="ifq-a">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
