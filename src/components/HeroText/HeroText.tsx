import { HeroButton, HeroSubText, StyledHeroText } from "./style";
interface HeroTextProps {
  mainText: string;
  subText: string;
  description: string;
}
const TextContainer = ({ mainText, subText, description }: HeroTextProps) => {
  return (
    <>
      <StyledHeroText>
        <div>
          <span className='digital'>{mainText}</span>
          <span className='design'>{subText}</span>
        </div>
      </StyledHeroText>
      <HeroSubText>{description}</HeroSubText>
      <HeroButton variant='outline-light' size='lg'>
        Contact us
      </HeroButton>
    </>
  );
};

export default TextContainer;
