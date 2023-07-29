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
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px 4.5%;
  width: 100%;
  z-index: 2;
`;
export const MobileNavBar = styled.div`
  position: absolute;
  right: 4.5%;
  top: 50%;
  width: 40px;
  transform: translateY(-50%);
  z-index: 2;
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
  @media screen and (max-width: 768px) {
    bottom: 15%;
    left: 50%;
  }
`;
