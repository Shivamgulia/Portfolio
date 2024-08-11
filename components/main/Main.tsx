"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

import styles from "@/styles/pages/index.module.css";
import About from "@/components/main/About";
import Experience from "@/components/main/Experience";
import Resume from "@/components/main/Resume";

export default function Main() {
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
    }
    // else if (page == "3") {
    //   setShowAbout(false);
    //   setShowExp(false);
    //   setShowRes(true);
    // }
    else {
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
        <a
          className={`${styles.resButton} ${styles.hover}`}
          role="button"
          target="_blank"
          href={
            "https://drive.google.com/uc?export=download&id=19eVENQ0P66nB6qrt7MmEQNvul_j8Q20C"
          }
          // onClick={() => {
          // setShowAbout(false);
          // setShowExp(false);
          // setShowRes(true);
          // router.push("/?page=3");
          // }}
        >
          Download Resume
        </a>
      </div>
      {showAbout && <About />}
      {showExp && <Experience />}
      {/* {showRes && <Resume />} */}
    </div>
  );
}
