import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

import { CartItem } from "./cart-item";


import "./cart.css";

export const Cart = () => {

  const { cartItem } = useContext(ShopContext);
  return (
    <div className="cart-container">
      <div className="cart-item">
        {cartItem.map((item) => (
          
          <CartItem key={item.id} item={item} />
        ))}

      </div>
      <div className="cart-total">
        <p>Total: ${cartItem.reduce((acc, item) => acc + item.price, 0)}</p>
      </div>
      
      <div className="cart-total">
        <p>Total: ${cartItem.reduce((acc, item) => acc + item.price, 0)}</p>

      </div>
      <div className="cart-total">
        <p>Total: ${cartItem.reduce((acc, item) => acc + item.price, 0)}</p>

      </div>
    </div>
  );
};
export default Cart;