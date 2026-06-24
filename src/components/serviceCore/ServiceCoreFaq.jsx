import { useEffect, useState } from "react";
import "./ServiceCoreFaq.css";

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap";

const FAQS = [
  {
    q: "What does SocialMelo actually do?",
    a: "SocialMelo runs end-to-end influencer marketing from creator discovery and brief writing through contracts, content production, paid amplification, and final reporting. We work across TikTok, Instagram, YouTube, Facebook, and Pinterest, in 30+ countries, for brands across CPG, finance, travel, beauty, fashion, and more.",
  },
  {
    q: "How is SocialMelo different from a marketplace like Aspire or Upfluence?",
    a: "Marketplaces are self-serve creator databases you do the discovery, outreach, contracts, and reporting yourself. SocialMelo is a full-service agency on top of our proprietary creator network. You get a dedicated team running every part of the campaign, and our creators are vetted directly (not scraped from public APIs).",
  },
  {
    q: "How much does a creator campaign cost?",
    a: "Campaign budgets range from $5K for single-creator UGC drops to $250K+ for multi-creator multi-platform launches. After a brief call, we ship a custom proposal within 48 hours with three budget tiers (Starter / Growth / Enterprise) so you can pick what fits.",
  },
  {
    q: "Can you handle a campaign end-to-end, or do I need to manage creators myself?",
    a: "Both options exist. Full-service: we handle every step from strategy to reporting that's the flagship Influencer Marketing Services offering. Self-serve: use our Marketplace to access the vetted creator database and run campaigns yourself. Most brands pick full-service for first campaigns, then move some work in-house once they know what works.",
  },
  {
    q: "Which platforms do you cover?",
    a: "TikTok, Instagram, YouTube, Facebook, and Pinterest are our core five with dedicated service pages. We also run campaigns on LinkedIn (for B2B brands), Snapchat, and emerging platforms like XiaoHongShu for APAC campaigns request these directly via the contact form.",
  },
  {
    q: "Do you work with agencies as well as direct brands?",
    a: "Yes, agency partnerships are a meaningful portion of our work. We white-label creator discovery, vetting, contract handling, and reporting for full-service marketing agencies that don't want to build an in-house influencer practice. Reach out via the form, select Agency as your account type, and we'll send you our agency partnership terms.",
  },
  {
    q: "How fast can a campaign launch?",
    a: "Standard timeline is 21 days from brief call to live content. Faster is possible for time-sensitive launches (we've shipped 7-day turnarounds for product drops and PR moments), but standard pacing gives creators enough lead time to ship quality content without rushing.",
  },
];

const Chevron = () => (
  <svg viewBox="0 0 13 9" fill="currentColor" aria-hidden="true">
    <path d="M0 0h13L6.5 9z" />
  </svg>
);

export default function SocialMeloIGFAQ() {
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
          <h2 className="ifq-h2">
            Questions buyers ask before
            {/* <br className="ifq-br" /> */} signing.
          </h2>
          {/* <p className="ifq-sub">
            Everything you need to know about our Instagram downloader tool
          </p> */}
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
