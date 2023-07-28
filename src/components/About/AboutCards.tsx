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
  background: #e0e0e0;
  box-shadow: 15px 15px 30px, -15px -15px 30px;
  margin-bottom: 50px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const AboutCards = () => {
  const cards = AboutData.map(({ id, icon, heading }: AboutData) => (
    <StyledCard key={id} className='rounded'>
      <Card.Body>
        <Card.Title>
          <img src={icon} alt={heading} />
        </Card.Title>
        <Card.Text>{heading}</Card.Text>
      </Card.Body>
    </StyledCard>
  ));

  return <CardContainer>{cards}</CardContainer>;
};

export default AboutCards;
