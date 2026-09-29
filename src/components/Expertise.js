import React from "react";
import {expertise} from "../portfolio";
import Reveal from "./Reveal";

export default function Expertise() {
  return (
    <section className="lux-section lux-section-alt" id="expertise">
      <div className="lux-container">
        <Reveal>
          <div className="lux-eyebrow">02 · Expertise</div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="lux-title">
            Capabilities, <em>refined</em>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="lux-lead">
            Four disciplines, one standard: software that behaves exactly as
            promised — verified, not assumed.
          </p>
        </Reveal>
        <div className="lux-exp-grid">
          {expertise.map((e, i) => (
            <Reveal key={e.title} delay={(i % 2) * 120}>
              <div className="lux-exp-card">
                <span className="lux-exp-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
                <div className="lux-chips">
                  {e.skills.map(s => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
