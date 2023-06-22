import React from "react";
import {
  dresses,
  handbags,
  jeans,
  jewellery,
  kurtis,
  sarees,
  shirts,
  trousers,
  tshirts,
} from "../assets";
import { CategoryCard } from "./CategoryCard";

export const Categories = () => {
  const categories = [
    { name: "Kurtis", img: kurtis },
    { name: "Handbags", img: handbags },
    { name: "T-Shirts", img: tshirts },
    { name: "Sarees", img: sarees },
    { name: "Shirts", img: shirts },
    { name: "Jewellery", img: jewellery },
    { name: "Trousers", img: trousers },
    { name: "Dresses", img: dresses },
  ];
  return (
    <div className="py-10 px-20 flex flex-col gap-12">
      <h1 className="uppercase text-3xl tracking-widest font-bold font-titleFont">
        categories to bag
      </h1>
      <div className="grid grid-cols-8 gap-2 ">
        {categories.map((category) => (
          <CategoryCard
            key={categories.indexOf(category)}
            category={category}
          />
        ))}
      </div>
    </div>
  );
};
