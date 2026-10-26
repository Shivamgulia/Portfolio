import React, { Fragment } from "react";

import ExperienceCard from "../UI/ExperienceCard";
import { projectsList } from "../lib/ExperienceList";
import styles from "@/styles/components/main/Experience.module.css";

function Projects() {
  return (
    <section className={styles.cont} id="projects" aria-labelledby="projects-title">
      <div className={styles.sectionHeading}>
        <span className={styles.eyebrow}>Selected independent work</span>
        <h2 id="projects-title">Projects</h2>
      </div>
      <div className={styles.experienceList}>
        {projectsList.map((project, index) => (
          <Fragment key={project.name}>
            <span className={styles.projectNumber}>0{index + 1}</span>
            <ExperienceCard experience={project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;
