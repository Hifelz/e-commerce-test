import React, { useState, useEffect, Fragment } from "react";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import data from "./data.json";

function Store() {
  const getStore = () => {
    axios
      .get("https://fakestoreapiserver.reactbd.com/products")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <div className="produtos">
        <h1>Store</h1>

        <div className="inner">
          {data &&
            data.map((data) => {
              return (
                <div className="box">
                  <strong>{data.title}</strong>
                  <br />

                  {data.category}
                  <button>
                    <a href="https://www.amazon.com.br/PROCESSADOR-GRAFICO-MSI-GEFORCE912-V397-484-VENTUS/dp/B08WHJFYM8/ref=sr_1_3?keywords=RTX+2070&qid=1681947588&s=computers&sr=1-3&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147">
                      BUY
                    </a>
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
export default Store;
