import { useEffect, useRef, useState } from "react";
import "./InfluencerMarketingWorkWithSocialMelo.css";

export default function SocialMeloAttention() {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  // Shared Krub injection (id shared across all SocialMelo sections)
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

  // Scroll reveal (IntersectionObserver, fires once)
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
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className={`wa-section${revealed ? " wa-in" : ""}`}>
      <div className="wa-grid">
        <div className="wa-col wa-col-left">
          <p className="wa-eyebrow">
            <span className="wa-rule" />
            Work with SocialMelo
          </p>
          <h2 className="wa-headline">
            Get the attention and trust of new audiences, without giving up
            creative control.
          </h2>
        </div>

        <div className="wa-col wa-col-right">
          <p className="wa-body">
            <span className="wa-dropcap">E</span>very brand has a customer who
            follows someone they respect. Our job is finding that creator,
            structuring a partnership that respects both sides, and shipping
            content that actually moves the needle on your business.
          </p>
          <p className="wa-body">
            We've spent 8+ years building a verified creator network, not just a
            database. Every creator passes audience-quality screening,
            engagement-rate verification, and brand-safety review before they
            ever appear in a shortlist. You see the data, approve the picks, and
            stay in control of the brief.
          </p>
          <p className="wa-body">
            And unlike traditional media, you'll have real numbers behind every
            dollar: reach, engagement, click-through, and revenue attribution
            per creator. Renew the ones that worked, drop the ones that didn't.
            No vanity metrics, no fluff.
          </p>
          <a className="wa-link" href="#contact">
            Get in touch <span className="wa-arrow">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
