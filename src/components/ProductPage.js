import React from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { discountCalc } from "../api/List";
import { HiOutlineShoppingBag } from "react-icons/hi";
const ProductPage = () => {
  const location = useLocation();

  const product = location.state;
  return (
    <div className="flex gap-10 mx-auto my-10 w-11/12">
      <div className="w-2/5 relative">
        <img
          src={product.url}
          className="w-full h-[550px] object-contain"
          alt=""
        />
        {product.oldPrice && (
          <span className="absolute top-4 py-2 pr-4 text-xl drop-shadow pl-6 bg-green-700 text-white right-0">
            {discountCalc(product.oldPrice, product.price)}% off
          </span>
        )}
      </div>
      <div className="w-3/5 flex flex-col items-start justify-start">
        <div className="flex flex-col gap-2 items-start justify-start pb-6 border-b-[0.5px] border-b-gray-300 w-full">
          <h1 className="text-3xl font-bold font-titleFont">{product.name}</h1>
          <span className="text-lg font-light text-gray-700">
            {product.category.charAt(0).toUpperCase() +
              product.category.slice(1)}
          </span>
          <div className="border py-1 px-3 flex gap-2 items-center">
            <div className="flex border-r border-r-gray-300 pr-2 ">
              <MdOutlineStar></MdOutlineStar>
              <MdOutlineStar></MdOutlineStar>
              <MdOutlineStar></MdOutlineStar>
              <MdOutlineStar></MdOutlineStar>
              <MdOutlineStar></MdOutlineStar>
            </div>
            <span className="text-sm font-light text-gray-500">25 Ratings</span>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-4 pt-4">
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="flex gap-4 items-center">
              <span className="font-medium text-2xl">
                &#8377;{product.price}
              </span>
              <span className="font-extralight text-xl text-gray-500">
                MRP{" "}
                <span className="line-through">&#8377;{product.oldPrice}</span>
              </span>
              <span className="text-green-700 text-lg font-medium">
                ({discountCalc(product.oldPrice, product.price)}% OFF)
              </span>
            </div>
            <div className="text-green-700 text-sm font-medium">
              inclusive of all taxes
            </div>
          </div>
          <div className="py-3 flex flex-col gap-6">
            <span className="uppercase text-base font-bold tracking-widest">
              Select Size
            </span>
            <div className="flex gap-3">
              <label for="xs">
                <input
                  type="radio"
                  name="size"
                  id="xs"
                  className="hidden peer"
                />
                <span className="rounded-full peer-checked:border-green-600 peer-checked:text-green-600 border border-gray-300 hover:border-green-600 cursor-pointer active:border-green-700 h-14 aspect-square flex items-center justify-center  font-semibold uppercase text-sm">
                  xs
                </span>
              </label>
              <label for="s">
                <input
                  type="radio"
                  name="size"
                  id="s"
                  className="hidden peer"
                />
                <span className="rounded-full peer-checked:border-green-600 peer-checked:text-green-600 border border-gray-300 hover:border-green-600 cursor-pointer active:border-green-900 h-14 aspect-square flex items-center justify-center  font-semibold uppercase text-sm">
                  s
                </span>
              </label>
              <label for="m">
                <input
                  type="radio"
                  name="size"
                  id="m"
                  className="hidden peer"
                />
                <span className="rounded-full peer-checked:border-green-600 peer-checked:text-green-600 border border-gray-300 hover:border-green-600 cursor-pointer active:border-green-900 h-14 aspect-square flex items-center justify-center  font-semibold uppercase text-sm">
                  m
                </span>
              </label>
              <label for="l">
                <input
                  type="radio"
                  name="size"
                  id="l"
                  className="hidden peer"
                />
                <span className="rounded-full peer-checked:border-green-600 peer-checked:text-green-600 border border-gray-300 hover:border-green-600 cursor-pointer active:border-green-900 h-14 aspect-square flex items-center justify-center  font-semibold uppercase text-sm">
                  l
                </span>
              </label>
              <label for="xl">
                <input
                  type="radio"
                  name="size"
                  id="xl"
                  className="hidden peer"
                />
                <span className="rounded-full peer-checked:border-green-600 peer-checked:text-green-600 border border-gray-300 hover:border-green-600 cursor-pointer active:border-green-900 h-14 aspect-square flex items-center justify-center  font-semibold uppercase text-sm">
                  xl
                </span>
              </label>
              <label for="xxl">
                <input
                  type="radio"
                  name="size"
                  id="xxl"
                  className="hidden peer"
                />
                <span className="rounded-full peer-checked:border-green-600 peer-checked:text-green-600 border border-gray-300 hover:border-green-600 cursor-pointer active:border-green-900 h-14 aspect-square flex items-center justify-center font-semibold uppercase text-sm">
                  xxl
                </span>
              </label>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-80 font-titleFont flex items-center justify-center gap-2 font-medium hover:bg-green-700 duration-200 cursor-pointer tracking-wider text-base bg-green-600 text-white py-3 rounded">
              <HiOutlineShoppingBag></HiOutlineShoppingBag> Add to Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
