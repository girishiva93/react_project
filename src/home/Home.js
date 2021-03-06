import React, { useState, useEffect } from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

// Importing Icon
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

// importing Component
import Trip from "./Trip";
import Social from "./Social";
import Activity from "./Activity";

// importing CSS
import "./css/home.css";
import "./css/responsive.css";
// importing image
import image1 from "./src/image1.jpg";
import image2 from "./src/image5.jpg";
import image3 from "./src/image3.jpg";
import image4 from "./src/image4.jpg";

// importing Data
import { slider, aboutCompany, aboutTeam, reviews } from "./data";

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
            <h1 className="about-responsive-title">About Company</h1>
            <div className="col md = {6} about-responsive">
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
            <div className="col md = {6} desktop-about-img">
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
            <h1 className="about-responsive-title">About Team</h1>
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
                <Link to="./about" className="readMore">
                  ReadMore
                </Link>
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

      <section>
        <div className="container">
          <h1>The activities we provide</h1>
          <p>
            {" "}
            Iceland trekking and expedition has been providing services required
            for mountain expedition, peak climbing, camping trek, lodge trek and
            other activities related with this field over two decades.
          </p>
          <Row>
            <Col xs={12} md={8}>
              <div className="trekking-parent">
                <Link to="/trekking">
                  <img
                    src={image2}
                    alt=""
                    width="100%"
                    className="trekking-img-home"
                  />
                  <h1 className="trekking-heading">Trekking</h1>
                </Link>
              </div>

              <Row>
                <Col md={6}>
                  <div className="trekking-parent-i">
                    <Link to="/expeditions">
                      <img
                        src={image3}
                        alt=""
                        className="trekking-img-home-i"
                        width="100%"
                      />
                      <h1 className="Expeditions-heading">Expeditions</h1>
                    </Link>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="trekking-parent-i">
                    <Link to="/peaks">
                      <img
                        src={image4}
                        alt=""
                        className="trekking-img-home-ii"
                        width="100%"
                      />
                      <h1 className="Expeditions-heading">Trekking Peaks</h1>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={6} md={4}>
              <div className="trekking-parent-2">
                <img
                  src={image1}
                  alt=""
                  className="trekking-img-home-iii"
                  width="100%"
                />
                <h1 className="tour-title">Tours</h1>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section id="social-work">
        <Social />
      </section>

      <section>
        <div className="container">
          <h1>2022 Offers</h1>
          <p>
            Book a memorable adventure trip at great price! Grab our best offer
            and pack the things for the journey you dream about. See our
            recommendations.
          </p>
          <Row>
            <Col>
              <div className="details">
                <img
                  src={image1}
                  alt=""
                  width="100%"
                  className="best-sell-trek-img"
                />
                <h3 className="details-title">Everest Base Camp Trek</h3>
                <p className="details-date">From Apr 01 to Jun 02, 2022</p>
              </div>
            </Col>
            <Col>
              <div className="details-second">
                <img
                  src={image2}
                  alt=""
                  width="100%"
                  className="best-sell-trek-img"
                />
                <h3 className="details-title-i">Everest Base Camp Trek</h3>
                <p className="details-date-i">From Apr 01 to Jun 02, 2022</p>
              </div>
            </Col>
            <Col>
              <div className="details">
                <img
                  src={image3}
                  alt=""
                  width="100%"
                  className="best-sell-trek-img"
                />
                <h3 className="details-title">Everest Base Camp Trek</h3>
                <p className="details-date">From Apr 01 to Jun 02, 2022</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="details">
                <img
                  src={image1}
                  alt=""
                  width="100%"
                  className="best-sell-trek-img"
                />
                <h3 className="details-title">Everest Base Camp Trek</h3>
                <p className="details-date">From Apr 01 to Jun 02, 2022</p>
              </div>
            </Col>
            <Col>
              <div className="details-second">
                <img
                  src={image2}
                  alt=""
                  width="100%"
                  className="best-sell-trek-img"
                />
                <h3 className="details-title-i">Everest Base Camp Trek</h3>
                <p className="details-date-i">
                  From ftrip Apr 01 to Jun 02, 2022
                </p>
              </div>
            </Col>
            <Col>
              <div className="details">
                <img
                  src={image3}
                  alt=""
                  width="100%"
                  className="best-sell-trek-img"
                />
                <h3 className="details-title">Everest Base Camp Trek</h3>
                <p className="details-date">From Apr 01 to Jun 02, 2022</p>
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

export default Home;
