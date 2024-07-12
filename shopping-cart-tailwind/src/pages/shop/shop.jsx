import React, { useState, useEffect } from "react";
import { Product } from "./product";

import axios from "axios";

export const Shop = () => {
  const [data, setdata] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setdata(response.data);
      console.log(response);
    } catch (err) {
      console.log("Error : ", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="sm:grid  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center">
        {data.map((prod) => {
          // prod.quantity=1;
          return <Product key={prod.id} item={prod} />;
        })}
      </div>
    </div>
  );
};
