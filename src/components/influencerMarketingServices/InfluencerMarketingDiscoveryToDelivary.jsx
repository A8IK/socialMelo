import { useEffect, useRef, useState } from "react";
import "./InfluencerMarketingDiscoveryToDelivary.css";

export default function SocialMeloTagline() {
  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  // Shared Krub injection (id shared across all SocialMelo sections so it runs once)
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
    const el = sectionRef.current;
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
    <section
      ref={sectionRef}
      className={`tb-section${revealed ? " tb-in" : ""}`}
      aria-label="From discovery to delivery. Built to convert."
    >
      <h2 className="tb-headline">
        <span className="tb-line tb-line-one">From discovery to delivery.</span>
        <span className="tb-line tb-line-two">Built to convert.</span>
      </h2>
    </section>
  );
}
