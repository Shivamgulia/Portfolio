import React, { Fragment, useEffect, useState } from "react";

import ProjectCard from "@/components/ui/ProjectCard";

import { projectList } from "../lib/projectList";
import Slider from "@/assets/images/logos/slider.png";

import styles from "@/styles/components/main/Projects.module.css";
import Image from "next/image";

function Projects() {
  const [projects, setProjects] = useState<any>([]);

  useEffect(() => {
    // get projects
    setProjects(projectList);
  }, []);

  return (
    <div className={styles.projectsDiv}>
      <div className={styles.leftMain}>Projects</div>
      <div className={styles.bar}>
        <Image src={Slider} alt="Slider" className={styles.sliderImage} />
      </div>
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
