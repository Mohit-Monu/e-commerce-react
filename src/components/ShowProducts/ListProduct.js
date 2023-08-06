import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function ListProduct(props) {
  return props.products.map((item, index) => (
    <Col key={index}>
      <Card style={{border:" 2px solid red"}} >
        <Card.Img variant="top" src={item.imageUrl} className="p-3"/>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Title className="text-danger">Rs.{item.price}</Card.Title>
        </Card.Body>
        <Button variant="success" className="btn-lg" > Add To Cart</Button>
      </Card>
    </Col>
  ));
}
export default ListProduct;
