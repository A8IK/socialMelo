import { useEffect } from "react";
import "./ServiceCoreHero.css";

import CampaignsImg from "../../assets/images/CampaignsCard.png";
import GeosImg from "../../assets/images/GeosCard.png";
import IndustriesImg from "../../assets/images/IndustriesCard.png";
import PlatformsImg from "../../assets/images/PlatformsCard.png";

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap";

// images
const CARDS = [
  {
    l: "C",
    name: "Campaigns",
    sub: "6 services",
    delay: "-4s",
    img: CampaignsImg,
  },
  {
    l: "P",
    name: "Platforms",
    sub: "5 services",
    delay: "-6s",
    img: PlatformsImg,
    big: true,
  },
  {
    l: "I",
    name: "Industries",
    sub: "6 services",
    delay: "0s",
    img: IndustriesImg,
    big: true,
  },
  {
    l: "G",
    name: "Geos",
    sub: "27 cities",
    delay: "-2s",
    img: GeosImg,
  },
];

const STATS = [
  // { n: "44", l: "Service pages" },
  { n: "10,000+", l: "Verified creators" },
  { n: "30+", l: "Countries served" },
];

export default function SocialMeloHero() {
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
    <>
      <section className="smh-hero">
        <div className="smh-wrap">
          <div className="smh-grid">
            {/* Left column */}
            <div>
              {/* <div className="smh-eyebrow">
                <span className="smh-line" />
                <span className="smh-eyebrow-text">What We Do</span>
              </div> */}

              {/* Desktop = 2 lines (break after "Does"). Mobile = 3 lines
                  (breaks after "SocialMelo" and after "and"). The breaks toggle
                  by viewport via smh-br-d / smh-br-m. */}
              <h1 className="smh-h1">
                Everything SocialMelo <br className="smh-br-m" />
                Does <br className="smh-br-d" />
                for Brands and <br className="smh-br-m" />
                Creators.
              </h1>

              <p className="smh-p">
                From single-creator UGC drops to year-long ambassador programs
                across TikTok, Instagram, YouTube, and more, we run every part
                of the campaign.
              </p>

              <div className="smh-btns">
                <a href="#contact" className="smh-btn smh-btn-white">
                  <span className="smh-accent">Request a Custom Proposal</span>
                </a>
                {/* <a href="#services" className="smh-btn smh-btn-outline">
                  Browse Services
                </a> */}
              </div>

              <div className="smh-divider" />

              <div className="smh-stats">
                {STATS.map((s) => (
                  <div key={s.l}>
                    <div className="smh-stat-n">{s.n}</div>
                    <div className="smh-stat-l">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column: 2x2 cards + center disc */}
            <div className="smh-cards-wrap">
              <div className="smh-cards">
                {CARDS.map((c) => (
                  <div
                    key={c.l}
                    className="smh-card"
                    style={{ animationDelay: c.delay }}
                  >
                    <span
                      className={
                        "smh-badge" +
                        (c.img ? " has-img" : "") +
                        (c.big ? " is-185" : "")
                      }
                    >
                      {c.img ? (
                        <img
                          className="smh-badge-img"
                          src={c.img}
                          alt={c.alt || c.name}
                          draggable="false"
                        />
                      ) : (
                        c.l
                      )}
                    </span>
                    <div>
                      <div className="smh-card-name">{c.name}</div>
                      <div className="smh-card-sub">{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="smh-disc">
                <span className="smh-disc-n">44</span>
                <span className="smh-disc-l">SERVICES</span>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
