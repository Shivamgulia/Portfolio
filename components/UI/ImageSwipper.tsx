import React, { useEffect, useState } from "react";
import Image from "next/image";

import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

import styles from "@/styles/components/UI/ImageSwipper.module.css";

function ImageSwipper({ images, index }: { images: any; index: number }) {
  const [imageIndex, setImageIndex] = useState<number>(index);
  const [image, setImage] = useState(images[index]);

  function prevImage() {
    if (imageIndex > 0) setImageIndex((prev) => prev - 1);
  }

  function nextImage() {
    if (imageIndex < images.length - 1) {
      setImageIndex((prev) => prev + 1);
    }
  }

  useEffect(() => {
    setImage(images[imageIndex]);
  }, [imageIndex]);

  return (
    <div className={styles.cont}>
      {imageIndex > 0 && (
        <div
          onClick={prevImage}
          className={`${styles.prevButton} ${styles.swipperButton} `}
        >
          <AiOutlineCaretLeft />
        </div>
      )}

      <div>
        <Image alt="app" src={image} className={styles.image} />
      </div>

      {imageIndex < images.length - 1 && (
        <div
          onClick={nextImage}
          className={`${styles.nextButton} ${styles.swipperButton}`}
        >
          <AiOutlineCaretRight />
        </div>
      )}
    </div>
  );
}

export default ImageSwipper;
