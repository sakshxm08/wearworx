import React from "react";

export const ProductCard = ({ product }) => {
  console.log(product);
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
          <div>
            <h2 className="font-titleFont text-base font-semibold">
              {product.title}
            </h2>
          </div>
          <div className="flex gap-2 text-sm items-center">
            <span className="text-gray-700 line-through ">
              ${product.oldPrice}
            </span>
            <span className="text-base">${product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
