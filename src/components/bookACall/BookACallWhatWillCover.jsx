import { useEffect, useState } from "react";
import RazuTasneemImg from "../../assets/images/tasnim-abedeen-raju.jpg";
import "./BookACallWhatWillCover.css";

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

const DAYS = Array.from({ length: 30 }, (_, i) => i + 1);
const AVAIL = new Set([11, 12, 16, 17, 18, 19, 23, 24, 25, 26, 30]);
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

export default function SocialMeloBookBooking() {
  const [persona, setPersona] = useState("brand");
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

  return (
    <section className="bkb" id="book">
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
                <div className="bkb-cm-month">June 2026</div>
                <div className="bkb-cm-nav">
                  <button type="button" aria-label="Previous month">
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
                  <button type="button" aria-label="Next month">
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
                {DAYS.map((d) => {
                  const avail = AVAIL.has(d);
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
                  Thursday, June 12 <span>· times in your local zone</span>
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
