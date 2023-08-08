import Row from "react-bootstrap/Row";
import ListProduct from "./ListProduct";
import { useContext } from "react";
import CartContext from "../../store/Cart-context"
function ShowProducts(props) {
  const cartCtx=useContext(CartContext)
  function OnAddToCartHandler(e){
    const obj=JSON.parse(e.target.value)
    const myobj={
      id:obj.id,
      title: obj.title,
      price: obj.price,
      imageUrl: obj.imageUrl,
      quantity: 1
    }
    cartCtx.addToCart(myobj)
  }
  return (
    <>
      <center>
        <Row xs={1} md={2} className="g-4 mt-4 ">
          <ListProduct OnAddToCart={OnAddToCartHandler} products={props.products}></ListProduct>
        </Row>
      </center>
    </>
  );
}
export default ShowProducts;
