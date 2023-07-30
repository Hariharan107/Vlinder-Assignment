import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { ServiceCardData } from "../../data/ServiceData.js";
import { styled } from "styled-components";
import { Tilt } from "react-tilt";
import { useMediaQuery } from "react-responsive";

interface ServiceCardProps {
  id: number;
  title: string;
  image: string;
  description: string;
}
const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
`;
const P = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;
const StyledImage = styled(Image)`
  width: 95%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
  transition: all 0.4s ease-in-out;
`;
const StyledTilt = styled(Tilt)`
  width: 100%;
  height: 50%;
  border-radius: 10px;
`;
const StyledCol = styled(Col)`
  margin-bottom: -8rem;
  padding-top: 3rem;
  @media screen and (max-width: 992px) {
    margin-bottom: -9rem;
    padding-top: 2rem;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: -10rem;
    padding-top: 1rem;
  }
`;

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
  const BelowLaptopDevices = useMediaQuery({ maxWidth: 1026 }); // Use maxWidth instead of minWidth
  const tiltOptions = BelowLaptopDevices ? null : defaultOptions; // Se

  const ServiceCard = ServiceCardData.map(
    ({ id, title, image, description }: ServiceCardProps) => (
      <StyledCol key={id} xl={3} lg={4} md={6} sm={12} className='text-center'>
        <StyledTilt options={tiltOptions}>
          <StyledImage src={image} alt={title} />
          <div>
            <H1>{title}</H1>
            <P className='text-white'>{description}</P>
          </div>
        </StyledTilt>
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
