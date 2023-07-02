import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { discountCalc } from "../api/List";
import { HiArrowRight, HiOutlineShoppingBag } from "react-icons/hi";
import CartContext from "../context/cartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductPage = () => {
  const location = useLocation();
  const product = location.state;
  // const [repeatIndex, setRepeatIndex] = useState(0);
  const [i, setI] = useState(0);
  // useEffect(() => {
  //   console.log(location.state);
  // });

  const cart = useContext(CartContext);
  // const addToCart = (product) => {
  //   let productRepeat = cart.cartArray.find(
  //     (cartProduct) => cartProduct._id === product._id
  //   );
  //   let productRepeatSize;
  //   if (productRepeat) {
  //     const findRepeatIndex = cart.cartArray.findIndex(
  //       (repeatProduct) => repeatProduct._id === productRepeat._id
  //     );
  //     productRepeatSize = cart.cartArray.find(
  //       (Product) => Product.size === cart.cartArray[findRepeatIndex].size
  //     );
  //     // findRepeatIndex !== -1 && cart.cartArray.splice(findRepeatIndex, 1);
  //     // console.log(cart.cartArray);
  //   }
  //   console.log(productRepeat);
  //   console.log(productRepeatSize);
  //   // console.log(product._id);
  //   // console.log(cart.qty);

  //   cart.addToCart(
  //     product._id,
  //     product.name,
  //     product.url,
  //     product.category,
  //     product.keywords,
  //     product.oldPrice,
  //     product.price
  //   );
  //   cart.setSize(null);
  //   // document
  //   //   .getElementById(`add-to-cart-${product.name}`)
  //   //   .classList.remove("flex");
  //   // document
  //   //   .getElementById(`add-to-cart-${product.name}`)
  //   //   .classList.add("hidden");
  //   // document.getElementById(`go-to-cart-${product.name}`).classList.add("flex");
  //   // document
  //   //   .getElementById(`go-to-cart-${product.name}`)
  //   //   .classList.remove("hidden");
  // };

  const addToCart = async (product) => {
    await cart.addToCart(
      product._id,
      product.name,
      product.url,
      product.category,
      product.keywords,
      product.oldPrice,
      product.price
    );
    let repeatProduct = cart.cartArray.find(
      (prod) => prod._id === product._id && prod.size === cart.size
    );
    if (repeatProduct) {
      // setRepeatIndex(
      //   cart.cartArray.findIndex(
      //     (prod) =>
      //       prod._id === repeatProduct._id && prod.size === repeatProduct.size
      //   )
      // );

      // if (cart.size === cart.cartArray[repeatIndex].size) {
      //   console.log(repeatIndex);
      // }
      // console.log(repeatProduct);
      repeatProduct.qty++;
      toast.success(
        "You have this item in your bag and we have increased the quanity by 1",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          bodyClassName: "text-center text-sm",
        }
      );
    } else {
      toast.success("Added to cart", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    await cart.setSize(null);
    setI(i + 1);
    document
      .getElementById(`add-to-cart-${product.name}`)
      .classList.remove("flex");
    document
      .getElementById(`add-to-cart-${product.name}`)
      .classList.add("hidden");
    document.getElementById(`go-to-cart-${product.name}`).classList.add("flex");
    document
      .getElementById(`go-to-cart-${product.name}`)
      .classList.remove("hidden");
  };

  const newArray = cart.cartArray.filter(
    (obj, index) =>
      index ===
      cart.cartArray.findIndex(
        (product) => obj._id === product._id && obj.size === product.size
      )
  );

  useEffect(() => {
    cart.setCartArray(newArray);
    console.log(newArray, i);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i]);

  const onSizeChange = (e) => {
    cart.setSize(e.target.value);
    document
      .getElementById(`add-to-cart-${product.name}`)
      .classList.remove("hidden");
    document
      .getElementById(`add-to-cart-${product.name}`)
      .classList.add("flex");
    document
      .getElementById(`go-to-cart-${product.name}`)
      .classList.add("hidden");
    document
      .getElementById(`go-to-cart-${product.name}`)
      .classList.remove("flex");
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 mx-auto my-10 w-11/12">
      <div className="w-3/4 mx-auto md:mx-0 mobile:w-1/2 tablets:w-2/5 relative">
        <img
          src={product.url}
          className="w-auto h-full tablets:h-[450px] lg:h-[550px]s object-cover tablets:object-contain mx-auto"
          alt=""
        />
        {product.oldPrice && (
          <span className="absolute top-4 py-2 pr-4 text-xl drop-shadow pl-6 bg-green-700 text-white right-0">
            {discountCalc(product.oldPrice, product.price)}% off
          </span>
        )}
      </div>
      <div className="w-full md:w-1/2 tablets:w-3/5 flex flex-col items-start justify-start">
        <div className="flex flex-col gap-2 items-start justify-start pb-6 border-b-[0.5px] border-b-gray-300 w-full">
          <h1 className="tablets:text-xl text-3xl font-bold font-titleFont">
            {product.name}
          </h1>
          <span className="tablets:text-base text-lg font-light text-gray-700">
            {product.category.charAt(0).toUpperCase() +
              product.category.slice(1)}
          </span>
          <div className="border py-1 px-3 flex gap-2 items-center">
            <div className="flex border-r border-r-gray-300 pr-2 ">
              <MdOutlineStar></MdOutlineStar>
              <MdOutlineStar></MdOutlineStar>
              <MdOutlineStar></MdOutlineStar>
              <MdOutlineStar></MdOutlineStar>
              <MdOutlineStar></MdOutlineStar>
            </div>
            <span className="tablets:text-xs text-sm font-light text-gray-500">
              25 Ratings
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-4 pt-4">
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="flex flex-wrap gap-4 items-center">
              <span className="font-medium text-xl ">
                &#8377;{product.price}
              </span>
              {product.oldPrice && (
                <>
                  <span className="font-extralight text-lg  text-gray-500">
                    MRP{" "}
                    <span className="line-through">
                      &#8377;{product.oldPrice}
                    </span>
                  </span>
                  <span className="text-green-700  text-base font-medium">
                    ({discountCalc(product.oldPrice, product.price)}% OFF)
                  </span>
                </>
              )}
            </div>
            <div className="text-green-700 tablets:text-xs text-sm font-medium">
              inclusive of all taxes
            </div>
          </div>
          <div className="py-3 flex flex-col gap-6">
            <span className="uppercase tablets:text-sm text-base font-bold tracking-widest">
              Select Size
            </span>
            <div className="gap-3 flex flex-wrap">
              <label htmlFor="xs">
                <input
                  type="radio"
                  name="size"
                  id="xs"
                  value="xs"
                  className="hidden peer"
                  checked={cart.size === "xs"}
                  onChange={onSizeChange}
                  required
                />
                <span className="rounded-full peer-checked:border-green-600 peer-checked:text-green-600 border border-gray-300 hover:border-green-600 cursor-pointer active:border-green-700 h-14 aspect-square flex items-center justify-center  font-semibold uppercase text-sm">
                  xs
                </span>
              </label>
              <label htmlFor="s">
                <input
                  type="radio"
                  name="size"
                  id="s"
                  value="s"
                  className="hidden peer"
                  checked={cart.size === "s"}
                  onChange={onSizeChange}
                  required
                />
                <span className="rounded-full peer-checked:border-green-600 peer-checked:text-green-600 border border-gray-300 hover:border-green-600 cursor-pointer active:border-green-900 h-14 aspect-square flex items-center justify-center  font-semibold uppercase text-sm">
                  s
                </span>
              </label>
              <label htmlFor="m">
                <input
                  type="radio"
                  name="size"
                  id="m"
                  value="m"
                  className="hidden peer"
                  checked={cart.size === "m"}
                  onChange={onSizeChange}
                  required
                />
                <span className="rounded-full peer-checked:border-green-600 peer-checked:text-green-600 border border-gray-300 hover:border-green-600 cursor-pointer active:border-green-900 h-14 aspect-square flex items-center justify-center  font-semibold uppercase text-sm">
                  m
                </span>
              </label>
              <label htmlFor="l">
                <input
                  type="radio"
                  name="size"
                  id="l"
                  value="l"
                  className="hidden peer"
                  checked={cart.size === "l"}
                  onChange={onSizeChange}
                  required
                />
                <span className="rounded-full peer-checked:border-green-600 peer-checked:text-green-600 border border-gray-300 hover:border-green-600 cursor-pointer active:border-green-900 h-14 aspect-square flex items-center justify-center  font-semibold uppercase text-sm">
                  l
                </span>
              </label>
              <label htmlFor="xl">
                <input
                  type="radio"
                  name="size"
                  id="xl"
                  value="xl"
                  className="hidden peer"
                  checked={cart.size === "xl"}
                  onChange={onSizeChange}
                  required
                />
                <span className="rounded-full peer-checked:border-green-600 peer-checked:text-green-600 border border-gray-300 hover:border-green-600 cursor-pointer active:border-green-900 h-14 aspect-square flex items-center justify-center  font-semibold uppercase text-sm">
                  xl
                </span>
              </label>
              <label htmlFor="xxl">
                <input
                  type="radio"
                  name="size"
                  id="xxl"
                  value="xxl"
                  className="hidden peer"
                  checked={cart.size === "xxl"}
                  onChange={onSizeChange}
                  required
                />
                <span className="rounded-full peer-checked:border-green-600 peer-checked:text-green-600 border border-gray-300 hover:border-green-600 cursor-pointer active:border-green-900 h-14 aspect-square flex items-center justify-center font-semibold uppercase text-sm">
                  xxl
                </span>
              </label>
            </div>
          </div>
          <div className="w-full md:w-fit flex">
            {/* <div className="border px-4 py-1 flex gap-4 items-center justify-center text-sm text-gray-500">
              Quantity
              <div className="flex gap-2 items-center justify-center">
                <span
                  onClick={() => {
                    cart.setQty(cart.qty === 1 ? 1 : cart.qty - 1);
                  }}
                  className="px-2 select-none border text-sm hover:bg-gray-600 hover:border-gray-600 cursor-pointer hover:text-white duration-200"
                >
                  -
                </span>
                <span className="w-6 text-center">{cart.qty}</span>
                <span
                  onClick={() => {
                    cart.setQty(cart.qty + 1);
                  }}
                  className=" px-2 select-none border text-sm hover:bg-gray-600 hover:border-gray-600 cursor-pointer hover:text-white duration-200"
                >
                  +
                </span>
              </div>
            </div> */}
            <div className="w-full md:w-fit flex flex-col">
              <button
                onClick={() => {
                  if (cart.size !== null) {
                    addToCart(product);
                  } else {
                    alert("Select Size");
                  }
                }}
                id={`add-to-cart-${product.name}`}
                className="w-full mobile:w-80 font-titleFont flex items-center justify-center gap-2 font-medium hover:bg-green-700 duration-200 cursor-pointer tracking-wider text-base bg-green-600 text-white py-3 rounded"
              >
                <HiOutlineShoppingBag className="text-xl"></HiOutlineShoppingBag>{" "}
                Add to Cart
              </button>
              <Link to="/cart" className="w-full">
                <button
                  id={`go-to-cart-${product.name}`}
                  className=" w-full mobile:w-80 hidden font-titleFont  items-center justify-center gap-2 font-medium hover:bg-green-700 duration-200 cursor-pointer tracking-wider text-base bg-green-600 text-white py-3 rounded"
                >
                  Go to Cart <HiArrowRight className="text-xl" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer style={{ top: "100px" }} />
    </div>
  );
};

export default ProductPage;
