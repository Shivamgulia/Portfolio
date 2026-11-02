import styles from "@/styles/components/main/BeyondCode.module.css";

const beyondItems = [
  {
    label: "LeetCode",
    detail: "236 problems solved in Java",
    link: "https://leetcode.com/u/Shivamgulia/",
  },
  {
    label: "GeeksforGeeks",
    detail: "Coding practice & article activity",
    link: "https://www.geeksforgeeks.org/profile/shivamgulia?tab=activity",
  },
  {
    label: "Course: AWS Certified Developer – Associate (DVA-C02)",
    detail: "Udemy",
    link: "https://www.udemy.com/certificate/UC-ae260343-edf3-41d6-ba2d-6cd2deb9c091/",
  },
  {
    label: "Course: Spring Boot 4, Spring 7 & Hibernate for Beginners",
    detail: "Udemy",
    link: "https://www.udemy.com/certificate/UC-dd82d024-6c8e-4096-b83b-9d8c96e9e3a2/",
  },
];

function BeyondCode() {
  return (
    <section
      className={styles.cont}
      id="beyond"
      aria-labelledby="beyond-title"
    >
      <div className={styles.heading}>
        <span className={styles.eyebrow}>Proof of work outside the job</span>
        <h2 id="beyond-title">Beyond Code</h2>
      </div>
      <ul className={styles.items}>
        {beyondItems.map((item) => (
          <li className={styles.item} key={item.label}>
            <a
              className={styles.itemLink}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <h3>{item.label}</h3>
              <span>{item.detail}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BeyondCode;
