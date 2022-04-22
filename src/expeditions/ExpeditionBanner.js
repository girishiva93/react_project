import React from "react";

import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import { items } from "../home/data";

// Importing Images
import heroimg from "../home/src/image1.jpg";

export const ExpeditionBanner = () => {
  const params = useParams();
  const cleared_arr = items.map((el) => {
    const elv = el.elevation.split("")[2];
    const newElv = elv.replace(",", "");
    const convertedElv = parseInt(newElv.replace("m", ""));
    el.elevation = convertedElv;
    return el;
  });

  const above_8000_data = cleared_arr.filter(
    (items) => items.elevation >= parseInt(params.id)
  );
  const above_7000_below_8000_data = cleared_arr.filter(
    (items) => items.elevation >= parseInt(params.id) && items.elevation < 8000
  );

  console.log(above_7000_below_8000_data);

  return (
    <>
      <section>
        <div className="peak-hero-img">
          <img src={heroimg} alt="hero img" width="100%" />
          <div className="container">
            <div className="hero-section-desc">
              <h3>Trekking Peaks</h3>
              <p>{above_8000_data.GradeDescribe}</p>
              <button className="hero-slide-learn-more">Book Now</button>
            </div>
          </div>
        </div>
      </section>
      {above_8000_data ? (
        <>
          <section>
            <div className="container">
              <h1>OUR TREKKING PEAKS</h1>

              <Row className="mt-5">
                {above_8000_data.map((grade) => {
                  return (
                    <Col md={4} className="mb-3 peaks-col">
                      <div className="peak-banner">
                        <img src={grade.image} alt="" width="100%" />
                        <h3>{grade.title}</h3>
                        <p>duration: {grade.Itinerary.length} Days</p>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </section>
        </>
      ) : (
        <p></p>
      )}
      {above_7000_below_8000_data ? (
        <>
          <section>
            <div className="container">
              <h1>OUR TREKKING PEAKS</h1>

              <Row className="mt-5">
                {above_7000_below_8000_data.map((grade) => {
                  return (
                    <Col md={4} className="mb-3 peaks-col">
                      <div className="peak-banner">
                        <img src={grade.image} alt="" width="100%" />
                        <h3>{grade.title}</h3>
                        <p>duration: {grade.Itinerary.length} Days</p>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </section>
        </>
      ) : (
        <p></p>
      )}
    </>
  );
};
