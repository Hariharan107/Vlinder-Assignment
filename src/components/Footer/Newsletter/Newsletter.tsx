import { Image } from "react-bootstrap";
import { StyledDiv, SubscribeContainer } from "./style";

interface NewsletterData {
  title: string;
  description: string;
  subscribeButton: string;
  instagramPostTitle: string;
  instagramImages: string[];
}

const Newsletter = ({
  title,
  description,
  subscribeButton,
  instagramPostTitle,
  instagramImages,
}: NewsletterData) => {
  return (
    <StyledDiv>
      <h3 className='text-warning'>{title}</h3>
      <p className='muted-text'>{description}</p>
      <SubscribeContainer>
        <input type='text' placeholder='Your Email' />
        <button className='rounded'>{subscribeButton}</button>
      </SubscribeContainer>
      <h5 className='pt-4 muted-text'>{instagramPostTitle}</h5>
      <div className='d-flex gap-2'>
        {instagramImages.map((image, index) => (
          <Image key={index} src={image} roundedCircle height={60} width={60} />
        ))}
      </div>
    </StyledDiv>
  );
};

export default Newsletter;
