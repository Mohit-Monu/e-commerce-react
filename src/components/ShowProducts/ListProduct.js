import { useContext } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import ProductContext from "../../store/Product-context";
import { Link } from "react-router-dom";

function ListProduct(props) {
  const productCtx = useContext(ProductContext);
  return(
    <>
    {productCtx.map((item) => (
      <Col key={item.id}>
        <Card border="danger">
          <Link to={`/product/${item.id}`}><Card.Img
            variant="top"
            src={item.imageUrl}
            style={{ width: "25rem" }}
            className="align-self-center shadow-lg mt-4 img-fluid"
          /></Link>
          <Card.Body className="d-grid gap-2">
            <Card.Title>{item.title}</Card.Title>
            <Card.Title style={{ color: "red" }}>Rs.{item.price}</Card.Title>
            <Button variant="success" size="lg" value={JSON.stringify(item)} onClick={props.OnAddToCart}>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ))}

  </>
  )

}
export default ListProduct;
