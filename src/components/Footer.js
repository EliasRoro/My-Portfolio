import React from "react";
import {socials} from "../portfolio";

export default function Footer() {
  return (
    <footer className="lux-footer">
      <div className="lux-footer-inner">
        <span className="lux-logo">ER</span>
        <p>© 2026 Elias Roro · Designed & built with intent</p>
        <div className="lux-footer-socials">
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
