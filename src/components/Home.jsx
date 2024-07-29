import React from "react";
import OutletWrapper from "./reUsable/OutletWrapper";
import { ThemeProvider } from "./reUsable/ThemeContext";
import ThemedComponent from "./ThemedComponent";
// import ThemedComponent from './ThemedComponent';
// import { ThemeProvider } from './reUsable/ThemeContext';
// import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>






    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>




      <h2>Home Page</h2>
      <OutletWrapper />

      
      {/* <Outlet /> */}
    </>
  );
};

export default Home;
