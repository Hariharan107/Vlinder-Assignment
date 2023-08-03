import { styled } from "styled-components";
import { AboutTextContainer } from "./style";
import AboutCards from "../AboutCards/AboutCards";
interface AboutDataProps {
  id: number;
  icon: string;
  heading: string;
}
const AboutText = ({ AboutData }: { AboutData: AboutDataProps[] }) => {
  const StyledP = styled.p`
    font-size: calc(0.9rem + 0.3vw);
  `;

  return (
    <>
      <AboutTextContainer className='text-center'>
        <div className='text-warning'>ABOUT US</div>
        <div>
          <h1 className='text-white'>
            We are a more than just a digital agency
          </h1>
          <StyledP className='text-white '>
            We are avo creative, a digital agency that specializes in
            branding,the web design and the development of websites and apps. We
            are a team of designers, developers, strategists and thinkers who
            share a passion for creating great ideas and transforming them into
            engaging, intelligent and innovative user experiences. We are a more
            than just a digital agency.
          </StyledP>
          <AboutCards AboutData={AboutData} />
        </div>
      </AboutTextContainer>
    </>
  );
};

export default AboutText;
