import { styled } from "styled-components";
import { numbersData } from "../../data/numbersData";
import { Col, Container, Row } from "react-bootstrap";
interface numberProps {
  id: number;
  number: string;
  description: string;
}
const H1 = styled.h1`
  font-size: 3rem;
  font-weight: bolder;
  font-family: "Anton", sans-serif;
  letter-spacing: 5px;
`;
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
const Numbers = () => {
  const Numbers = numbersData.map(
    ({ id, number, description }: numberProps) => (
      <Col key={id} lg={3} sm={6} xs={12}>
        <StyledDiv className='text-center text-white pt-sm-5'>
          <H1 className='text-warning'>{number}</H1>
          <StyledDescription>{description}</StyledDescription>
        </StyledDiv>
      </Col>
    )
  );
  return (
    <StyledContainer>
      <Row>{Numbers}</Row>
    </StyledContainer>
  );
};

export default Numbers;
