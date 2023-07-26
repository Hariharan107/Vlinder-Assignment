import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Navbar from "./UI/Navbar";
import { Container, Nav, StyledHeroImage } from "./Styled/HeroImage";
const Home = () => {
  return (
    <Container>
      <Nav>
        <Navbar />
      </Nav>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation
      >
        <SwiperSlide>
          <StyledHeroImage image='./mesh-756.png'></StyledHeroImage>
        </SwiperSlide>
        <SwiperSlide>
          <StyledHeroImage image='./mesh-814.png'></StyledHeroImage>
        </SwiperSlide>
        <SwiperSlide>
          <StyledHeroImage image='https://wallpaperaccess.com/full/1772233.jpg'></StyledHeroImage>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Home;
