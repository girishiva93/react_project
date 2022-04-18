import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Pages or component import

import Home from "../home/Home";
import About from "../about/About.js";

// Navbar
import Navbar from "./Header";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
};

export default ReactRouterSetup;
