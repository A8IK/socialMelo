import { useEffect, useState } from "react";
import RazuTasneemImg from "../../assets/images/tasnim-abedeen-raju.jpg";

const AGENDAS = {
  brand: {
    title: "30 minutes, built around your campaign.",
    items: [
      [
        "1",
        "Your goal and audience",
        "We start with what you are trying to achieve and who you need to reach, so every creator suggestion is tied to a real outcome.",
      ],
      [
        "2",
        "Which creators fit",
        "We talk through the kind of creators, niches, and platforms that match your brand, with real examples from our roster.",
      ],
      [
        "3",
        "Budget and timeline",
        "A realistic range for what your campaign would cost and how fast we could go from brief to live content.",
      ],
      [
        "4",
        "An honest fit read",
        "Whether influencer marketing, and SocialMelo specifically, is the right move for you right now. If it is not, we say so.",
      ],
    ],
  },
  agency: {
    title: "30 minutes, built around your client.",
    items: [
      [
        "1",
        "You and your goals",
        "Tell us about your niche, your audience, and the brand work you want, so we can talk specifics, not generalities.",
      ],
      [
        "2",
        "How SocialMelo works for creators",
        "Joining is free. You set your own rates and pay a small fee only when a brand books and pays you. We walk you through the whole flow.",
      ],
      [
        "3",
        "Rates and getting booked",
        "How brands find and book you on SocialMelo, what makes a profile convert, and how to price so you land the right briefs.",
      ],
      [
        "4",
        "An honest fit read",
        "Whether SocialMelo is the right platform for where you are right now. If we are not a fit, we will point you in a better direction.",
      ],
    ],
  },
};

const PROOF = [
  { pn: "30+", pl: "Countries with creators" },
  { pn: "48h", pl: "To a matched shortlist" },
  { pn: "$0", pl: "Cost for the call" },
];

// Set the host headshot path here (leave "" to show the RT initials fallback).
const HOST_IMG = RazuTasneemImg;

