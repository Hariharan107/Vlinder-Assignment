import { StyledCard } from "../Styled/Services/Services";
import { MainServiceCard } from "../../data/ServiceData.js";

interface MainCardProps {
  title: string;
}
const mainCard = MainServiceCard.map(({ title }: MainCardProps) => (
  <StyledCard>
    <h2 className='text-white' >{title}</h2>
    <span className='text-center'>
      <button className='btn btn-outline-light w-50 rounded'>
        SEE ALL SERVICES
      </button>
    </span>
  </StyledCard>
));
const MainCard = () => {
  return mainCard;
};

export default MainCard;
