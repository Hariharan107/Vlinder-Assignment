import React from "react";
import { styled } from "styled-components";
const StyledHeadText = styled.h1`
  color: #fff;
  font-size: calc(3rem + 1vw);
  font-family: 'Anton', sans-serif;
  letter-spacing: 0.4rem;
`;
const HeadText = () => {
  return (
    <div className=' text-center' id="service-section">
      <span className='text-warning'>BEST FEATURES</span>
      <StyledHeadText className='text'>Services</StyledHeadText>
    </div>
  );
};

export default HeadText;
