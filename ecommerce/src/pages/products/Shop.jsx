import React from "react";
import { PRODUCTS } from "../products/Products";
import { Product } from "../products/product";
import "./shop.css";
import product1 from "../../assets/1.png";
import product2 from "../../assets/2.png";
import product3 from "../../assets/3.png";
import product4 from "../../assets/4.png";
import "./products.css";


export const PRODUCTS =
    [
        {
            id: 1,
            productName: "Iphone",
            price: 999.0,
            productImage: product1,
        },
        {
            id: 2,
            productnName: "RTX 3090",
            price: 5000.0,
            productImage: product2,
        }, {
            id: 3,
            productName: "Monitor",
            price: 600.0,
            productImage: product3,
        },
        {
            id: 4,
            productName: "Headset 7.1",
            price: 490.0,
            productImage: product4,
        },
    ]




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