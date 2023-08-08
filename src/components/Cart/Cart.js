import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListCart from "./ListCart";
import { useContext } from "react";
import CartContext from "../../store/Cart-context";
const Cart = (props) => {
  const CartCtx=useContext(CartContext)
  function OnDeleteFromCartHandler(e){
    CartCtx.DeleteFromCart(e.target.value)
  }
  return (
    <Modal
        {...props}
        size="xl"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title >View Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ListCart OnDeleteFromCart={OnDeleteFromCartHandler}></ListCart>
        </Modal.Body>
        <Modal.Title className="text-danger align-self-center">Total Price- Rs.{CartCtx.totalPrice}</Modal.Title>
          
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
