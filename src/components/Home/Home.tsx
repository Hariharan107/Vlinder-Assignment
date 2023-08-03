import Navbar from "../Navbar/Navbar";
import { Nav } from "../Navbar/style";
import { Container } from "../HeroText/style";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import TextContainer from "../HeroText/HeroText";
import About from "../About/About";
import { Main } from "./style";
import Services from "../Services/Services";
import Gallery from "../Gallery/Gallery";
import Testimonials from "../Testimonials/Testimonial";
import Footer from "../Footer/Footer";
import {
  AboutData,
  CarouselData,
  NumbersData,
  ServiceData,
  NavBar,
  HeroText,
  AboutImages,
  NewsletterData,
  CompanyDetailsData,
  AboutText as AboutTextData,
} from "../../../data/config";
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
        <About
          AboutData={AboutData}
          AboutImagesData={AboutImages}
          AboutTextData={AboutTextData}
        />
        <Services NumbersData={NumbersData} ServicesData={ServiceData} />
        <Gallery CarouselData={CarouselData} />
        <Testimonials />
        <Footer {...CompanyDetailsData} {...NewsletterData} />
      </Main>
    </>
  );
};

export default Home;
