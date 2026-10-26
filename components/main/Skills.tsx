import styles from "@/styles/components/main/Skills.module.css";

const skillGroups = [
  {
    category: "Languages & core",
    skills: [
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "Terraform",
      "SQL",
      "Object-oriented design",
      "Multithreading",
      "Concurrency",
    ],
  },
  {
    category: "Frameworks",
    skills: [
      "Spring Boot",
      "Spring Framework",
      "Hibernate / JPA",
      "RESTful microservices",
      "ReactJS",
      "Next.js",
      "LangChain",
      "LangGraph",
    ],
  },
  {
    category: "Tools & infrastructure",
    skills: [
      "Git",
      "AWS (ECS, Lambda, S3, SQS)",
      "Docker",
      "Maven",
      "JUnit",
      "Mockito",
      "GitHub Actions",
      "Jenkins",
      "Vector stores",
    ],
  },
];

function Skills() {
  return (
    <section className={styles.cont} id="skills" aria-labelledby="skills-title">
      <div className={styles.heading}>
        <span className={styles.eyebrow}>What I work with</span>
        <h2 id="skills-title">Skills</h2>
      </div>
      <div className={styles.groups}>
        {skillGroups.map(({ category, skills }) => (
          <div className={styles.group} key={category}>
            <h3>{category}</h3>
            <p>{skills.join(" · ")}</p>
          </div>
        ))}
      </div>
      <div className={styles.education}>
        <span className={styles.eyebrow}>Education</span>
        <div className={styles.educationDetails}>
          <div>
            <h3>Harcourt Butler Technical University</h3>
            <p>Bachelor of Technology · Electronics Engineering</p>
            <p className={styles.coursework}>
              Coursework: Machine Learning, Data Structures
            </p>
          </div>
          <div className={styles.educationMeta}>
            <span>Kanpur, India</span>
            <span>July 2020 – June 2024</span>
            <span>GPA 7.664</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
