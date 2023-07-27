import { Row, Col } from "react-bootstrap";
import { ImageContainer } from "../Styled/About/ImageContainer";

const AboutImages = () => {
  return (
    <ImageContainer>
      <Row>
        <Col>
          <img
            src='https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
            className='rounded image_one'
          />
        </Col>
        <Col>
          <img
            src='https://images.unsplash.com/photo-1501163268664-3fdf329d019f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hY2Jvb2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
            className='rounded image_two '
          />
          <img
            src='https://media.istockphoto.com/id/1522030420/photo/portrait-of-overjoyed-cheerful-lady-wear-stylish-clothes-hold-macbook-raise-fist-rejoice-sale.webp?b=1&s=170667a&w=0&k=20&c=TJMFkcBjHd4dE6Dii-4OC5RKzYXo_nlfQ5OGdMJz7oM='
            className='rounded image_three mb-5'
          />
        </Col>
      </Row>
    </ImageContainer>
  );
};

export default AboutImages;
