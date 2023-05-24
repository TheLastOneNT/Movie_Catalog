import { Typography, Row, Col } from "antd";
import "../index.css";

const { Title } = Typography;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row className="footer" justify="center" align="middle">
      <Col>
        <Title className="footerLabel">Nikoloz Tevzadze © {currentYear}</Title>
      </Col>
    </Row>
  );
};
export default Footer;
