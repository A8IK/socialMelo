import { useEffect } from "react";

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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap');

        .bkhero {
          --peach:#FFAF7B; --rose:#D76D77; --purple:#3A1C71;
          --brand-gradient: linear-gradient(135deg, #FFAF7B, #D76D77, #3A1C71);
          --brand-gradient-soft: linear-gradient(135deg, #FFAF7B66, #D76D7766, #3A1C7166);
          --text:#2D1B69; --text-body:#3A1C71;
          --container:1200px;
          font-family:'Krub',system-ui,sans-serif;
          position:relative; overflow:hidden;
          background:var(--brand-gradient-soft); padding:60px 0 48px;
          color:var(--text-body);
        }
        .bkhero *,.bkhero *::before,.bkhero *::after { box-sizing:border-box; }
        .bkhero::before {
          content:""; position:absolute; inset:0; pointer-events:none;
          background:radial-gradient(ellipse at 10% 20%, rgba(255,175,123,0.20), transparent 50%),
                     radial-gradient(ellipse at 90% 80%, rgba(58,28,113,0.12), transparent 50%);
        }
        .bkhero-container { max-width:1920px; margin:0 auto; padding:0 32px; position:relative; z-index:2; }
        .bkhero-inner { max-width:760px; }

        .bkhero-eyebrow {
          font-size:12px; font-weight:600; letter-spacing:0.16em; text-transform:uppercase;
          color:var(--rose); display:inline-flex; align-items:center; gap:12px;
        }
        .bkhero-eyebrow::before { content:""; display:inline-block; width:28px; height:1.5px; background:var(--rose); }

        .bkhero h1 { font-size:clamp(34px,4.4vw,52px); color:var(--text); margin:18px 0 18px; font-weight:700; line-height:1.12; letter-spacing:-0.02em; }
        .bkhero-grad {
          background:var(--brand-gradient);
          -webkit-background-clip:text; background-clip:text;
          -webkit-text-fill-color:transparent; color:transparent; font-weight:700;
        }
        .bkhero-sub { font-size:1.125rem; color:var(--text-body); max-width:625px; margin-bottom:22px; line-height:1.6; }

        .bkhero-trust { display:flex; gap:24px; flex-wrap:wrap; }
        .bkhero-ht { display:flex; align-items:center; gap:8px; font-size:14px; color:var(--text-body); font-weight:500; }
        .bkhero-ht svg { width:18px; height:18px; stroke:var(--rose); flex-shrink:0; }

        @media (max-width:640px) {
          .bkhero { padding:44px 0 40px; }
          .bkhero-container { padding:0 20px; }
          .bkhero-inner { text-align:center; }
          .bkhero-eyebrow { justify-content:center; }
          .bkhero-sub { margin-left:auto; margin-right:auto; }
          .bkhero-trust { justify-content:center; }
        }
      `}</style>

      <div className="bkhero-container">
        <div className="bkhero-inner">
          <span className="bkhero-eyebrow">Free 30-minute strategy call</span>
          <h1>
            Book a creator strategy call.{" "}
            <span className="">Leave with a plan.</span>
            {/* <span className="bkhero-grad">Leave with a plan.</span> */}
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
