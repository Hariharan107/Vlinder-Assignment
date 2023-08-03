import { StyledDiv } from "./style";
 
interface CompanyDetailsDataProps{
  name: string;
  email: string;
  address: string;
  phone: string;
}
const CompanyDetails = ({name,email,address,phone}:CompanyDetailsDataProps) => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledDiv>
      <h2 className='text-warning'>{name}</h2>
      <p>
        <span>Email : </span> {email}
      </p>
      <p>
        <span>Address : </span> {address}
      </p>
      <p>
        <span>Phone : </span> {phone}
      </p>
      <button className='btn btn-primary'>Get in touch</button>
      <p className='pt-3'>© {currentYear} Avo. All rights reserved</p>
    </StyledDiv>
  );
};

export default CompanyDetails;
