import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Display from "./components/Display/Display";
import Header from "./components/Header/Header";
import ShowProducts from "./components/ShowProducts/ShowProducts";
import ProductProvider from "./store/ProductProvider";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";
import { useContext, useState } from "react";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import Product from "./components/Product/Product";
import AuthProvider from "./store/AuthProvider";
import Login from "./components/Login/Login";
import AuthContext from "./store/Auth-context";
function App() {
  const AuthCtx = useContext(AuthContext);
  const [ShowCart, setShowCart] = useState(false);
  function CartHandler() {
    if (ShowCart === false) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  }
  async function FormHandler(data) {
    console.log(data);
    try {
      const res = await fetch(
        "https://e-commerce-ed719-default-rtdb.firebaseio.com/contactInfo.json",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AuthProvider>
                <ProductProvider>
                  <CartProvider>
                    {AuthCtx.isLoggedIn && (
                      <Cart show={ShowCart} onHide={CartHandler}></Cart>
                    )}
                    <Header Onshowcart={CartHandler}></Header>
                    <Display></Display>
                    <ShowProducts></ShowProducts>{" "}
                  </CartProvider>
                </ProductProvider>
              </AuthProvider>
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <AuthProvider>
                <ProductProvider>
                  <CartProvider>
                    {AuthCtx.isLoggedIn && (
                      <Cart show={ShowCart} onHide={CartHandler}></Cart>
                    )}
                    <Header Onshowcart={CartHandler}></Header>
                    <Display></Display>
                    <Login></Login>{" "}
                  </CartProvider>
                </ProductProvider>
              </AuthProvider>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <AuthProvider>
                <ProductProvider>
                  <CartProvider>
                    {AuthCtx.isLoggedIn && (
                      <Cart show={ShowCart} onHide={CartHandler}></Cart>
                    )}
                    <Header Onshowcart={CartHandler}></Header>
                    <About></About>{" "}
                  </CartProvider>
                </ProductProvider>
              </AuthProvider>
            </>
          }
        />
        <Route
          path="/store"
          element={
            <>
              <AuthProvider>
                <ProductProvider>
                  <CartProvider>
                    {AuthCtx.isLoggedIn && (
                      <Cart show={ShowCart} onHide={CartHandler}></Cart>
                    )}
                    <Header Onshowcart={CartHandler}></Header>
                    <ShowProducts></ShowProducts>{" "}
                  </CartProvider>
                </ProductProvider>
              </AuthProvider>
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <AuthProvider>
                <ProductProvider>
                  <CartProvider>
                    <Cart show={ShowCart} onHide={CartHandler}></Cart>)
                    <Header Onshowcart={CartHandler}></Header>
                    <ContactUs OnFormSubmit={FormHandler}></ContactUs>{" "}
                  </CartProvider>
                </ProductProvider>
              </AuthProvider>
            </>
          }
        />
        <Route
          path="/product/:productid"
          element={
            <>
              <AuthProvider>
                <ProductProvider>
                  <CartProvider>
                    {AuthCtx.isLoggedIn && (
                      <Cart show={ShowCart} onHide={CartHandler}></Cart>
                    )}
                    <Header Onshowcart={CartHandler}></Header>
                    <Product></Product>{" "}
                  </CartProvider>
                </ProductProvider>
              </AuthProvider>
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <AuthProvider>
                <ProductProvider>
                  <CartProvider>
                    {AuthCtx.isLoggedIn && (
                      <Cart show={ShowCart} onHide={CartHandler}></Cart>
                    )}
                    <Header Onshowcart={CartHandler}></Header>
                    <Navigate to="/"></Navigate>{" "}
                  </CartProvider>
                </ProductProvider>
              </AuthProvider>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
