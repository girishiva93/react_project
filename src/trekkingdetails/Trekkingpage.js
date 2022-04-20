import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./css/trekkingdetails.css";
import heroimg from "../home/src/image1.jpg";
import { trekkingImage } from "../home/data";
import Scrollspy from "react-scrollspy";
import { AiOutlineClose } from "react-icons/ai";

import { TiTick } from "react-icons/ti";
import { FaWalking } from "react-icons/fa";

import { BiTimeFive } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiMountains, GiCornerFlag, GiFootsteps } from "react-icons/gi";
import { MdPlace } from "react-icons/md";

import { Link } from "react-router-dom";
import Slider from "../home/Trip";
import Activity from "../home/Activity";

const Trekkingpage = () => {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  return (
    <>
      <section>
        <div className="hero-img-section">
          <img src={heroimg} alt="Hero img" width="100%" />
          <div className="trip-hero-short-explain">
            <h1>East Upper Dolpo Trek</h1>
            <p>
              Juphal – Phoksundo – Kangla Pass – Gajyan Khola – Newarla – Jomsom
            </p>
            <p className="icon-trekking-hero">
              {" "}
              <FaWalking /> Activity: Trekking
            </p>
            <p className="icon-trekking-hero">
              {" "}
              <GiFootsteps /> Grade: Hard
            </p>
            <p className="icon-trekking-hero">
              {" "}
              <BiTimeFive /> Duration: 29 Days
            </p>
            <p className="icon-trekking-hero">
              {" "}
              <GiCornerFlag /> Country: Nepal
            </p>
            <p className="icon-trekking-hero">
              {" "}
              <BiTimeFive /> Season: Spring/Autumn
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
            <Col md={9}>
              {" "}
              <section id="section-1">
                <h2 className="trekking-topic">East Upper Dolpo Trek</h2>
                <Row>
                  <Col md={3}>
                    <p className="icon-trekking">
                      {" "}
                      <BsFillPeopleFill /> Group Size : 2-14 pax
                    </p>
                  </Col>
                  <Col md={4}>
                    <p className="icon-trekking">
                      {" "}
                      <GiMountains /> Elevation : Up to 5,400m
                    </p>
                  </Col>
                  <Col md={5}>
                    <p className="icon-trekking">
                      {" "}
                      <MdPlace /> Start From : Departs from Kathmandu, Nepal
                    </p>
                  </Col>
                  <Col md={12}>
                    <p className="icon-trekking">
                      {" "}
                      <BiTimeFive /> Start on : 1st June and 5th September 2022
                    </p>
                  </Col>
                </Row>
                <p className="trip-desc">
                  Dolpa is a remote, trans-Himalayan district in northwestern
                  Nepal. The district is famous for the Phoksundo Lake, a
                  serene, magnificent turquoise water body. Many beautiful
                  glaciers can be found near and above the lake area. The
                  northern regions have some rhododendron and caragana shrubs,
                  while Salix, Juniper, white Himalayan birch and silver fir
                  dominate the high meadows of the Himalayas. The region
                  provides an important habitat for animals such as the snow
                  leopard, grey wolf, musk deer, blue sheep, ghoral, great
                  Tibetan sheep, Himalayan tahr, leopard, jackal, and Himalayan
                  black bear. The region is home to over 200 species of bird
                  which include yellow-throat marten, Tibetan partridge, wood
                  snip, white-throat tit, wood accentor and crimson-eared
                  rose-finch.
                </p>
                <p className="trip-desc">
                  The villages in Dolpa are among the highest settlements on
                  Earth. Most of the inhabitants practice Bon Buddhism, an
                  ancient religion whose roots lie in Animism and Buddhism. The
                  landscape is doted with sacred monasteries, thangka paintings,
                  and chortens.
                </p>
              </section>
              <section id="section-2">
                <h2>Itinerary</h2>
                <ul>
                  <li>Day 01 – Arrive in Kathmandu.</li>
                  <li>Day 01 – Arrive in Kathmandu.</li>
                  <li>Day 01 – Arrive in Kathmandu.</li>
                  <li>Day 01 – Arrive in Kathmandu.</li>
                  <li>Day 01 – Arrive in Kathmandu.</li>
                  <li>Day 01 – Arrive in Kathmandu.</li>
                  <li>Day 01 – Arrive in Kathmandu.</li>
                  <li>Day 01 – Arrive in Kathmandu.</li>
                  <li>Day 01 – Arrive in Kathmandu.</li>
                  <li>Day 01 – Arrive in Kathmandu.</li>
                  <li>Day 01 – Arrive in Kathmandu.</li>
                  <li>Day 01 – Arrive in Kathmandu.</li>
                  <li>Day 01 – Arrive in Kathmandu.</li>
                  <li>Day 01 – Arrive in Kathmandu.</li>
                  <li>Day 01 – Arrive in Kathmandu.</li>
                  <li>Day 01 – Arrive in Kathmandu.</li>
                  <li>Day 01 – Arrive in Kathmandu.</li>
                  <li>Day 01 – Arrive in Kathmandu.</li>
                  <li>Day 01 – Arrive in Kathmandu.</li>
                  <li>Day 01 – Arrive in Kathmandu.</li>
                </ul>
              </section>
              <section id="section-3">
                <h2>Inclusions</h2>
                <ul>
                  <li>
                    {" "}
                    <TiTick /> Full board camping service for whole trekking
                    period.
                  </li>
                  <li>
                    {" "}
                    <TiTick /> Full board camping service for whole trekking
                    period.
                  </li>
                  <li>
                    {" "}
                    <TiTick /> Full board camping service for whole trekking
                    period.
                  </li>
                  <li>
                    {" "}
                    <TiTick /> Full board camping service for whole trekking
                    period.
                  </li>
                  <li>
                    {" "}
                    <TiTick /> Full board camping service for whole trekking
                    period.
                  </li>
                  <li>
                    {" "}
                    <TiTick /> Full board camping service for whole trekking
                    period.
                  </li>
                  <li>
                    {" "}
                    <TiTick /> Full board camping service for whole trekking
                    period.
                  </li>
                  <li>
                    {" "}
                    <TiTick /> Full board camping service for whole trekking
                    period.
                  </li>
                  <li>
                    {" "}
                    <TiTick /> Full board camping service for whole trekking
                    period.
                  </li>
                  <li>
                    {" "}
                    <TiTick /> Full board camping service for whole trekking
                    period.
                  </li>
                  <li>
                    {" "}
                    <TiTick /> Full board camping service for whole trekking
                    period.
                  </li>
                  <li>
                    {" "}
                    <TiTick /> Full board camping service for whole trekking
                    period.
                  </li>
                  <li>
                    {" "}
                    <TiTick /> Full board camping service for whole trekking
                    period.
                  </li>
                  <li>
                    {" "}
                    <TiTick /> Full board camping service for whole trekking
                    period.
                  </li>
                  <li>
                    {" "}
                    <TiTick /> Full board camping service for whole trekking
                    period.
                  </li>
                </ul>
              </section>
              <section id="section-4">
                <h2>Exclusions</h2>
                <ul>
                  <li>
                    {" "}
                    <AiOutlineClose /> Hotel in Kathmandu.
                  </li>
                  <li>
                    {" "}
                    <AiOutlineClose />
                    Hotel in Kathmandu.
                  </li>
                  <li>
                    {" "}
                    <AiOutlineClose />
                    Hotel in Kathmandu.
                  </li>
                  <li>
                    <AiOutlineClose />
                    Hotel in Kathmandu.
                  </li>
                  <li>
                    <AiOutlineClose />
                    Hotel in Kathmandu.
                  </li>
                </ul>
              </section>
              <section id="section-5">
                <h2>Price details</h2>
                <h3>(All rates are in Euro)</h3>
                <ul className="price-details">
                  <li>For 04 pax – 3,720 per/person.</li>
                  <li>For 04 pax – 3,720 per/person.</li>
                  <li>For 04 pax – 3,720 per/person.</li>
                  <li>For 04 pax – 3,720 per/person.</li>
                  <li>For 04 pax – 3,720 per/person.</li>
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
                  {trekkingImage.map((item, index) => {
                    const { img } = item;
                    const getImg = (imgSrc) => {
                      console.log(imgSrc);
                      setTempImgSrc(imgSrc);
                      setModel(true);
                    };
                    return (
                      <div
                        className="pics"
                        key={index}
                        onClick={() => getImg(img)}
                      >
                        <img src={img} alt="trekking img" width="100%" />
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
      </section>
    </>
  );
};

export default Trekkingpage;
