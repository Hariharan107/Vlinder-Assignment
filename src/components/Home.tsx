import Navbar from "./Navbar/Navbar";
import { Nav } from "./Navbar/style";
import { Container } from "./HeroText/style";
import ImageCarousel from "./ImageCarousel/ImageCarousel";
import TextContainer from "./HeroText/HeroText";
import About from "./About/About";
import { Main } from "./Styled/Main/Main";
import Services from "./Sections/Services";
import Gallery from "./Sections/Gallery";
import Testimonials from "./Sections/Testimonial";
import Footer from "./UI/Footer";
import {
  AboutData,
  CarouselData,
  NumbersData,
  ServiceData,
  NavBar,
  HeroText,
  AboutImages,
} from "../data/config";

const Home = () => {
  return (
    <>
      <Container>
        <Nav>
          <Navbar NavBar={NavBar} />
        </Nav>
        <ImageCarousel />
        <TextContainer {...HeroText} />
      </Container>
      <Main>
        <About AboutData={AboutData} AboutImagesData={AboutImages} />
        <Services NumbersData={NumbersData} ServicesData={ServiceData} />
        <Gallery CarouselData={CarouselData} />
        <Testimonials />
        <Footer />
      </Main>
    </>
  );
};

export default Home;
