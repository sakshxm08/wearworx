import React, { useState, useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { discountCalc } from "../api/List";
import { RxCross1 } from "react-icons/rx";
import CartContext from "../context/cartContext";

// import { SizeModal } from "../components/SizeModal";
import Modal from "react-modal";

export const CartItem = ({ product }) => {
  const [sizeModalOpen, setSizeModalOpen] = useState(false);
  const [qtyModalOpen, setQtyModalOpen] = useState(false);
  const cart = useContext(CartContext);

  const onSizeChange = (e) => {
    cart.setSize(e.target.value);
  };
  return (
    <>
      <div>
        <div className="border rounded-sm p-3 pb-4 flex w-full gap-4 relative">
          <div className="object-cover w-1/5">
            <img
              src={product.url}
              className="w-full h-auto object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2 text-sm pt-2">
            <div>
              <h6 className="font-semibold font-titleFont text-base">
                {product.name}
              </h6>
              <h2 className="text-gray-500 text-sm font-light mt-1 mb-3">
                Category: {product.category}
              </h2>
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
            <div className="flex gap-2">
              <span
                onClick={() => {
                  setSizeModalOpen(true);
                }}
                className="cursor-pointer flex items-center justify-center w-fit gap-1 mt-2 px-2 py-1 bg-gray-100 font-semibold rounded-sm text-xs"
              >
                Size: {product.size.toUpperCase()}{" "}
                <IoIosArrowDown className="text-xs"></IoIosArrowDown>
              </span>
              <span
                onClick={() => {
                  setQtyModalOpen(true);
                }}
                className="cursor-pointer flex items-center justify-center w-fit gap-1 mt-2 px-2 py-1 bg-gray-100 font-semibold rounded-sm text-xs"
              >
                Qty: {product.qty}{" "}
                <IoIosArrowDown className="text-xs"></IoIosArrowDown>
              </span>
            </div>
          </div>
          <div className="absolute top-4 right-4 cursor-pointer">
            <RxCross1 className="text-lg text-black"></RxCross1>
          </div>
        </div>
      </div>
      {/* <SizeModal product={product} /> */}
      <div className="absolute flex justify-center items-center w-fit h-fit">
        <Modal
          isOpen={sizeModalOpen}
          onRequestClose={() => setSizeModalOpen(false)}
          className="absolute rounded w-fit h-fit bg-[#f1f1f1] p-6  left-0 right-0 mx-auto top-1/2 -translate-y-1/2"
          overlayClassName="bg-[#0000007c] fixed inset-0 z-50"
        >
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
              onClick={() => setSizeModalOpen(false)}
              className="w-full bg-green-600 rounded-sm text-white uppercase tracking-widest text-xs py-3 mt-3 font-medium hover:bg-green-700 active:bg-green-900 duration-200"
            >
              Done
            </button>
          </div>
          <div
            onClick={() => {
              cart.setSize(cart.size);
              setSizeModalOpen(false);
            }}
            className="absolute top-6 right-6 cursor-pointer"
          >
            <RxCross1 className="text-lg text-black"></RxCross1>
          </div>
        </Modal>
      </div>
      <div className="absolute flex justify-center items-center w-fit h-fit">
        <Modal
          isOpen={qtyModalOpen}
          onRequestClose={() => setQtyModalOpen(false)}
          className="absolute rounded w-1/3 h-fit bg-[#f1f1f1] p-6  left-0 right-0 mx-auto top-1/2 -translate-y-1/2"
          overlayClassName="bg-[#0000007c] fixed inset-0 z-50"
        >
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
            <div className="border px-4 py-1 flex gap-4 items-center justify-center text-sm text-gray-500">
              Quantity
              <div className="flex gap-2 items-center justify-center">
                <span
                  onClick={() => {
                    cart.setQty(cart.qty === 1 ? 1 : cart.qty - 1);
                  }}
                  className="px-2 select-none border text-sm hover:bg-gray-600 hover:border-gray-600 cursor-pointer hover:text-white duration-200"
                >
                  -
                </span>
                <span className="w-6 text-center">{cart.qty}</span>
                <span
                  onClick={() => {
                    cart.setQty(cart.qty + 1);
                  }}
                  className=" px-2 select-none border text-sm hover:bg-gray-600 hover:border-gray-600 cursor-pointer hover:text-white duration-200"
                >
                  +
                </span>
              </div>
            </div>
            <button
              onClick={() => setQtyModalOpen(false)}
              className="w-full bg-green-600 rounded-sm text-white uppercase tracking-widest text-xs py-3 mt-3 font-medium hover:bg-green-700 active:bg-green-900 duration-200"
            >
              Done
            </button>
          </div>
          <div
            onClick={() => {
              //   cart.setSize(cart.size);
              setQtyModalOpen(false);
            }}
            className="absolute top-6 right-6 cursor-pointer"
          >
            <RxCross1 className="text-lg text-black"></RxCross1>
          </div>
        </Modal>
      </div>
    </>
  );
};
