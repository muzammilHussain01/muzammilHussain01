import React, { useEffect } from "react";
import axios from "axios";
const url = "https://fakestoreapi.com/products";
const Products = () => {
  const products = async () => {
    try {
      let information = await axios.get(url);
      console.log(information.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    products();
  }, []);
  return <div>Products</div>;
};

export default Products;
