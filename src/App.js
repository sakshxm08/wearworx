import React from "react";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { Cart } from "./pages/Cart";
import { CartProvider } from "./context/CartProvider";
import { Products } from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import { NotFound } from "./pages/NotFound";
import { FavProvider } from "./context/FavProvider";
import { ToastContainer } from "react-toastify";
import { Favorites } from "./pages/Favorites";

const Layout = () => {
  return (
    <>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/cart", element: <Cart /> },
      { path: "/favorites", element: <Favorites /> },
      { path: "/products/:id", element: <Products /> },
      { path: "/:id", element: <ProductPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  // firebaseTry();
  return (
    <>
      <FavProvider>
        <CartProvider>
          <div className="font-bodyFont">
            <RouterProvider router={router} />
          </div>
        </CartProvider>
      </FavProvider>
      <ToastContainer style={{ top: "100px" }} />
    </>
  );
}

export default App;
