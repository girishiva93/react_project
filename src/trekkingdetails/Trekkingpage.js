import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Scrollspy from "react-scrollspy";
import { useParams } from "react-router-dom";

// Importing Images
import heroimg from "../home/src/image1.jpg";

// Importing Icon
import { AiOutlineClose } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { FaWalking } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiMountains, GiCornerFlag, GiFootsteps } from "react-icons/gi";
import { MdPlace } from "react-icons/md";

// Importing CSS
import "./css/trekkingdetails.css";

// Importing Component
import Slider from "../home/Trip";
import Activity from "../home/Activity";

// Importing Data
import { items } from "../home/data";

const Trekkingpage = () => {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const params = useParams();

  const data = items.filter((item) => item.title === params.id);
  const tripData = data[0];

  // useEffect(() => {
  //   const data = items.filter((item) => item.title === params.id);
  //   const dataDetail = data[0];
  //   console.log(dataDetail);
  //   setTripData(dataDetail);
  // }, []);

  return (
    <>
      <section>
        <div className="hero-img-section">
          <img src={heroimg} alt="Hero img" width="100%" />
          <div className="trip-hero-short-explain">
            <h1>{tripData.title}</h1>
            <p>
              Juphal – Phoksundo – Kangla Pass – Gajyan Khola – Newarla – Jomsom
            </p>
            <p className="icon-trekking-hero">
              {" "}
              <FaWalking /> Activity: {tripData.Activity}
            </p>
            <p className="icon-trekking-hero">
              {" "}
              <GiFootsteps /> Grade: {tripData.Grade}
            </p>
            <p className="icon-trekking-hero">
              {" "}
              <BiTimeFive /> Duration: {tripData.Itinerary.length} Days
            </p>
            <p className="icon-trekking-hero">
              {" "}
              <GiCornerFlag /> Country: {tripData.country}
            </p>
            <p className="icon-trekking-hero">
              {" "}
              <BiTimeFive /> Season: {tripData.season}
            </p>
          </div>
        </div>
      </section>
      {/* Main Section Start */}
      <section>
        <Container>
          <Row>
            <Col md={3} className="mt-5 mb-5">
              <Scrollspy
                className="scrollspy"
                items={[
                  "section-1",
                  "section-2",
                  "section-3",
                  "section-4",
                  "section-5",
                  "section-6",
                ]}
                currentClassName="isCurrent"
              >
                <li as={Link} to="/">
                  <Link to="#section-1">OVERVIEW</Link>
                </li>
                <li>
                  <Link to="#section-2">ITINERARY</Link>
                </li>
                <li>
                  <Link to="#section-3">INCLUSIONS</Link>
                </li>
                <li>
                  <Link to="#section-4">EXCLUSIONS</Link>
                </li>
                <li>
                  <Link to="#section-5">TRIP PRICE</Link>
                </li>
                <li>
                  <Link to="#section-6">GALLERY</Link>
                </li>
                <button className="reserve-now">Enquiry Now</button>
              </Scrollspy>
            </Col>
            {/* Trip Right Col Start Here */}
            <Col md={9}>
              <section id="section-1">
                <h2 className="trekking-topic">{tripData.title}</h2>
                <Row>
                  <Col md={3}>
                    <p className="icon-trekking">
                      <BsFillPeopleFill /> Group Size : {tripData.groupSize}
                    </p>
                  </Col>
                  <Col md={4}>
                    <p className="icon-trekking">
                      <GiMountains /> Elevation :{tripData.elevation}
                    </p>
                  </Col>
                  <Col md={5}>
                    <p className="icon-trekking">
                      <MdPlace /> Start From : {tripData.startFrom}
                    </p>
                  </Col>
                  <Col md={12}>
                    <p className="icon-trekking">
                      <BiTimeFive /> Start on : {tripData.starton}
                    </p>
                  </Col>
                </Row>

                <p className="trip-desc">{tripData.description}</p>
                <p className="trip-desc">{tripData.description_i}</p>
              </section>

              <section id="section-2">
                <h2>Itinerary</h2>
                <ul>
                  {tripData.Itinerary.map((el) => (
                    <li>{el}</li>
                  ))}
                </ul>
              </section>

              <section id="section-3">
                <h2>Inclusions</h2>
                <ul>
                  {tripData.Inclusions.map((include) => (
                    <li>
                      {" "}
                      <TiTick /> {include}{" "}
                    </li>
                  ))}
                </ul>
              </section>

              <section id="section-4">
                <h2>Exclusions</h2>
                <ul>
                  {tripData.Exclusions.map((exclude) => (
                    <li>
                      {" "}
                      <AiOutlineClose /> {exclude}
                    </li>
                  ))}
                </ul>
              </section>

              <section id="section-5">
                <h2>Price details</h2>
                <h3>(All rates are in Euro)</h3>
                <ul className="price-details">
                  {tripData.Prices.map((price) => (
                    <li>{price}</li>
                  ))}
                </ul>
              </section>

              <section id="section-6">
                <h2>From our gallery</h2>
                <div className={model ? "model open" : "model"}>
                  <img src={tempimgSrc} alt="trekking" width="100%" />
                  <AiOutlineClose
                    className="icon"
                    onClick={() => setModel(false)}
                  />
                </div>
                <div className="gallery">
                  {tripData.trekkingImage.map((Img) => {
                    const getImg = (imgSrc) => {
                      setTempImgSrc(imgSrc);
                      setModel(true);
                    };
                    return (
                      <div className="pics" onClick={() => getImg(Img)}>
                        <img src={Img} alt="trekking img" width="100%" />
                      </div>
                    );
                  })}
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <div className="container">
          <h1>Similar Trips</h1>
        </div>
        <Slider
          c={[
            { id: 1, width: 1, itemsToShow: 1 },
            { id: 2, width: 550, itemsToShow: 2 },
            { id: 3, width: 768, itemsToShow: 3 },
            { id: 4, width: 1200, itemsToShow: 3.5 },
          ]}
        />
      </section>

      <section>
        <div className="whyus">
          <Activity />
        </div>
      </section>
    </>
  );
};

export default Trekkingpage;
