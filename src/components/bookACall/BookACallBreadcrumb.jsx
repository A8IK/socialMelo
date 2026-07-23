import { useEffect } from "react";
import "./BookACallBreadcrumb.css";

export default function SocialMeloBookBreadcrumb() {
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
    <nav className="bkc" aria-label="Breadcrumb">
      <div className="bkc-inner">
        <a href="/">Home</a>
        <span className="bkc-sep">›</span>
        <span className="bkc-current">Book a Call</span>
      </div>
    </nav>
  );
}
