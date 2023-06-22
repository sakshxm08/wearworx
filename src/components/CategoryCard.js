import React from "react";

export const CategoryCard = ({ category }) => {
  return (
    <div className="flex flex-col justify-between items-center gap-4 group w-fit cursor-pointer">
      <div className="rounded-full aspect-square w-32 overflow-hidden ">
        <img
          src={category.img}
          className=" group-hover:scale-[1.2] duration-300 "
          alt=""
        />
      </div>
      <span>{category.name}</span>
    </div>
  );
};
