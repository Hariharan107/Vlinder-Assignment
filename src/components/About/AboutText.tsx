import { AboutTextContainer } from "../Styled/About/TextContainer";

const AboutText = () => {
  return (
    <>
      <AboutTextContainer className='text-center'>
        <div className='text-white'>ABOUT US</div>
        <div>
          <h1 className='text-white'>
            We are a more than just a digital agency
          </h1>
          <p className='text-white'>
            We are avo creative, a digital agency that specializes in
            branding,the web design and the development of websites and apps. We
            are a team of designers, developers, strategists and thinkers who
            share a passion for creating great ideas and transforming them into
            engaging, intelligent and innovative user experiences. We are a more
            than just a digital agency.
          </p>
        </div>
      </AboutTextContainer>
    </>
  );
};

export default AboutText;
