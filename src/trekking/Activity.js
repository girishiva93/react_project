import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

// Importing Images
import heroimg from "../home/src/image1.jpg";

// importing data
import { items } from "../home/data";

const Activity = () => {
  const params = useParams();

  const grades = items.filter((grade) => grade.Grade === params.id);
  console.log(grades.GradeDescribe);

  return (
    <>
      <section>
        <div className="peak-hero-img">
          <img src={heroimg} alt="hero img" width="100%" />
          <div className="container">
            <div className="hero-section-desc">
              <h3>Trekking Peaks</h3>
              <p>{grades[0].GradeDescribe}</p>
              <button className="hero-slide-learn-more">Book Now</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1>OUR TREKKING PEAKS</h1>

          <Row className="mt-5">
            {grades.map((grade) => {
              return (
                <Col md={4} className="mb-3 peaks-col">
                  <Link to={`/trip/${grade.Grade}`}>
                    <div className="peak-banner">
                      <img src={grade.image} alt="" width="100%" />
                      <h3>{grade.title}</h3>
                      <p>duration: {grade.Itinerary.length} Days</p>
                    </div>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </div>
      </section>
    </>
  );
};

export default Activity;
