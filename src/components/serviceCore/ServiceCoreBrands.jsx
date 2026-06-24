import { useEffect } from "react";
import "./ServiceCoreBrands.css";

import AdobeImg from "../../assets/images/Adobe.png";
import ColgateImg from "../../assets/images/Colgate.png";
import floxyLogoImg from "../../assets/images/floxy logo.png";
import HuaweiImg from "../../assets/images/Huawei.png";
import IceatlImg from "../../assets/images/Iceatl.png";
import IcecartelImg from "../../assets/images/Icecartel.png";
import MadeInChina2Img from "../../assets/images/Made in China 2.png";
import MyliiaImg from "../../assets/images/Myliia.png";
import OterBox2Img from "../../assets/images/OterBox 2.png";
import SandcoImg from "../../assets/images/Sandco.png";
import SocialplugImg from "../../assets/images/Socialplug.png";
import SommarnoxImg from "../../assets/images/Sommarnox.png";
import UproasImg from "../../assets/images/Uproas.png";

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap";

// logos
const LOGOS = [
  { src: AdobeImg, alt: "Adobe" },
  { src: ColgateImg, alt: "Colgate" },
  { src: floxyLogoImg, alt: "Floxy" },
  { src: HuaweiImg, alt: "Huawei" },
  { src: IceatlImg, alt: "Iceatl" },
  { src: IcecartelImg, alt: "Icecartel" },
  { src: MadeInChina2Img, alt: "Made in China" },
  { src: MyliiaImg, alt: "Myliia" },
  { src: OterBox2Img, alt: "OterBox" },
  { src: SandcoImg, alt: "Sandco" },
  { src: SocialplugImg, alt: "Socialplug" },
  { src: SommarnoxImg, alt: "Sommarnox", invert: true },
  { src: UproasImg, alt: "Uproas", invert: true },
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
        <p className="tm-head">Trusted by Leading Brands in 70+ Countries</p>
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
