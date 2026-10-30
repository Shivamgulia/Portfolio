import React from "react";

import type { ExperienceEntry } from "../lib/ExperienceList";
import styles from "@/styles/components/UI/ProjectCard.module.css";

function ProjectCard({ project }: { project: ExperienceEntry }) {
  const tech = project.title.split(" · ");

  return (
    <article className={styles.cont}>
      {project.tag && <span className={styles.tag}>{project.tag}</span>}
      <h3 className={styles.name}>{project.name}</h3>
      {project.summary && <p className={styles.summary}>{project.summary}</p>}
      <div className={styles.desc}>
        {project.description.map((item) =>
          item.list ? (
            <ul className={styles.descList} key={item.head}>
              {item.desc.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          ) : (
            <p key={item.head}>{item.desc}</p>
          ),
        )}
      </div>
      <div className={styles.footer}>
        <div className={styles.chips} aria-label="Technologies used">
          {tech.map((chip) => (
            <span className={styles.chip} key={chip}>
              {chip}
            </span>
          ))}
        </div>
        {project.links && (
          <div className={styles.links}>
            {project.links.map((link) => (
              <a
                className={styles.link}
                href={link.link}
                key={link.link}
                target="_blank"
                rel="noreferrer"
              >
                {link.heading}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
