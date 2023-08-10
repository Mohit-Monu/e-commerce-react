import { useEffect, useState } from "react";
import CartContext from "./Cart-context";

const CartProvider = (props) => {

  const [cartState, setCartState] = useState([]);
  const [totalPrice, settotalPriceState] = useState(0);
  useEffect(()=>{
    let total=0;
    cartState.forEach((ele)=>{
      total+=ele.price*ele.quantity
    })
    settotalPriceState(total)
  },[cartState])

  const addToCartHandler = (item) => {
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
  };
  function DeleteFromCartHandler(id){

    const items=[]
    for(var i=0;i<cartState.length;i++){
      if(cartState[i].id===id){
      }else{
        items.push(cartState[i])
      }
    }
    setCartState(items)
  }
  const expvalue = {
    item: cartState,
    addToCart: addToCartHandler,
    DeleteFromCart:DeleteFromCartHandler,
    totalPrice:totalPrice
  };
  return (
    <CartContext.Provider value={expvalue}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
