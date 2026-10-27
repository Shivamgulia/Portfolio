import React from "react";

import ExperienceCard from "../UI/ExperienceCard";
import { projectsList } from "../lib/ExperienceList";
import styles from "@/styles/components/main/Experience.module.css";

function Projects() {
  return (
    <section className={styles.cont} id="projects" aria-labelledby="projects-title">
      <div className={styles.sectionHeading}>
        <h2 id="projects-title">Projects</h2>
        <p className={styles.sectionNote}>Built independently, outside work.</p>
      </div>
      <div className={styles.experienceList}>
        {projectsList.map((project) => (
          <ExperienceCard experience={project} key={project.name} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
