import React from "react";
import {hero} from "../portfolio";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="fx-contact" id="contact">
      <div className="fx-container">
        <Reveal>
          <div className="fx-eyebrow" style={{justifyContent: "center"}}>
            06 · Contact
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2>
            Let's build something <span className="neon">exceptional</span>
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p>
            Discuss a project, a role, or just say hello — my inbox is open.
            I reply to every serious inquiry personally.
          </p>
        </Reveal>
        <Reveal delay={260}>
          <div className="fx-contact-actions">
            <a href={`mailto:${hero.email}`} className="fx-btn fx-btn-gold">
              Say Hello
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
        <Reveal delay={340}>
          <div className="fx-contact-direct">
            <a href={`mailto:${hero.email}`}>{hero.email}</a>
            <a href={`tel:+12266006986`}>{hero.phone}</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
