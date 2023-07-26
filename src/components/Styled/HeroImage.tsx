import styled from "styled-components";

interface StyledHeroImageProps {
  image: string;
}
export const Container = styled.div`
  position: relative;
`;


export const Nav = styled.nav`
  position: absolute;
  top: 20px; 
  left: 50%; 
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  z-index: 3; 
`;

export const StyledHeroImage = styled.div<StyledHeroImageProps>`
  height: 100vh;
  width: 100vw;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
`;


