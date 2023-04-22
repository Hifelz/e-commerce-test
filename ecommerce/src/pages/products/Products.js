import React from "react";

import "./products.css";
import Gallery from "../../components/Gallery/Gallery";

import Navbar from "../../components/navbar/Navbar";

const images = [
  {
    src: "https://placeimg.com/640/480/tech",
    alt: "Image 1",
    description: "Description of image 1",
  },
  {
    src: "https://placeimg.com/640/480/animals",
    alt: "Image 2",
    description: "Description of image 2",
  },
  {
    src: "https://placeimg.com/640/480/arch",
    alt: "Image 3",
    description: "Description of image 3",
  },
  // add more images here
];

const Products = () => {
  return (
    <div className="App">
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <header className="App-header">
        <p>My favourite costumer</p>
      </header>

      <div className="products">
        <Gallery images={images}></Gallery>

        <Gallery images={images}></Gallery>

        <Gallery images={images}></Gallery>

        <Gallery images={images}></Gallery>

        <Gallery images={images}></Gallery>

        <Gallery images={images}></Gallery>
      </div>

      <footer className="App-footer"></footer>
    </div>
  );
};

export default Products;
