import Image from "next/image";

import ShivamCutout from "@/assets/images/shivamwithoutbackground.png";

import ExperienceYears from "@/components/main/ExperienceYears";
import { EMAIL, GITHUB_URL, RESUME_URL } from "@/components/lib/siteConfig";
import styles from "@/styles/components/main/About.module.css";

const careChips = ["Reliability", "Security", "Automation", "Practical AI"];

function About() {
  return (
    <section className={styles.cont} id="about" aria-labelledby="about-title">
      <div className={styles.intro}>
        <p className={styles.who}>Shivam Gulia</p>
        <h1 id="about-title">
          Backend Engineer building scalable Java systems with an AI edge.
        </h1>
        <p className={styles.whoSub}>
          SDE @ Fidelity International · Gurugram, India · Open to backend &amp; AI-enabled
          backend roles
        </p>
        <div className={styles.ctaRow}>
          <a className={styles.ctaPrimary} href={RESUME_URL} target="_blank" rel="noreferrer">
            View Resume
          </a>
          <a className={styles.ctaLink} href={`mailto:${EMAIL}`}>
            Get in Touch
          </a>
          <a className={styles.ctaLink} href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <div className={styles.portraitWrap}>
        <div className={styles.photo}>
          <Image
            alt="Portrait of Shivam Gulia"
            src={ShivamCutout}
            priority
            className={styles.portraitCutout}
          />
        </div>
        <span className={styles.portraitCaption}>Curious by nature.</span>
      </div>

      <div className={styles.aboutText}>
        <p>
          I&apos;m a backend engineer with <ExperienceYears /> years of experience turning complex
          enterprise problems into reliable, production-grade systems. At Fidelity International,
          I&apos;ve built event-driven microservices tracking IaaS compliance across 700+ cloud
          accounts, and shipped AI-assisted automation that saves teams real hours.
        </p>
        <p>
          My core stack is Java, Spring Boot, and AWS — but what sets my work apart is the AI
          layer: I&apos;ve built RAG pipelines, vector search, and agent frameworks into products
          people actually use, from document Q&amp;A platforms to text-to-SQL tools.
        </p>
        <p>
          I care about three things: correctness under load, security by default, and cutting
          busywork. Off the clock, I run a self-hosted home server and grind LeetCode in Java
          (236 problems and counting).
        </p>
      </div>

      <div className={styles.care}>
        <p className={styles.careLabel}>What I care about</p>
        <div className={styles.chips}>
          {careChips.map((chip) => (
            <span className={styles.chip} key={chip}>
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
