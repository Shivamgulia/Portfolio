import styles from "@/styles/components/main/Education.module.css";

function Education() {
  return (
    <section
      className={styles.cont}
      id="education"
      aria-labelledby="education-title"
    >
      <div className={styles.heading}>
        <span className={styles.eyebrow}>Education</span>
        <h2 id="education-title">Academic background</h2>
      </div>
      <div className={styles.details}>
        <div>
          <h3>Harcourt Butler Technical University</h3>
          <p>Bachelor of Technology · Electronics Engineering</p>
          <p className={styles.coursework}>
            Coursework: Machine Learning, Data Structures
          </p>
        </div>
        <div className={styles.meta}>
          <span>Kanpur, India</span>
          <span>July 2020 – June 2024</span>
          <span>GPA 7.664</span>
        </div>
      </div>
    </section>
  );
}

export default Education;
