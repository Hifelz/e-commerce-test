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
            <p>lorem ipsum </p>
            <h6>$400.00</h6>
            <button>
              <a href="https://www.amazon.com.br/PROCESSADOR-GRAFICO-MSI-GEFORCE912-V397-484-VENTUS/dp/B08WHJFYM8/ref=sr_1_3?keywords=RTX+2070&qid=1681947588&s=computers&sr=1-3&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147">
                BUY
              </a>
            </button>
          </div>
          <div className="box">
            <img src={img2} />
            <p>lorem ipsum </p>
            <h6>$400.00</h6>
            <button>
              <a href="https://www.amazon.com.br/PROCESSADOR-GRAFICO-MSI-GEFORCE912-V397-484-VENTUS/dp/B08WHJFYM8/ref=sr_1_3?keywords=RTX+2070&qid=1681947588&s=computers&sr=1-3&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147">
                BUY
              </a>
            </button>
          </div>
          <div className="box">
            <img src={img3} />
            <p>lorem ipsum </p>
            <h6>$400.00</h6>
            <button>
              <a href="https://www.amazon.com.br/PROCESSADOR-GRAFICO-MSI-GEFORCE912-V397-484-VENTUS/dp/B08WHJFYM8/ref=sr_1_3?keywords=RTX+2070&qid=1681947588&s=computers&sr=1-3&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147">
                BUY
              </a>
            </button>
          </div>
          <div className="box">
            <img src={img1} />
            <p>lorem ipsum </p>
            <h6>$400.00</h6>
            <button>
              <a href="https://www.amazon.com.br/PROCESSADOR-GRAFICO-MSI-GEFORCE912-V397-484-VENTUS/dp/B08WHJFYM8/ref=sr_1_3?keywords=RTX+2070&qid=1681947588&s=computers&sr=1-3&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147">
                BUY
              </a>
            </button>
          </div>
          <div className="box">
            <img src={img3} />
            <p>lorem ipsum </p>
            <h6>$400.00</h6>
            <button>
              <a href="https://www.amazon.com.br/PROCESSADOR-GRAFICO-MSI-GEFORCE912-V397-484-VENTUS/dp/B08WHJFYM8/ref=sr_1_3?keywords=RTX+2070&qid=1681947588&s=computers&sr=1-3&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147">
                BUY
              </a>
            </button>
          </div>
        </div>
      </header>

      <footer className="App-footer"></footer>
    </div>
  );
};

export default Products;
