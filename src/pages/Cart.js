import React, { useContext } from "react";
import CategoryContext from "../context/categoryContext";
export const Cart = () => {
  const category = useContext(CategoryContext);

  console.log(category.selectedCategory);
  return (
    <div>
      <span>{category.selectedCategory}</span>
    </div>
  );
};
