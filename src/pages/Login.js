// import React, { useContext, useState } from "react";
// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// // import { app } from "../firebase.config";

// import { google } from "../assets";
// import { useNavigate } from "react-router-dom";
// import UserContext from "../context/userContext";
// // import { addUser, db } from "../firebase/Firebase";
// import { doc, getDoc } from "firebase/firestore";
// import CartContext from "../context/cartContext";
// import FavContext from "../context/favContext";

// export const Login = () => {
//   const cart = useContext(CartContext);
//   const fav = useContext(FavContext);
//   const [loader, setLoader] = useState();
//   const navigate = useNavigate();
//   const provider = new GoogleAuthProvider();

//   const authContext = useContext(UserContext);

//   const loginGoogle = async () => {
//     setLoader(true);
//     await signInWithPopup(authContext.auth, provider)
//       .then((result) => {
//         const user = result.user;
//         authContext.setUser(user);
//         return result;
//       })
//       .then((result) => doc(db, "users", result.user.email))
//       .then((docRef) => getDoc(docRef))
//       .then((data) => {
//         if (data.exists()) {
//           cart.setCartArray(data.data().cart);
//           fav.setFavArray(data.data().fav);
//         }
//       })
//       .then(navigate(-1, { replace: true }))
//       .then(setLoader(false))
//       .catch((error) => {
//         console.log(error);
//         // Handle Errors here.
//         // const errorCode = error.code;
//         // const errorMessage = error.message;
//         // The email of the user's account used.
//         // const email = error.customData.email;
//         // The AuthCredential type that was used.
//         // const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//       });
//     // await addUser();
//     console.log(authContext);
//   };
//   return (
//     <div className="flex justify-center items-center py-10">
//       <div
//         onClick={loginGoogle}
//         className="px-4 py-2 border flex gap-4 justify-center items-center rounded hover:bg-gray-100  duration-200 cursor-pointer"
//       >
//         <div className="w-8">
//           <img src={google} alt="" />
//         </div>
//         <span className="font-titleFont ">Sign in With Google</span>
//       </div>
//       {loader ? <div>Loading...</div> : <></>}
//     </div>
//   );
// };

import React, { useContext, useEffect, useState } from "react";
import { github, google, login } from "../assets";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  loginWithEmail,
  signInWithGoogle,
  signInWithGithub,
  // logout,
  setCart,
} from "../firebase/Firebase";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../context/cartContext";

export const Login = () => {
  const cart = useContext(CartContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [user, loading, error] = useAuthState(auth);
  const [user, loading] = useAuthState(auth);
  //   const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      //   setLoader(false);
      navigate("/");
      const updateCartOnLogin = async () => {
        const newCart = await setCart(user);
        if (newCart) {
          cart.setCartArray(newCart);
        }
      };
      updateCartOnLogin();
      //   console.log(user);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);

  const loginUser = async () => {
    loginWithEmail(email, password);
  };
  return (
    <div className="relative">
      <div className="w-fit my-20 flex gap-8 mx-auto items-center relative">
        <div className="absolute right-0 top-10 flex gap-2 font-titleFont">
          <span>New User?</span>
          <Link to="/signup">
            <span className="text-green-600 py-2 font-semibold hover:text-green-700 after:content-[''] scale-x after:h-px after:w-full after:scale-x-0 hover:after:scale-x-100 after:duration-300 after:bg-green-700 after:absolute after:bottom-0 after:left-0 cursor-pointer duration-200 relative">
              Sign Up
            </span>
          </Link>
        </div>
        <div>
          <img src={login} alt="" className="w-[30rem]" />
        </div>
        <div className="flex flex-col gap-8 w-[30rem]">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold font-bodyFont tracking-wider">
              Welcome Back!
            </h1>
            <span className="font-light text-base text-gray-500">
              Login to continue
            </span>
          </div>
          <div className="flex flex-col gap-6">
            <input
              type="text"
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
          <div className="flex gap-10 items-center justify-between">
            <button
              onClick={loginUser}
              className="w-48 text-base uppercase text-white tracking-wider font-titleFont font-medium py-3 bg-green-500 hover:bg-green-600 duration-200 rounded-full"
            >
              Login
            </button>
            <Link to="/reset">
              <span className="uppercase py-2 relative font-titleFont tracking-wider text-xs font-medium text-gray-500 hover:text-black after:content-[''] after:h-px after:w-full after:scale-x-0 hover:after:scale-x-100 after:duration-300 duration-300 after:bg-black cursor-pointer after:absolute after:bottom-0 after:left-0">
                forgot password?
              </span>
            </Link>
          </div>
          <div className="flex gap-5 items-center">
            <span className=" tracking-wider text-gray-500 font-titleFont font-medium text-sm">
              Login with
            </span>
            <div className="flex gap-4">
              <div
                onClick={signInWithGoogle}
                className=" relative group rounded-full flex items-center justify-center bg-gray-100 p-3 w-full hover:bg-gray-200 duration-200 cursor-pointer"
              >
                <img src={google} className="w-6" alt="" />
                <div
                  className="scale-0 opacity-0 group-hover:opacity-100 before:content-[''] 
                before:w-2 before:aspect-square before:bg-gray-200 before:rotate-45 before:-top-1 -before:translate-x-1/2 
                before:right-[21px] before:absolute  group-hover:scale-100 flex duration-200 bg-gray-200 text-gray-500 rounded absolute text-[10px] -bottom-6 px-2   py-[1px]"
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
                before:right-[20px] before:absolute  group-hover:scale-100 flex duration-200 bg-gray-200 text-gray-500 rounded absolute text-[10px] -bottom-6 px-2   py-[1px]"
                >
                  <span>Github</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div onClick={logout}>SIGNOUT</div> */}
        </div>
      </div>
    </div>
  );
};
