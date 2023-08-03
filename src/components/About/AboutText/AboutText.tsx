import { styled } from "styled-components";
import { AboutTextContainer } from "./style";
import AboutCards from "../AboutCards/AboutCards";
interface AboutDataProps {
  id: number;
  icon: string;
  heading: string;
}

interface AboutTextProps {
  sectionName: "string";
  subText: "string";
  desciprtion: "string";
}
interface AboutProps {
  AboutData: AboutDataProps[];
  AboutTextData: AboutTextProps;
}
const AboutText = ({ AboutData, AboutTextData }: AboutProps) => {
  console.log(AboutTextData);
  const { sectionName, subText, description } = AboutTextData;
  const StyledP = styled.p`
    font-size: calc(0.9rem + 0.3vw);
  `;

  return (
    <>
      <AboutTextContainer className='text-center'>
        <div className='text-warning'>{sectionName}</div>
        <div>
          <h1 className='text-white'>{subText}</h1>
          <StyledP className='text-white '>{description}</StyledP>
          <AboutCards AboutData={AboutData} />
        </div>
      </AboutTextContainer>
    </>
  );
};

export default AboutText;
