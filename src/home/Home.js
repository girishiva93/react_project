import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { slider, aboutCompany, aboutTeam, reviews, donation } from "./data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import Header from "../navbar&footer/Header";
import Trip from "./Trip";
import level from "./src/level1.jpg";
import easy from "./src/easy.png";
import moderate from "./src/moderate.png";
import hard from "./src/hard.png";
import mountaineering from "./src/mountaineering.png";
import "./css/home.css";

const Home = () => {
  const [readMore, setReadMore] = useState(false);
  const [index, setIndex] = React.useState(0);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > reviews.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = reviews.length - 1;
      }
      return index;
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > reviews.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

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
              <h1 className="about-company-title">About Company</h1>
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
                  src={aboutCompany.image}
                  className="about-company-img"
                  alt=""
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="companyTeam">
        <div className="container">
          <div className="row">
            <div className="col md = {6}">
              <div id="parent-layout">
                <div className="left-layout"></div>
                <img
                  src={aboutTeam.image}
                  className="about-team-img"
                  alt=""
                  width="100%"
                />
              </div>
            </div>
            <div className="col md = {6}">
              <h1 className="about-company-title">About Team</h1>
              <p className="about-team-des">
                {aboutTeam.description}
                <a href to="#" className="readMore">
                  ReadMore
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="Trip">
        <Trip />
      </section>
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span>reviews
          </h2>
        </div>
        <div className="section-center">
          {reviews.map((person, personIndex) => {
            const { id, profile, name, title, description } = person;

            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === reviews.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <article className={position} key={id}>
                <img src={profile} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">
                  {description.substring(0, 299)} Read More
                </p>
                <FaQuoteRight className="icon" />
              </article>
            );
          })}
          <button className="prev" onClick={prevSlide}>
            <FiChevronLeft />
          </button>
          <button className="next" onClick={nextSlide}>
            <FiChevronRight />
          </button>
        </div>
      </section>
      <section id="social-work">
        <div className="container">
          <div className="row">
            <div className="col md = {6}">
              <h1 className="about-company-title">{donation.title}</h1>
              <p className="about-company-des">{donation.description}</p>
            </div>
            <div className="col md = {6}">
              <div id="parent">
                <div className="left"></div>
                <img
                  src={donation.image}
                  className="about-company-img"
                  alt=""
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="level-img">
          <div className="trekking-level-img ">
            {" "}
            <img src={level} alt="" width="100%" />{" "}
          </div>
          <div className="container">
            <div className="level-first-circle">
              <img src={easy} className="level-logo" alt="easy" width="100%" />
              <h3>Easy Trek</h3>
            </div>
            <div className="level-second-circle">
              <img
                src={moderate}
                className="level-logo"
                alt="easy"
                width="100%"
              />
              <h3>Moderate Treks</h3>
            </div>
            <div className="level-third-circle">
              <img src={hard} className="level-logo" alt="easy" width="100%" />
              <h3> Adventurous Treks</h3>
            </div>
            <div className="level-fourth-circle">
              <img
                src={mountaineering}
                className="level-logo"
                alt="easy"
                width="100%"
              />
              <h3> Hard Treks</h3>
            </div>
            <p>
              Choose Activity Find your next travel adventure and make it
              memorable. Explore activities or inquire about custom trips. Check
              out our popular activities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
