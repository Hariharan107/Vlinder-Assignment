import { Card } from "react-bootstrap";
import { StyledCard, CardContainer } from "../style";
interface AboutDataProps {
  id: number;
  icon: string;
  heading: string;
}

const AboutCards = ({ AboutData }: { AboutData: AboutDataProps[] }) => {
  const cards = AboutData.map(({ id, icon, heading }: AboutDataProps) => (
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
