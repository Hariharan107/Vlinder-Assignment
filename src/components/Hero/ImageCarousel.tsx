import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { StyledHeroImage } from "../Styled/Hero/Hero";

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
          <StyledHeroImage image='./mesh-498.png'></StyledHeroImage>
        </SwiperSlide>
        <SwiperSlide>
          <StyledHeroImage image='./mesh-631.png'></StyledHeroImage>
        </SwiperSlide>
        <SwiperSlide>
          <StyledHeroImage image='./mesh-10.png'></StyledHeroImage>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ImageCarousel;
