import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartContext from "../../store/Cart-context";
import "./Header.css";
import AuthContext from "../../store/Auth-context";
function Header(props) {
  const AuthCtx = useContext(AuthContext);
  const CartCtx = useContext(CartContext);
  function LogoutHanler() {
    AuthCtx.logout();
  }
  return (
    <div>
      <Navbar expand="lg" className="bg-dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/store">Store</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
            </Nav>
          </Navbar.Collapse>
          <div>
            {!AuthCtx.isLoggedIn && (
              <Button
                onClick={props.Onlogin}
                style={{ display: "flex", float: "left", marginRight: "5px" }}
                variant="outline-info"
              >
                <NavLink to="/login"> Log-In</NavLink>
              </Button>
            )}
            {AuthCtx.isLoggedIn && (
              <Button
                onClick={LogoutHanler}
                style={{ display: "flex", float: "left", marginRight: "5px" }}
                variant="outline-info"
              >
                Log-Out
              </Button>
            )}
            <Button
              onClick={props.Onshowcart}
              style={{ display: "flex", float: "left" }}
              variant="success"
            >
              My Cart
            </Button>
            <span
              style={{
                color: "white",
                marginLeft: "4px",
                fontSize: "20px",
                marginTop: "-10px",
                float: "left",
              }}
            >
              {CartCtx.item.length}
            </span>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
