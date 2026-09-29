import React from "react";
import {experience} from "../portfolio";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section className="fx-section" id="experience">
      <div className="fx-container">
        <Reveal>
          <div className="fx-eyebrow">03 · Experience</div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="fx-title">
            Where I've <span className="neon">delivered</span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="fx-lead">
            From banking data pipelines to enterprise IT — every role sharpened
            the same instinct: quality is engineered, never inspected in.
          </p>
        </Reveal>
        <div className="fx-timeline">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 80}>
              <article className={`fx-job${job.featured ? " featured" : ""}`}>
                <div className="fx-job-date">{job.date}</div>
                <h3 className="fx-job-role">{job.role}</h3>
                <div className="fx-job-company">{job.company}</div>
                <p className="fx-job-desc">{job.desc}</p>
                <ul>
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
