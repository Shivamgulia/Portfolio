import React, { Fragment } from "react";

import ExperienceCard from "../UI/ExperienceCard";

import { experienceList } from "../lib/ExperienceList";

import styles from "@/styles/components/main/Experience.module.css";

function Experience() {
  return (
    <section className={styles.cont} id="experience" aria-labelledby="experience-title">
      <div className={styles.sectionHeading}>
        <span className={styles.eyebrow}>Where I&apos;ve worked</span>
        <h2 id="experience-title">Experience</h2>
      </div>
      <div className={styles.experienceList}>
        {experienceList.map((experience, index) => (
          <Fragment key={experience.name}>
            <span className={styles.projectNumber}>0{index + 1}</span>
            <ExperienceCard experience={experience} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}

export default Experience;
