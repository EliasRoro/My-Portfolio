import React from "react";
import {education} from "../portfolio";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section className="fx-section" id="education">
      <div className="fx-container">
        <Reveal>
          <div className="fx-eyebrow">05 · Education</div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="fx-title">
            Foundations of the <span className="neon">craft</span>
          </h2>
        </Reveal>
        <div className="fx-edu-list">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 80}>
              <div className="fx-edu">
                <div>
                  <h3>{e.school}</h3>
                  <div className="edu-program">{e.program}</div>
                  {e.place && <div className="edu-place">{e.place}</div>}
                </div>
                <div className="fx-edu-date">{e.date}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
