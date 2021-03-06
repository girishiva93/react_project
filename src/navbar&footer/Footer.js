import React from "react";
import { Row, Col } from "react-bootstrap";
import "./css/footer.css";
import member1 from "./src/GOVT.png";
import member2 from "./src/NMA.png";
import member3 from "./src/NTB.png";
import member4 from "./src/TAAN.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <Row>
            <Col md={3}>
              <h3>Associate</h3>
              <Row>
                <Col md={5}>
                  <img src={member1} alt="" width="100%" />
                </Col>
                <Col md={5} className="mb-3">
                  <img src={member2} alt="" width="100%" />
                </Col>
                <Col md={5}>
                  <img src={member3} alt="" width="100%" />
                </Col>
                <Col md={5} className="mb-5">
                  <img src={member4} alt="" width="100%" />
                </Col>
              </Row>
            </Col>
            <Col md={2}>
              <h3>Company</h3>
              <ul>
                <li>About Iceland</li>
                <li>Trekking</li>
                <li>Social Responsibility</li>
                <li>Terms and Conditions</li>
                <li>Contact</li>
              </ul>
            </Col>
            <Col md={2}>
              <h3>Activities</h3>
              <ul>
                <li>Easy Trek</li>
                <li> Moderate Treks </li>
                <li>Adventurous </li>
                <li>Treks</li>
              </ul>
            </Col>
            <Col md={2}>
              <ul className="third-col-footer">
                <li>Trekking Peaks</li>
                <li> Mountaineering Expeditions </li>
                <li>Tours</li>
              </ul>
            </Col>
            <Col md={3}>
              <h3>Get in touch</h3>
              <ul>
                <li>
                  {" "}
                  <span>Phone</span> : +977 9851031422
                </li>
                <li>
                  {" "}
                  <span>Email</span> : office@iceland-trekking.com
                </li>
              </ul>
            </Col>
            <hr />
            <p className="footer-top">
              Copyright ?? 2022
              <span> iceland-trekking.com</span> All rights reserved.
            </p>
            <p>Site By Sherpa Technologies</p>
          </Row>
        </div>
      </footer>
    </>
  );
};

export default Footer;
