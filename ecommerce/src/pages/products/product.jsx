import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import cartItems from "../../context/shop-context";


export const Product = (props) => {
  const { id, productName, price, productImage } = <props className="data"></props>;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="product-info">
        <h3>{productName}</h3>
        <p>${price}</p>
      </div>
      <button onClick={() => addToCart(id)}>Add to Cart</button>
      <hr />

    </div>

  );
};
export default Product;