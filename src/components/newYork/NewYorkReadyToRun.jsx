import { useEffect } from "react";
import "./NewYorkReadyToRun.css";

export default function SocialMeloNYCFinalCTA() {
  useEffect(() => {
    if (!document.getElementById("smh-fonts")) {
      const l = document.createElement("link");
      l.id = "smh-fonts";
      l.rel = "stylesheet";
      l.href =
        "https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap";
      document.head.appendChild(l);
    }
  }, []);

  return (
    <section className="nyfc">
      <div className="nyfc-container">
        <h2>Ready to run an NYC creator campaign that converts?</h2>
        <p>
          Get a custom proposal in 48 hours, built around your brand, your NYC
          audience, and your budget.
        </p>
        <a href="#contact" className="nyfc-btn">
          <span>Get a Custom Quote →</span>
        </a>
      </div>
    </section>
  );
}
