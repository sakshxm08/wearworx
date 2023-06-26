import React from "react";
import {
  dresses,
  handbags,
  jeans,
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
    { name: "Jeans", img: jeans },
    { name: "Trousers", img: trousers },
    { name: "Dresses", img: dresses },
  ];
  return (
    <div className="py-10 px-5 mobile:px-10 lg:px-20 flex flex-col gap-12">
      <h1 className="uppercase text-xl mobile:text-2xl lg:text-3xl tracking-widest font-bold font-titleFont">
        categories to bag
      </h1>
      <div className="grid grid-cols-2  min-[375px]:grid-cols-3 mobile:grid-cols-4  sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-8 ">
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
