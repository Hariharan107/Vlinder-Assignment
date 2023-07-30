import { styled } from "styled-components";

const TestimonialImageDiv = styled.div`
  background-image: url("https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  height: 50vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.5;
`;

const Testimonials = () => {
  return (
    <div style={{ paddingTop: "5rem" }} id='testimonials-section'>
      <TestimonialImageDiv className='text-white text-center'>
        {/* Testimonial */}
      </TestimonialImageDiv>
    </div>
  );
};

export default Testimonials;
