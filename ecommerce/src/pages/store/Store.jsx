import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
function Store() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const url = "https://fakestoreapi.reactbd.com";
      const response = await fetch(url);
      const objJson = await response.json();
      setData(objJson.results);
    };
    fetchApi();
  }, []);

  return (
    <div>
      <h1>Store</h1>
      <div>
        {data.map((e) => (
          <div key="id">
            <h4>{e.title}</h4>
            <img src={e.thumbnail} alt=""></img>
            <h4>{e.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Store;
