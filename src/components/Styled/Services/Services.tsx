import { Card } from "react-bootstrap";
import { styled } from "styled-components";

export const StyledCard = styled(Card)`
  height: 16rem;
  width: 15rem;

  display: flex;
  justify-content: center;
  border-radius: 20%;
  text-align: center;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(249, 249, 249, 0.55);
  background-image: url("https://media.istockphoto.com/id/1185878314/photo/staying-in-the-loop-is-compulsory.jpg?s=612x612&w=0&k=20&c=K7YZ1CLuxaTnsijXcYESmuc1cA28k2tU7vILzcCspRw=");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
