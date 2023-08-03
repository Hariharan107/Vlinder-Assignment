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
  return (
    <ImageContainer id='about-section'>
      <Row>
        <Col>
          <img
            src='https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
            className='rounded image_one'
            alt='img_1'
          />
        </Col>
        <Col>
          <img
            src='https://images.unsplash.com/photo-1501163268664-3fdf329d019f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hY2Jvb2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
            className='rounded image_two '
            alt='img_2'
          />
          <img
            src='https://images.unsplash.com/photo-1514826786317-59744fe2a548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY2Jvb2slMjBwcm98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
            className='rounded image_three mb-5'
            alt='img_3'
          />
        </Col>
      </Row>
    </ImageContainer>
  );
};

export default AboutImages;
{
  /* {AboutImagesData.map((item, index) => (
            <img
              key={index}
              src={item.imgSrc}
              alt={item.imgAlt}
              className={`rounded ${item.custom_styles}`}
            />
          ))} */
}
