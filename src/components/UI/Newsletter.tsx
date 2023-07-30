import React from "react";
import { Image } from "react-bootstrap";
import { styled } from "styled-components";

const StyledDiv = styled.div`
  padding: 4rem 22% 30px;
  text-align: start;

  @media screen and (max-width: 980px) {
    padding: 2rem 4.5% 30px;
  }
`;

const SubscribeContainer = styled.span`
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

const Newsletter = () => {
  return (
    <StyledDiv>
      <h3 className='text-warning'>NEWSLETTER</h3>
      <p className='muted-text'>
        Subscribe our Newsletter here!
      </p>
      <SubscribeContainer>
        <input type='text' placeholder='Your Email' />
        <button className='rounded'>SUBSCRIBE</button>
      </SubscribeContainer>
      <h5 className='pt-4 muted-text'>INSTAGRAM POST</h5>
      <div className='d-flex gap-2'>
        <Image
          src='https://images.pexels.com/photos/732632/pexels-photo-732632.jpeg?auto=compress&cs=tinysrgb&w=600'
          roundedCircle
          height={60}
          width={60}
        />
        <Image
          src='https://images.pexels.com/photos/2918010/pexels-photo-2918010.jpeg?auto=compress&cs=tinysrgb&w=600'
          roundedCircle
          height={60}
          width={60}
        />
        <Image
          src='https://images.pexels.com/photos/1271620/pexels-photo-1271620.jpeg?auto=compress&cs=tinysrgb&w=600'
          roundedCircle
          height={60}
          width={60}
        />
      </div>
    </StyledDiv>
  );
};

export default Newsletter;
