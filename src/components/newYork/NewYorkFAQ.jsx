import { useEffect, useState } from "react";
import "./NewYorkFAQ.css";

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap";

const FAQS = [
  {
    q: "Can I pick the exact creators I want?",
    a: "Yes. Browse the roster, tell us who you like, and we'll confirm availability and rates. We'll also suggest matches you might've missed based on audience-quality data sometimes a 90K creator with the right NYC audience outperforms a 600K account.",
  },
  {
    q: "Do you have creators in all five boroughs?",
    a: "Yes, Manhattan, Brooklyn, Queens, Bronx, and Staten Island. Manhattan and Brooklyn are our deepest benches, but we can source creators for neighborhood-specific campaigns across the city.",
  },
  {
    q: "Can you produce on-location shoots in NYC?",
    a: "Yes, store openings, restaurant launches, Fashion Week activations, event coverage. Lead time is typically 5-7 business days after creator sign-off. For premium campaigns we can send an on-site producer.",
  },
  {
    q: "How much do NYC creators cost?",
    a: "NYC rates run higher than the US average. Micro-creators (10K-100K) typically $500-$3,000 per post, mid-tier $3K-$15K, and top NYC accounts $15K+. Full campaigns range from $10K single-creator drops to $250K+ multi-creator launches. Each creator's starting rate is shown on their card.",
  },
  {
    q: "Are these creators actually available?",
    a: "The cards shown are a sample of our roster. Availability shifts week to week, so after your brief call we confirm which creators are open for your timeline and share the full matched roster of 850+.",
  },
  // {
  //   q: "Do you work with agencies as well as direct brands?",
  //   a: "Yes, agency partnerships are a meaningful portion of our work. We white-label creator discovery, vetting, contract handling, and reporting for full-service marketing agencies that don't want to build an in-house influencer practice. Reach out via the form, select Agency as your account type, and we'll send you our agency partnership terms.",
  // },
  // {
  //   q: "How fast can a campaign launch?",
  //   a: "Standard timeline is 21 days from brief call to live content. Faster is possible for time-sensitive launches (we've shipped 7-day turnarounds for product drops and PR moments), but standard pacing gives creators enough lead time to ship quality content without rushing.",
  // },
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
