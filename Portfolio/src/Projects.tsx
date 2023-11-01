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
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed repellendus, mollitia incidunt delectus temporibus rem consequatur hic fugit molestiae amet aspernatur iusto nam.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
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
