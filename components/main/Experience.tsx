import React, { Fragment, useState } from "react";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { experienceList } from "../lib/ExperienceList";
import ExperienceCard from "../ui/ExperienceCard";

import styles from "@/styles/components/main/Experience.module.css";
import "swiper/css";
import "swiper/css/controller";
import "swiper/css/autoplay";
import "swiper/css/navigation";

function Experience() {
  const [] = useState(0);

  return (
    <div className={styles.expCont}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={experienceList.length}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true, type: "bullets" }}
        scrollbar={{ draggable: true }}
      >
        {experienceList.map((item: any, index: any) => {
          return (
            <Fragment key={index}>
              <SwiperSlide key={index}>
                <div className={styles.expDiv}>
                  <ExperienceCard exp={item} />
                </div>
              </SwiperSlide>
            </Fragment>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Experience;
