import React, { useState, useEffect, Fragment } from "react";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";

function Store() {
  const [title, description, price] = useState("");
  const getStore = () => {
    axios
      .get("https://fakestoreapiserver.reactbd.com/products")
      .then((res) => {
        console.log(res.data);
        title(res.data.title);
        description(res.data.description);
        price(res.data.price);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h1>Store</h1>
      <button onClick={getStore}> clique para gerar dados</button>
      <div className="produtos"></div>
    </div>
  );
}
export default Store;
