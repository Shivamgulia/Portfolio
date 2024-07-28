import React, { useState } from "react";

import website from "@/assets/images/website/website.png";
import Image from "next/image";

import styles from "@/styles/components/ui/ProjectCard.module.css";

function ProjectCard(props: any) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={styles.cardDiv}
      onClick={() => {
        setOpen((prev) => !prev);
      }}
    >
      <div>
        <Image
          src={website}
          alt="Project Preview"
          className={styles.previewImage}
        />
      </div>
      <div className={styles.details}>
        <h3 className={styles.name}>{props.project.name}</h3>
        <p className={styles.description}>{props.project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
