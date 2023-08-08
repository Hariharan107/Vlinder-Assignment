import { Row, Col } from "react-bootstrap";
import { ImageContainer } from "./style";

interface AboutImagesProps {
  imgSrc: string;
  imgAlt: string;
  custom_styles: string;
}

const AboutImages = ({
  AboutImagesData,
}: {
  AboutImagesData: AboutImagesProps[];
}) => {
  console.log(AboutImagesData);

  return (
    <ImageContainer id='about-section'>
      <Row>
        {AboutImagesData.map((item, index) => (
          <Col key={index}>
            <img
              src={item.imgSrc}
              className="rounded imagess"
              alt={item.imgAlt}
            />
          </Col>
        ))}
      </Row>
    </ImageContainer>
  );
};

export default AboutImages;
