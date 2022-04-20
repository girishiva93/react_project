import React from "react";
import trekkingImg from "../home/src/image1.jpg";
import { Row, Col } from "react-bootstrap";
import "./css/trekking.css";
import image1 from "../home/src/image1.jpg";
import image2 from "../home/src/image2.jpg";
import image3 from "../home/src/image3.jpg";

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
                Easy Trekking
                <span>We Make Your Trip Easy</span>
              </h1>
              <p className="easy-trek-desc">
                {" "}
                This category of treks can be undertaken by anyone from children
                to adults and first-timers. These treks would give you a
                wonderful opportunity to explore beautiful places with your
                family and add to your trove of treasured memories. Most of the
                treks of this category are cultural treks, village tours, and
                lodge treks with trials that have easily available accommodation
                and other facilities.
              </p>
              <button className="explore-trek">Explore Easy Trek</button>
            </Col>
          </Row>
          {/* Medium */}
          <Row>
            <Col md={5}>
              {" "}
              <h1 className="trekking-title-medium">
                Moderate Treks
                <span>We Make Your Trip Easy</span>
              </h1>
              <p className="easy-trek-desc">
                {" "}
                This category of treks requires basics outdoor experience and a
                certain degree of physical aptitude. If you are physically fit
                and are the kind of person who enjoys the outdoors, age is not
                going to be an issue although it would be unwise for very young
                children to attempt these treks. The trek in this category
                entails an experienced camping crew who handles all logistical
                issues. All you have to do is enjoy the adventure and wilderness
                while the gritty details are worked out by our professional
                crew.
              </p>
              <button className="explore-trek">Explore Moderate Trek</button>
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
                Adventurous Treks
                <span>We Make Your Trip Easy</span>
              </h1>
              <p className="easy-trek-desc">
                {" "}
                This category of treks is for those with a strong physique, a
                lot of outdoor experience, and a taste for extreme adventures.
                You have to be physically and psychologically prepared to
                survive in an extreme environment under pressure. All the trips
                are high pass treks of over 5000 meters and peak climbs over
                6000 meters. We will do our utmost to ensure that you will
                progress through challenging conditions without any physical or
                mental stress to you.
              </p>
              <button className="explore-trek">Explore Adventurous Trek</button>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Trekking;
