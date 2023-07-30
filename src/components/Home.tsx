import Navbar from "./UI/Navbar";
import { Container, Nav } from "./Styled/Hero/Hero";
import ImageCarousel from "./Hero/ImageCarousel";
import TextContainer from "./Hero/TextContainer";
import About from "./Sections/About";
import { Main } from "./Styled/Main/Main";
import Services from "./Sections/Services";
import Gallery from "./Sections/Gallery";
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
        <About />
        <Services />

        <Gallery />
      </Main>
    </>
  );
};

export default Home;
