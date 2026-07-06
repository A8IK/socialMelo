import React, { useEffect } from "react";
import "./NewYorkBreadcrumbs.css";

export default function SocialMeloNYCHeader() {
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
    <div className="nyh">
      <nav className="nyh-crumb" aria-label="Breadcrumb">
        <div className="nyh-crumb-inner">
          <a href="/">Home</a>
          <span className="nyh-sep">›</span>
          <a href="/services">Services</a>
          <span className="nyh-sep">›</span>
          <a href="/services/influencer-marketing">Influencer Marketing</a>
          <span className="nyh-sep">›</span>
          <span className="nyh-current">New York</span>
        </div>
      </nav>
    </div>
  );
}
