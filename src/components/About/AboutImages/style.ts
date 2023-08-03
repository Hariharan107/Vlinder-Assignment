import { styled } from "styled-components";

export const ImageContainer = styled.div`
  text-align: center;
  padding-top: 2rem;
  display: flex;
  @media screen and (max-width: 1027px) {
    padding-left: calc(50vw - 50%);
  }
`;
