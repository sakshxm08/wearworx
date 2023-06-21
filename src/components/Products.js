import React from "react";
import { ProductCard } from "./ProductCard";

export const Products = ({ products }) => {
  return (
    <div className="py-20">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-xl bg-black text-white py-2 w-80 text-center">
          Shopping everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[720px] text-gray-700 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          sapiente libero ea illum a, mollitia aut accusamus facilis et facere
          provident ipsum impedit ratione vel reprehenderit magni nostrum quos
          consequuntur.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-10 py-20">
        {products.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};
