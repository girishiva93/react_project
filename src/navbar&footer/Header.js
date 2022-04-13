import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../logo.png";
import "./css/nav.css";
const Header = () => {
  return (
    <>
      <div className="app">
        <Navbar bg="myBlack" variant="dark" expand="lg" fixed="top">
          <Navbar.Brand>
            <img src={logo} alt="Company Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle className="coloring" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="product">About Us</Nav.Link>
              <Nav.Link href="product">Trekking</Nav.Link>
              <Nav.Link href="product">Trekking Peaks</Nav.Link>
              <Nav.Link href="product">Mountaineering Expeditions</Nav.Link>
              <Nav.Link href="product">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
