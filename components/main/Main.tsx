import React from "react";

import styles from "@/styles/pages/index.module.css";
import About from "@/components/main/About";
import Experience from "@/components/main/Experience";
import Education from "@/components/main/Education";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import BeyondCode from "@/components/main/BeyondCode";
import ThemeToggle from "@/components/UI/ThemeToggle";

import {
  EMAIL,
  GITHUB_LABEL,
  GITHUB_URL,
  LINKEDIN_LABEL,
  LINKEDIN_URL,
  PHONE_LABEL,
  PHONE_NUMBER,
  RESUME_URL,
} from "@/components/lib/siteConfig";

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
          <a href="#beyond">Beyond Code</a>
          <a className={styles.resumeLink} href={RESUME_URL} target="_blank" rel="noreferrer">
            Resume
          </a>
          <ThemeToggle />
        </nav>
      </header>

      <div className={styles.content}>
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <BeyondCode />
        <footer className={styles.footer} id="contact">
          <div>
            <h2>Let&apos;s build something reliable.</h2>
            <p className={styles.footerNote}>
              Open to backend engineer roles — Java/Spring Boot/AWS, with AI if you&apos;ve got it.
            </p>
            <p className={styles.footerLocations}>
              Gurugram/NCR · Remote India · Open abroad
            </p>
          </div>
          <div className={styles.contactLinks}>
            <a className={styles.contactRow} href={`mailto:${EMAIL}`}>
              Email <span>{EMAIL}</span>
            </a>
            <a className={styles.contactRow} href={`tel:${PHONE_NUMBER}`}>
              Phone <span>{PHONE_LABEL}</span>
            </a>
            <a className={styles.contactRow} href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              LinkedIn <span>{LINKEDIN_LABEL}</span>
            </a>
            <a className={styles.contactRow} href={GITHUB_URL} target="_blank" rel="noreferrer">
              GitHub <span>{GITHUB_LABEL}</span>
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
