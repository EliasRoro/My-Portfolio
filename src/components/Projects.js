import React from "react";
import {projects} from "../portfolio";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section className="fx-section fx-section-alt" id="work">
      <div className="fx-container">
        <Reveal>
          <div className="fx-eyebrow">04 · Selected Work</div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="fx-title">
            Things I've <span className="neon">designed, built & tested</span>
          </h2>
        </Reveal>
        <div className="fx-projects">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="fx-project"
              >
                <span className="fx-project-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <div className="fx-project-tech">
                    {p.tech.map(t => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                <span className="fx-project-link" aria-hidden="true">
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
