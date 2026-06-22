import { useEffect, useRef, useState } from "react";
import "./InfluencerMarketingTrustedBy.css";

const CATEGORIES = [
  "All",
  "CPG",
  "Finance",
  "Travel",
  "Insurance",
  "Automotive",
  "Alcohol & Spirits",
];

const BRANDS = [
  { name: "NESTLÉ", cat: "CPG" },
  { name: "P&G", cat: "CPG" },
  { name: "REVOLUT", cat: "Finance" },
  { name: "N26", cat: "Finance" },
  { name: "BOOKING", cat: "Travel" },
  { name: "AIRBNB", cat: "Travel" },
  { name: "UNILEVER", cat: "CPG" },
  { name: "LEMONADE", cat: "Insurance" },
  { name: "BMW", cat: "Automotive" },
  { name: "FORD", cat: "Automotive" },
  { name: "ABSOLUT", cat: "Alcohol & Spirits" },
  { name: "JÄGER", cat: "Alcohol & Spirits" },
];

export default function SocialMeloBrands() {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [active, setActive] = useState("All");

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
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const shown =
    active === "All" ? BRANDS : BRANDS.filter((b) => b.cat === active);

  return (
    <section ref={ref} className={`bt-section${revealed ? " bt-in" : ""}`}>
      <div className="bt-wrap">
        <div className="bt-head">
          <p className="bt-eyebrow">
            <span className="bt-rule" />
            Trusted by
          </p>
          <h2 className="bt-title">
            Brands that trust SocialMelo to run their creator campaigns.
          </h2>
        </div>

        <div
          className="bt-pills"
          role="group"
          aria-label="Filter brands by industry"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className="bt-pill"
              aria-pressed={active === cat}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="bt-grid" key={active}>
          {shown.map((b, i) => (
            <div
              className="bt-card"
              key={b.name}
              style={{ animationDelay: `${i * 35}ms` }}
            >
              {b.name}
            </div>
          ))}
        </div>

        {active !== "All" && (
          <div className="bt-cta-wrap" key={`cta-${active}`}>
            <button type="button" className="bt-cta">
              See {active} Campaigns{" "}
              <span className="bt-cta-arrow">&rarr;</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
