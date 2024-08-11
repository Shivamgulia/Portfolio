import React, { Fragment, useState } from "react";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

import ExperienceCard from "../UI/ExperienceCard";

import { experienceList } from "../lib/ExperienceList";

import styles from "@/styles/components/main/Experience.module.css";

function Experience() {
  const [experienceIndex, setExperienceIndex] = useState(0);

  function nextExperience() {
    if (experienceIndex < experienceList.length - 1) {
      setExperienceIndex((prev) => prev + 1);
    }
  }

  function prevExperience() {
    if (experienceIndex > 0) {
      setExperienceIndex((prev) => prev - 1);
    }
  }
  return (
    <div className={styles.cont}>
      {experienceIndex > 0 && (
        <div
          onClick={prevExperience}
          className={`${styles.prevButton} ${styles.swipperButton} `}
        >
          <AiOutlineCaretLeft />
        </div>
      )}

      <div className={styles.experienceSwipper}>
        <ExperienceCard experience={experienceList[experienceIndex]} />
      </div>
      {experienceIndex < experienceList.length - 1 && (
        <div
          onClick={nextExperience}
          className={`${styles.nextButton} ${styles.swipperButton}`}
        >
          <AiOutlineCaretRight />
        </div>
      )}
    </div>
  );
}

export default Experience;
