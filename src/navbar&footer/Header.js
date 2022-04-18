import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../logo.png";
import "./css/nav.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="app">
        <Navbar bg="myBlack" variant="dark" expand="lg" fixed="top">
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Company Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle className="coloring" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/about">
                {" "}
                About Us{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/trekking">
                Trekking
              </Nav.Link>
              <Nav.Link>Trekking Peaks</Nav.Link>
              <Nav.Link>Mountaineering Expeditions</Nav.Link>
              <Nav.Link>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
