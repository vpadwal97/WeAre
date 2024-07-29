import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import { ProtectedRoute } from "./Protected";
import ThemedComponent from "../components/ThemedComponent";
import UseCallbackEg from "../components/UseCallbackEg";

const Routing = createBrowserRouter([
  {
    path: "/",
    element: <><Home /></>,
    // element: <ProtectedRoute><Home /></ProtectedRoute>,
    children: [
      { path: "/login", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/ThemedComponent", element: <ThemedComponent /> },
      { path: "/useCallbackEg", element: <UseCallbackEg /> },
    ],
  },
]);

export default Routing;
