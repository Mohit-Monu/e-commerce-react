import classes from "./ProductReview.module.css";
import { Image } from "react-bootstrap";
function ProductReview() {
  return (
    <div className=" mt-5" style={{ height: "45vh" }}>
      <h3 style={{ float: "left" }}>Ratings & Reviews</h3>
      <div className={classes.product}>
        <span className={classes.rating}>★</span>
        <b className={classes.ratingvalue}>4.5</b>
      </div>
      <big className={classes.ratingname}>13,156 ratings and 1,371 reviews</big>
      <div className={classes.ProductReviews}>
        <Image
          src="https://m.media-amazon.com/images/I/11sUgaVRsYL.png"
          style={{ height: "30px" }}
        ></Image>
        <b>Shopping</b>
        <br />

        <div className="mt-2">
          <Image src="https://m.media-amazon.com/images/I/01S5bawZYgL.png"></Image>
          <spam>76% positive ratings from 100K+ customers</spam>
          <br />
        </div>
        <div className="mt-2">
          <Image src="https://m.media-amazon.com/images/I/01S5bawZYgL.png"></Image>
          <spam>100K+ recent orders from this brand</spam>
          <br />
        </div>
        <div className="mt-2">
          <Image src="https://m.media-amazon.com/images/I/01S5bawZYgL.png"></Image>
          <spam>5+ years on Amazon</spam>
          <br />
        </div>
      </div>
    </div>
  );
}
export default ProductReview;
