import { Container, Row, Col } from "react-bootstrap";
import CompanyDetails from "./CompanyDetails/CompanyDetails";
import Newsletter from "./Newsletter/Newsletter";

interface CompanyDetailsDataProps {
  name: string;
  email: string;
  address: string;
  phone: string;
}

interface NewsletterData {
  title: string;
  description: string;
  subscribeButton: string;
  instagramPostTitle: string;
  instagramImages: string[];
}

interface FooterProps extends CompanyDetailsDataProps, NewsletterData {}

const Footer = ({
  name,
  email,
  address,
  phone,
  title,
  description,
  subscribeButton,
  instagramPostTitle,
  instagramImages,
}: FooterProps) => {
  return (
    <Container>
      <Row className='text-white '>
        <Col lg={6}>
          <CompanyDetails
            name={name}
            email={email}
            address={address}
            phone={phone}
          />
        </Col>
        <Col lg={6}>
          <Newsletter
            title={title}
            description={description}
            subscribeButton={subscribeButton}
            instagramPostTitle={instagramPostTitle}
            instagramImages={instagramImages}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
