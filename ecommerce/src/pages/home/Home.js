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

      <div className="container">
        <div className="gallery">
          <img src={img1} />
          <div className="description">
            Iphone XR
            <br />
            <button>
              <a href="https://www.amazon.com.br/PROCESSADOR-GRAFICO-MSI-GEFORCE912-V397-484-VENTUS/dp/B08WHJFYM8/ref=sr_1_3?keywords=RTX+2070&qid=1681947588&s=computers&sr=1-3&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147">
                BUY
              </a>
            </button>
          </div>
        </div>
        <div className="gallery">
          <img src={img2} />
          <div className="description">
            RTX 3090 TI
            <br />
            <button>
              <a href="https://www.amazon.com.br/PROCESSADOR-GRAFICO-MSI-GEFORCE912-V397-484-VENTUS/dp/B08WHJFYM8/ref=sr_1_3?keywords=RTX+2070&qid=1681947588&s=computers&sr=1-3&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147">
                BUY
              </a>
            </button>
          </div>
        </div>
        <div className="gallery">
          <img src={img3} />
          <div className="description">
            Monitor 180Hz
            <br />
            <button>
              <a href="https://www.amazon.com.br/PROCESSADOR-GRAFICO-MSI-GEFORCE912-V397-484-VENTUS/dp/B08WHJFYM8/ref=sr_1_3?keywords=RTX+2070&qid=1681947588&s=computers&sr=1-3&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147">
                BUY
              </a>
            </button>
          </div>
        </div>
        <div className="gallery">
          <img src={img2} />
          <div className="description">
            RTX 3090 TI
            <br />
            <button>
              <a href="https://www.amazon.com.br/PROCESSADOR-GRAFICO-MSI-GEFORCE912-V397-484-VENTUS/dp/B08WHJFYM8/ref=sr_1_3?keywords=RTX+2070&qid=1681947588&s=computers&sr=1-3&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147">
                BUY
              </a>
            </button>
          </div>
        </div>
        <div className="gallery">
          <br />
          <img src={img3} />
          <div className="description">
            Monitor 180Hz
            <br />
            <button>
              <a href="https://www.amazon.com.br/PROCESSADOR-GRAFICO-MSI-GEFORCE912-V397-484-VENTUS/dp/B08WHJFYM8/ref=sr_1_3?keywords=RTX+2070&qid=1681947588&s=computers&sr=1-3&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147">
                BUY
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
