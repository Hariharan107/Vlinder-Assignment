import { styled } from "styled-components";

const StyledDiv = styled.div`
  padding: 4rem 4.5% 30px;

  span {
    font-weight: 700;
    font-family: "Noto Serif", serif;
    padding-right: 3px;
    text-transform: uppercase;
    color: #499bf4;
  }
`;

const CompanyDetails = () => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledDiv>
      <h2 className='text-warning'>Avo</h2>
      <p>
        <span>Email : </span> Avo_support@website.com
      </p>
      <p>
        <span>Address : </span> A32, Ave 15th Sreet, Door 211, San Francisco, CA
      </p>
      <p>
        <span>Phone : </span> (+1) 23456 789
      </p>
      <button className='btn btn-primary'>Get in touch</button>
      <p className='pt-3'>© {currentYear} Avo. All rights reserved</p>
    </StyledDiv>
  );
};

export default CompanyDetails;
