import React from "react";

import type { ExperienceEntry } from "../lib/ExperienceList";
import styles from "@/styles/components/UI/ExperienceCard.module.css";

function ExperienceCard({ experience }: { experience: ExperienceEntry }) {
  return (
    <article className={styles.cont}>
      <div className={styles.main}>
        <div className={styles.expHead}>
          <h3 className={styles.name}>{experience.name}</h3>
          <p className={styles.title}>{experience.title}</p>
        </div>

        {experience.phases && (
          <ol className={styles.phases}>
            {experience.phases.map((phase) => (
              <li className={styles.phase} key={phase.title}>
                <div className={styles.phaseHeading}>
                  <h4>{phase.title}</h4>
                  <span>{phase.period}</span>
                </div>
                <ul className={styles.phaseHighlights}>
                  {phase.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        )}

        <div className={styles.headingList}>
          {experience.description.map((item) => {
            const isHighlights = item.head === "Highlights";

            return (
              <div
                className={`${styles.headingItem} ${isHighlights ? styles.headingItemUnlabeled : ""}`}
                key={item.head}
              >
                {!isHighlights && (
                  <span className={styles.descriptionHeading}>{item.head}</span>
                )}
                {item.list ? (
                  <ul className={styles.descList}>
                    {item.desc.map((description) => (
                      <li className={styles.descItem} key={description}>
                        {description}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.descItem}>{item.desc}</p>
                )}
              </div>
            );
          })}
        </div>

        {experience.links && (
          <div className={styles.links}>
            <h4 className={styles.linkHead}>Relevant links</h4>
            {experience.links.map((link) => (
              <a
                href={link.link}
                className={styles.link}
                key={link.link}
                target="_blank"
                rel="noreferrer"
              >
                {link.heading} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default ExperienceCard;
