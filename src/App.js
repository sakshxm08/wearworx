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
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Reset } from "./pages/Reset";
import { UserProvider } from "./context/UserProvider";

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
      { path: "/product/:id", element: <ProductPage /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/reset", element: <Reset /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  // firebaseTry();
  return (
    <>
      <UserProvider>
        <FavProvider>
          <CartProvider>
            <div className="font-bodyFont">
              <RouterProvider router={router} />
            </div>
          </CartProvider>
        </FavProvider>
      </UserProvider>
      <ToastContainer style={{ top: "100px" }} />
    </>
  );
}

export default App;
