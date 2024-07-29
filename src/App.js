import React from 'react';
import { 
  // BrowserRouter as Router, Route, Routes, Link, 
  RouterProvider } from 'react-router-dom';
import Routing from './routing/Routing';

const App = () => {
  return (
    <RouterProvider router={Routing} />
  );
};

export default App;
