import React, { useContext } from "react";
import { discountCalc } from "../api/List";
import CartContext from "../context/cartContext";
import { RxCross1 } from "react-icons/rx";

export const SizeModal = ({ product }) => {
  const cart = useContext(CartContext);

  const onSizeChange = (e) => {
    cart.setSize(e.target.value);
  };
  return (
    <div className="fixed w-screen h-screen flex items-center justify-center top-0 right-0 bg-[#0000007c] z-50">
      <div className="rounded w-fit h-fit bg-[#f1f1f1] p-6 relative">
        <div className="flex gap-4 border-b pb-5 border-b-gray-300">
          <div className="object-cover w-20">
            <img src={product.url} className="w-full h-auto" alt="" />
          </div>
          <div className="flex flex-col gap-3 items-center justify-center">
            <div className="flex gap-1 flex-col">
              <span className="font-titleFont font-semibold">
                {product.name}
              </span>
              <span className="font-bodyFont font-light text-gray-600 text-sm">
                {product.category.charAt(0).toUpperCase() +
                  product.category.slice(1)}
              </span>
            </div>
            <div className="flex gap-2 items-center font-medium">
              <span>&#8377;{product.price}</span>
              {product.oldPrice && (
                <>
                  <span className="font-light text-xs text-gray-500 line-through">
                    &#8377;{product.oldPrice}
                  </span>
                  <span className="text-green-700 text-xs font-medium">
                    ({discountCalc(product.oldPrice, product.price)}% OFF)
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="pt-4 flex flex-col gap-4">
          <h2 className="font-semibold text-base font-titleFont">
            Select size
          </h2>
          <div className="flex gap-4">
            <label htmlFor="xs">
              <input
                type="radio"
                name="size"
                id="xs"
                value="xs"
                className="hidden peer"
                checked={cart.size === "xs"}
                onChange={onSizeChange}
                required
              />
              <span className="rounded-full peer-checked:border-green-600 peer-checked:text-green-600 border border-gray-300 hover:border-green-600 cursor-pointer active:border-green-700 h-14 aspect-square flex items-center justify-center  font-semibold uppercase text-sm">
                xs
              </span>
            </label>
            <label htmlFor="s">
              <input
                type="radio"
                name="size"
                id="s"
                value="s"
                className="hidden peer"
                checked={cart.size === "s"}
                onChange={onSizeChange}
                required
              />
              <span className="rounded-full peer-checked:border-green-600 peer-checked:text-green-600 border border-gray-300 hover:border-green-600 cursor-pointer active:border-green-900 h-14 aspect-square flex items-center justify-center  font-semibold uppercase text-sm">
                s
              </span>
            </label>
            <label htmlFor="m">
              <input
                type="radio"
                name="size"
                id="m"
                value="m"
                className="hidden peer"
                checked={cart.size === "m"}
                onChange={onSizeChange}
                required
              />
              <span className="rounded-full peer-checked:border-green-600 peer-checked:text-green-600 border border-gray-300 hover:border-green-600 cursor-pointer active:border-green-900 h-14 aspect-square flex items-center justify-center  font-semibold uppercase text-sm">
                m
              </span>
            </label>
            <label htmlFor="l">
              <input
                type="radio"
                name="size"
                id="l"
                value="l"
                className="hidden peer"
                checked={cart.size === "l"}
                onChange={onSizeChange}
                required
              />
              <span className="rounded-full peer-checked:border-green-600 peer-checked:text-green-600 border border-gray-300 hover:border-green-600 cursor-pointer active:border-green-900 h-14 aspect-square flex items-center justify-center  font-semibold uppercase text-sm">
                l
              </span>
            </label>
            <label htmlFor="xl">
              <input
                type="radio"
                name="size"
                id="xl"
                value="xl"
                className="hidden peer"
                checked={cart.size === "xl"}
                onChange={onSizeChange}
                required
              />
              <span className="rounded-full peer-checked:border-green-600 peer-checked:text-green-600 border border-gray-300 hover:border-green-600 cursor-pointer active:border-green-900 h-14 aspect-square flex items-center justify-center  font-semibold uppercase text-sm">
                xl
              </span>
            </label>
            <label htmlFor="xxl">
              <input
                type="radio"
                name="size"
                id="xxl"
                value="xxl"
                className="hidden peer"
                checked={cart.size === "xxl"}
                onChange={onSizeChange}
                required
              />
              <span className="rounded-full peer-checked:border-green-600 peer-checked:text-green-600 border border-gray-300 hover:border-green-600 cursor-pointer active:border-green-900 h-14 aspect-square flex items-center justify-center font-semibold uppercase text-sm">
                xxl
              </span>
            </label>
          </div>
          <button
            onClick={() => {
              cart.setSize(cart.size);
            }}
            className="w-full bg-green-600 rounded-sm text-white uppercase tracking-widest text-xs py-3 mt-3 font-medium hover:bg-green-700 active:bg-green-900 duration-200"
          >
            Done
          </button>
        </div>
        <div className="absolute top-6 right-6 cursor-pointer">
          <RxCross1 className="text-lg text-black"></RxCross1>
        </div>
      </div>
    </div>
  );
};
