import { useContext, useCallback, useEffect, useState } from "react";
import CartContext from "./Cart-context";
import AuthContext from "./Auth-context";
import { useNavigate } from "react-router-dom";
const CartProvider = (props) => {
  const navigate = useNavigate();
  const AuthCtx = useContext(AuthContext);
  const [cartState, setCartState] = useState([]);
  const [totalPrice, settotalPriceState] = useState(0);
  const fetchCart = useCallback(async () => {
    try {
      const email = localStorage.getItem("email");
      const modifiedEmail = email.replace(/[@.]/g, "");
      const response = await fetch(
        `https://e-commerce-ed719-default-rtdb.firebaseio.com/cart/${modifiedEmail}.json`
      );
      const data = await response.json();
      const loadedmovies = [];
      let total = 0;
      for (const key in data) {
        const obj = {
          id: key,
          quantity:data[key].quantity,
          imageUrl: data[key].imageUrl,
          title: data[key].title,
          price: data[key].price,
        };
        total += data[key].price * data[key].quantity;
        loadedmovies.push(obj);
      }
      console.log(loadedmovies)
      setCartState(loadedmovies);
      settotalPriceState(total);
      console.log(total)
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    fetchCart();
  }, [fetchCart]);
  const addToCartHandler = async (item) => {
    if (AuthCtx.isLoggedIn) {
      const email = localStorage.getItem("email");
      const modifiedEmail = email.replace(/[@.]/g, "");
      console.log(item);
      try {
        const res = await fetch(
          `https://e-commerce-ed719-default-rtdb.firebaseio.com/cart/${modifiedEmail}.json`,
          {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(res);
      } catch (err) {
        console.log(err);
      }
      let flag = 0;
      const items = cartState.map((element) => {
        if (element.id === item.id) {
          element.quantity++;
          flag++;
          return element;
        } else {
          return element;
        }
      });
      if (flag === 0) {
        setCartState((previtem) => {
          return [item, ...previtem];
        });
      } else {
        setCartState(items);
      }
    } else {
      navigate("/login");
    }
  };
  function DeleteFromCartHandler(id) {
    const items = [];
    for (var i = 0; i < cartState.length; i++) {
      if (cartState[i].id === id) {
      } else {
        items.push(cartState[i]);
      }
    }
    setCartState(items);
  }
  const expvalue = {
    item: cartState,
    addToCart: addToCartHandler,
    DeleteFromCart: DeleteFromCartHandler,
    totalPrice: totalPrice,
  };
  return (
    <CartContext.Provider value={expvalue}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
