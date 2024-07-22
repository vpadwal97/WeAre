import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Routing from './routing/Routing';

const App = () => {
  return (
    <Router>
          <RouterProvider router={Routing} />
    </Router>
    // <>
    //   <Home />
    //   <About />
    //   <Contact />
    // </>
  );
};

export default App;
