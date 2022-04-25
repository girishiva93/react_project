import React from "react";

// importing img
import easy from "./src/easy.png";
import moderate from "./src/moderate.png";
import hard from "./src/hard.png";
import mountaineering from "./src/mountaineering.png";
import level from "./src/level1.jpg";
import { Link } from "react-router-dom";

const Activity = () => {
  return (
    <>
      <div className="container">
        <h3 className="whyus-main-title">Choose Activity</h3>
      </div>

      <div className="level-img">
        <div className="trekking-level-img ">
          {" "}
          <img src={level} className="level-bg-img" alt="" width="100%" />{" "}
        </div>
        <div className="container">
          <div className="level-first-circle">
            <Link to={`/activity/easy`}>
              <img src={easy} className="level-logo" alt="easy" width="100%" />
              <h3>Easy Trek</h3>
            </Link>
          </div>
          <div className="level-second-circle">
            <Link to={`/activity/moderate`}>
              <img
                src={moderate}
                className="level-logo"
                alt="easy"
                width="100%"
              />
              <h3>Moderate Treks</h3>
            </Link>
          </div>
          <div className="level-third-circle">
            <img src={hard} className="level-logo" alt="easy" width="100%" />
            <h3> Adventurous Treks</h3>
          </div>
          <div className="level-fourth-circle">
            <Link to={`/activity/Hard`}>
              <img
                src={mountaineering}
                className="level-logo"
                alt="easy"
                width="100%"
              />
              <h3> Hard Treks</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
