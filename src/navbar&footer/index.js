import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Pages or component import

import Home from "../home/Home";
import About from "../about/About.js";
import Trip from "../trekkingdetails/Trekkingpage";
import Trekking from "../trekking/Trekking";
import Peaks from "../peaks/TrekkingPeaks";
import Expedition from "../expeditions/Expeditions";
import { ExpeditionBanner } from "../expeditions/ExpeditionBanner";
import Activity from "../trekking/Activity";
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
        <Route path="/trip/:id" element={<Trip />}></Route>
        <Route path="/trekking" element={<Trekking />}></Route>
        <Route path="/peaks" element={<Peaks />}></Route>
        <Route path="/expeditions" element={<Expedition />}></Route>
        <Route path="/activity/:id" element={<Activity />}></Route>
        <Route
          path="/expeditions-items/:id"
          element={<ExpeditionBanner />}
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default ReactRouterSetup;
