import React, { useContext } from "react";
import { discountCalc } from "../api/List";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import FavContext from "../context/favContext";
import { toast } from "react-toastify";

export const FavItem = ({ product }) => {
  const navigate = useNavigate();
  const openProduct = () => {
    navigate(
      `../${product.name
        .toLowerCase()
        .split(" ")
        .join("")
        .split("-")
        .join("")}`,
      { state: product, replace: true }
    );
  };
  const fav = useContext(FavContext);
  const removeFav = (product) => {
    fav.setFavArray(fav.favArray.filter((item) => item !== product));

    toast.error("Item removed from Favorites", {
      position: "top-right",
      toastId: `${product._id}-${product.name}`,
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      bodyClassName: "text-sm font-titleFont",
    });
  };
  return (
    <div className="group relative cursor-pointer border">
      <div className="w-full h-60 overflow-hidden  " onClick={openProduct}>
        <img
          className="object-contain w-full h-full group-hover:scale-110 duration-500"
          src={product.url}
          alt=""
        />
      </div>
      <div className="w-full  px-2 py-4 border-t relative overflow-hidden">
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

        <div className="text-xs font-light mt-1">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </div>
      </div>
      {product.oldPrice && (
        <span className="absolute top-4 py-1 pr-2 text-lg drop-shadow pl-4 bg-green-700 text-white left-0">
          {discountCalc(product.oldPrice, product.price)}% off
        </span>
      )}
      <span
        onClick={() => {
          removeFav(product);
        }}
        className="absolute border cursor-pointer hover:bg-[#eee] top-2 right-2 rounded-full bg-[#fff] p-1 transition-all"
      >
        <RxCross1 className="text-xs"></RxCross1>
      </span>
    </div>
  );
};
