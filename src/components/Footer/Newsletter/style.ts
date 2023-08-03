import { styled } from "styled-components";

export const StyledDiv = styled.div`
  padding: 4rem 22% 30px;
  text-align: start;

  @media screen and (max-width: 980px) {
    padding: 2rem 4.5% 30px;
  }
`;

export const SubscribeContainer = styled.span`
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 8px 0;
  max-width: 250px;
  width: 100%;

  input {
    padding: 8px 12px;
    flex: 0;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #0056b3;
    }
  }
`;