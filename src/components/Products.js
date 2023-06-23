import React, { useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { Link } from "react-router-dom";
// import CategoryContext from "../context/categoryContext";

import { productsList } from "../api/List";
import { useLocation } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

export const Products = () => {
  // const category = useContext(CategoryContext);
  // console.log(category.selectedCategory);
  const location = useLocation();
  useEffect(() => {
    // console.log(location.state.category.toLowerCase());
  }, []);
  const category = location.state.category.toLowerCase();
  const sortedList = [];
  for (let product of productsList) {
    for (let keyword of product.keywords) {
      if (category) {
        if (category === keyword) {
          // console.log(product.name);
          sortedList.push(product);
        }
      }
      // if (category.selectedCategory) {
      //   if (category.selectedCategory.toLowerCase() === keyword) {
      //     // console.log(product.name);
      //     sortedList.push(product);
      //   }
      // }
      // console.log(keyword);
    }
  }

  return (
    <div className="py-20">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-xl bg-black text-white py-2 w-80 text-center">
          {category.toUpperCase()}
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[720px] text-gray-700 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          sapiente libero ea illum a, mollitia aut accusamus facilis et facere
          provident ipsum impedit ratione vel reprehenderit magni nostrum quos
          consequuntur.
        </p>
      </div>
      {sortedList.length ? (
        <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-10 py-20">
          {sortedList.map((item) => (
            <ProductCard key={item._id} product={item} />
          ))}
        </div>
      ) : (
        <>
          <div className="text-4xl font-titleFont text-center mt-12 px-12 pt-6 border-t border-t-gray-400 w-fit mx-auto">
            No Products Found
          </div>
          <Link className="w-fit flex mx-auto" to="/">
            <span className="flex gap-4 text-base border  border-green-700 w-fit items-center justify-center px-4 py-2 mt-8 hover:bg-green-700 hover:text-white transition-all duration-200">
              <HiArrowLeft></HiArrowLeft>Return to Home
            </span>
          </Link>
        </>
      )}
    </div>
  );
};
