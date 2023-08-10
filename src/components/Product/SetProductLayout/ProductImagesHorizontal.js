import Image from "react-bootstrap/Image";
function ProductImagesHorizontal(props) {

  return (
    <div
      className="container bg-light"
      style={{ width: "100%",display:"flex", height: "30%", overflow: "auto",scrollSnapType:"x mendatory" }}
    >
      {props.images &&
        props.images.map((item, index) => (
          <div style={{scrollSnapAlign:"start" }}>
            <Image
              key={index}
              style={{height:"100%"}}
              rounded
              className="p-1 "
              onClick={props.OnClick}
              src={item}
            ></Image>
          </div>
        ))}
    </div>
  );
}
export default ProductImagesHorizontal;
