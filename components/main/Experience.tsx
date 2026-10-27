import React from "react";

import ExperienceCard from "../UI/ExperienceCard";

import { experienceList } from "../lib/ExperienceList";

import styles from "@/styles/components/main/Experience.module.css";

function Experience() {
  return (
    <section className={styles.cont} id="experience" aria-labelledby="experience-title">
      <div className={styles.sectionHeading}>
        <h2 id="experience-title">Experience</h2>
        <p className={styles.sectionNote}>Roles listed newest first.</p>
      </div>
      <div className={styles.experienceList}>
        {experienceList.map((experience) => (
          <ExperienceCard experience={experience} key={experience.name} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
