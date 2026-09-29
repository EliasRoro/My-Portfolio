import React from "react";
import {about} from "../portfolio";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="lux-section" id="profile">
      <div className="lux-container">
        <Reveal>
          <div className="lux-eyebrow">01 · Profile</div>
        </Reveal>
        <Reveal delay={100}>
          <p className="lux-about-statement">
            {about.statement.split(" — ")[0]} —{" "}
            <em>{about.statement.split(" — ")[1]}</em>
          </p>
        </Reveal>
        <div className="lux-about-grid">
          <Reveal delay={150}>
            <div>
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={250}>
            <div className="lux-facts">
              {about.facts.map(f => (
                <div className="lux-fact" key={f.label}>
                  <span className="f-label">{f.label}</span>
                  <span className="f-value">{f.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
