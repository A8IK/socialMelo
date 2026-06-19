import { useEffect } from "react";
import "./ServiceCoreBrands.css";

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap";

// logos
const LOGOS = [
  { src: "/public/Adobe.png", alt: "Adobe" },
  { src: "/public/Colgate.png", alt: "Colgate" },
  { src: "/public/floxy logo.png", alt: "Floxy" },
  { src: "/public/Huawei.png", alt: "Huawei" },
  { src: "/public/Iceatl.png", alt: "Iceatl" },
  { src: "/public/Icecartel.png", alt: "Icecartel" },
  { src: "/public/Made in China 2.png", alt: "Made in China" },
  { src: "/public/Myliia.png", alt: "Myliia" },
  { src: "/public/OterBox 2.png", alt: "OterBox" },
  { src: "/public/Sandco.png", alt: "Sandco" },
  { src: "/public/Socialplug.png", alt: "Socialplug" },
  { src: "/public/Sommarnox.png", alt: "Sommarnox", invert: true },
  { src: "/public/Huawei.png", alt: "Uproas" },
];

export default function SocialMeloTrustedBy() {
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

  const renderLogo = (l, key, hidden) => {
    const isImage = l && typeof l === "object" && l.src;
    return (
      <span key={key} className="tm-brand" aria-hidden={hidden || undefined}>
        {isImage ? (
          <img
            className={"tm-logo" + (l.invert ? " tm-inv" : "")}
            src={l.src}
            alt={hidden ? "" : l.alt}
            style={l.h ? { height: l.h } : undefined}
            loading="lazy"
            draggable="false"
          />
        ) : (
          <span className="tm-word">{typeof l === "string" ? l : l.alt}</span>
        )}
      </span>
    );
  };

  return (
    <section className="tm">
      <div className="tm-wrap">
        <p className="tm-head">Trusted by brands across 30+ countries</p>
        <div className="tm-marquee">
          <div className="tm-track">
            {LOGOS.map((l, i) => renderLogo(l, "a" + i, false))}
            {LOGOS.map((l, i) => renderLogo(l, "b" + i, true))}
          </div>
        </div>
      </div>
    </section>
  );
}
