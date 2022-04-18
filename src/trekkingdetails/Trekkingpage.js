import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import "./css/trekkingdetails.css";
import heroimg from "../home/src/image1.jpg";
const Trekkingpage = () => {
  return (
    <>
      <section>
        <div className="hero-img-section">
          <img src={heroimg} alt="" width="100%" />
          <div className="trip-hero-short-explain">
            <h1>East Upper Dolpo Trek</h1>
            <p>
              Juphal – Phoksundo – Kangla Pass – Gajyan Khola – Newarla – Jomsom
            </p>
            <p>Activity: Trekking</p>
            <p>Grade: Hard</p>
            <p>Duration: 29 Days</p>
            <p>Country: Nepal</p>
            <p>Season: Spring/Autumn</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trekkingpage;
