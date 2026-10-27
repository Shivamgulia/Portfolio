import React from "react";

import styles from "@/styles/pages/index.module.css";
import About from "@/components/main/About";
import Experience from "@/components/main/Experience";
import Education from "@/components/main/Education";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

const RESUME_URL =
  "https://drive.google.com/uc?export=download&id=19eVENQ0P66nB6qrt7MmEQNvul_j8Q20C";
const PHONE_NUMBER = "+918279373573";
const PHONE_LABEL = "+91-8279373573";
const LINKEDIN_URL = "https://www.linkedin.com/in/shivam-gulia-44a773202/";
const GITHUB_URL = "https://github.com/Shivamgulia";

export default function Main() {
  return (
    <main className={styles.wrapper}>
      <header className={styles.navDiv}>
        <a className={styles.wordmark} href="#about" aria-label="Shivam Gulia, home">
          SG<span>.</span>
        </a>
        <nav className={styles.navigation} aria-label="Main navigation">
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a className={styles.resumeLink} href={RESUME_URL} target="_blank" rel="noreferrer">
            Resume (PDF)
          </a>
        </nav>
      </header>

      <div className={styles.content}>
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <footer className={styles.footer} id="contact">
          <div>
            <p className={styles.footerNote}>
              Open to full-time roles and collaborations.
            </p>
            <h2>Get in touch.</h2>
          </div>
          <div className={styles.contactLinks}>
            <a className={styles.contactRow} href="mailto:shivam.meert@gmail.com">
              Email <span>shivam.meert@gmail.com</span>
            </a>
            <a className={styles.contactRow} href={`tel:${PHONE_NUMBER}`}>
              Phone <span>{PHONE_LABEL}</span>
            </a>
            <a className={styles.contactRow} href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              LinkedIn <span>linkedin.com/in/shivam-gulia</span>
            </a>
            <a className={styles.contactRow} href={GITHUB_URL} target="_blank" rel="noreferrer">
              GitHub <span>github.com/Shivamgulia</span>
            </a>
          </div>
          <span className={styles.copyright}>
            © {new Date().getFullYear()} Shivam Gulia
          </span>
        </footer>
      </div>
    </main>
  );
}
