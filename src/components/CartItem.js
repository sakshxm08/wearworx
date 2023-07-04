import React, { useState, useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { discountCalc } from "../api/List";
import { RxCross1 } from "react-icons/rx";
import CartContext from "../context/cartContext";

import Modal from "react-modal";

export const CartItem = ({ product }) => {
  const [qtyModalOpen, setQtyModalOpen] = useState(false);
  const [removeModalOpen, setRemoveModalOpen] = useState(false);
  const cart = useContext(CartContext);
  let [quanity, setQuantity] = useState(product.qty);
  const removeItem = (arr, product) => {
    cart.setCartArray(arr.filter((prod) => prod !== product));
    console.log(arr);
  };
  return (
    <>
      <div>
        <div className="border rounded-sm p-3 pr-7 pb-4 flex w-full gap-4 relative">
          <div className="object-cover w-24 h-full mobile:w-32">
            <img
              src={product.url}
              className="w-full h-auto object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2 text-sm pt-2">
            <div>
              <span className=" flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <h6 className="font-semibold font-titleFont text-base">
                  {product.name}
                </h6>
                <span className=" flex items-center justify-center w-fit gap-1  sm:px-1  text-green-700  tracking-wider font-medium rounded-sm text-[11px]">
                  (Size: {product.size.toUpperCase()})
                </span>
              </span>
              <h2 className="text-gray-500 text-sm font-light mt-1 mb-3">
                Category:{" "}
                {product.category.slice(0, 1).toUpperCase() +
                  product.category.slice(1)}
              </h2>
            </div>
            <div className="flex gap-2 items-center font-medium text-gray-500 text-[12px] -mt-4">
              <span className="">&#8377;{product.price}</span>
              {product.oldPrice && (
                <>
                  <span className="font-light text-[10px] text-gray-500 line-through">
                    &#8377;{product.oldPrice}
                  </span>
                </>
              )}
            </div>
            <div className="flex flex-wrap gap-2 items-center font-medium mt-2">
              <span className="text-base mobile:text-lg">
                &#8377;{product.price * product.qty}
              </span>
              {product.oldPrice && (
                <>
                  <span className="font-light text-xs mobile:text-sm text-gray-500 line-through">
                    &#8377;{product.oldPrice * product.qty}
                  </span>
                  <span className="text-green-700 text-xs mobile:text-sm font-medium">
                    ({discountCalc(product.oldPrice, product.price)}% OFF)
                  </span>
                </>
              )}
            </div>
            <div className="flex">
              <span
                onClick={() => {
                  setQtyModalOpen(true);
                }}
                className="cursor-pointer flex items-center justify-center w-fit gap-1 mt-2 px-2 py-1 bg-gray-100 font-semibold rounded-sm text-xs"
              >
                Qty: {quanity}{" "}
                <IoIosArrowDown className="text-xs"></IoIosArrowDown>
              </span>
            </div>
          </div>
          <div
            className="absolute top-2 right-2 mobile:top-4 mobile:right-4 cursor-pointer"
            onClick={() => {
              setRemoveModalOpen(true);
            }}
          >
            <RxCross1 className="text-lg text-black"></RxCross1>
          </div>
        </div>
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
                    // product.qty = product.qty === 1 ? 1 : product.qty--;
                    setQuantity(quanity === 1 ? 1 : quanity - 1);

                    // cart.setQty(cart.qty === 1 ? 1 : cart.qty - 1);
                  }}
                  className="px-2 select-none border text-sm hover:bg-gray-600 hover:border-gray-600 cursor-pointer hover:text-white duration-200"
                >
                  -
                </span>
                {/* <span className="w-6 text-center">{product.qty}</span> */}
                <span className="w-6 text-center">{quanity}</span>
                <span
                  onClick={() => {
                    // cart.setQty(cart.qty + 1);
                    // product.qty++;
                    setQuantity(quanity + 1);
                  }}
                  className=" px-2 select-none border text-sm hover:bg-gray-600 hover:border-gray-600 cursor-pointer hover:text-white duration-200"
                >
                  +
                </span>
              </div>
            </div>
            <button
              onClick={() => {
                setQtyModalOpen(false);
                // product.qty = cart.qty;
                cart.setQty(quanity + product.qty);

                product.qty = quanity;
                console.log(cart.cartArray, cart.qty);
                // cart.setQty(cart.qty);
              }}
              className="w-full bg-green-600 rounded-sm text-white uppercase tracking-widest text-xs py-3 mt-3 font-medium hover:bg-green-700 active:bg-green-900 duration-200"
            >
              Done
            </button>
          </div>
          <div
            onClick={() => {
              // cart.setQty(1);
              setQtyModalOpen(false);
              // product.qty = cart.qty;
              cart.setQty(quanity + product.qty);

              product.qty = quanity;
              console.log(cart.cartArray, cart.qty);
            }}
            className="absolute top-6 right-6 cursor-pointer"
          >
            <RxCross1 className="text-lg text-black"></RxCross1>
          </div>
        </Modal>
      </div>
      <div className="absolute flex justify-center items-center w-fit h-fit">
        <Modal
          isOpen={removeModalOpen}
          onRequestClose={() => setRemoveModalOpen(false)}
          className="absolute rounded w-fit h-fit bg-[#f1f1f1] pt-4 pb-3 px-6  left-0 right-0 mx-auto top-1/2 -translate-y-1/2"
          overlayClassName="bg-[#0000007c] fixed inset-0 z-50"
        >
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <div className="w-12 object-cover flex items-center justify-center">
                <img src={product.url} alt="" />
              </div>
              <div className="text-sm flex flex-col gap-1">
                <h4 className="font-semibold">Move item from Cart?</h4>
                <span className="w-60 text-xs">
                  Are you sure you want to remove this item from cart?
                </span>
              </div>
            </div>
            <div className="pt-3 border-t border-t-gray-300 text-[10px] grid grid-cols-2 text-center">
              <span
                className="font-medium cursor-pointer border-r border-r-gray-300"
                onClick={() => removeItem(cart.cartArray, product)}
              >
                REMOVE
              </span>
              <span className="font-medium cursor-pointer text-green-600">
                MOVE TO FAVORITES
              </span>
            </div>
          </div>
          <div
            onClick={() => {
              setRemoveModalOpen(false);
            }}
            className="absolute top-2 right-2 cursor-pointer duration-200 active:scale-95"
          >
            <RxCross1 className="text-sm text-black"></RxCross1>
          </div>
        </Modal>
      </div>
    </>
  );
};
