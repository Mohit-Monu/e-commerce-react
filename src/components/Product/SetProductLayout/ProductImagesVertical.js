import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

import "./styleing.css";
function ProductImages(props) {
  return (
    <Col lg={3}>
      <div
        className="custom-scroll-container"
        style={{ height: "85vh", overflow: "auto" }}
      >
        <div class="custom-scroll-content">
          {props.images &&
            props.images.map((item, index) => (
              <Image
                key={index}
                fluid
                rounded
                className="p-1 "
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
