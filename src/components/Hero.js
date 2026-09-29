import React, {useEffect, useState} from "react";
import {hero, stats} from "../portfolio";
import Reveal from "./Reveal";

function useTypewriter(words) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? 38 : 85;
    if (!deleting && sub === word.length) delay = 1700;
    else if (deleting && sub === 0) delay = 400;

    const t = setTimeout(() => {
      if (!deleting && sub === word.length) {
        setDeleting(true);
        return;
      }
      if (deleting && sub === 0) {
        setDeleting(false);
        setIndex(i => (i + 1) % words.length);
        return;
      }
      setSub(s => s + (deleting ? -1 : 1));
    }, delay);
    return () => clearTimeout(t);
  }, [sub, deleting, index, words]);

  return words[index % words.length].slice(0, sub);
}

export default function Hero() {
  const typed = useTypewriter(hero.roles);

  return (
    <section className="fx-hero" id="top">
      <div className="fx-hero-grid">
        <div>
          <Reveal>
            <span className="fx-hero-status">
              <span className="dot"></span> System online · Portfolio 2026
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1>
              {hero.firstName} <span className="neon">{hero.lastName}</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <div className="fx-typed-wrap">
              <span className="prompt">&gt;_</span>
              {typed}
              <span className="fx-caret">▍</span>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <p className="fx-hero-tagline">{hero.tagline}</p>
          </Reveal>
          <Reveal delay={380}>
            <div className="fx-hero-actions">
              <a href="#work" className="fx-btn fx-btn-cyber">
                View Selected Work
              </a>
              <a
                href={hero.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="fx-btn fx-btn-ghost"
              >
                Download Résumé
              </a>
            </div>
          </Reveal>
          <Reveal delay={460}>
            <div className="fx-hero-stats">
              {stats.map(s => (
                <div key={s.label}>
                  <div className="fx-stat-value">{s.value}</div>
                  <div className="fx-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={250} className="fx-portrait">
          <div className="fx-portrait-frame fx-hud">
            <span className="fx-portrait-tag">ID // E.RORO</span>
            <img src={hero.photo} alt="Elias Roro" />
            <span className="fx-scanlines"></span>
          </div>
          <div className="fx-portrait-badge">
            <div className="b-role">Senior Quality Engineer</div>
            <div className="b-co">TD Bank · Toronto</div>
          </div>
        </Reveal>
      </div>
      <div className="fx-scroll-hint">
        <span>Scroll</span>
        <span className="line"></span>
      </div>
    </section>
  );
}
