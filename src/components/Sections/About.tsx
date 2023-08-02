import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutImages from "../About/AboutImages";
import AboutText from "../About/AboutText";

interface AboutDataProps {
  id: number;
  icon: string;
  heading: string;
}

const About = ({ AboutData }: { AboutData: AboutDataProps[] }) => {
  return (
    <Container>
      <Row>
        <Col lg={6}>
          <AboutImages />
        </Col>
        <Col lg={6}>
          <AboutText AboutData={AboutData} />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
