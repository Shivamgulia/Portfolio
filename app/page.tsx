"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

import styles from "@/styles/pages/index.module.css";
import About from "@/components/main/About";
import Experience from "@/components/main/Experience";
import Resume from "@/components/main/Resume";

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);
  const [showExp, setShowExp] = useState(false);
  const [showRes, setShowRes] = useState(false);

  const searchParams = useSearchParams();

  const router = useRouter();

  useEffect(() => {
    const page = searchParams.get("page");

    if (page == "1") {
      setShowAbout(true);
      setShowExp(false);
      setShowRes(false);
    } else if (page == "2") {
      setShowAbout(false);
      setShowExp(true);
      setShowRes(false);
    } else if (page == "3") {
      setShowAbout(false);
      setShowExp(false);
      setShowRes(true);
    } else {
      setShowAbout(true);
      setShowExp(false);
      setShowRes(false);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.navDiv}>
        <button
          className={`${styles.homeButton} ${styles.hover}`}
          onClick={() => {
            setShowAbout(true);
            setShowExp(false);
            setShowRes(false);
            router.push("/?page=1");
          }}
        >
          Home
        </button>
        <button
          className={`${styles.expButton} ${styles.hover}`}
          onClick={() => {
            setShowAbout(false);
            setShowExp(true);
            setShowRes(false);
            router.push("/?page=2");
          }}
        >
          Experience
        </button>
        <button
          className={`${styles.resButton} ${styles.hover}`}
          onClick={() => {
            setShowAbout(false);
            setShowExp(false);
            setShowRes(true);
            router.push("/?page=3");
          }}
        >
          Resume
        </button>
      </div>
      {showAbout && <About />}
      {showExp && <Experience />}
      {showRes && <Resume />}
    </div>
  );
}
