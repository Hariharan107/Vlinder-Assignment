import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import styles from "./Gallery.module.css"; // Import the CSS Module

export default function Gallery() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className={styles.swiper}
        modules={[EffectCoverflow, Pagination]}
      >
        <SwiperSlide className={styles["swiper-slide"]}>
          <img
            src='https://swiperjs.com/demos/images/nature-1.jpg'
            className={styles.img}
          />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <img
            src='https://swiperjs.com/demos/images/nature-2.jpg'
            className={styles.img}
          />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <img
            src='https://swiperjs.com/demos/images/nature-3.jpg'
            className={styles.img}
          />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <img
            src='https://swiperjs.com/demos/images/nature-4.jpg'
            className={styles.img}
          />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <img
            src='https://swiperjs.com/demos/images/nature-5.jpg'
            className={styles.img}
          />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <img
            src='https://swiperjs.com/demos/images/nature-6.jpg'
            className={styles.img}
          />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <img
            src='https://swiperjs.com/demos/images/nature-7.jpg'
            className={styles.img}
          />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <img
            src='https://swiperjs.com/demos/images/nature-8.jpg'
            className={styles.img}
          />
        </SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>
          <img
            src='https://swiperjs.com/demos/images/nature-8.jpg'
            className={styles.img}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
