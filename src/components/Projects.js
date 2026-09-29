import React from "react";
import {projects} from "../portfolio";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section className="lux-section lux-section-alt" id="work">
      <div className="lux-container">
        <Reveal>
          <div className="lux-eyebrow">04 · Selected Work</div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="lux-title">
            Things I've <em>designed, built & tested</em>
          </h2>
        </Reveal>
        <div className="lux-projects">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="lux-project"
              >
                <span className="lux-project-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <div className="lux-project-tech">
                    {p.tech.map(t => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                <span className="lux-project-link" aria-hidden="true">
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
