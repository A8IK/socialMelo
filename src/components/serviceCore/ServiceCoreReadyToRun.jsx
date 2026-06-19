import { useEffect } from "react";
import "./ServiceCoreReadyToRun.css";

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap";

export default function SocialMeloCTA() {
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
    <section className="cta">
      <div className="cta-wrap">
        <h2 className="cta-h2">
          Ready to run a campaign
          <br />
          that actually converts?
        </h2>
        <p className="cta-sub">
          Get a custom proposal in 48 hours, built around your brand, your
          audience, and your budget.
        </p>
        <a href="#" className="cta-btn">
          <span className="cta-btn-text">Custom</span>
        </a>
      </div>
    </section>
  );
}
