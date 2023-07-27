import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { StyledHeroImage } from "../Styled/Hero";

const ImageCarousel = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation
      >
        <SwiperSlide>
          <StyledHeroImage image='./mesh-814.png'></StyledHeroImage>
        </SwiperSlide>
        <SwiperSlide>
          <StyledHeroImage image='./mesh-756.png'></StyledHeroImage>
        </SwiperSlide>
        <SwiperSlide>
          <StyledHeroImage image='./mesh-677.png'></StyledHeroImage>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ImageCarousel;
