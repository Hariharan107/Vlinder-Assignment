import React from "react";
import MainCard from "./MainCard";
import SubCards from "./SubCards";
import { Container, Row, Col } from "react-bootstrap"; // Import the Container, Row, and Col components
import styled from "styled-components";

const CardContainer = styled(Container)`
display: flex;
gap: 1rem;

`;

const ServiceCards = () => {
  return (
    <>
      <CardContainer>
        <Row>
          <Col lg={4}>
            <MainCard />
          </Col>
          <Col lg={8}>
            \ <SubCards />
          </Col>
        </Row>
      </CardContainer>
    </>
  );
};

export default ServiceCards;
