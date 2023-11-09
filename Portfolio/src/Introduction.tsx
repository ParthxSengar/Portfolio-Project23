// import { Container } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Introduction() {
  return (
    <div className="intro-main-div">
      <Container>
        <Row>
          <Col>
            <div className="intro-div">I am a Web Developer</div>
          </Col>
          <Col>
            <div className="intro-img">
              <img
                src="https://pnganime.com/web/image-thumbnails/82/121-lg.png"
                alt=""
                width="500px"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Introduction;