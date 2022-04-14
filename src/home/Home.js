import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { slider, aboutCompany } from "./data";
import Header from "../navbar&footer/Header";
import "./css/home.css";
import image1 from "./src/image1.jpg";
const Home = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <Header />
      <Carousel fade={true} pause={false}>
        {slider.map((sliders) => {
          const { id, image, quote, title } = sliders;
          return (
            <Carousel.Item interval={10000} key={id} className="nav-slider">
              <img className="d-block w-100 vh-100" src={image} alt={title} />
              <Carousel.Caption>
                <h1 className="hero-slide-title">{title}</h1>
                <p className="slider-quote">{quote}</p>
                <button className="hero-slide-learn-more">Learn More</button>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <section id="companyAbout">
        <div className="container">
          <div className="row">
            <div className="col md = {6}">
              <h1 className="about-company-title">About the Company</h1>
              <p className="about-company-des">
                {aboutCompany.description}
                {readMore ? (
                  <p className="about-company-des-second">
                    {aboutCompany.descriptionSecond}
                  </p>
                ) : (
                  <></>
                )}
                <button
                  className="readMore"
                  onClick={() => setReadMore(!readMore)}
                >
                  {readMore ? null : "Read More"}
                </button>
              </p>
            </div>
            <div className="col md = {6}">
              <div id="parent">
                <div className="left"></div>
                <img
                  src={image1}
                  className="about-company-img"
                  alt=""
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
