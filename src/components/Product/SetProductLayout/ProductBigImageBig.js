import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

function ProductBigImageBig(props) {
  return (
    <Col
    
      lg={9}
      style={{height:"83vh"}}
      className="align-items-center justify-content-evenly "
    >
      <Image
      rounded
        className="shadow-lg"
        style={{height:"100%",width:"100%"}}
        src={props.currentImage}
      />
    </Col>
  );
}
export default ProductBigImageBig;
