import { HeroButton, HeroSubText, StyledHeroText } from "../Styled/Hero/Hero";

import { useMediaQuery } from "react-responsive";
const TextContainer = () => {
  const isMdOrLg = useMediaQuery({ minWidth: 768 });
  const buttonSize = isMdOrLg ? "lg" : "md";
  return (
    <>
      <StyledHeroText>
        <div>
          <span className='digital'>Digital</span>
          <span className='design'> Design Awards</span>
        </div>
      </StyledHeroText>
      <HeroSubText>
        If you want to design your project with us, Please contact us!
      </HeroSubText>
      <HeroButton variant='outline-light ' size={buttonSize}>
        Contact us
      </HeroButton>
    </>
  );
};

export default TextContainer;
