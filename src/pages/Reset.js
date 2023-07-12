import React, { useEffect, useState } from "react";
import { reset } from "../assets";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, resetPassword, logout } from "../firebase/Firebase";
import { Link, useNavigate } from "react-router-dom";

export const Reset = () => {
  const [email, setEmail] = useState("");
  // const [user, loading, error] = useAuthState(auth);
  const [user, loading] = useAuthState(auth);
  // const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // setLoader(true);
      return;
    }
    if (user) {
      // setLoader(false);
      navigate("/");
      // console.log(user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);

  return (
    <div className="relative">
      <div className="w-fit my-20 flex gap-8 mx-auto items-center relative">
        {/* <div className="absolute right-0 top-10 flex gap-2 font-titleFont">
          <span>New User?</span>
          <Link to="/login">
            <span className="text-green-600 font-semibold hover:text-green-700 after:content-[''] scale-x after:h-px after:w-full after:scale-x-0 hover:after:scale-x-100 after:duration-300 after:bg-green-700 after:absolute after:bottom-0 after:left-0 cursor-pointer duration-200 relative">
              Sign Up
            </span>
          </Link>
        </div> */}
        <div>
          <img src={reset} alt="" className="w-[30rem]" />
        </div>
        <div className="flex flex-col gap-8 w-[30rem]">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold font-bodyFont tracking-wider">
              Forgot your password?
            </h1>
          </div>
          <div className="flex flex-col gap-6">
            <span className="font-light text-base text-gray-500">
              Enter your email to reset the password
            </span>
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-400 px-4 py-2 w-full focus-visible:outline-green-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex gap-10 items-center justify-between">
            <button
              onClick={() => resetPassword(email)}
              className="w-64 text-base uppercase text-white tracking-wider font-titleFont font-medium py-3 bg-green-500 hover:bg-green-600 duration-200 rounded-full"
            >
              Reset password
            </button>
            <Link to="/login">
              <span className="uppercase py-2 relative font-titleFont tracking-wider text-xs font-medium text-gray-500 hover:text-black after:content-[''] after:h-px after:w-full after:scale-x-0 hover:after:scale-x-100 after:duration-300 duration-300 after:bg-black cursor-pointer after:absolute after:bottom-0 after:left-0">
                Back to login?
              </span>
            </Link>
          </div>

          <div onClick={logout}>SIGNOUT</div>
        </div>
      </div>
    </div>
  );
};
