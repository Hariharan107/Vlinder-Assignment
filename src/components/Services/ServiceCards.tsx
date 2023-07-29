import React from "react";
import MainCard from "./MainCard";
import SubCards from "./SubCards";
import { styled } from "styled-components";
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem 1rem 5rem;
  justify-content: center;
`;
const ServiceCards = () => {
  return (
    <>
      <CardContainer>
        <MainCard />
        <SubCards />
      </CardContainer>
    </>
  );
};

export default ServiceCards;
