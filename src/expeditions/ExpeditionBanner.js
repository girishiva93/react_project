import React, { useMemo } from "react";

import { useParams, Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import { items } from "../home/data";

// Importing Images
import heroimg from "../home/src/image1.jpg";

export const ExpeditionBanner = () => {
  const params = useParams();

  const cleared_arr = items.map((el) => {
    if (el.elevation.toString().split(" ").length < 3) return el;
    const elv = el.elevation.toString().split(" ")[2];
    const newElv = elv.replace(",", "");
    const convertedElv = parseInt(newElv.replace("m", ""));
    el.elevation = convertedElv;
    return el;
  });

  const filteredData = useMemo(() => {
    if (parseInt(params.id) === 7000) {
      const above_7000_below_8000_data = cleared_arr.filter(
        (items) =>
          items.elevation >= parseInt(params.id) && items.elevation < 8000
      );
      return above_7000_below_8000_data;
    } else {
      const above_8000_data = cleared_arr.filter(
        (items) => items.elevation >= parseInt(params.id)
      );
      return above_8000_data;
    }
  }, [params.id]);

  return (
    <>
      {filteredData ? (
        <>
          <section>
            <div className="peak-hero-img">
              <img src={heroimg} alt="hero img" width="100%" />
              <div className="container">
                <div className="hero-section-desc">
                  <h3>Trekking Peaks</h3>
                  <p>{filteredData[0].GradeDescribe}</p>
                  <button className="hero-slide-learn-more">Book Now</button>
                </div>
              </div>
            </div>
            <div className="container">
              <h1>OUR TREKKING PEAKS</h1>
              <Row className="mt-5">
                {filteredData.map((grade) => {
                  return (
                    <Col md={4} className="mb-3 peaks-col" key={grade.id}>
                      <div className="peak-banner">
                        <Link to={`/trip/${grade.title}`}>
                          <img src={grade.image} alt="" width="100%" />
                          <h3>{grade.title}</h3>
                          <p>duration: {grade.Itinerary.length} Days</p>
                        </Link>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </section>
        </>
      ) : (
        <p>Not FOund</p>
      )}
    </>
  );
};
