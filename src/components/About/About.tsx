import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutImages from "./AboutImages/AboutImages";
import AboutText from "./AboutText/AboutText";
import { ImageContainer } from "./AboutImages/style";

interface AboutDataProps {
  id: number;
  icon: string;
  heading: string;
}

interface AboutImagesProps {
  imgSrc: string;
  imgAlt: string;
  custom_styles: string;
}
interface AboutTextProps {
  sectionName: string;
  subText: string;
  description: string;
}

interface AboutProps {
  AboutData: AboutDataProps[];
  AboutImagesData: AboutImagesProps[];
  AboutTextData: AboutTextProps;
}

const About = ({ AboutData, AboutImagesData, AboutTextData }: AboutProps) => {
  const _AboutImagesss = () => (
    <ImageContainer id='about-section'>
      <Row>
        {AboutImagesData.map((item, index) => (
          <Col key={index}>
            <img
              src={item.imgSrc}
              className='rounded imagess'
              alt={item.imgAlt}
            />
          </Col>
        ))}
      </Row>
    </ImageContainer>
  );
  return (
    <Container>
      <Row>
        <Col lg={6}>
          {_AboutImagesss()} 
        </Col>
        <Col lg={6}>
          <AboutText AboutData={AboutData} AboutTextData={AboutTextData} />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
