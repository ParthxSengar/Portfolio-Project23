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
          <Col className="proj1">
            <Card style={{ width: "18rem" }} className="proj1-card">
              <Card.Img variant="top" src="https://i0.wp.com/www.spielanime.com/wp-content/uploads/2023/08/Do-Joyboy-or-Sun-God-Nika-take-over-Luffys-body-and-mind-when-he-is-using-Gear-5.png?resize=1024%2C576&ssl=1" />
              <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed repellendus, mollitia incidunt delectus temporibus rem consequatur hic fugit molestiae amet aspernatur iusto nam.
                </Card.Text>
                <Button variant="primary">Read more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="proj2">Project 2</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
