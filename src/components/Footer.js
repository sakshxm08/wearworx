import React from "react";
import { logoLightText } from "../assets";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="w-screen">
      <div className="bg-black text-[#949494] grid grid-cols-3 py-20 font-titleFont px-40 gap-12  justify-between">
        <div className="flex flex-col gap-4">
          <img src={logoLightText} className="w-60" alt="" />
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-transparent border-b-[0.5px] border-b-gray-200 py-2 placeholder:text-gray-300 outline-none text-white text-base font-bodyFont font-light"
          />
          <button className="w-fit rounded-full text-sm font-bold mt-2 hover:bg-gray-300 transition-all duration-200 bg-gray-100 text-gray-700 px-4 py-3">
            Subscribe
          </button>
        </div>
        <div className=" text-right text-white pt-4  flex flex-col items-end justify-between ">
          <h2 className="text-lg font-semibold font-titleFont">Contact</h2>
          <div className="font-bodyFont font-extralight">
            <div>Phone : +91 9xxxxxxxx0</div>
            <div>Email : contact@wearworx.com</div>
          </div>
          <div className="flex gap-4 text-base pt-4">
            <span className="cursor-pointer rounded-full border border-gray-100 text-gray-100 p-2 hover:border-gray-400 hover:text-gray-400 transition-all duration-200 ">
              <FaInstagram />
            </span>
            <span className="cursor-pointer rounded-full border border-gray-100 text-gray-100 p-2 hover:border-gray-400 hover:text-gray-400 transition-all duration-200">
              <FaFacebookF />
            </span>
          </div>
        </div>
        <div className="text-right text-white pt-4  flex flex-col items-end gap-4">
          <h2 className="text-lg font-semibold font-titleFont">Recent</h2>
          <div className="font-bodyFont font-extralight text-sm flex flex-col gap-2">
            <div>About Us</div>
            <div>Services</div>
            <div>Privacy Policy</div>
            <div>Terms and Conditions</div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#21821E] text-white h-20 text-center font-bodyFont  text-lg flex items-center justify-center">
        &copy; Copyright 2023 Wearworx - All Rights Reserved
      </div>
    </div>
  );
};
