import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <h2>
      Home Page
      <Outlet />
    </h2>
  );
};

export default Home;
