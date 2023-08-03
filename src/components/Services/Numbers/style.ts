import { Container } from "react-bootstrap";
import CountUp from "react-countup";

import { styled } from "styled-components";

export const StyledDescription = styled.p`
  font-size: 1.5rem;
`;

export const StyledContainer = styled(Container)`
  padding-top: 4rem;
`;

export const StyledDiv = styled.div`
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
