import { StyledHeadText } from "./HeadText/style";
import ServiceCards from "./ServiceCards/ServiceCards";
import Numbers from "./Numbers/Numbers";

interface ServiceCardProps {
  id: number;
  title: string;
  image: string;
  description: string;
}
interface NumberProps {
  id: number;
  number: string;
  description: string;
}

interface ServicesProps {
  NumbersData: NumberProps[];
  ServicesData: ServiceCardProps[];
}

const Services = ({ NumbersData, ServicesData }: ServicesProps) => {
  const _HeadText = () => (
    <div className='text-center' id='service-section'>
      <span className='text-warning'>BEST FEATURES</span>
      <StyledHeadText className='text'>Services</StyledHeadText>
    </div>
  );

  return (
    <div className='pt-0 pt-lg-5'>
      {_HeadText()}
      <ServiceCards ServicesData={ServicesData} />
      <Numbers NumbersData={NumbersData} />
    </div>
  );
};

export default Services;
