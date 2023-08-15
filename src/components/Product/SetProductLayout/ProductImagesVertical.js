import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

import "./styleing.css";
function ProductImages(props) {
  return (
    <Col lg={3}>
      <div
        className="custom-scroll-container"
        style={{ height: "83vh", overflow: "auto" }}
      >
        <div className="custom-scroll-content">
          {props.images &&
            props.images.map((item, index) => (
              <Image
                key={index}
                fluid
                rounded
                className="p-1 shadow"
                onClick={props.OnClick}
                src={item}
              ></Image>
            ))}
        </div>
      </div>
    </Col>
  );
}
export default ProductImages;
