import React, { useContext } from "react";
import FavContext from "../context/favContext";
import { FavItem } from "../components/FavItem";
import { Link } from "react-router-dom";
import UserContext from "../context/userContext";

export const Favorites = () => {
  const fav = useContext(FavContext);
  const auth = useContext(UserContext);
  return (
    <>
      {auth.user ? (
        <>
          {fav.favArray.length ? (
            <div className="mx-auto w-11/12 flex flex-col gap-3 py-8">
              <h1 className="text-xl font-semibold font-titleFont">
                My Favorites{" "}
                <span className="font-normal text-gray-700 text-base font-bodyFont">
                  ({fav.favArray.length}{" "}
                  {fav.favArray.length === 1 ? (
                    <span>item</span>
                  ) : (
                    <span>items</span>
                  )}
                  )
                </span>
              </h1>

              <div className="w-full  mx-auto grid mobile:grid-cols-2 tablets:grid-cols-3 xl:grid-cols-5 gap-4 py-4">
                {fav.favArray.map((item) => (
                  <FavItem
                    key={item._id + "-" + item.name + "-" + item.category}
                    product={item}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="py-20 flex justify-center items-center flex-col">
              <div className="w-1/3 text-center flex flex-col gap-8">
                <h1 className="font-titleFont text-xl font-semibold uppercase">
                  No items in Favorites
                </h1>
                <span className="font-bodyFont text-gray-400 font-light">
                  Add items that you like to your favorites. Review them anytime
                  and easily move them to the cart.
                </span>
                <Link to="/">
                  <button className="border-green-600 border hover:bg-green-100 active:scale-95 outline-none  duration-200 text-green-600 font-bold tracking-wider font-titleFont uppercase py-4 w-2/3 mx-auto rounded">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="py-20 flex justify-center items-center flex-col">
          <div className="w-1/3 text-center flex flex-col gap-8">
            <h1 className="font-titleFont text-xl font-semibold uppercase">
              Please log in
            </h1>
            <span className="font-bodyFont text-gray-400 font-light">
              Login to view items in your wishlist.
            </span>
            <Link to="/login">
              <button className="border-green-600 border hover:bg-green-100 active:scale-95 outline-none  duration-200 text-green-600 font-bold tracking-wider font-titleFont uppercase py-4 w-1/3 mx-auto rounded">
                LOGIN
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
