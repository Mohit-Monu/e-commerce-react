import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
function Header() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand className="text-light" href="#home">
          E-Commerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-light" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="text-light" href="#More">
              More
            </Nav.Link>
            <Nav.Link className="text-light" href="#About">
              About Us
            </Nav.Link>
          </Nav>
      <Button variant="success">My Cart</Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}
export default Header;
