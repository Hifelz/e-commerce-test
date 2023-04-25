import React from "react";
import img1 from "../../img/a.jpg";
import img2 from "../../img/c.png";
import img3 from "../../img/e.png";

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
          <div className="box">
            <img src={img1} />
          </div>
          <div className="box">
            <img src={img2} />
          </div>
          <div className="box">
            <img src={img3} />
          </div>
          <div className="box">
            <img src={img1} />
          </div>
          <div className="box">
            <img src={img3} />
          </div>
        </div>
      </header>

      <footer className="App-footer"></footer>
    </div>
  );
};

export default Products;
