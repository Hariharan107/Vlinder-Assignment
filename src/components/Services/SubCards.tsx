import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { styled } from "styled-components";
import { SubCardData } from "../../data/ServiceData.js";

interface SubCardProps {
  id: number;
  title: string;
  icon: string;
  description: string;
}
const StyledSubCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 10rem;
  width: 10rem;
  background-color: rgba(17, 25, 40, 0.75);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(249, 249, 249, 0.55);
  border-radius: 12px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const SubCards = () => {
  const subCards = SubCardData.map(
    ({ title, icon, description, id }: SubCardProps) => (
      <Col lg={4} md={6} key={id}>
        <StyledSubCard src={icon}>
          <Card.Body>
            <Card.Title className='text-white'>{title}</Card.Title>
            <Card.Text className='text-center text-white'>
              {description}
            </Card.Text>
          </Card.Body>
        </StyledSubCard>
      </Col>
    )
  );

  return <Row className='text-white'>{subCards}</Row>;
};

export default SubCards;
