import { Container, Row } from "react-bootstrap";
import {
  StyledH1,
  StyledP,
  StyledImage,
  StyledTilt,
  StyledDiv,
  StyledCol,
} from "./style";
import { useMediaQuery } from "react-responsive";

interface ServicesData {
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
const ServiceCards = ({ ServicesData }: { ServicesData: ServicesData[] }) => {
  const BelowLaptopDevices = useMediaQuery({ maxWidth: 1080 });
  const tiltOptions = BelowLaptopDevices ? null : defaultOptions;

  const ServiceCard = ServicesData.map(
    ({ id, title, image, description }: ServicesData) => (
      <StyledCol key={id} xl={3} lg={4} md={6} sm={12} className='text-center'>
        {tiltOptions ? (
          <StyledTilt options={tiltOptions}>
            <StyledImage src={image} alt={title} />
            <div>
              <StyledH1>{title}</StyledH1>
              <StyledP className='text-white'>{description}</StyledP>
            </div>
          </StyledTilt>
        ) : (
          <StyledDiv>
            <StyledImage src={image} alt={title} />
            <div>
              <StyledH1>{title}</StyledH1>
              <StyledP className='text-white'>{description}</StyledP>
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
