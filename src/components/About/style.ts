import { Card } from "react-bootstrap";
import { styled } from "styled-components";

export const StyledCard = styled(Card)`
  display: flex;
  justify-content: center;
  width: 8rem;
  height: 8rem;
  border-radius: 20%;
  text-align: center;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem 1rem 5rem;
  justify-content: center;
`;
