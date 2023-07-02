import React, { useState } from "react";
import CartContext from "./cartContext";
export const CartProvider = ({ children }) => {
  // const [selectedCategory, setSelectedCategory] = useState(null);
  const [cartArray, setCartArray] = useState([]);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(null);
  const addToCart = (_id, name, url, category, keywords, oldPrice, price) => {
    return setCartArray((cartArray) => [
      ...cartArray,
      {
        _id: _id,
        name: name,
        url: url,
        category: category,
        keywords: keywords,
        oldPrice: oldPrice,
        price: price,
        qty: qty,
        size: size,
      },
    ]);
  };
  return (
    <CartContext.Provider
      value={{ cartArray, addToCart, qty, setQty, size, setSize, setCartArray }}
    >
      {children}
    </CartContext.Provider>
  );
};
