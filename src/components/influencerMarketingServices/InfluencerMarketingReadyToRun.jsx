import { useEffect, useRef, useState } from "react";
import "./InfluencerMarketingReadyToRun.css";

export default function SocialMeloCTA() {
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
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className={`cta-section${revealed ? " cta-in" : ""}`}>
      <h2 className="cta-title">
        Ready to run influencer campaigns that actually convert?
      </h2>
      <p className="cta-sub">
        Get a custom proposal in 48 hours, built around your brand, your
        audience, and your budget.
      </p>
      <div className="cta-btn-wrap">
        <button type="button" className="cta-btn">
          <span className="cta-accent">Get a Custom Quote →</span>
        </button>
      </div>
    </section>
  );
}
