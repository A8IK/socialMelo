import { useEffect } from "react";
import "./BookACallPreferToSend.css";

export default function SocialMeloBookAlt() {
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
    <section className="bka">
      <div className="bka-container">
        <h3>Prefer to send details first?</h3>
        <p>
          If you would rather share your campaign in writing and have us come
          back with a shortlist, skip the call and send a brief instead. We
          reply within one business day.
        </p>
        <div className="bka-links">
          <a href="/contact" className="bka-btn bka-btn-outline">
            Send a Brief Instead
          </a>
          <a
            href="mailto:hello@socialmelo.com"
            className="bka-btn bka-btn-solid"
          >
            Email the Team
          </a>
        </div>
      </div>

      <div className="bka-bottombar" aria-hidden="true" />
    </section>
  );
}
