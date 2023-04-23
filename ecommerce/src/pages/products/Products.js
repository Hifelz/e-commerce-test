import React from "react";

import "./products.css";
//import Gallery from "../../components/Gallery/Gallery";

import Navbar from "../../components/navbar/Navbar";

//Commented variable to try flexbox with css and react
/*const images = [
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
*/
const Products = () => {
  return (
    <div className="App">
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <header className="App-header">
        <title>Urban Store</title>
        <div className="container">
          <div class="item-1">item 1</div>
          <div class="item-2">Item 2</div>
          <div class="item-3">Item 3</div>
        </div>
      </header>

      <footer className="App-footer"></footer>
    </div>
  );
};

export default Products;
