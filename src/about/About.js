import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

// import data
import { whyus } from "../home/data";

// importing Component
import Activity from "../home/Activity";
import Social from "../home/Social";

// importing css
import "./css/about.css";

// importing image
import image4 from "../home/src/trekking-team.jpg";
import logo from "../about/src/logo-microsoft.jpg";

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
        <Social />
      </section>

      <section>
        <Activity />
      </section>
    </>
  );
};

export default About;
