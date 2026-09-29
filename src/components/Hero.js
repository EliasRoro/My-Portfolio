import React from "react";
import {hero, stats} from "../portfolio";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="lux-hero" id="top">
      <div className="lux-hero-grid">
        <div>
          <Reveal>
            <span className="lux-hero-eyebrow">
              <span className="dot"></span> Portfolio · 2026
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1>
              {hero.firstName}{" "}
              <span className="italic-gold">{hero.lastName}</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <div className="lux-hero-roles">
              {hero.roles.map(r => (
                <span key={r}>{r}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={300}>
            <p className="lux-hero-tagline">{hero.tagline}</p>
          </Reveal>
          <Reveal delay={380}>
            <div className="lux-hero-actions">
              <a href="#work" className="lux-btn lux-btn-gold">
                View Selected Work
              </a>
              <a
                href={hero.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="lux-btn lux-btn-ghost"
              >
                Download Résumé
              </a>
            </div>
          </Reveal>
          <Reveal delay={460}>
            <div className="lux-hero-stats">
              {stats.map(s => (
                <div key={s.label}>
                  <div className="lux-stat-value">{s.value}</div>
                  <div className="lux-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={250} className="lux-portrait">
          <div className="lux-portrait-frame">
            <img src={hero.photo} alt="Elias Roro" />
          </div>
          <div className="lux-portrait-badge">
            <div className="b-role">Senior Quality Engineer</div>
            <div className="b-co">TD Bank · Toronto</div>
          </div>
        </Reveal>
      </div>
      <div className="lux-scroll-hint">
        <span>Scroll</span>
        <span className="line"></span>
      </div>
    </section>
  );
}
