import { useState } from "react";
import { styled } from "styled-components";
import { numbersData } from "../../data/numbersData";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface numberProps {
  id: number;
  number: string;
  description: string;
}

const StyledDescription = styled.p`
  font-size: 1.5rem;
`;

const StyledContainer = styled(Container)`
  padding-top: 4rem;
`;

const StyledDiv = styled.div`
  @media screen and (max-width: 560px) {
    padding: 1rem;
  }
`;

const StyledCountUp = styled(CountUp)`
  font-size: 3rem;
  font-weight: bolder;
  font-family: "Anton", sans-serif;
  letter-spacing: 2px;
  letter-spacing: 5px;
`;

const Numbers = () => {
  const [ref, inView] = useInView();
  const Numbers = numbersData.map(
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

  return <StyledContainer>{<Row>{Numbers}</Row>}</StyledContainer>;
};

export default Numbers;
