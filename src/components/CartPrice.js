import React, { useContext } from "react";
import CartContext from "../context/cartContext";

export const CartPrice = () => {
  const { cartArray } = useContext(CartContext);
  let totalMRP = 0;
  let totalPrice = 0;
  let totalDiscount = 0;
  for (let item of cartArray) {
    totalPrice += item.price * item.qty;
    if (item.oldPrice) totalMRP += item.oldPrice * item.qty;
    else {
      totalMRP = totalPrice;
    }
  }

  totalDiscount = totalMRP - totalPrice;
  return (
    <>
      <h6 className="uppercase text-sm font-bold font-titleFont tracking-wider">
        Price Details
        <span className="lowercase font-bodyFont font-medium text-xs pl-2 text-gray-700">
          ({cartArray.length} {cartArray.length > 1 ? "items" : "item"})
        </span>
      </h6>
      <div className="flex flex-col gap-2 text-sm font-light font-bodyFont border-b pb-4">
        <div className="flex justify-between items-center">
          <span>Total MRP</span>
          <span>&#8377;{totalMRP}</span>
        </div>
        {totalDiscount !== 0 ? (
          <div className="flex justify-between items-center ">
            <span>Discount on MRP</span>
            <span className="text-green-600">-&#8377;{totalDiscount}</span>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="flex justify-between items-center font-semibold text-sm">
        <span>Total Amount</span>
        <span>&#8377;{totalPrice}</span>
      </div>
      <button className="w-full bg-green-600 rounded-sm text-white uppercase tracking-widest text-xs py-3 mt-3 font-medium hover:bg-green-700 active:bg-green-900 duration-200">
        Place Order
      </button>
    </>
  );
};
