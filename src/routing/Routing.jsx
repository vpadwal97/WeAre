import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";

const Routing = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },

      //   { path: "/Ab", element: <Ab />, },

      //   { path: "/VisitStores", element: <VisitStores />, },
      //   { path: "/ShoppingCart", element: <ShoppingCart />, },
      //   { path: "/search", element: <PLPCon />, },
      //   { path: "/product", element: <ProductDetail />, },
      //   { path: "/checkout", element: <Checkout />, },
      //   { path: "/Account", element: <ProtectedRoute><Account /></ProtectedRoute>,
      //   children: [
      //     { path: "UserProfile", element: <UserProfile />, },
      //     { path: "Addresses", element: <AddViewAddress />, },
      //     { path: "Wishlist", element: <Wishlist />, },
      //     { path: "orders", element: <Orders />, },
      //   ]
      //  },
    ],
  },
  // This is for Page Not Found.
  // If above conditions does not meet the current path then Page404 will render.
  // Always keep this as last route.
  // {
  //   path: "/*", element: <Page404/>
  // }
]);

export default Routing;
