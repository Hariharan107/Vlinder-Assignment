import React from "react";
import { Container, Row } from "react-bootstrap";
import { ServiceCardData } from "../../data/ServiceData.js";
import {
  H1,
  P,
  StyledImage,
  StyledTilt,
  StyledDiv,
  StyledCol,
} from "../Styled/Services/Services.js";
import { useMediaQuery } from "react-responsive";

interface ServiceCardProps {
  id: number;
  title: string;
  image: string;
  description: string;
}

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};
const ServiceCards = () => {
  const BelowLaptopDevices = useMediaQuery({ maxWidth: 1080 });
  const tiltOptions = BelowLaptopDevices ? null : defaultOptions;

  const ServiceCard = ServiceCardData.map(
    ({ id, title, image, description }: ServiceCardProps) => (
      <StyledCol key={id} xl={3} lg={4} md={6} sm={12} className='text-center'>
        {tiltOptions ? (
          <StyledTilt options={tiltOptions}>
            <StyledImage src={image} alt={title} />
            <div>
              <H1>{title}</H1>
              <P className='text-white'>{description}</P>
            </div>
          </StyledTilt>
        ) : (
          <StyledDiv>
            <StyledImage src={image} alt={title} />
            <div>
              <H1>{title}</H1>
              <P className='text-white'>{description}</P>
            </div>
          </StyledDiv>
        )}
      </StyledCol>
    )
  );

  return (
    <Container>
      <Row>{ServiceCard}</Row>
    </Container>
  );
};

export default ServiceCards;
