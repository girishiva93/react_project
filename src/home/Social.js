import React from "react";
import { donation } from "./data";

const Social = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="about-responsive-title">Social Responsibility</h1>
          <div className="col md = {6} about-responsive">
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
          <div className="col md">
            <h1 className="about-company-title">{donation.title}</h1>
            <p className="about-company-des">{donation.description}</p>
          </div>
          <div className="col md = {6} social-img-responsive-desktop">
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
    </>
  );
};

export default Social;
