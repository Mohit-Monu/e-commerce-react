import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function Header(props) {
  return (
      <Navbar expand="lg" className="bg-dark">
      <Container fluid >
        <Navbar.Brand className="text-light" href="#">E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="text-light" href="#action1">Home</Nav.Link>
            <Nav.Link className="text-light" href="#action2">Store</Nav.Link>
            <Nav.Link className="text-light" href="#action3">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div>
        <Button onClick={props.Onshowcart} style={{display:"flex",float:"left"}} variant="success">My Cart</Button>
        <span style={{color:"white",marginLeft:"4px",fontSize:"20px",marginTop:"-10px",float:"left"}} >4</span>
        </div>
      </Container>
    </Navbar>
    
  );
}
export default Header;
