import HeadText from "./HeadText/HeadText";
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
  return (
    <div className='pt-0 pt-lg-5 '>
      <HeadText />
      <ServiceCards ServicesData={ServicesData} />
      <Numbers NumbersData={NumbersData} />
    </div>
  );
};

export default Services;
