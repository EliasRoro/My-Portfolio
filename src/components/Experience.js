import React from "react";
import {experience} from "../portfolio";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section className="lux-section" id="experience">
      <div className="lux-container">
        <Reveal>
          <div className="lux-eyebrow">03 · Experience</div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="lux-title">
            Where I've <em>delivered</em>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="lux-lead">
            From banking data pipelines to enterprise IT — every role sharpened
            the same instinct: quality is engineered, never inspected in.
          </p>
        </Reveal>
        <div className="lux-timeline">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 80}>
              <article className={`lux-job${job.featured ? " featured" : ""}`}>
                <div className="lux-job-date">{job.date}</div>
                <h3 className="lux-job-role">{job.role}</h3>
                <div className="lux-job-company">{job.company}</div>
                <p className="lux-job-desc">{job.desc}</p>
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
