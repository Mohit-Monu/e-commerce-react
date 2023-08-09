import { useContext } from "react";
import { NavLink } from "react-router-dom"; 
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartContext from "../../store/Cart-context";
function Header(props) {
  const CartCtx=useContext(CartContext)
  return (
      <Navbar expand="lg" className="bg-dark" variant="dark">
      <Container fluid >
        <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
            
          >
          <NavLink to="/" style={{textDecoration:"none",color: "white",marginRight:"15px",marginLeft:"25px"}}>Home</NavLink>
          <NavLink to="/store"  style={{textDecoration:"none",color: "white" ,marginRight:"15px" }}>Store</NavLink>
          <NavLink to="/about"  style={{textDecoration:"none",color: "white" ,marginRight:"15px" }}>About</NavLink>
          <NavLink to="/contact"  style={{textDecoration:"none",color: "white" ,marginRight:"15px" }}>Contact Us</NavLink>

          </Nav>
        </Navbar.Collapse>
        <div>
        <Button onClick={props.Onshowcart} style={{display:"flex",float:"left"}} variant="success">My Cart</Button>
        <span style={{color:"white",marginLeft:"4px",fontSize:"20px",marginTop:"-10px",float:"left"}} >{CartCtx.item.length}</span>
        </div>
      </Container>
    </Navbar>
    
  );
}
export default Header;
