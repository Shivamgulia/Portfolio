import styles from "@/styles/components/main/Skills.module.css";

const skillGroups = [
  {
    category: "Backend",
    skills: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Hibernate/JPA",
      "Microservices",
      "Multithreading",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS (ECS, Lambda, S3, SQS)",
      "Docker",
      "Terraform",
      "CI/CD (GitHub Actions, Jenkins)",
    ],
  },
  {
    category: "AI / GenAI",
    skills: [
      "RAG",
      "LangChain",
      "LangGraph",
      "Tool-calling Agents",
      "MCP",
      "Vector DBs (Chroma, Milvus)",
      "Prompt Engineering",
    ],
  },
  {
    category: "Languages",
    skills: ["Java", "Python", "TypeScript", "SQL", "Solidity"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind"],
  },
];

function Skills() {
  return (
    <section className={styles.cont} id="skills" aria-labelledby="skills-title">
      <div className={styles.heading}>
        <h2 id="skills-title">Skills</h2>
      </div>
      <div className={styles.groups}>
        {skillGroups.map(({ category, skills }) => (
          <section className={styles.group} key={category}>
            <h3>{category}</h3>
            <ul className={styles.skillList}>
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}

export default Skills;
