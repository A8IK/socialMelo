import { useEffect } from "react";
import "./ServiceCoreFeaturedVerticals.css";

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap";

const ICON = {
  plane: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  ),
  contrast: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 18a6 6 0 0 0 0-12z" fill="currentColor" />
    </svg>
  ),
  diamond: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z" />
    </svg>
  ),
  dollar: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
};

const GRAD = {
  coral: "linear-gradient(135deg,#FBAA7C 0%,#E97E72 55%,#D86E7A 100%)",
  purple: "linear-gradient(140deg,#3D2278 0%,#2C1B5C 100%)",
  finance: "linear-gradient(135deg,#2D1963 0%,#6A3E84 52%,#C26C7E 100%)",
};

// images

const ROWS = [
  {
    side: "left",
    grad: "coral",
    icon: ICON.plane,
    img: "/public/SocialMelo_for_Travel.png",
    eyebrow: "SocialMelo for Travel",
    title: "Hotels, airlines, destinations & travel platforms.",
    desc: "Travel-cleared shoot capability and visa-ready creators for global campaigns. We've run launch campaigns for boutique hotels, regional tourism boards, and global OTAs.",
    cta: "See Travel Campaigns",
  },
  {
    side: "right",
    grad: "purple",
    icon: ICON.contrast,
    img: "/public/SocialMelo_for_Automotive.png",
    eyebrow: "SocialMelo for Automotive",
    title: "OEMs, dealerships, parts & EVs.",
    desc: "Creators with verified automotive audiences and brand-safe content history. From product launches to EV-category education campaigns.",
    cta: "See Automotive Campaigns",
  },
  {
    side: "left",
    grad: "coral",
    icon: ICON.diamond,
    img: "/public/SocialMelo_for_CPG.png",
    eyebrow: "SocialMelo for CPG",
    title: "FMCG brands, household goods, snacks.",
    desc: "UGC-heavy strategies built for shelf conversion and retail-media amplification. We've run programs for grocery launches, Amazon-first brands, and global FMCG portfolios.",
    cta: "See CPG Campaigns",
  },
  {
    side: "right",
    grad: "finance",
    icon: ICON.dollar,
    img: "/public/SocialMelo_for_Finance.png",
    eyebrow: "SocialMelo for Finance",
    title: "Fintech, neobanks, crypto, investing platforms.",
    desc: "SEC and FCA-compliant creator content with built-in legal review. We've activated creators for neobank launches, crypto-exchange campaigns, and investing-app acquisition.",
    cta: "See Finance Campaigns",
  },
];

export default function SocialMeloVerticals() {
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
    <section className="fv">
      <div className="fv-wrap">
        <div className="fv-head">
          <div className="fv-eyebrow">
            <span className="fv-line" />
            <span className="fv-eyebrow-t">Featured Verticals</span>
          </div>
          <h2 className="fv-h2">Built for the verticals we know best.</h2>
        </div>

        {ROWS.map((r) => (
          <div
            key={r.cta}
            className={"fv-row" + (r.side === "right" ? " rev" : "")}
          >
            <div className="fv-panel" style={{ background: GRAD[r.grad] }}>
              {r.img ? (
                <img
                  className="fv-icon-img"
                  src={r.img}
                  alt={r.alt || r.eyebrow}
                  style={r.iconH ? { height: r.iconH } : undefined}
                  draggable="false"
                />
              ) : (
                r.icon
              )}
            </div>
            <div className="fv-text">
              <div className="fv-cap">
                <span className="fv-cap-line" />
                <span className="fv-cap-t">{r.eyebrow}</span>
              </div>
              <h3 className="fv-title">{r.title}</h3>
              <p className="fv-desc">{r.desc}</p>
              <a href="#" className="fv-cta">
                {r.cta} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
