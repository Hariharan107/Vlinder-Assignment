import HeadText from "../Services/HeadText";
import ServiceCards from "../Services/ServiceCards";
import Numbers from "../UI/Numbers";
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
