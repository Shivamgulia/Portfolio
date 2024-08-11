import React, { Fragment } from "react";
import Image from "next/image";

// images
import Shivam from "@/assets/images/Shivam1.png";
// logos
import ReactLogo from "@/assets/images/logos/reactlogo.png";
import NextLogo from "@/assets/images/logos/nextjslogo.png";
import SpringLogo from "@/assets/images/logos/springbootlogo.png";
import JavaLogo from "@/assets/images/logos/javalogo.png";
import JSLogo from "@/assets/images/logos/javascriptlogo.png";

import styles from "@/styles/components/main/About.module.css";

const SALUTATION = `Hello!`;
const NAME = `I am Shivam Gulia`;

const INTRO: string[] = [
  "I’m a passionate software developer with a strong foundation in building dynamic and scalable web applications.",
  "With a keen interest in ReactJS, NextJS (Web Development) , Spring Boot (JAVA Back-End Development) and React Native (Mobile App Development) , I thrive on turning ideas into efficient, user-friendly digital solutions.",
  "My journey in software development has equipped me with a diverse set of skills, from front-end design to back-end architecture, and ",
  "I’m always eager to take on new challenges. Whether it’s coding, problem-solving, or continuous learning, I’m driven by the desire to create impactful software that makes a difference.",
];

function About() {
  return (
    <div className={`${styles.cont}`}>
      <div className={styles.left}>
        <div className={styles.imageDiv}>
          <Image alt="ME" src={Shivam} className={styles.image} />
        </div>

        <div className={styles.logos}>
          <Image
            alt="reactjs_logo"
            src={ReactLogo}
            className={styles.logoImages}
          />
          <Image
            alt="nextjs_logo"
            src={NextLogo}
            className={styles.logoImages}
          />
          <Image
            alt="springboot_logo"
            src={SpringLogo}
            className={styles.logoImages}
          />
          <Image alt="java_logo" src={JavaLogo} className={styles.logoImages} />
          <Image
            alt="javascript_logo"
            src={JSLogo}
            className={styles.logoImages}
          />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.salutation}>
          <h1 className={styles.hello}>{SALUTATION}</h1>
          <h2 className={styles.name}>{NAME}</h2>
        </div>

        <div className={styles.intro}>
          {INTRO.map((item, index) => {
            return (
              <Fragment key={index}>
                <div className={styles.mainText}>{item}</div>
              </Fragment>
            );
          })}
        </div>
        <div className={styles.contact}>
          Contact Details :
          <div className={styles.email}>
            Email : <b>Shivam.meert@gmail.com</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
