import React from "react";
import {expertise} from "../portfolio";
import Reveal from "./Reveal";

export default function Expertise() {
  return (
    <section className="fx-section fx-section-alt" id="expertise">
      <div className="fx-container">
        <Reveal>
          <div className="fx-eyebrow">02 · Expertise</div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="fx-title">
            Capabilities, <span className="neon">refined</span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="fx-lead">
            Four disciplines, one standard: software that behaves exactly as
            promised — verified, not assumed.
          </p>
        </Reveal>
        <div className="fx-exp-grid">
          {expertise.map((e, i) => (
            <Reveal key={e.title} delay={(i % 2) * 120}>
              <div className="fx-exp-card">
                <span className="fx-exp-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
                <div className="fx-chips">
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
