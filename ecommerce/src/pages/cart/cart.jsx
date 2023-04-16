import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../products/Products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";

export const Cart = () => {
  const navigate = useNavigate();
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
      <div className="cart-actions">
        <button
          onClick={() => {
            navigate("/checkout");
          }}
        >
          Checkout
        </button>
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