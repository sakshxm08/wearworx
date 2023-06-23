import React, { useState } from "react";
import CategoryContext from "./categoryContext";
export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const updateCategory = (category) => {
    setSelectedCategory(category);
  };
  return (
    <CategoryContext.Provider value={{ selectedCategory, updateCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
