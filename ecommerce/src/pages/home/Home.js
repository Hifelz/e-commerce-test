import React from "react";
import "./App.css";

import Navbar from "../../components/navbar/Navbar";
import "./App.css";
import { useState } from "react";
import img1 from "../../img/a.jpg";
import img2 from "../../img/c.png";
import img3 from "../../img/e.png";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <section>
        <div className="content">
          <h2>Loja Online </h2>
          <br />
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. <br></br>It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
            <br />
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </div>
        <div className="imageBox"></div>
      </section>

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
    </>
  );
}

export default App;
