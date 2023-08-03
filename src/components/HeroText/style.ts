import styled from "styled-components";
import { Button } from "react-bootstrap";

interface StyledHeroImageProps {
  image: string;
}
interface HeroButtonProps {
  size: string;
}

export const Container = styled.div`
  position: relative;
`;

export const StyledHeroImage = styled.div<StyledHeroImageProps>`
  height: 100vh;
  width: 100vw;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
`;
//
export const StyledHeroText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  font-size: calc(1rem + 3.5vw);
  font-family: "Noto Serif", serif;
  @media screen and (max-width: 768px) {
    top: 45%;
  }
`;

export const HeroSubText = styled.div`
  position: absolute;
  bottom: 33%;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 2;
  text-align: center;
  font-size: calc(0.8rem + 1.5vw);
  color: #fff;
`;
export const HeroButton = styled(Button)<HeroButtonProps>`
  position: absolute;
  bottom: 18%;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 2;
  font-size: calc(0.8rem + 1vw);
  @media screen and (max-width: 768px) {
    bottom: 15%;
    left: 50%;
  }
`;
