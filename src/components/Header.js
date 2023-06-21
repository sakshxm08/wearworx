import React from "react";
import { cart, logoText, user } from "../assets";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="w-full bg-white border-b border-b-gray-800 h-20 sticky top-0 z-10">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img src={logoText} className="w-56" alt="logo" />
          </div>
        </Link>
        <div className="flex items-center justify-between gap-8">
          <ul className="flex items-center justify-between gap-8 font-titleFont">
            <li className="text-black text-base hover:text-green-700 decoration-[1px] cursor-pointer transition-all duration-200 relative after:absolute hover:after:w-full after:w-0 after:transition-all after:duration-300 after:content-[''] after:h-[2px] after:bg-green-700 after:left-0 after:-bottom-1">
              Home
            </li>
            <li className="text-black text-base hover:text-green-700 decoration-[1px] cursor-pointer transition-all duration-200 relative after:absolute hover:after:w-full after:w-0 after:transition-all after:duration-300 after:content-[''] after:h-[2px] after:bg-green-700 after:left-0 after:-bottom-1">
              Pages
            </li>
            <li className="text-black text-base hover:text-green-700 decoration-[1px] cursor-pointer transition-all duration-200 relative after:absolute hover:after:w-full after:w-0 after:transition-all after:duration-300 after:content-[''] after:h-[2px] after:bg-green-700 after:left-0 after:-bottom-1">
              Shop
            </li>
            <li className="text-black text-base hover:text-green-700 decoration-[1px] cursor-pointer transition-all duration-200 relative after:absolute hover:after:w-full after:w-0 after:transition-all after:duration-300 after:content-[''] after:h-[2px] after:bg-green-700 after:left-0 after:-bottom-1">
              Element
            </li>
            <li className="text-black text-base hover:text-green-700 decoration-[1px] cursor-pointer transition-all duration-200 relative after:absolute hover:after:w-full after:w-0 after:transition-all after:duration-300 after:content-[''] after:h-[2px] after:bg-green-700 after:left-0 after:-bottom-1">
              Blog
            </li>
          </ul>
          <div className="relative flex items-end justify-center text-base gap-2 cursor-pointer group">
            <img src={cart} className="w-7" alt="cart" />
            <span>0</span>
            <div className="hidden group-hover:flex bg-gray-800 text-white rounded absolute text-[10px] -bottom-10 w-max px-2 py-[1px]">
              View Cart
            </div>
          </div>
          <div>
            <img src={user} className="w-7" alt="cart" />
          </div>
        </div>
      </div>
    </div>
  );
};
