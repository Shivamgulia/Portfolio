import Image from "next/image";

import Shivam from "@/assets/images/Shivam1.png";
import ReactLogo from "@/assets/images/logos/reactlogo.png";
import NextLogo from "@/assets/images/logos/nextjslogo.png";
import SpringLogo from "@/assets/images/logos/springbootlogo.png";
import JavaLogo from "@/assets/images/logos/javalogo.png";
import JSLogo from "@/assets/images/logos/javascriptlogo.png";

import styles from "@/styles/components/main/About.module.css";

const tools = [
  { name: "React", image: ReactLogo },
  { name: "Next.js", image: NextLogo },
  { name: "Spring Boot", image: SpringLogo },
  { name: "Java", image: JavaLogo },
  { name: "JavaScript", image: JSLogo },
];

function About() {
  return (
    <section className={styles.cont} id="about" aria-labelledby="about-title">
      <div className={styles.intro}>
        <span className={styles.eyebrow}>Software engineer · Kanpur, India</span>
        <h1 id="about-title">
          Scalable software,
          <br />
          <span>built to matter.</span>
        </h1>
        <p className={styles.summary}>
          Software engineer with 2+ years of experience building scalable
          backend services, cloud-native enterprise applications, and secure
          RESTful architectures with Java, Spring Boot, and AWS.
        </p>
        <a className={styles.contactLink} href="mailto:shivam.meert@gmail.com">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className={styles.portraitWrap}>
        <Image
          alt="Portrait of Shivam Gulia"
          src={Shivam}
          priority
          className={styles.image}
        />
        <span className={styles.portraitCaption}>Curious by nature</span>
      </div>

      <div className={styles.aboutText}>
        <span className={styles.eyebrow}>A little about me</span>
        <p>
          I build event-driven microservices, improve administrative workflows,
          and bring Retrieval-Augmented Generation and generative AI into
          practical products. My work has supported compliance insights across
          700+ cloud accounts and helped teams work more efficiently.
        </p>
      </div>

      <div className={styles.toolkit} aria-label="Technologies I work with">
        <span className={styles.eyebrow}>Tools of the trade</span>
        <div className={styles.logos}>
          {tools.map(({ name, image }) => (
            <div className={styles.tool} key={name}>
              <Image alt="" src={image} className={styles.logoImage} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
