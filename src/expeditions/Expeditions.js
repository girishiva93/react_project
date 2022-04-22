import React from "react";
import trekkingImg from "../home/src/image1.jpg";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import image1 from "../home/src/image1.jpg";
import image2 from "../home/src/image2.jpg";
import image3 from "../home/src/image3.jpg";
import Activity from "../home/Activity";

const Trekking = () => {
  return (
    <>
      <section>
        <div className="trekking-hero-img">
          <img src={trekkingImg} alt="Trekking Img" width="100%" />
        </div>
      </section>
      <section>
        <div className="container">
          <Row>
            <Col md={7}>
              <div className="easy-img-overlap">
                <div className="easy-img-i">
                  <img src={image1} alt="image1" width="100%" />
                </div>
                <div className="easy-img-ii">
                  <img src={image2} alt="image1" width="100%" />
                </div>
                <div className="easy-img-iii">
                  <img src={image3} alt="image1" width="100%" />
                </div>
              </div>
            </Col>
            <Col md={5}>
              {" "}
              <h1 className="trekking-title">
                8000s Expeditions
                <span>We Make Your Trip Easy</span>
              </h1>
              <p className="easy-trek-desc">
                {" "}
                Nepal is home to eight of the world's fourteen highest mountains
                above eight thousand meters and several other beautiful
                mountains of seven thousand meters. It is perhaps most famous
                for Mt. Everest, the highest mountain of the world, and the most
                sought-after prize for any avid mountaineer. This makes Nepal
                the first choice for all mountaineers who have the hunger for
                adventure and danger in ice.
              </p>
              <Link to={`/expeditions-items/8000`}>
                <button className="explore-trek">
                  Explore 8000s Expeditions
                </button>
              </Link>
            </Col>
          </Row>
          {/* Medium */}
          <Row>
            <Col md={5}>
              {" "}
              <h1 className="trekking-title-medium">
                7000s Expeditions
                <span>We Make Your Trip Easy</span>
              </h1>
              <p className="easy-trek-desc">
                {" "}
                Iceland Trekking and Expeditions offers a wide range of
                mountaineering expeditions including some 7000s peaks in Nepal
                and Tibet.
              </p>
              <Link to={`/expeditions-items/7000`}>
                <button className="explore-trek">
                  Explore 7000s Expeditions
                </button>
              </Link>
            </Col>
            <Col md={7}>
              <div className="easy-img-overlap-second">
                <div className="medium-img-i">
                  <img src={image1} alt="image1" width="100%" />
                </div>
                <div className="medium-img-ii">
                  <img src={image2} alt="image1" width="100%" />
                </div>
                <div className="medium-img-iii">
                  <img src={image3} alt="image1" width="100%" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section>
        <Activity />
      </section>
    </>
  );
};

export default Trekking;
