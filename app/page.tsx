import React from "react";
import Image from "next/image";

import styles from "@/styles/pages/index.module.css";
import About from "@/components/main/About";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <About />
    </div>
  );
}
