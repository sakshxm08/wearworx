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
import { CategoryProvider } from "./context/CategoryProvider";
import { Products } from "./components/Products";
import ProductPage from "./components/ProductPage";

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
      { path: "/products/:id", element: <Products /> },
      { path: "/product/:id", element: <ProductPage /> },
    ],
  },
]);

function App() {
  // firebaseTry();
  return (
    <CategoryProvider>
      <div className="font-bodyFont">
        <RouterProvider router={router} />
      </div>
    </CategoryProvider>
  );
}

export default App;
