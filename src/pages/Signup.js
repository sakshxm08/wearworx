import React, { useEffect, useState } from "react";
import { github, google, signup } from "../assets";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  signupWithEmail,
  signInWithGoogle,
  signInWithGithub,
  logout,
} from "../firebase/Firebase";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  //   const [user, loading, error] = useAuthState(auth);
  const [user, loading] = useAuthState(auth);
  //   const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      //   setLoader(true);
      return;
    }
    if (user) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);
  const register = () => {
    if (!name) alert("Please enter name");
    if (!name) alert("Please enter email");
    if (!name) alert("Please create a password");
    signupWithEmail(name, email, password);
  };

  return (
    <div className="relative">
      <div className="w-fit my-20 flex gap-8 mx-auto items-center relative">
        {/* {loader ? <div>Loading</div> : <></>} */}

        <div className="flex flex-col gap-8 w-[30rem]">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold font-bodyFont tracking-wider">
              Create Account
            </h1>
            <div className="flex gap-4 items-center">
              <span className="text-gray-500">Login with</span>
              <div className="flex gap-4">
                <div
                  onClick={signInWithGoogle}
                  className=" relative group rounded-full flex items-center justify-center bg-gray-100 p-3 w-full hover:bg-gray-200 duration-200 cursor-pointer"
                >
                  <img src={google} className="w-6" alt="" />
                  <div
                    className="scale-0 opacity-0 group-hover:opacity-100 before:content-[''] 
                before:w-2 before:aspect-square before:bg-gray-200 before:rotate-45 before:-top-1 -before:translate-x-1/2 
                before:right-[21px] before:absolute  group-hover:scale-100 flex duration-200 bg-gray-200 text-gray-900 rounded absolute text-[10px] -bottom-6 px-2   py-[1px]"
                  >
                    <span>Google</span>
                  </div>
                </div>
                <div
                  onClick={signInWithGithub}
                  className="group relative rounded-full bg-gray-100 flex items-center justify-center p-3 w-full hover:bg-gray-200 duration-200 cursor-pointer"
                >
                  <img src={github} className="w-6" alt="" />
                  <div
                    className="scale-0 opacity-0 group-hover:opacity-100 before:content-[''] 
                before:w-2 before:aspect-square before:bg-gray-200 before:rotate-45 before:-top-1 -before:translate-x-1/2 
                before:right-[20px] before:absolute  group-hover:scale-100 flex duration-200 bg-gray-200 text-gray-900 rounded absolute text-[10px] -bottom-6 px-2   py-[1px]"
                  >
                    <span>Github</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <span className="font-light text-sm text-gray-500">
              or use your email for registration
            </span>
            <input
              type="name"
              placeholder="Name"
              className="border border-gray-400 px-4 py-2 w-full focus-visible:outline-green-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-400 px-4 py-2 w-full focus-visible:outline-green-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-400 px-4 py-2 w-full focus-visible:outline-green-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex  items-center justify-between">
            <button
              onClick={register}
              className="w-48 text-base uppercase text-white tracking-wider font-titleFont font-medium py-3 bg-green-500 hover:bg-green-600 duration-200 rounded-full"
            >
              Sign up
            </button>
            <div className=" flex   gap-2 font-titleFont">
              <span>Already a user?</span>
              <Link to="/login">
                <span
                  className="text-green-600 font-semibold hover:text-green-700 after:content-[''] scale-x after:h-px 
            after:w-full after:scale-x-0 hover:after:scale-x-100 after:duration-300 after:bg-green-700 after:absolute 
            after:bottom-0 after:left-0 cursor-pointer duration-200 relative py-2"
                >
                  Login here
                </span>
              </Link>
            </div>
          </div>

          <div onClick={logout}>SIGNOUT</div>
        </div>
        <div className="relative">
          <img src={signup} alt="" className="w-[30rem]" />
        </div>
      </div>
    </div>
  );
};
