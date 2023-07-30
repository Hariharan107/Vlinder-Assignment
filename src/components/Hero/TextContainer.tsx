import { HeroButton, HeroSubText, StyledHeroText } from "../Styled/Hero/Hero";
import styles from "./Button.module.css";
import { useMediaQuery } from "react-responsive";
const TextContainer = () => {
  const isMdOrLg = useMediaQuery({ minWidth: 768 });
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
      {/* <button type='button' className={styles.btn_donate}>
        Check Schedule
      </button> */}
      <HeroButton variant='outline-light' size='lg'>
        Contact us
      </HeroButton>
    </>
  );
};

export default TextContainer;
