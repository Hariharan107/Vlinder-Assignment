import { HeroButton, HeroSubText, StyledHeroText } from "./style";
interface HeroTextProps {
  mainText: string;
  subText: string;
  description: string;
  contact: string;
}

const TextContainer = ({ mainText, subText, description,contact }: HeroTextProps) => {
  return (
    <>
      <StyledHeroText>
        <div>
          <span className='digital'>{mainText} </span>
          <span className='design'>{subText}</span>
        </div>
      </StyledHeroText>
      <HeroSubText>{description}</HeroSubText>
      <HeroButton variant='outline-light' size='lg'>
        {contact}
      </HeroButton>
    </>
  );
};
TextContainer.defaultProps = {
  contact: "Contact us",
};
export default TextContainer;
