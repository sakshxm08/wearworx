import React from "react";
import { useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";
// import CategoryContext from "../context/categoryContext";

export const CategoryCard = ({ category }) => {
  //   const updateCategory = useContext(CategoryContext);
  const navigate = useNavigate();
  const categoryId = category.name
    .toLowerCase()
    .split(" ")
    .join("")
    .split("-")
    .join("");
  const openCategory = () => {
    // updateCategory.updateCategory(category.name);

    navigate(`/products/${categoryId}`, {
      state: {
        category: category.name,
      },
    });
  };
  return (
    // <Link to="products">
    <div
      className="flex flex-col mx-auto justify-between items-center gap-4 group w-fit cursor-pointer "
      onClick={openCategory}
    >
      <div className="rounded-full aspect-square w-24 md:w-32 overflow-hidden isolate">
        <img
          src={category.img}
          className=" group-hover:scale-[1.2] duration-300 "
          alt=""
        />
      </div>
      <span>{category.name}</span>
    </div>
    // </Link>
  );
};
