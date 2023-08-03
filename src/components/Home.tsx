import Navbar from "./UI/Navbar";
import { Container, Nav } from "./Styled/Hero/Hero";
import ImageCarousel from "./Hero/ImageCarousel";
import TextContainer from "./Hero/TextContainer";
import About from "./Sections/About";
import { Main } from "./Styled/Main/Main";
import Services from "./Sections/Services";
import Gallery from "./Sections/Gallery";
import Testimonials from "./Sections/Testimonial";
import Footer from "./UI/Footer";
import Clients from "./Sections/Clients";
import { AboutData, CarouselData, NumbersData, ServiceData } from "../data/config";

const Home = () => {
  return (
    <>
      <Container>
        <Nav>
          <Navbar />
        </Nav>
        <ImageCarousel />
        <TextContainer />
      </Container>
      <Main>
        <About AboutData={AboutData} />
        <Services NumbersData={NumbersData} ServicesData={ServiceData} />
        <Gallery CarouselData={CarouselData} />
        <Testimonials />
        <Clients />
        <Footer />
      </Main>
    </>
  );
};

export default Home;
