import React from "react";
import {education} from "../portfolio";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section className="lux-section" id="education">
      <div className="lux-container">
        <Reveal>
          <div className="lux-eyebrow">05 · Education</div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="lux-title">
            Foundations of the <em>craft</em>
          </h2>
        </Reveal>
        <div className="lux-edu-list">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 80}>
              <div className="lux-edu">
                <div>
                  <h3>{e.school}</h3>
                  <div className="edu-program">{e.program}</div>
                  {e.place && <div className="edu-place">{e.place}</div>}
                </div>
                <div className="lux-edu-date">{e.date}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
