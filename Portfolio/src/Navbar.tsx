import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navibar() {
  return (
    <div>
      <div className="Navigation" data-bs-theme="dark">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">
                  <span className="navbox">Home</span>
                </Nav.Link>
                <Nav.Link href="#Projects">
                  <span className="navbox">Projects</span>
                </Nav.Link>
                <Nav.Link href="#Certificates">
                  <span className="navbox">Certificates</span>
                </Nav.Link>
                <Nav.Link href="#Contact">
                  <span className="navbox">Contact</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Navibar;
