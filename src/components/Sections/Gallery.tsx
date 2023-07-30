import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import styles from "./Gallery.module.css";
import { ImagesData } from "../../data/CarouselData";
import { styled } from "styled-components";

interface CarouselImageProps {
  id: number;
  imageSrc: string;
  altText: string;
}
const CarouselDescription = styled.div`
  text-align: center;
  font-family: "Anton", serif;
  letter-spacing: 2px;
`;
export default function Gallery() {
  const isLaptop = useMediaQuery({ minWidth: 768 });
  const centerSlides = Boolean(!isLaptop);
  const CarouselImages = ImagesData.map(
    ({ id, imageSrc, altText }: CarouselImageProps) => (
      <SwiperSlide key={id} className={styles["swiper-slide"]}>
        <img src={imageSrc} alt={altText} className={styles.img} />
      </SwiperSlide>
    )
  );
  true;

  return (
    <div className='pb-5' >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={centerSlides}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        autoplay={{
          disableOnInteraction: false,
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        className={styles.swiper}
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        {CarouselImages}
      </Swiper>
      <CarouselDescription className='text-warning text-uppercase pt-2'>
        Art & Illustration<div className='text-white'> Natural plus modern</div>
      </CarouselDescription>
    </div>
  );
}
