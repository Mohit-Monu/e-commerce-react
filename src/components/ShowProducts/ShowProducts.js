
import Row from "react-bootstrap/Row";
import ListProduct from "./ListProduct";

function ShowProducts(props) {
  return (
    <>
    <div className="container">
    <Row xs={1} md={2} className="g-4 mt-2">
      <ListProduct products={props.products}></ListProduct>
    </Row>
    </div>
    </>
    );
}
export default ShowProducts;
