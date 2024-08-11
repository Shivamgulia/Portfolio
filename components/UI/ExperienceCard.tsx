import React, { Fragment, useState } from "react";

import styles from "@/styles/components/UI/ExperienceCard.module.css";
import Image from "next/image";
import Modal from "../modal/Modal";
import ImageSwipper from "./ImageSwipper";
import Link from "next/link";

function ExperienceCard({ experience }: { experience: any }) {
  const [isOpen, setIsOpen] = useState<any>(false);
  const [imageIndex, setImageIndex] = useState<any>(0);

  function showImages({ index }: { index: number }) {
    console.log(index);
    setImageIndex(index);
    setIsOpen(true);
  }

  return (
    <>
      <Modal
        onClose={() => {
          setIsOpen(false);
        }}
        isOpen={isOpen}
      >
        <div>
          <ImageSwipper images={experience.images} index={imageIndex} />
        </div>
      </Modal>
      <div className={styles.cont}>
        <div className={styles.images}>
          {experience.images.map((image: any, index: number) => {
            return (
              <Fragment key={index}>
                <Image
                  alt="App Image"
                  src={image}
                  className={styles.appImage}
                  onClick={() => {
                    showImages({ index });
                  }}
                />
              </Fragment>
            );
          })}
        </div>
        <div className={styles.main}>
          <div className={styles.expHead}>
            <h1 className={styles.name}>{experience.name}</h1>
            <h3 className={styles.title}>{experience.title}</h3>
          </div>
          <div className={styles.headingList}>
            {experience.description.map((item: any, index: number) => {
              return (
                <Fragment key={index}>
                  {item.list && (
                    <div className={styles.headingItem}>
                      {item.head}
                      <ul className={styles.descList}>
                        {item.desc.map((desc: string, index: number) => {
                          return (
                            <Fragment key={index}>
                              <li className={styles.descItem}>{desc}</li>
                            </Fragment>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                  {!item.list && (
                    <div className={styles.headingItem}>
                      {item.head}
                      <div className={styles.descItem}>{item.desc}</div>
                    </div>
                  )}
                </Fragment>
              );
            })}
          </div>
          {experience.links && (
            <div className={styles.links}>
              <h3 className={styles.linkHead}>Relevent Links : </h3>
              {experience.links.map((link: any, index: number) => {
                return (
                  <Fragment>
                    <Link href={link.link} className={styles.link}>
                      {link.heading}
                    </Link>
                  </Fragment>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ExperienceCard;
