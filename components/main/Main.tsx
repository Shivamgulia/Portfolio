import React from "react";

import styles from "@/styles/pages/index.module.css";
import About from "@/components/main/About";
import Experience from "@/components/main/Experience";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

const RESUME_URL =
  "https://drive.google.com/uc?export=download&id=19eVENQ0P66nB6qrt7MmEQNvul_j8Q20C";
const PHONE_NUMBER = "+918279373573";
const PHONE_LABEL = "+91-8279373573";
const LINKEDIN_URL = "https://www.linkedin.com/in/shivam-gulia-44a773202/";
const GITHUB_URL = "https://github.com/Shivamgulia";
const PORTFOLIO_URL = "https://shivamgulia.vercel.app/";

export default function Main() {
  return (
    <main className={styles.wrapper}>
      <header className={styles.navDiv}>
        <a className={styles.wordmark} href="#about" aria-label="Shivam Gulia, home">
          SG<span>.</span>
        </a>
        <nav className={styles.navigation} aria-label="Main navigation">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a className={styles.resumeLink} href={RESUME_URL} target="_blank" rel="noreferrer">
            Resume <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <div className={styles.content}>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <footer className={styles.footer} id="contact">
          <div>
            <span className={styles.eyebrow}>Have a good one in mind?</span>
            <h2>Let&apos;s make it happen.</h2>
          </div>
          <div className={styles.contactLinks}>
            <a href="mailto:shivam.meert@gmail.com">
              Email <span>shivam.meert@gmail.com</span>
            </a>
            <a href={`tel:${PHONE_NUMBER}`}>
              Phone <span>{PHONE_LABEL}</span>
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              LinkedIn <span>View profile ↗</span>
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              GitHub <span>View profile ↗</span>
            </a>
            <a href={PORTFOLIO_URL} target="_blank" rel="noreferrer">
              Portfolio <span>shivamgulia.vercel.app ↗</span>
            </a>
          </div>
          <span className={styles.copyright}>© {new Date().getFullYear()} Shivam Gulia</span>
        </footer>
      </div>
    </main>
  );
}