const SLOTS = [
  "9:00 am",
  "9:30 am",
  "10:30 am",
  "11:00 am",
  "1:00 pm",
  "2:30 pm",
  "3:00 pm",
  "4:00 pm",
  "4:30 pm",
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const daysInMonth = (y, m) => new Date(y, m + 1, 0).getDate();
const firstWeekday = (y, m) => new Date(y, m, 1).getDay(); // 0 = Sun
// Availability rule for the mock: every day is open and selectable.
const isAvail = () => true;
const firstAvailDay = (y, m) => {
  const dim = daysInMonth(y, m);
  for (let d = 1; d <= dim; d++) if (isAvail(y, m, d)) return d;
  return null;
};

export default function SocialMeloBookBooking() {
  const [persona, setPersona] = useState("brand");
  const [viewYear, setViewYear] = useState(2026);
  const [viewMonth, setViewMonth] = useState(5); // June (0-indexed)
  const [selectedDay, setSelectedDay] = useState(12);
  const [selectedSlot, setSelectedSlot] = useState("9:30 am");

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

  const agenda = AGENDAS[persona];

  const changeMonth = (dir) => {
    let m = viewMonth + dir;
    let y = viewYear;
    if (m < 0) {
      m = 11;
      y -= 1;
    } else if (m > 11) {
      m = 0;
      y += 1;
    }
    setViewYear(y);
    setViewMonth(m);
    setSelectedDay(firstAvailDay(y, m));
  };

  // Build the day grid: leading blanks so the 1st lands on its weekday.
  const lead = firstWeekday(viewYear, viewMonth);
  const total = daysInMonth(viewYear, viewMonth);
  const cells = [];
  for (let i = 0; i < lead; i++) cells.push(null);
  for (let d = 1; d <= total; d++) cells.push(d);

  const selectedLabel =
    selectedDay != null
      ? `${WEEKDAYS[new Date(viewYear, viewMonth, selectedDay).getDay()]}, ${MONTHS[viewMonth]} ${selectedDay}`
      : "Select a date";

  return (
    <section className="bkb" id="book">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap');

        .bkb {
          --peach:#FFAF7B; --rose:#D76D77; --purple:#3A1C71; --white:#FFFFFF;
          --brand-gradient: linear-gradient(135deg, #FFAF7B, #D76D77, #3A1C71);
          --brand-gradient-wash: linear-gradient(135deg, #FFAF7B14, #D76D7714, #3A1C7114);
          --bg:#FFFCFB; --bg-warm:#FFF7F2; --surface:#FFFFFF;
          --text:#2D1B69; --text-body:#3A1C71; --text-muted:#6B5B83; --text-faint:#9387AA;
          --border:rgba(58,28,113,0.10); --border-2:rgba(58,28,113,0.18);
          --shadow-sm:0 2px 8px rgba(58,28,113,0.06); --shadow-md:0 6px 20px rgba(58,28,113,0.18);
          --radius:20px; --radius-lg:28px; --pill:50px; --container:1200px;
          font-family:'Krub',system-ui,sans-serif;
          display:block; padding:64px 0 90px; background:var(--bg); position:relative;
          color:var(--text-body);
        }
        .bkb *,.bkb *::before,.bkb *::after { box-sizing:border-box; }
        .bkb button { font-family:inherit; cursor:pointer; border:none; background:none; color:inherit; }
        .bkb-container { max-width:var(--container); margin:0 auto; padding:0 32px; }

        .bkb-grid { display:grid; grid-template-columns:0.85fr 1.15fr; gap:48px; align-items:start; }

        .bkb-eyebrow {
          font-size:12px; font-weight:600; letter-spacing:0.16em; text-transform:uppercase;
          color:var(--rose); display:inline-flex; align-items:center; gap:12px; margin-left:7px;
        }
        .bkb-eyebrow::before { content:""; display:inline-block; width:28px; height:1.5px; background:var(--rose); }
        .bkb-panel-eyebrow { margin-bottom:18px; }

        .bkb-toggle { display:inline-flex; background:var(--bg-warm); border:1px solid var(--border); border-radius:var(--pill); padding:5px; margin-bottom:32px; }
        .bkb-toggle button { padding:9px 22px; border-radius:var(--pill); font-size:14px; font-weight:600; color:var(--text-muted); transition:all 0.2s ease; }
        .bkb-toggle button.active { background:var(--purple); color:var(--white); box-shadow:var(--shadow-sm); }

        .bkb-left h2 { font-size:clamp(26px,3vw,34px); line-height:1.2; margin:0 0 28px; font-weight:700; letter-spacing:-0.02em; background:linear-gradient(90deg,#743974 0%,#9c4b74 18%,#bc5b76 33%,#d96c76 48%,#e37b76 62%,#eb8877 77%,#f09478 100%); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; color:transparent; }

        .bkb-agenda { list-style:none; padding:0; margin:0 0 40px; }
        .bkb-agenda li { display:flex; gap:16px; align-items:flex-start; padding:16px 0; border-bottom:1px solid var(--border); }
        .bkb-agenda li:last-child { border-bottom:none; }
        .bkb-ag-num { width:30px; height:30px; border-radius:50%; background:var(--brand-gradient-wash); color:var(--purple); display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:700; flex-shrink:0; }
        .bkb-ag-text strong { display:block; color:var(--text); font-weight:700; font-size:15px; margin-bottom:3px; }
        .bkb-ag-text span { color:var(--text-muted); font-size:14px; line-height:1.55; }

        .bkb-host { background:var(--surface); border:1px solid var(--border); border-radius:var(--radius); padding:24px; box-shadow:var(--shadow-sm); display:flex; gap:18px; align-items:center; margin-bottom:32px; margin-top:18px; }
        .bkb-host-photo { width:64px; height:64px; border-radius:50%; background:var(--brand-gradient); flex-shrink:0; display:flex; align-items:center; justify-content:center; color:var(--white); font-size:22px; font-weight:700; box-shadow:0 4px 12px rgba(58,28,113,0.25); position:relative; overflow:hidden; }
        .bkb-host-img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border-radius:50%; }
        .bkb-host-name { font-size:16px; font-weight:700; color:var(--text); }
        .bkb-host-role { font-size:13px; color:var(--rose); font-weight:600; margin-bottom:6px; }
        .bkb-host-bio { font-size:13px; color:var(--text-muted); line-height:1.55; }

        .bkb-proof { display:flex; gap:28px; flex-wrap:wrap; padding-top:8px; }
        .bkb-pn { font-size:26px; font-weight:700; background:var(--brand-gradient); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; color:transparent; line-height:1; }
        .bkb-pl { font-size:13px; color:var(--text-muted); margin-top:5px; }

        /* booking panel */
        .bkb-panel { background:var(--surface); border:1px solid var(--border); border-radius:var(--radius-lg); box-shadow:var(--shadow-md); overflow:hidden; position:sticky; top:96px; }
        .bkb-panel-head { padding:24px 28px; border-bottom:1px solid var(--border); display:flex; align-items:center; justify-content:space-between; gap:16px; }
        .bkb-ph-left { display:flex; align-items:center; gap:14px; }
        .bkb-ph-icon { width:44px; height:44px; border-radius:12px; background:var(--brand-gradient); display:flex; align-items:center; justify-content:center; flex-shrink:0; box-shadow:0 4px 12px rgba(58,28,113,0.2); }
        .bkb-ph-icon svg { width:22px; height:22px; stroke:var(--white); }
        .bkb-ph-title { font-size:17px; font-weight:700; color:var(--text); }
        .bkb-ph-meta { font-size:13px; color:var(--text-muted); }
        .bkb-ph-dur { font-size:12px; font-weight:700; color:var(--purple); background:var(--brand-gradient-wash); padding:6px 12px; border-radius:var(--pill); white-space:nowrap; }

        .bkb-cal { padding:28px; }
        .bkb-cal-bar { display:flex; align-items:center; justify-content:space-between; margin-bottom:20px; }
        .bkb-cm-month { font-size:16px; font-weight:700; color:var(--text); }
        .bkb-cm-nav { display:flex; gap:8px; }
        .bkb-cm-nav button { width:32px; height:32px; border-radius:8px; border:1px solid var(--border); display:flex; align-items:center; justify-content:center; color:var(--text-muted); transition:all 0.15s ease; }
        .bkb-cm-nav button:hover { border-color:var(--purple); color:var(--purple); }
        .bkb-cm-nav svg { width:14px; height:14px; }
        .bkb-dow { display:grid; grid-template-columns:repeat(7,1fr); gap:6px; margin-bottom:8px; }
        .bkb-dow span { text-align:center; font-size:11px; font-weight:700; color:var(--text-faint); letter-spacing:0.06em; }
        .bkb-days { display:grid; grid-template-columns:repeat(7,1fr); gap:6px; }
        .bkb-day { aspect-ratio:1/1; display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:600; border-radius:10px; color:var(--text-faint); cursor:default; }
        .bkb-day.blank { background:none; cursor:default; }
        .bkb-day.muted { color:var(--border-2); }
        .bkb-day.avail { color:var(--purple); background:var(--brand-gradient-wash); cursor:pointer; transition:all 0.15s ease; }
        .bkb-day.avail:hover { background:var(--purple); color:var(--white); }
        .bkb-day.selected { background:var(--purple); color:var(--white); box-shadow:0 4px 10px rgba(58,28,113,0.3); }

        .bkb-slots { margin-top:24px; padding-top:24px; border-top:1px solid var(--border); }
        .bkb-cs-label { font-size:13px; font-weight:700; color:var(--text); margin-bottom:14px; }
        .bkb-cs-label span { color:var(--text-muted); font-weight:500; }
        .bkb-slot-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; }
        .bkb-slot { padding:11px 0; text-align:center; font-size:13px; font-weight:600; color:var(--purple); background:var(--surface); border:1.5px solid var(--border); border-radius:10px; cursor:pointer; transition:all 0.15s ease; }
        .bkb-slot:hover { border-color:var(--purple); }
        .bkb-slot.active { background:var(--purple); color:var(--white); border-color:var(--purple); }

        .bkb-confirm {
          margin-top:20px; width:100%; justify-content:center; display:inline-flex; align-items:center; gap:10px;
          padding:15px; font-size:15px; border-radius:var(--pill); font-weight:600;
          background:var(--purple); color:var(--white); border:2px solid var(--purple);
          transition:all 0.3s ease; cursor:pointer;
        }
        .bkb-confirm:hover { transform:translateY(-2px); box-shadow:0 6px 20px rgba(58,28,113,0.4); }
        .bkb-cal-note { text-align:center; font-size:12px; color:var(--text-faint); margin-top:16px; font-style:italic; }
        .bkb-powered { display:flex; align-items:center; justify-content:center; gap:6px; padding:14px; border-top:1px solid var(--border); font-size:12px; color:var(--text-faint); }
        .bkb-powered strong { color:var(--text-muted); font-weight:600; }

        .bkb-reassure { padding:18px 28px; background:var(--bg-warm); border-top:1px solid var(--border); display:flex; gap:10px; align-items:flex-start; }
        .bkb-reassure svg { width:18px; height:18px; stroke:var(--rose); flex-shrink:0; margin-top:2px; }
        .bkb-reassure p { font-size:13px; color:var(--text-muted); line-height:1.55; margin:0; }
        .bkb-reassure strong { color:var(--text); }

        @media (max-width:980px) {
          .bkb-grid { grid-template-columns:1fr; gap:40px; }
          .bkb-panel { position:static; order:-1; }
        }
        @media (max-width:640px) {
          .bkb { padding:48px 0 64px; }
          .bkb-container { padding:0 20px; }
          .bkb-slot-grid { grid-template-columns:repeat(2,1fr); }
          .bkb-toggle { display:flex; width:fit-content; margin-left:auto; margin-right:auto; }
          .bkb-panel-eyebrow { display:flex; justify-content:center; }
          .bkb-proof { justify-content:center; text-align:center; }
          .bkb-left h2 { text-align:center; }
        }
        @media (prefers-reduced-motion: reduce) {
          .bkb-toggle button, .bkb-cm-nav button, .bkb-day.avail, .bkb-slot, .bkb-confirm { transition:none; }
          .bkb-confirm:hover { transform:none; }
        }
      `}</style>

      <div className="bkb-container">
        <div className="bkb-grid">
          {/* LEFT: value + agenda */}
          <div className="bkb-left">
            <div className="bkb-toggle" role="tablist">
              <button
                type="button"
                className={persona === "brand" ? "active" : ""}
                role="tab"
                aria-selected={persona === "brand"}
                onClick={() => setPersona("brand")}
              >
                I'm a Brand
              </button>
              <button
                type="button"
                className={persona === "agency" ? "active" : ""}
                role="tab"
                aria-selected={persona === "agency"}
                onClick={() => setPersona("agency")}
              >
                I'm an Creator
              </button>
            </div>

            <span className="bkb-eyebrow bkb-panel-eyebrow">
              What we'll cover
            </span>
            <h2>{agenda.title}</h2>

            <ul className="bkb-agenda">
              {agenda.items.map((item) => (
                <li key={item[0]}>
                  <span className="bkb-ag-num">{item[0]}</span>
                  <div className="bkb-ag-text">
                    <strong>{item[1]}</strong>
                    <span>{item[2]}</span>
                  </div>
                </li>
              ))}
            </ul>

            <span className="bkb-eyebrow bkb-panel-eyebrow">
              Who you'll meet
            </span>
            <div className="bkb-host">
              <div className="bkb-host-photo">
                {HOST_IMG && (
                  <img
                    className="bkb-host-img"
                    src={HOST_IMG}
                    alt="Razu Tasneem"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                )}
                RT
              </div>
              <div className="bkb-host-info">
                <div className="bkb-host-name">Razu Tasneem</div>
                <div className="bkb-host-role">
                  Creator Strategy Lead, SocialMelo
                </div>
                <div className="bkb-host-bio">
                  Runs creator matching and campaign strategy across our brand
                  accounts. Swap this for a real headshot and bio before launch.
                </div>
              </div>
            </div>

            <div className="bkb-proof">
              {PROOF.map((p) => (
                <div className="bkb-proof-stat" key={p.pl}>
                  <div className="bkb-pn">{p.pn}</div>
                  <div className="bkb-pl">{p.pl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: booking panel */}
          <div
            className="bkb-panel"
            data-cal-brand="https://calendly.com/YOUR-USERNAME/brand-strategy-call"
            data-cal-agency="https://calendly.com/YOUR-USERNAME/agency-strategy-call"
          >
            <div className="bkb-panel-head">
              <div className="bkb-ph-left">
                <div className="bkb-ph-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div>
                  <div className="bkb-ph-title">Book free Strategy Call</div>
                  <div className="bkb-ph-meta">
                    Join a call with SocialMelo team
                  </div>
                </div>
              </div>
              <div className="bkb-ph-dur">30 min</div>
            </div>

            {/*
              ===== CALENDLY EMBED GOES HERE =====
              Replace the .bkb-cal mock block below with your live Calendly inline embed:

              <div className="calendly-inline-widget"
                   data-url="https://calendly.com/YOUR-USERNAME/strategy-call?hide_gdpr_banner=1&primary_color=3a1c71"
                   style={{ minWidth: "320px", height: "640px" }} />
              (load https://assets.calendly.com/assets/external/widget.js)

              The primary_color param themes Calendly to the brand purple. The persona toggle can swap the
              data-url between the two event types via the data-cal-brand / data-cal-agency attributes on
              the panel above.
            */}
            <div className="bkb-cal">
              <div className="bkb-cal-bar">
                <div className="bkb-cm-month">
                  {MONTHS[viewMonth]} {viewYear}
                </div>
                <div className="bkb-cm-nav">
                  <button
                    type="button"
                    aria-label="Previous month"
                    onClick={() => changeMonth(-1)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Next month"
                    onClick={() => changeMonth(1)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="bkb-dow">
                <span>S</span>
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
              </div>
              <div className="bkb-days">
                {cells.map((d, i) => {
                  if (d === null) {
                    return <div key={"b" + i} className="bkb-day blank" />;
                  }
                  const avail = isAvail(viewYear, viewMonth, d);
                  const cls =
                    "bkb-day" +
                    (avail ? " avail" : " muted") +
                    (avail && selectedDay === d ? " selected" : "");
                  return avail ? (
                    <div
                      key={d}
                      className={cls}
                      role="button"
                      tabIndex={0}
                      onClick={() => setSelectedDay(d)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelectedDay(d);
                        }
                      }}
                    >
                      {d}
                    </div>
                  ) : (
                    <div key={d} className={cls}>
                      {d}
                    </div>
                  );
                })}
              </div>

              <div className="bkb-slots">
                <div className="bkb-cs-label">
                  {selectedLabel} <span>· times in your local zone</span>
                </div>
                <div className="bkb-slot-grid">
                  {SLOTS.map((s) => (
                    <div
                      key={s}
                      className={
                        "bkb-slot" + (selectedSlot === s ? " active" : "")
                      }
                      role="button"
                      tabIndex={0}
                      onClick={() => setSelectedSlot(s)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelectedSlot(s);
                        }
                      }}
                    >
                      {s}
                    </div>
                  ))}
                </div>
                <button type="button" className="bkb-confirm">
                  Confirm {selectedSlot} →
                </button>
                <p className="bkb-cal-note">
                  Preview only. Your live Calendly scheduler embeds here once
                  connected.
                </p>
              </div>
            </div>
            <div className="bkb-powered">
              <strong>Scheduling by Calendly</strong>
            </div>
            {/* ===== end mock ===== */}

            <div className="bkb-reassure">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12l2 2 4-4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <p>
                <strong>
                  You will get a calendar invite with a video link.
                </strong>{" "}
                We will also send a short prep note so the 30 minutes go
                straight to strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
