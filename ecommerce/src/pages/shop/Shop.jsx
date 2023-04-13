import React from "react";
import { PRODUCTS } from "../products/Products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Hiadog Shop</h1>
            </div>

            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product data={product} />
                ))}
            </div>
        </div>
    );
};
export default Shop;