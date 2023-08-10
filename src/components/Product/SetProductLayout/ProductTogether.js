import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ProductImagesHorizontal from "./ProductImagesHorizontal";
import ProductImagesVertical from "./ProductImagesVertical";
import { useContext, useState, useCallback, useEffect } from "react";
import ProductBigImageBig from "./ProductBigImageBig";
import ProductBigImagesmall from "./ProductBigImagesmall";
import CartContext from "../../../store/Cart-context";
import ProductTitle from "./ProductTitle";
import ProductReview from "./ProductReview";

function Image() {
  const params = useParams().productid;
  const [product, setProduct] = useState({});
  const [currentImage, setCurrentImage] = useState("");
  const fetchMoviesHandler = useCallback(async () => {
    try {
      const response = await fetch(
        `https://e-commerce-ed719-default-rtdb.firebaseio.com/products/${params}.json`
      );
      const data = await response.json();
      const obj = {
        id: params,
        imageUrl: data.imageUrl,
        title: data.title,
        price: data.price,
        refImg: data.refImg,
        review: data.review
      };
      setProduct(obj);
      setCurrentImage(obj.imageUrl);
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);
  const CartCtx = useContext(CartContext);
  function ImageChangeHandler(e) {
    setCurrentImage(e.target.src);
  }
  function addToCartHandler(e) {
    const myobj = {
      id: product.id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: 1,
    };
    CartCtx.addToCart(myobj);
  }
  return (
    <Container fluid>
      <Row>
        <Col md={6} style={{ borderRight: "5px solid black" }}>
          <Container className="mt-2 mb-2 d-none d-lg-block">
            <Row md={12} style={{ height: "85vh", width: "100%" }}>
              <ProductImagesVertical
                OnClick={ImageChangeHandler}
                images={product.refImg}
              ></ProductImagesVertical>
              <ProductBigImageBig
                currentImage={currentImage}
              ></ProductBigImageBig>
            </Row>
          </Container>
          <Container className="mt-2 mb-2 d-lg-none">
            <Row md={12} style={{ height: "600px", width: "100%" }}>
              <ProductImagesHorizontal
                OnClick={ImageChangeHandler}
                images={product.refImg}
              ></ProductImagesHorizontal>
              <ProductBigImagesmall
                currentImage={currentImage}
              ></ProductBigImagesmall>
            </Row>
          </Container>
          <Container fluid className="mb-3">
            <Row md={12}>
              <Col md={6}>
                <Button variant="warning" style={{ width: "100%" }}>
                  Buy Now
                </Button>
              </Col>
              <Col md={6}>
                <Button
                  value={params}
                  variant="success"
                  onClick={addToCartHandler}
                  style={{ width: "100%" }}
                >
                  Add to cart
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col style={{ height: "85vh" }}>
            <ProductTitle
              title={product.title}
              price={product.price}
            ></ProductTitle>
            <ProductReview review={product.review}></ProductReview>
        </Col>
      </Row>
    </Container>
  );
}
export default Image;
