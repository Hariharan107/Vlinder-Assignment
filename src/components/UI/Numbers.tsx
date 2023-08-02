import { numbersData } from "../../data/numbersData";
import { Col, Row } from "react-bootstrap";
import {
  StyledDescription,
  StyledContainer,
  StyledDivv as StyledDiv,
  StyledCountUp,
} from "../Styled/Services/Services.js";
import { useInView } from "react-intersection-observer";

interface numberProps {
  id: number;
  number: string;
  description: string;
}

const Numbers = ({ NumbersData }: { NumbersData: numberProps[] }) => {
  const [ref, inView] = useInView();
  const Numbers = NumbersData.map(
    ({ id, number, description }: numberProps) => {
      return (
        <Col key={id} lg={3} sm={6} xs={12} ref={ref}>
          <StyledDiv className='text-center text-white pt-sm-5'>
            <h1 className='text-warning'>
              {inView ? (
                id === 3 ? (
                  <StyledCountUp
                    start={0}
                    end={Number(number)}
                    duration={5}
                    suffix=' K'
                  />
                ) : (
                  <StyledCountUp start={0} end={Number(number)} duration={5} />
                )
              ) : (
                "0"
              )}
            </h1>
            <StyledDescription>{description}</StyledDescription>
          </StyledDiv>
        </Col>
      );
    }
  );

  return (
    <StyledContainer id='gallery-section'>
      {<Row>{Numbers}</Row>}
    </StyledContainer>
  );
};

export default Numbers;
