import Navbar from "./UI/Navbar";
import { Container, Nav } from "./Styled/Hero";
import ImageCarousel from "./Hero/ImageCarousel";
import TextContainer from "./Hero/TextContainer";
import About from "./About";
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
      </Main>
    </>
  );
};

export default Home;
