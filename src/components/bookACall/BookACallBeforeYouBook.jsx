import { useEffect, useRef } from "react";
import "./BookACallBeforeYouBook.css";

const CARDS = [
  {
    icon: (
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    ),
    h: "Is this a sales call?",
    p: "No. It is a working strategy session. We spend the time on your goals and which creators fit, not on pitching you a retainer. If there is a fit, we will talk next steps at the end. If there is not, you still leave with a usable direction.",
  },
  {
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </>
    ),
    h: "Do I need to prepare anything?",
    p: "Just bring your goal and a rough budget range if you have one. No brief required. If you have a product, target audience, or campaign in mind, mention it when you book and we will come prepared with relevant creators.",
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    h: "What if I'm not ready to buy?",
    p: "That is completely fine. Plenty of brands book this call while still planning a future quarter. We would rather build a relationship early and be top of mind when you are ready than push you into something before it makes sense.",
  },
];

export default function SocialMeloBookObjections() {
  const gridRef = useRef(null);

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

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = grid.querySelectorAll(".bko-card");
    if (!("IntersectionObserver" in window)) {
      cards.forEach((c) => c.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.classList.add("in");
          // Clear the stagger delay once revealed so hover stays snappy.
          window.setTimeout(() => {
            el.style.transitionDelay = "0s";
          }, 900);
          io.unobserve(el);
        });
      },
      { threshold: 0.15 },
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section className="bko">
      <div className="bko-container">
        <div className="bko-head">
          <span className="bko-eyebrow">Before you book</span>
          <h2>The honest answers to what you're probably wondering.</h2>
        </div>
        <div className="bko-grid" ref={gridRef}>
          {CARDS.map((c, i) => (
            <div
              className="bko-card"
              key={c.h}
              style={{ transitionDelay: `${i * 110}ms` }}
            >
              <div className="bko-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {c.icon}
                </svg>
              </div>
              <h3>{c.h}</h3>
              <p>{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
