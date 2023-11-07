import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Projects() {
  return (
    <div className="proj-container">
      <Container>
        <Row>
          <Col className="proj1" xs={12} md={6} lg={4}>
            <Card style={{ width: "18rem" }} className="proj1-card">
              <Card.Img
                variant="top"
                src="https://academy.avast.com/hubfs/New_Avast_Academy/what_is_a_keylogger_academy_a1_refresh/What-is-a-keylogger-04.svg"
              />
              <Card.Body>
                <Card.Title className="proj-title">
                  <b>Advanced Keylogger</b>
                </Card.Title>
                <Card.Text>
                  <i>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sed repellendus, mollitia incidunt delectus temporibus rem
                    consequatur hic fugit molestiae amet aspernatur iusto nam.
                  </i>
                </Card.Text>
                <Button variant="primary">Read more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="proj2" xs={12} md={6} lg={4}>
            <Card style={{ width: "18rem" }} className="proj1-card">
              <Card.Img
                variant="top"
                src="https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs11042-022-12461-7/MediaObjects/11042_2022_12461_Fig2_HTML.png"
              />
              <Card.Body>
                <Card.Title className="proj-title">
                  <b>Plant disease detector</b>
                </Card.Title>
                <Card.Text>
                  <i>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sed repellendus, mollitia incidunt delectus temporibus rem
                    consequatur hic fugit molestiae amet aspernatur iusto nam.
                  </i>
                </Card.Text>
                <Button variant="primary">Read more</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
