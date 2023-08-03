import { Link as ScrollLink } from "react-scroll";
import { styled } from "styled-components";
export const StyledScrollLink = styled(ScrollLink)`
  color: #fff;
  text-decoration: none;
  color: #fff;
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
