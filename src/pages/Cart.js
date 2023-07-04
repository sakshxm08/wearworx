import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/cartContext";
import { CartItem } from "../components/CartItem";
import { blurredProduct } from "../assets";
import { CartPrice } from "../components/CartPrice";
import emptyCart from "../assets/empty-cart.png";

export const Cart = () => {
  const { cartArray } = useContext(CartContext);
  // let html;
  // for (let item of cartArray) {
  //   html = <div>{item.name + " " + item.qty}</div>;
  // }
  // console.log(cartArray);

  return (
    <div>
      {cartArray.length ? (
        <div className="w-11/12 lg:w-4/5 flex mx-auto lg:flex-row flex-col">
          <div className="w-full lg:w-2/3 flex flex-col gap-4 mobile:px-6 lg:border-r lg:border-r-gray-300 py-8 ">
            <div className="border py-4 px-3 flex justify-between items-center w-full rounded-sm text-xs font-medium">
              <span>Check delivery time & services</span>
              <button className="border border-green-600 text-green-600 px-1 tablets:px-3 py-1 tablets:py-2 uppercase text-[10px] tablets:text-xs hover:bg-green-100 active:scale-95 duration-200 cursor-pointer rounded-sm">
                Enter pin code
              </button>
            </div>
            {cartArray.length ? (
              cartArray.map((item) => (
                <CartItem
                  key={item._id + "-" + item.name + "-" + item.size}
                  product={item}
                />
              ))
            ) : (
              <>
                <div className="mx-auto">No Items in Cart</div>
                <Link to="/" className="mx-auto mb-4">
                  <button className="active:scale-95 mx-auto border border-green-600 text-green-600 px-3 py-2 uppercase text-xs  hover:bg-green-100 duration-200 cursor-pointer rounded-sm">
                    Add Items to Cart
                  </button>
                </Link>
              </>
            )}
            <div className="border py-4 px-3 flex  mobile:flex-row flex-col mobile:gap-0 gap-4 justify-between items-center w-full rounded-sm text-[10px] tablets:text-xs font-medium">
              <span className="flex gap-4 items-center ">
                <img
                  src={blurredProduct}
                  className="w-16 tablets:w-20"
                  alt=""
                />
                <span>Login to see items from your existing bag.</span>
              </span>
              <button className="active:scale-95 mobile:w-fit w-2/3 text-center border border-green-600 text-green-600 px-1 tablets:px-3 py-1 tablets:py-2 uppercase text-[10px] tablets:text-xs hover:bg-green-100 duration-200 cursor-pointer rounded-sm">
                login now
              </button>
            </div>
          </div>
          <div className="py-8 flex flex-col gap-4 px-6 w-full lg:w-1/3">
            <CartPrice />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col gap-10 py-8">
          <img
            src={emptyCart}
            alt=""
            className="w-3/5 sm:w-80 md:w-96 lg:w-1/4 mx-auto"
          />
          <div className="text-center flex flex-col items-center justify-center gap-1 pb-6">
            <div className="font-medium text-lg">Hey, it feels so light!</div>
            <div className="font-light text-gray-500 text-xs px-4">
              There is nothing in your cart. Let's add some items.
            </div>
          </div>
          <Link to="/" className="mx-auto mb-4">
            <button className="active:scale-95 mx-auto border border-green-600 text-green-600 px-3 py-2 uppercase text-xs  hover:bg-green-100 duration-200 cursor-pointer rounded-sm">
              Add Items to Cart
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
