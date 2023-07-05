import React, { useContext, useEffect, useState } from "react";
import { cart, fav, logoText, user } from "../assets";
import { Link } from "react-router-dom";
import CartContext from "../context/cartContext";
export const Header = () => {
  const cartItems = useContext(CartContext);
  const [cartQty, setCartQty] = useState(cartItems.cartArray);
  useEffect(() => {
    setCartQty(cartItems.cartArray.length);
  }, [cartItems.cartArray]);
  const toggleMenu = () => {
    document.getElementById("menu").classList.toggle("hidden");
  };

  return (
    <div className="w-full bg-white drop-shadow h-20 sticky top-0 z-10">
      <div className="w-11/12 h-full mx-auto flex items-center justify-between">
        <div className="flex gap-4 h-full items-center justify-center">
          <div>
            <Link to="/">
              <div className="hidden tablets:block">
                <img src={logoText} className="w-56" alt="logo" />
              </div>
            </Link>
            <div
              className="flex tablets:hidden flex-col gap-[6px] z-50"
              onClick={toggleMenu}
              id="menuButton"
            >
              <span className="w-6 h-[2px] bg-black duration-200"></span>
              <span className="w-6 h-[2px] bg-black  duration-200"></span>
              <span className="w-6 h-[2px] bg-black duration-200"></span>
            </div>
          </div>
          <Link to="/" className="h-full">
            <div className="tablets:hidden h-full flex justify-center items-center">
              <img src={logoText} className="h-3/5 " alt="logo" />
            </div>
          </Link>
        </div>
        <div className="flex tablets:hidden">
          <div
            className="fixed top-0 hidden bg-white w-screen h-screen z-50 p-4 left-0 font-titleFont"
            id="menu"
          >
            <div
              className="absolute z-50 flex top-10 left-7"
              onClick={toggleMenu}
            >
              <span className="w-6 h-[2px] bg-black rotate-45 "></span>
              <span className="w-6 h-[2px] bg-black -rotate-45 -translate-x-6"></span>
            </div>
            <div className="flex items-center justify-center flex-col gap-8 font-light uppercase tracking-wider h-full text-xl">
              <span>Home</span>
              <span>Pages</span>
              <span>Shop</span>
              <span>Element</span>
              <span>Blog</span>
            </div>
          </div>
        </div>

        {/* 606701 */}
        <div className="hidden h-full items-center justify-between gap-8 tablets:flex">
          <ul className="flex h-full items-center justify-between gap-8 font-titleFont">
            <Link
              to="/"
              className="h-full flex items-center justify-center text-black text-base hover:text-green-700 cursor-pointer transition-all duration-200 relative after:absolute hover:after:w-full after:w-0 after:transition-all after:duration-300 after:content-[''] after:h-[2px] after:bg-green-700 after:left-0 after:bottom-5"
            >
              <li>Home</li>
            </Link>
            <Link
              to="/"
              className="h-full flex items-center justify-center text-black text-base hover:text-green-700 cursor-pointer transition-all duration-200 relative after:absolute hover:after:w-full after:w-0 after:transition-all after:duration-300 after:content-[''] after:h-[2px] after:bg-green-700 after:left-0 after:bottom-5"
            >
              <li>Pages</li>
            </Link>
            <Link
              to="/"
              className="h-full flex items-center justify-center text-black text-base hover:text-green-700 cursor-pointer transition-all duration-200 relative after:absolute hover:after:w-full after:w-0 after:transition-all after:duration-300 after:content-[''] after:h-[2px] after:bg-green-700 after:left-0 after:bottom-5"
            >
              <li>Shop</li>
            </Link>
            <Link
              to="/"
              className="h-full flex items-center justify-center text-black text-base hover:text-green-700 cursor-pointer transition-all duration-200 relative after:absolute hover:after:w-full after:w-0 after:transition-all after:duration-300 after:content-[''] after:h-[2px] after:bg-green-700 after:left-0 after:bottom-5"
            >
              <li>Element</li>
            </Link>
            <Link
              to="/"
              className="h-full flex items-center justify-center text-black text-base hover:text-green-700 cursor-pointer transition-all duration-200 relative after:absolute hover:after:w-full after:w-0 after:transition-all after:duration-300 after:content-[''] after:h-[2px] after:bg-green-700 after:left-0 after:bottom-5"
            >
              <li>Blog</li>
            </Link>
          </ul>
          <div className="flex gap-6 items-center justify-center">
            <Link
              to="../cart"
              className="h-full flex justify-center items-center group"
            >
              <div className="relative flex items-end justify-center text-base gap-1 cursor-pointer">
                <img src={cart} className="w-6" alt="cart" />
                <span>{cartQty}</span>
                <div className="hidden group-hover:flex bg-gray-800 text-white rounded absolute text-[10px] -bottom-10 w-max px-2 py-[1px]">
                  View Cart
                </div>
              </div>
            </Link>
            <Link
              to="../favorites"
              className="h-full flex justify-center items-center group"
            >
              <div className="relative flex items-end justify-center text-base gap-2 cursor-pointer">
                <img src={fav} className="w-5" alt="cart" />
                <div className="hidden group-hover:flex bg-gray-800 text-white rounded absolute text-[10px] -bottom-10 w-max px-2 py-[1px]">
                  View Favorites
                </div>
              </div>
            </Link>
            <div>
              <img src={user} className="w-6" alt="cart" />
            </div>
          </div>
        </div>
        <div className="flex tablets:hidden gap-4">
          <Link to="../cart">
            <div className="relative flex items-end justify-center text-sm gap-1">
              <img src={cart} className="w-4 h-auto" alt="cart" />
              <span>{cartQty}</span>
            </div>
          </Link>
          <Link to="../favorites">
            <div className="relative flex items-end justify-center text-sm gap-2">
              <img src={fav} className="w-4 h-auto" alt="cart" />
            </div>
          </Link>
          <span className="flex">
            <img src={user} alt="" className="w-4 h-auto" />
          </span>
        </div>
      </div>
    </div>
  );
};
