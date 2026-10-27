"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import ShivamCutout from "@/assets/images/shivamwithoutbackground.png";
import ReactLogo from "@/assets/images/logos/reactlogo.png";
import NextLogo from "@/assets/images/logos/nextjslogo.png";
import SpringLogo from "@/assets/images/logos/springbootlogo.png";
import JavaLogo from "@/assets/images/logos/javalogo.png";
import JSLogo from "@/assets/images/logos/javascriptlogo.png";

import ExperienceYears from "@/components/main/ExperienceYears";
import styles from "@/styles/components/main/About.module.css";

const tools = [
  { name: "React", image: ReactLogo },
  { name: "Next.js", image: NextLogo },
  { name: "Spring Boot", image: SpringLogo },
  { name: "Java", image: JavaLogo },
  { name: "JavaScript", image: JSLogo },
];

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
        <p className={styles.who}>Shivam Gulia</p>
        <p className={styles.whoSub}>Software engineer, Gurugram India</p>
        <h1 id="about-title">
          Backend systems that stay boring in production.
        </h1>
        <p className={styles.summary}>
          Software engineer with <ExperienceYears /> years of experience since
          2023, building scalable backend services, cloud-native enterprise
          applications, and secure RESTful architectures with Java, Spring Boot,
          and AWS.
        </p>
        <a className={styles.contactLink} href="mailto:shivam.meert@gmail.com">
          Write to me
        </a>
      </div>

      <div className={styles.portraitWrap}>
        <div className={styles.photo}>
          <Image
            alt="Portrait of Shivam Gulia"
            src={ShivamCutout}
            priority
            className={styles.portraitCutout}
            style={{
              transform: `translateY(${1.5 - portraitScrollProgress * 2.7}rem) scale(${0.94 + portraitScrollProgress * 0.13})`,
            }}
          />
        </div>
      </div>
      <span className={styles.portraitCaption}>Curious by nature.</span>

      <div className={styles.aboutText}>
        <p>
          I build event-driven microservices, improve administrative workflows,
          and bring Retrieval-Augmented Generation and generative AI into
          practical products. My work has supported compliance insights across
          700+ cloud accounts and helped teams work more efficiently.
        </p>
      </div>

      {/* <div className={styles.toolkit} aria-label="Technologies I work with">
        <span className={styles.eyebrow}>Tools of the trade</span>
        <div className={styles.logos}>
          {tools.map(({ name, image }) => (
            <div className={styles.tool} key={name}>
              <Image alt="" src={image} className={styles.logoImage} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}

export default About;
