import React, { useState } from "react";
import FavContext from "./favContext";
export const FavProvider = ({ children }) => {
  // const [selectedCategory, setSelectedCategory] = useState(null);
  const [favArray, setFavArray] = useState([]);
  const addToFav = (product) => {
    return setFavArray((favArray) => [...favArray, product]);
  };
  return (
    <FavContext.Provider value={{ favArray, addToFav, setFavArray }}>
      {children}
    </FavContext.Provider>
  );
};
