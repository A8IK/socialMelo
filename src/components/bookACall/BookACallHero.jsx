import { useEffect } from "react";
import "./BookACallHero.css";

const TRUST = [
  "Replies within 1 business day",
  "No commitment to proceed",
  "Talk to a strategist, not a bot",
];

export default function SocialMeloBookHero() {
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

  const Check = () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  return (
    <section className="bkhero">
      <div className="bkhero-container">
        <div className="bkhero-inner">
          <span className="bkhero-eyebrow">Free 30-minute strategy call</span>
          <h1>
            Book a creator strategy call.{" "}
            <span className="">Leave with a plan.</span>
          </h1>
          <p className="bkhero-sub">
            In 30 minutes you will get a matched creator direction, a realistic
            budget range, and an honest read on whether influencer marketing
            fits your goal. No slide deck, no hard sell. If we are not the right
            partner, we will tell you.
          </p>
          <div className="bkhero-trust">
            {TRUST.map((t) => (
              <div className="bkhero-ht" key={t}>
                <Check />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
