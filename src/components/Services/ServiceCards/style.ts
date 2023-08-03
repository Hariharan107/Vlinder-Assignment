import { Col, Image } from "react-bootstrap";
import { Tilt } from "react-tilt";
import { styled } from "styled-components";

export const StyledH1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
`;
export const StyledP = styled.p`
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