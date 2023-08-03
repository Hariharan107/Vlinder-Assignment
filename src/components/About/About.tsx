import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutImages from "./AboutImages/AboutImages";
import AboutText from "./AboutText/AboutText";

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
  sectionName: "string";
  subText: "string";
  desciprtion: "string";
}

interface AboutProps {
  AboutData: AboutDataProps[];
  AboutImagesData: AboutImagesProps[];
  AboutTextData: AboutTextProps;
}

const About = ({ AboutData, AboutImagesData, AboutTextData }: AboutProps) => {

  return (
    <Container>
      <Row>
        <Col lg={6}>
          <AboutImages AboutImagesData={AboutImagesData} />
        </Col>
        <Col lg={6}>
          <AboutText AboutData={AboutData} AboutTextData={AboutTextData} />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
