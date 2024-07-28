"use client";

import React from "react";
import Image from "next/image";
import Projects from "@/components/main/Projects";
import Experience from "@/components/main/Experience";

import Mountain1 from "@/assets/images/mountains/parallax0@2x.png";
import Mountain2 from "@/assets/images/mountains/parallax1@2x.png";
import Mountain3 from "@/assets/images/mountains/parallax8@2x.png";
import Mountain4 from "@/assets/images/mountains/parallax3@2x.png";
import Mountain5 from "@/assets/images/mountains/parallax4@2x.png";

import styles from "@/styles/pages/index.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageCont}>
        <Image
          src={Mountain1}
          alt="mount"
          className={`${styles.mountains} ${styles.mountain1}`}
        />
        <Image
          src={Mountain2}
          alt="mount"
          className={`${styles.mountains} ${styles.mountain2}`}
        />

        <Image
          src={Mountain4}
          alt="mount"
          className={`${styles.mountains} ${styles.mountain4}`}
        />
        <Image
          src={Mountain5}
          alt="mount"
          className={`${styles.mountains} ${styles.mountain5}`}
        />
      </div>
      <div className={styles.restDiv}>
        <Projects />
        <Experience />
      </div>
    </div>
  );
}
