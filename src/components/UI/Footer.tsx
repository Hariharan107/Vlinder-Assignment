import { Container, Row, Col } from "react-bootstrap";
import CompanyDetails from "./CompanyDetails";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <Container>
      <Row className='text-white '>
        <Col lg={6}>
          <CompanyDetails />
        </Col>
        <Col lg={6}>
          <Newsletter />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
