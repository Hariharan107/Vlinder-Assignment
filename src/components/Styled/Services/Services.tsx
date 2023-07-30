import { styled } from "styled-components";
import { Image, Col, Container } from "react-bootstrap";
import { Tilt } from "react-tilt";
import CountUp from "react-countup";
export const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
`;
export const P = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;
export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
  transition: all 0.4s ease-in-out;
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
`;
export const StyledTilt = styled(Tilt)`
  width: 100%;
  height: 50%;
  border-radius: 10px;
`;
export const StyledDiv = styled.div`
  width: 100%;
  height: 50%;
  border-radius: 10px;
`;
export const StyledCol = styled(Col)`
  margin-bottom: -9rem;
  padding-top: 3rem;

  @media screen and (max-width: 995px) {
    margin-bottom: -9rem;
    padding-top: 2rem;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: -11.5rem;
    padding-top: 1rem;
  }
`;
// ______________________________________________
// Numbers.tsx Styled Components
export const StyledDescription = styled.p`
  font-size: 1.5rem;
`;

export const StyledContainer = styled(Container)`
  padding-top: 4rem;
`;

export const StyledDivv = styled.div`
  @media screen and (max-width: 560px) {
    padding: 1rem;
  }
`;

export const StyledCountUp = styled(CountUp)`
  font-size: 3rem;
  font-weight: bolder;
  font-family: "Anton", sans-serif;
  letter-spacing: 2px;
  letter-spacing: 5px;
`;
