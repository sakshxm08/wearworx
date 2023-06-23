import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { discountCalc } from "../api/List";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const openProduct = () => {
    navigate(
      `../product/${product.name
        .toLowerCase()
        .split(" ")
        .join("")
        .split("-")
        .join("")}`,
      { state: product, replace: true }
    );
  };
  console.log(discountCalc(product.oldPrice, product.price));
  return (
    <div className="group relative cursor-pointer" onClick={openProduct}>
      <div className="w-full h-80 overflow-hidden  ">
        <img
          className="object-cover w-full h-full group-hover:scale-110 duration-500"
          src={product.url}
          alt=""
        />
      </div>
      <div className="w-full border px-2 py-4 border-t-0">
        <div className="flex justify-between items-center">
          <div className="w-1/2 ">
            <h2 className="font-titleFont text-base truncate font-semibold">
              {product.name}
            </h2>
          </div>
          <div className="flex gap-2 text-sm items-center relative overflow-hidden w-[140px] justify-end">
            <div className="flex justify-end gap-2 items-baseline group-hover:translate-x-36 transform transition-transform duration-500">
              {product.oldPrice && (
                <span className="text-gray-700 line-through ">
                  Rs. {product.oldPrice}
                </span>
              )}
              <span className="text-base">Rs. {product.price}</span>
            </div>
            <span className="text-sm  text-gray-500 hover:underline hover:text-gray-900 absolute transform cursor-pointer -translate-x-36 w-[100px] flex gap-1 items-center justify-center transition-transform group-hover:translate-x-0 duration-500">
              add to cart <FaArrowRight />
            </span>
          </div>
        </div>
        <div className="text-xs font-light mt-1">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </div>
      </div>
      {product.oldPrice && (
        <span className="absolute top-4 py-1 pr-2 text-lg drop-shadow pl-4 bg-green-700 text-white right-0">
          {discountCalc(product.oldPrice, product.price)}% off
        </span>
      )}
    </div>
  );
};
