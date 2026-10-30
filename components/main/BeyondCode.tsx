import styles from "@/styles/components/main/BeyondCode.module.css";

const profiles = [
  {
    label: "LeetCode",
    detail: "236 problems in Java",
    link: "https://leetcode.com/u/Shivamgulia/",
  },
  {
    label: "GeeksforGeeks",
    detail: "Practice profile",
    link: "https://www.geeksforgeeks.org/profile/shivamgulia?tab=activity",
  },
];

const certifications = [
  { name: "AWS Certified Developer – Associate (DVA-C02)", issuer: "Udemy" },
  { name: "Spring Boot 4, Spring 7 & Hibernate for Beginners", issuer: "Udemy" },
];

function BeyondCode() {
  return (
    <section className={styles.cont} id="beyond" aria-labelledby="beyond-title">
      <div className={styles.heading}>
        <h2 id="beyond-title">Beyond Code</h2>
        <p className={styles.note}>Trust signals outside the day job.</p>
      </div>
      <div className={styles.groups}>
        <section className={styles.group}>
          <h3>Profiles</h3>
          <ul className={styles.rows}>
            {profiles.map((profile) => (
              <li className={styles.row} key={profile.label}>
                <a
                  className={styles.link}
                  href={profile.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {profile.label}
                </a>
                <span>{profile.detail}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.group}>
          <h3>Certifications</h3>
          <ul className={styles.rows}>
            {certifications.map((certification) => (
              <li className={styles.row} key={certification.name}>
                <span className={styles.certName}>{certification.name}</span>
                <span>{certification.issuer}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}

export default BeyondCode;
