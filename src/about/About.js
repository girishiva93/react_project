import React, { useState } from "react";
import "./css/about.css";
import { Row, Col } from "react-bootstrap";
import { whyus, donation } from "../home/data";
import logo from "../about/src/logo-microsoft.jpg";

// importing image
import image4 from "../home/src/trekking-team.jpg";
import level from "../home/src/level1.jpg";
import easy from "../home/src/easy.png";
import moderate from "../home/src/moderate.png";
import hard from "../home/src/hard.png";
import mountaineering from "../home/src/mountaineering.png";

const About = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <section>
        <div className="about-hero-img">
          <img src={image4} className="hero-img" alt="" width="100%" />
        </div>
        <div className="container">
          <div className="about-heading">
            <h1 className="about-us-title">About us</h1>
          </div>
          <Row>
            <Col>
              <p className="about-des">
                After more than fifteen years of experience in trekking and
                mountain expedition, Tendy Sherpa founded Iceland Trekking and
                Expedition in 1994 as a company that provided services on tours,
                trekking, and mountain expedition in Nepal, Bhutan, Tibet, and
                Pakistan. We provide the best camping equipment, fresh and
                hygienic foods. Our staffs are leading experts in their field
                with each of them having decades of experience. Each member of
                our team is determined and dedicated to make sure that you have
                a pleasant, and memorable trip.
              </p>
            </Col>
            <Col>
              <div id="parent-layout-about">
                <div className="left-about"></div>
                <div className="about-logo-img">
                  <img src={logo} alt="" width="100%" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section id="why-with-us">
        <div className="container">
          <h3 className="whyus-main-title">Why With Us</h3>
          <Row>
            {whyus.map((item) => {
              const { id, image, title, description } = item;
              return (
                <Col md={4} key={id}>
                  <div className="why-us-design">
                    <div className="img-section">
                      <img
                        src={image}
                        alt=""
                        className="whyus-img-1"
                        width="100%"
                      />
                    </div>
                    <h3 className="whyus-title">{title}</h3>
                    <p className="whyus-desc-i">
                      {description.substring(0, 155)}
                      {readMore ? (
                        <p className="whyus-desc">
                          {description.substring(155)}
                        </p>
                      ) : (
                        <></>
                      )}
                      <button
                        className="readMore"
                        onClick={() => setReadMore(!readMore)}
                      >
                        {readMore ? null : "...read more"}
                      </button>
                    </p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </section>
      <section id="social-work">
        <div className="container">
          <div className="row">
            <div className="col md">
              <h1 className="about-company-title">{donation.title}</h1>
              <p className="about-company-des">{donation.description}</p>
            </div>
            <div className="col md = {6}">
              <div id="parent">
                <div className="left"></div>
                <img
                  src={donation.image}
                  className="about-company-img"
                  alt=""
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h3 className="whyus-main-title">Choose Activity</h3>
          {/* <p>
            Find your next travel adventure and make it memorable. Explore
            activities or inquire about custom trips. Check out our popular
            activities.
          </p> */}
        </div>
        <div className="level-img">
          <div className="trekking-level-img ">
            {" "}
            <img
              src={level}
              className="level-bg-img"
              alt=""
              width="100%"
            />{" "}
          </div>
          <div className="container">
            <div className="level-first-circle">
              <img src={easy} className="level-logo" alt="easy" width="100%" />
              <h3>Easy Trek</h3>
            </div>
            <div className="level-second-circle">
              <img
                src={moderate}
                className="level-logo"
                alt="easy"
                width="100%"
              />
              <h3>Moderate Treks</h3>
            </div>
            <div className="level-third-circle">
              <img src={hard} className="level-logo" alt="easy" width="100%" />
              <h3> Adventurous Treks</h3>
            </div>
            <div className="level-fourth-circle">
              <img
                src={mountaineering}
                className="level-logo"
                alt="easy"
                width="100%"
              />
              <h3> Hard Treks</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
