import { TestimonialImageDiv } from "./style";
interface TestimonialImageProps {
  BackgroundImage: string;
}
const Testimonials = ({ BackgroundImage }: TestimonialImageProps) => {
  return (
    <div style={{ paddingTop: "5rem" }} id='testimonials-section'>
      <TestimonialImageDiv
        className='text-white text-center'
        BackgroundImage={BackgroundImage}
      />
    </div>
  );
};

export default Testimonials;
