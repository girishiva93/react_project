import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import data from "./data";
import image1 from "./src/image1.jpg";
import image2 from "./src/image2.jpg";
import image3 from "./src/image3.jpg";
import Header from "../navbar&footer/Header";
const Home = () => {
  const [sliders, setSliders] = useState(data);
  return (
    <>
      <Header />
      <Carousel fade={true} pause={false}>
        {sliders.map((slider) => {
          const { id, image, quote, title } = slider;
          return (
            <Carousel.Item interval={10000}>
              <img className="d-block w-100" src={image} alt={title} />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default Home;
