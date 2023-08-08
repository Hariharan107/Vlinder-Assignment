import styled from "styled-components";

interface TestimonialImageDivProps {
  BackgroundImage: string;
}

export const TestimonialImageDiv = styled.div<TestimonialImageDivProps>`
  background-image: ${(props) => `url(${props.BackgroundImage})`};
  height: 50vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(50%);
`;
