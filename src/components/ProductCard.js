import React from "react";
import { FaArrowRight } from "react-icons/fa";

export const ProductCard = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      <div className="w-full h-80 overflow-hidden  ">
        <img
          className="object-cover w-full h-full group-hover:scale-110 duration-500"
          src={product.image}
          alt=""
        />
      </div>
      <div className="w-full border px-2 py-4 border-t-0">
        <div className="flex justify-between items-center">
          <div className="w-1/2 ">
            <h2 className="font-titleFont text-base truncate font-semibold">
              {product.title}
            </h2>
          </div>
          <div className="flex gap-2 text-sm items-center relative overflow-hidden w-[100px] justify-end">
            <div className="flex justify-end gap-2 items-center group-hover:translate-x-32 transform transition-transform duration-500">
              <span className="text-gray-700 line-through ">
                ${product.oldPrice}
              </span>
              <span className="text-base">${product.price}</span>
            </div>
            <span className="text-sm text-gray-500 hover:underline hover:text-gray-900 absolute transform cursor-pointer -translate-x-36 w-[100px] flex gap-1 items-center justify-center transition-transform group-hover:translate-x-0 duration-500">
              add to cart <FaArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
