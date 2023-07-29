import { Card } from "react-bootstrap";
import styled from "styled-components";
import { AboutData } from "../../data/AboutData.js";

interface AboutData {
  id: number;
  icon: string;
  heading: string;
}

const StyledCard = styled(Card)`
  display: flex;
  justify-content: center;
  width: 8rem;
  height: 8rem;
  border-radius: 20%;
  text-align: center;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem 1rem 5rem;
  justify-content: center;
`;

const AboutCards = () => {
  const cards = AboutData.map(({ id, icon, heading }: AboutData) => (
    <StyledCard key={id} className='rounded'>
      <Card.Body>
        <Card.Title>
          <img src={icon} alt={heading} />
        </Card.Title>
        <Card.Text className='text-white text-center'>{heading}</Card.Text>
      </Card.Body>
    </StyledCard>
  ));

  return <CardContainer>{cards}</CardContainer>;
};

export default AboutCards;
