import React from "react";

import ProjectCard from "../UI/ProjectCard";
import { projectsList } from "../lib/ExperienceList";
import styles from "@/styles/components/main/Projects.module.css";

function Projects() {
  return (
    <section className={styles.cont} id="projects" aria-labelledby="projects-title">
      <div className={styles.sectionHeading}>
        <h2 id="projects-title">Projects</h2>
        <p className={styles.sectionNote}>Built independently, outside work.</p>
      </div>
      <div className={styles.grid}>
        {projectsList.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
