import React from "react";
// import { useEffect, useState } from "react"
import { Banner } from "../components/Banner";
// import { Products } from "../components/Products";
// import { useLoaderData } from "react-router-dom";
import { Categories } from "../components/Categories";
export const Home = () => {
  // const [products, setProducts] = useState([]);
  // const data = useLoaderData();

  // useEffect(() => {
  //   setProducts(data.data);
  // }, [data]);
  return (
    <div>
      <Banner />
      <Categories />
      {/* <Products products={products} /> */}
    </div>
  );
};
