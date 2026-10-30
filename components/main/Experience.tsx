import React from "react";

import ExperienceCard from "../UI/ExperienceCard";

import { experienceList } from "../lib/ExperienceList";

import styles from "@/styles/components/main/Experience.module.css";

function Experience() {
  return (
    <section className={styles.cont} id="experience" aria-labelledby="experience-title">
      <div className={styles.sectionHeading}>
        <h2 id="experience-title">Experience</h2>
        <p className={styles.sectionNote}>From first internship to today.</p>
      </div>
      <div className={styles.experienceList}>
        {experienceList.map((experience, index) => (
          <ExperienceCard experience={experience} key={`${experience.name}-${index}`} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
