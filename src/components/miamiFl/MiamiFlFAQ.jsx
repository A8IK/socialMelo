import { useEffect, useState } from "react";
import "./MiamiFlFAQ.css";

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap";

const FAQS = [
  {
    q: "Can I pick the exact creators I want?",
    a: "Yes. Browse the roster, tell us who you like, and we'll confirm availability and rates. We'll also suggest matches you might've missed based on audience-quality data. Sometimes a 50K creator with the right Miami audience outperforms a 350K account.",
  },
  {
    q: "Do you have creators across all of Miami?",
    a: "Yes, from South Beach and Wynwood to Brickell, Coral Gables, and Little Havana. South Beach and Wynwood are our deepest benches, but we can source creators across Miami-Dade, including bilingual and Spanish-first creators.",
  },
  {
    q: "Can you produce on-location shoots in Miami?",
    a: "Yes, store openings in the Design District, restaurant and nightlife launches, Miami Swim Week and Art Basel coverage, brand activations. Lead time is typically 5 to 7 business days after creator sign-off. For premium campaigns we can send an on-site producer.",
  },
  {
    q: "How much do Miami creators cost?",
    a: "Miami rates sit below New York and LA but above most of the South. Micro-creators (10K to 100K) typically $400 to $2,200 per post, mid-tier $2.2K to $9K, and top Miami accounts $9K+. Full campaigns range from $7K single-creator drops to $130K+ multi-creator launches. Each creator's starting rate is shown on their card.",
  },
  {
    q: "Are these creators actually available?",
    a: "The cards shown are a sample of our roster. Availability shifts week to week, so after your brief call we confirm which creators are open for your timeline and share the full matched roster of 540+.",
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
            Questions Miami brands ask before
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
