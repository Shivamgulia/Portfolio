import React from "react";
import Image from "next/image";

import website from "@/assets/images/website/website.png";

import styles from "@/styles/components/ui/ExperienceCard.module.css";

function ExperienceCard(props: any) {
  return (
    <div className={styles.cont}>
      <Image src={website} alt="preview" className={styles.image} />
      <h1 className={styles.head}>{props.exp.name}</h1>
      <p className={styles.details}>{props.exp.description}</p>
    </div>
  );
}

export default ExperienceCard;
