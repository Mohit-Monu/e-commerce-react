import Row from "react-bootstrap/Row";
import ListProduct from "./ListProduct";

function ShowProducts(props) {
  return (
    <>
      <center>
        <Row xs={1} md={2} className="g-4 mt-4 ">
          <ListProduct products={props.products}></ListProduct>
        </Row>
      </center>
    </>
  );
}
export default ShowProducts;
