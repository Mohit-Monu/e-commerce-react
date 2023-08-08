import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
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
        <Modal.Title className="text-danger align-self-center">Total Price-</Modal.Title>
          
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
