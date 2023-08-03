import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination } from "swiper/modules";
import { StyledHeroImage } from "../HeroText/style";
import styles from "./styles.module.css"; // Import the CSS Module

const ImageCarousel = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
          el: `.${styles["swiper-pagination"]}`,
        }}
        navigation={{
          nextEl: `.${styles["swiper-button-next"]}`,
          prevEl: `.${styles["swiper-button-prev"]}`,
        }}
      >
        <SwiperSlide>
          <StyledHeroImage image='./mesh-631.png'></StyledHeroImage>
        </SwiperSlide>
        <SwiperSlide>
          <StyledHeroImage image='./mesh-498.png'></StyledHeroImage>
        </SwiperSlide>
        <SwiperSlide>
          <StyledHeroImage image='./mesh-10.png'></StyledHeroImage>
        </SwiperSlide>
      </Swiper>
      <div className={`${styles["swiper-button-prev"]} swiper-button-prev`} />
      <div className={`${styles["swiper-pagination"]} swiper-pagination `} />
      <div className={`${styles["swiper-button-next"]} swiper-button-next`} />
    </>
  );
};

export default ImageCarousel;
