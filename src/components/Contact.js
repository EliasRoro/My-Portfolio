import React from "react";
import {hero} from "../portfolio";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="lux-contact" id="contact">
      <div className="lux-container">
        <Reveal>
          <div className="lux-eyebrow" style={{justifyContent: "center"}}>
            06 · Contact
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2>
            Let's build something <em>exceptional</em>
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p>
            Discuss a project, a role, or just say hello — my inbox is open.
            I reply to every serious inquiry personally.
          </p>
        </Reveal>
        <Reveal delay={260}>
          <div className="lux-contact-actions">
            <a href={`mailto:${hero.email}`} className="lux-btn lux-btn-gold">
              Say Hello
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
        <Reveal delay={340}>
          <div className="lux-contact-direct">
            <a href={`mailto:${hero.email}`}>{hero.email}</a>
            <a href={`tel:+12266006986`}>{hero.phone}</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
