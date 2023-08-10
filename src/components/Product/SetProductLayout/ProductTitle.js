function ProductTitle(props) {
  return (
    <div className="container mt-5" style={{textAlign:"center"}} >
      <h4>{props.title}</h4>
      <h2>Rs.{props.price}</h2>
    </div>
  );
}
export default ProductTitle;
