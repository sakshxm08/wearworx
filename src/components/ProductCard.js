import React from "react";

// import CartContext from "../context/cartContext";

import { useNavigate } from "react-router-dom";
import { discountCalc } from "../api/List";
import { HiHeart } from "react-icons/hi";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const openProduct = () => {
    navigate(
      `./product/${product.name
        .toLowerCase()
        .split(" ")
        .join("")
        .split("-")
        .join("")}`,
      { state: product, replace: true }
    );
  };
  // const cart = useContext(CartContext);

  // const addToCart = (product) => {
  //   let cartRepeat = cart.cartArray.find(
  //     (cartProduct) => cartProduct._id === product._id
  //   );
  //   if (cartRepeat) {
  //     const findRepeatIndex = cart.cartArray.findIndex(
  //       (item) => item._id === cartRepeat._id
  //     );
  //     findRepeatIndex !== -1 && cart.cartArray.splice(findRepeatIndex, 1);
  //   }
  //   cart.setQty(cart.qty + 1);
  //   console.log(cart.qty);
  //   cart.addToCart(
  //     product._id,
  //     product.name,
  //     product.url,
  //     product.category,
  //     product.keywords,
  //     product.oldPrice,
  //     product.price
  //   );
  // };
  // useEffect(() => {
  //   console.log(cart.cartArray);
  // }, [cart.cartArray]);

  return (
    <div className="group relative cursor-pointer">
      <div className="w-full h-80 overflow-hidden  " onClick={openProduct}>
        <img
          className="object-cover w-full h-full group-hover:scale-110 duration-500"
          src={product.url}
          alt=""
        />
      </div>
      <div className="w-full border px-2 py-4 border-t-0 relative overflow-hidden">
        <div className="flex justify-between items-center ">
          <div className="w-1/2 ">
            <h2 className="font-titleFont text-base truncate font-semibold">
              {product.name}
            </h2>
          </div>
          <div className="flex gap-2 text-sm items-center relative overflow-hidden w-[130px] justify-end">
            <div className="flex justify-end gap-2 items-baseline ">
              {product.oldPrice && (
                <span className="text-gray-700 line-through ">
                  &#8377;{product.oldPrice}
                </span>
              )}
              <span className="text-base">&#8377;{product.price}</span>
            </div>
          </div>
        </div>
        <span
          // onClick={() => {
          //   addToCart(product);
          // }}
          className="bottom-2 text-xs border invisible tablets:visible text-gray-500 hover:bg-gray-200 px-[2px] py-[2px] h-fit   hover:text-gray-900 absolute transform cursor-pointer translate-x-72 w-[120px] flex gap-1 items-center justify-center transition-transform group-hover:translate-x-36 duration-500"
        >
          add to favorites <HiHeart />
        </span>
        <span className="bottom-2 absolute text-xs border text-gray-500 active:bg-gray-200 px-[2px] h-fit active:text-gray-900 right-2 flex items-center justify-center gap-1"></span>
        <div className="text-xs font-light mt-1">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </div>
      </div>
      {product.oldPrice && (
        <span className="absolute top-4 py-1 pr-2 text-lg drop-shadow pl-4 bg-green-700 text-white right-0">
          {discountCalc(product.oldPrice, product.price)}% off
        </span>
      )}
    </div>
  );
};
