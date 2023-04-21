import React from "react";

import "./products.css";

import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";

/*const images = [
  {
    src:
      "https://i0.wp.com/compify.in/wp-content/uploads/2022/12/4090-HOF-5.jpg?fit=600%2C600&ssl=1",
    alt: "Image 1",
    description: "Description of image 1",
  },
  {
    src:
      "https://i0.wp.com/compify.in/wp-content/uploads/2022/12/4090-HOF-1.jpg?fit=600%2C600&ssl=1",
    alt: "Image 2",
    description: "Description of image 2",
  },
  {
    src: "https://placeimg.com/640/480/fashion",
    alt: "Image 3",
    description: "Description of image 3",
  },
  // add more images here
*/

const Products = () => {
  const [products] = useState([
    {
      id: "1",
      name: "RTX 3090",
      img: "./products/1.jpg",
    },
    {
      id: "1",
      product: "RTX 3090",
      img:
        "https://i0.wp.com/compify.in/wp-content/uploads/2022/12/4090-HOF-5.jpg?fit=600%2C600&ssl=1",
    },
    {
      id: "2",
      product: "RTX 4090",
      img:
        "https://www.pexels.com/pt-br/foto/leque-redondo-preto-e-branco-6341789/",
    },
    {
      id: "3",
      product: "RTX 2090",
      img:
        "https://www.pexels.com/pt-br/foto/computador-maos-segurando-holding-10558582/",
    },
  ]);
  return (
    <div className="App">
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <header className="App-header">
        <p>My favourite costumer</p>
      </header>
      <div className="fork">
        {products.map((products) => {
          return (
            <Products
              id={products.id}
              name={products.name}
              img={products.img}
            />
          );
        })}
      </div>

      <footer className="App-footer"></footer>
    </div>
  );
};

export default Products;
