import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Display from "./components/Display/Display";
import Header from "./components/Header/Header";
import ShowProducts from "./components/ShowProducts/ShowProducts";
import ProductProvider from "./store/ProductProvider";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import About from "./components/About/About";
function App() {
  const [ShowCart, setShowCart] = useState(false);
  function CartHandler() {
    if (ShowCart === false) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  }
  const pathhome = (
    <ProductProvider>
      <CartProvider>
        <Cart show={ShowCart} onHide={CartHandler}></Cart>
        <Header Onshowcart={CartHandler}></Header>
        <Display></Display>
        <ShowProducts></ShowProducts>
      </CartProvider>
    </ProductProvider>
  );
  const pathabout = (
    <ProductProvider>
      <CartProvider>
        <Cart show={ShowCart} onHide={CartHandler}></Cart>
        <Header Onshowcart={CartHandler}></Header>
        <About></About>
      </CartProvider>
    </ProductProvider>
  );
  const pathstore = (
    <ProductProvider>
      <CartProvider>
        <Cart show={ShowCart} onHide={CartHandler}></Cart>
        <Header Onshowcart={CartHandler}></Header>
        <ShowProducts></ShowProducts>
      </CartProvider>
    </ProductProvider>
  );
  const router = createBrowserRouter([
    { path: "/", element: pathhome },
    { path: "/store", element: pathstore },
    { path: "/about", element: pathabout },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
