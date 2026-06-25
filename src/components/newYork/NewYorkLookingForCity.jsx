import { useEffect } from "react";

const CITIES = [
  {
    city: "Los Angeles",
    country: "United States · CA",
    cta: "Explore LA →",
    href: "/services/influencer-marketing/los-angeles",
  },
  {
    city: "Chicago",
    country: "United States · IL",
    cta: "Explore Chicago →",
    href: "/services/influencer-marketing/chicago",
  },
  {
    city: "Miami",
    country: "United States · FL",
    cta: "Explore Miami →",
    href: "/services/influencer-marketing/miami-fl",
  },
  {
    city: "London",
    country: "United Kingdom",
    cta: "Explore London →",
    href: "/services/influencer-marketing/london-england",
  },
];

export default function SocialMeloNYCRelated() {
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
    <section className="nyr">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap');

        .nyr {
          --rose:#D76D77; --purple:#3A1C71;
          --bg-warm:#FFF7F2; --surface:#FFFFFF;
          --text:#2D1B69;
          --border:rgba(58,28,113,0.10);
          --shadow:0 4px 15px rgba(58,28,113,0.10);
          --radius:20px; --container:1200px;
          font-family:'Krub',system-ui,sans-serif;
          background:var(--bg-warm); padding:80px 0; color:#3A1C71;
        }
        .nyr *,.nyr *::before,.nyr *::after { box-sizing:border-box; }
        .nyr a { color:inherit; text-decoration:none; }
        .nyr-container { max-width:var(--container); margin:0 auto; padding:0 32px; }

        .nyr-head { display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:32px; flex-wrap:wrap; gap:16px; }
        .nyr-head h3 {
          font-size:24px; margin:0; font-weight:700; letter-spacing:-0.02em;
          background:linear-gradient(90deg, #743974 0%, #9c4b74 18%, #bc5b76 33%, #d96c76 48%, #e37b76 62%, #eb8877 77%, #f09478 100%);
          -webkit-background-clip:text; background-clip:text;
          -webkit-text-fill-color:transparent; color:transparent;
        }
        .nyr-head a { color:var(--purple); font-weight:600; font-size:14px; }

        .nyr-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
        .nyr-card {
          background:var(--surface); border:1px solid var(--border); border-radius:var(--radius);
          padding:24px; transition:all 0.25s ease;
        }
        .nyr-card:hover { border-color:var(--rose); transform:translateY(-3px); box-shadow:var(--shadow); }
        .nyr-city { font-weight:700; color:var(--text); font-size:18px; margin-bottom:4px; }
        .nyr-country { font-size:12px; color:var(--rose); font-weight:600; margin-bottom:12px; }
        .nyr-arrow { color:var(--purple); font-weight:600; font-size:13px; }

        @media (max-width:1024px) { .nyr-grid { grid-template-columns:repeat(2,1fr); } }
        @media (max-width:640px) {
          .nyr-container { padding:0 20px; }
          .nyr-grid { grid-template-columns:1fr; }
        }
        @media (prefers-reduced-motion: reduce) { .nyr-card { transition:none; } }
      `}</style>

      <div className="nyr-container">
        <div className="nyr-head">
          <h3>Looking for another US city?</h3>
          <a href="/services">See all 27 locations →</a>
        </div>
        <div className="nyr-grid">
          {CITIES.map((c) => (
            <a href={c.href} className="nyr-card" key={c.city}>
              <div className="nyr-city">{c.city}</div>
              <div className="nyr-country">{c.country}</div>
              <div className="nyr-arrow">{c.cta}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
