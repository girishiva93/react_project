import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Pages or component import

import Home from "../home/Home";
import About from "../about/About.js";
// import Trekking from "../trekkingdetails/Trekkingpage";
import Trekking from "../trekking/Trekking";

// Navbar and footer
import Navbar from "./Header";
import Footer from "./Footer";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/trekking" element={<Trekking />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default ReactRouterSetup;
