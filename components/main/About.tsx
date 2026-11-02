"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import ShivamCutout from "@/assets/images/shivamwithoutbackground.png";

import ExperienceYears from "@/components/main/ExperienceYears";
import styles from "@/styles/components/main/About.module.css";

const RESUME_URL =
  "https://drive.google.com/uc?export=download&id=19eVENQ0P66nB6qrt7MmEQNvul_j8Q20C";
const GITHUB_URL = "https://github.com/Shivamgulia";

const careChips = ["Reliability", "Security", "Automation", "Practical AI"];

function About() {
  const [portraitScrollProgress, setPortraitScrollProgress] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let animationFrame = 0;

    if (reducedMotion) {
      setPortraitScrollProgress(1);
      return;
    }

    function updatePortraitFromScroll() {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const progress = Math.min(Math.max(window.scrollY / 180, 0), 1);
        setPortraitScrollProgress(progress);
      });
    }

    window.addEventListener("scroll", updatePortraitFromScroll, {
      passive: true,
    });
    updatePortraitFromScroll();

    return () => {
      window.removeEventListener("scroll", updatePortraitFromScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className={styles.cont} id="about" aria-labelledby="about-title">
      <div className={styles.intro}>
        <span className={styles.eyebrow}>
          SDE2 @ Fidelity International · Gurugram, India · Open to backend
          &amp; AI-enabled backend roles
        </span>
        <h1 id="about-title">
          Backend
          <br />
          <span>Engineer.</span>
        </h1>
        <p className={styles.keywordLine}>Java · Spring Boot · AWS · GenAI</p>
        <p className={styles.summary}>
          I build systems that scale — and AI that earns its keep.{" "}
          <ExperienceYears /> years turning enterprise problems into reliable,
          production-grade backend systems at Fidelity International.
        </p>
        <div className={styles.ctaRow}>
          <a className={styles.contactLink} href={RESUME_URL} target="_blank" rel="noreferrer">
            View Resume <span aria-hidden="true">↗</span>
          </a>
          <a className={styles.contactLink} href="mailto:shivam.meert@gmail.com">
            Get in Touch <span aria-hidden="true">↗</span>
          </a>
          <a className={styles.contactLink} href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className={styles.portraitWrap}>
        <Image
          alt="Portrait of Shivam Gulia"
          src={ShivamCutout}
          priority
          className={styles.portraitCutout}
          style={{
            transform: `translateY(${1.5 - portraitScrollProgress * 2.7}rem) scale(${0.94 + portraitScrollProgress * 0.13})`,
          }}
        />
        <span className={styles.portraitCaption}>Curious by nature</span>
      </div>

      <div className={styles.aboutText}>
        <span className={styles.eyebrow}>A little about me</span>
        <div className={styles.aboutBody}>
          <p className={styles.aboutLead}>
            I&apos;m a backend engineer turning complex enterprise problems into
            reliable, production-grade systems. At Fidelity International,
            I&apos;ve built event-driven microservices tracking IaaS compliance
            across 700+ cloud accounts, and shipped AI-assisted automation
            saving analysts 40+ hours a month.
          </p>
          <p>
            My core stack is Java, Spring Boot, and AWS — but what sets my work
            apart is the AI layer: I&apos;ve built RAG pipelines, vector search,
            and agent frameworks into products in daily use, from document Q&amp;A
            platforms to text-to-SQL tools.
          </p>
          <p>
            I care about three things: correctness under load, security by
            default, and cutting busywork. Off the clock, I run a self-hosted
            home server and grind LeetCode in Java (236 problems and counting).
          </p>
        </div>
      </div>

      <div className={styles.chips} aria-label="What I care about">
        <span className={styles.eyebrow}>What I care about</span>
        <ul className={styles.chipList}>
          {careChips.map((chip) => (
            <li className={styles.chip} key={chip}>
              {chip}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
