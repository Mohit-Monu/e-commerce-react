import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import ListCart from "./ListCart";

const Cart = (props) => {
  return (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title>View Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ListCart></ListCart>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide} >
            Close
          </Button>
          <Button variant="primary">
            Order
          </Button>
        </Modal.Footer>
      </Modal>
  );
};
export default Cart;
