import React from "react";
import "./App.css";
import Gallery from "../../components/Gallery/Gallery";

import Navbar from "../../components/navbar/Navbar";
import "./App.css";
import { useState } from "react";

const images = [
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
];

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <React.Fragment>
        <Navbar />
      </React.Fragment>

      <div className="App">
        <header className="App-header">
          <div class="hero-image"></div>
          <div class="hero-text"></div>
          <h1>Urban Store</h1>
          <br></br>
          <h5>Peripherals</h5>
        </header>

        <Gallery images={images}></Gallery>
        <div border="0.1, red" className="product-item">
          <h3>RTX 4090 Ti</h3>
          <p>
            The RTX 4090 is a top-of-the-line graphics card that is designed to
            deliver unparalleled gaming and professional-level performance.
          </p>
          <p>
            This graphics card also boasts an impressive 48GB of GDDR6X memory,
            providing lightning-fast data transfer speeds and the ability to
            handle massive datasets and complex simulations.{" "}
          </p>
          <p>
            <button>
              <a href="https://www.amazon.com.br/PROCESSADOR-GRAFICO-MSI-GEFORCE912-V397-484-VENTUS/dp/B08WHJFYM8/ref=sr_1_3?keywords=RTX+2070&qid=1681947588&s=computers&sr=1-3&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147">
                BUY
              </a>
            </button>
          </p>
          <p>
            {counter}
            <button
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              Add to Cart
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
