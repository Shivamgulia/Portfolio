import React, { Fragment, useEffect, useState } from "react";

import ProjectCard from "@/components/ui/ProjectCard";

import { projectList } from "../lib/projectList";

import styles from "@/styles/components/main/Projects.module.css";

function Projects() {
  const [projects, setProjects] = useState<any>([]);

  useEffect(() => {
    // get projects
    setProjects(projectList);
  }, []);

  return (
    <div className={styles.projectsDiv}>
      <div className={styles.leftMain}>Projects</div>
      <div className={styles.list}>
        {projects.map((item: any, index: any) => {
          return (
            <Fragment key={index}>
              <ProjectCard project={item} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
