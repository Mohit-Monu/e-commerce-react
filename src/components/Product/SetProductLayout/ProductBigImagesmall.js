import Image from "react-bootstrap/Image";


function ProductBigImagesmall(props) {
  return (
    <div
      className="container bg-dark"
      style={{ width: "100%", height: "70%" }}
    >
      <Image  fluid src={props.currentImage} rounded style={{height:"100%",width:"100%"}} >

      </Image>
        

    </div>
  );
}
export default ProductBigImagesmall;
