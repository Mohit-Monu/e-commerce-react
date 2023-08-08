import "./App.css";
import Display from "./components/Display/Display";
import Header from "./components/Header/Header";
import ShowProducts from "./components/ShowProducts/ShowProducts";
import ProductProvider from "./store/ProductProvider";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
function App() {
  const [ShowCart, setShowCart] = useState(false);
  function CartHandler() {
    if (ShowCart === false) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  }

  return (
    <>
      <CartProvider>
        <Cart show={ShowCart} onHide={CartHandler}></Cart>
      </CartProvider>
      <ProductProvider>
        <Header Onshowcart={CartHandler}></Header>
        <Display></Display>
        <ShowProducts></ShowProducts>
      </ProductProvider>
    </>
  );
}

export default App;
