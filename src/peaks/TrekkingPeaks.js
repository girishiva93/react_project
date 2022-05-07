import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

// importing data
import { items } from "../home/data";

// importing css
import "./css/peaks.css";
import "./css/peaksResponsive.css";

// Importing Images
import heroimg from "../home/src/image1.jpg";

const TrekkingPeaks = () => {
  const peaks = items.filter((items) => items.type === "Peaks");

  return (
    <>
      <section>
        <div className="peak-hero-img">
          <img src={heroimg} alt="hero img" width="100%" />
          <div className="container">
            <div className="hero-section-desc">
              <h3>Trekking Peaks</h3>
              <p>
                Trekking peaks are those mountain peaks that are at an elevation
                of 6000 to 6500 meters. These peaks are under the jurisdiction
                of the Nepal Mountaineering Association (NMA). Trekking peaks
                can be scaled within three to four days as a part of a trek in
                an area near the peak.
              </p>
              <button className="hero-slide-learn-more">Book Now</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1>OUR TREKKING PEAKS</h1>

          <Row className="mt-5">
            {peaks.map((peak) => {
              return (
                <Col md={4} className="mb-3 peaks-col">
                  <div className="peak-banner">
                    <Link to={`/trip/${peak.type}`}>
                      <img src={peak.image} alt="" width="100%" />
                      <h3>{peak.title}</h3>
                      <p>duration: {peak.Itinerary.length} Days</p>
                    </Link>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </section>
    </>
  );
};

export default TrekkingPeaks;
