import React, { useState } from "react";
import { auth, getUser, logout } from "../firebase/Firebase";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
export const UserMenu = () => {
  // const [user, loading, error] = useAuthState(auth);
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  if (user) {
    getUser(user).then((data) => {
      console.log(data);
      setName(data.name);
      setEmail(data.email);
    });
  }

  return (
    <div className=" p-4 drop-shadow-lg mt-2  bg-white w-max flex flex-col gap-1 cursor-default">
      <div className="flex gap-2 items-center border-b pb-4">
        {/* <img
          // src={user.name.charAt(0).toUpperCase()}
          className="w-14 rounded-full"
          alt=""
        /> */}
        <span className="uppercase rounded-full text-lg aspect-square bg-green-700 text-white w-12 flex items-center justify-center">
          {name.charAt(0)}
        </span>
        <div className="flex flex-col gap-0">
          <span className="font-titleFont font-light text-base whitespace-nowrap">
            Hello, <span className="font-medium">{name.split(" ")[0]}</span>
          </span>
          <span className="font-bodyFont text-xs font-light text-gray-500">
            {email}
          </span>
        </div>
      </div>
      <div className="border-b pb-1">
        <Link to="/favorites">
          <div className=" cursor-pointer p-1 font-light text-sm hover:bg-gray-100 duration-200">
            Favorites
          </div>
        </Link>
      </div>
      <div>
        <div
          onClick={logout}
          className=" p-1 cursor-pointer font-light text-sm text-red-500 hover:bg-gray-100 duration-200"
        >
          Sign Out
        </div>
      </div>
    </div>
  );
};
