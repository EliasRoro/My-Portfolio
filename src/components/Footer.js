import React from "react";
import {socials} from "../portfolio";

export default function Footer() {
  return (
    <footer className="fx-footer">
      <div className="fx-footer-inner">
        <span className="fx-logo">ER</span>
        <p>© 2026 Elias Roro · Designed & built with intent</p>
        <div className="fx-footer-socials">
          {socials.map(s => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
