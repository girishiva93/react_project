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
  const data_1 = items.filter((items) => items.type === params.id);
  const data_2 = items.filter((items) => items.Grade === params.id);

  const tripData = data[0];
  const peakData = data_1[0];
  const activityData = data_2[0];

  // useEffect(() => {
  //   const data = items.filter((item) => item.title === params.id);
  //   const dataDetail = data[0];
  //   console.log(dataDetail);
  //   setTripData(dataDetail);
  // }, []);

  return (
    <>
      {tripData ? (
        <>
          <section>
            <div className="hero-img-section">
              <img src={heroimg} alt="Hero img" width="100%" />
              <div className="trip-hero-short-explain">
                <h1>{tripData.title}</h1>
                <p>
                  Juphal – Phoksundo – Kangla Pass – Gajyan Khola – Newarla –
                  Jomsom
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
            <Slider />
          </section>
          <section>
            <div className="whyus">
              <Activity />
            </div>
          </section>{" "}
        </>
      ) : (
        <p>Not Data were Found</p>
      )}

      {peakData ? (
        <>
          <section>
            <div className="hero-img-section">
              <img src={heroimg} alt="Hero img" width="100%" />
              <div className="trip-hero-short-explain">
                <h1>{peakData.title}</h1>
                <p>
                  Juphal – Phoksundo – Kangla Pass – Gajyan Khola – Newarla –
                  Jomsom
                </p>
                <p className="icon-trekking-hero">
                  {" "}
                  <FaWalking /> Activity: {peakData.Activity}
                </p>
                <p className="icon-trekking-hero">
                  {" "}
                  <GiFootsteps /> Grade: {peakData.Grade}
                </p>
                <p className="icon-trekking-hero">
                  {" "}
                  <BiTimeFive /> Duration: {peakData.Itinerary.length} Days
                </p>
                <p className="icon-trekking-hero">
                  {" "}
                  <GiCornerFlag /> Country: {peakData.country}
                </p>
                <p className="icon-trekking-hero">
                  {" "}
                  <BiTimeFive /> Season: {peakData.season}
                </p>
              </div>
            </div>
          </section>
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
                    <h2 className="trekking-topic">{peakData.title}</h2>
                    <Row>
                      <Col md={3}>
                        <p className="icon-trekking">
                          <BsFillPeopleFill /> Group Size : {peakData.groupSize}
                        </p>
                      </Col>
                      <Col md={4}>
                        <p className="icon-trekking">
                          <GiMountains /> Elevation :{peakData.elevation}
                        </p>
                      </Col>
                      <Col md={5}>
                        <p className="icon-trekking">
                          <MdPlace /> Start From : {peakData.startFrom}
                        </p>
                      </Col>
                      <Col md={12}>
                        <p className="icon-trekking">
                          <BiTimeFive /> Start on : {peakData.starton}
                        </p>
                      </Col>
                    </Row>

                    <p className="trip-desc">{peakData.description}</p>
                    <p className="trip-desc">{peakData.description_i}</p>
                  </section>

                  <section id="section-2">
                    <h2>Itinerary</h2>
                    <ul>
                      {peakData.Itinerary.map((el) => (
                        <li>{el}</li>
                      ))}
                    </ul>
                  </section>

                  <section id="section-3">
                    <h2>Inclusions</h2>
                    <ul>
                      {peakData.Inclusions.map((include) => (
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
                      {peakData.Exclusions.map((exclude) => (
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
                      {peakData.Prices.map((price) => (
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
                      {peakData.trekkingImage.map((Img) => {
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
            <Slider />
          </section>
          <section>
            <div className="whyus">
              <Activity />
            </div>
          </section>{" "}
        </>
      ) : (
        <p>No data were found</p>
      )}
      {activityData ? (
        <>
          <section>
            <div className="hero-img-section">
              <img src={heroimg} alt="Hero img" width="100%" />
              <div className="trip-hero-short-explain">
                <h1>{activityData.title}</h1>
                <p>
                  Juphal – Phoksundo – Kangla Pass – Gajyan Khola – Newarla –
                  Jomsom
                </p>
                <p className="icon-trekking-hero">
                  {" "}
                  <FaWalking /> Activity: {activityData.Activity}
                </p>
                <p className="icon-trekking-hero">
                  {" "}
                  <GiFootsteps /> Grade: {activityData.Grade}
                </p>
                <p className="icon-trekking-hero">
                  {" "}
                  <BiTimeFive /> Duration: {activityData.Itinerary.length} Days
                </p>
                <p className="icon-trekking-hero">
                  {" "}
                  <GiCornerFlag /> Country: {activityData.country}
                </p>
                <p className="icon-trekking-hero">
                  {" "}
                  <BiTimeFive /> Season: {activityData.season}
                </p>
              </div>
            </div>
          </section>
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
                    <h2 className="trekking-topic">{activityData.title}</h2>
                    <Row>
                      <Col md={3}>
                        <p className="icon-trekking">
                          <BsFillPeopleFill /> Group Size :{" "}
                          {activityData.groupSize}
                        </p>
                      </Col>
                      <Col md={4}>
                        <p className="icon-trekking">
                          <GiMountains /> Elevation :{activityData.elevation}
                        </p>
                      </Col>
                      <Col md={5}>
                        <p className="icon-trekking">
                          <MdPlace /> Start From : {activityData.startFrom}
                        </p>
                      </Col>
                      <Col md={12}>
                        <p className="icon-trekking">
                          <BiTimeFive /> Start on : {activityData.starton}
                        </p>
                      </Col>
                    </Row>

                    <p className="trip-desc">{activityData.description}</p>
                    <p className="trip-desc">{activityData.description_i}</p>
                  </section>

                  <section id="section-2">
                    <h2>Itinerary</h2>
                    <ul>
                      {activityData.Itinerary.map((el) => (
                        <li>{el}</li>
                      ))}
                    </ul>
                  </section>

                  <section id="section-3">
                    <h2>Inclusions</h2>
                    <ul>
                      {activityData.Inclusions.map((include) => (
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
                      {activityData.Exclusions.map((exclude) => (
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
                      {activityData.Prices.map((price) => (
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
                      {activityData.trekkingImage.map((Img) => {
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
            <Slider />
          </section>
          <section>
            <div className="whyus">
              <Activity />
            </div>
          </section>{" "}
        </>
      ) : (
        <p>Trip Not Found</p>
      )}
    </>
  );
};

export default Trekkingpage;
