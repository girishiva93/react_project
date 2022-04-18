import React from "react";
import level from "./src/level1.jpg";

// importing img
import easy from "./src/easy.png";
import moderate from "./src/moderate.png";
import hard from "./src/hard.png";
import mountaineering from "./src/mountaineering.png";

const Activity = () => {
  return (
    <>
      <div className="container">
        <h3 className="whyus-main-title">Choose Activity</h3>
        {/* <p>
            Find your next travel adventure and make it memorable. Explore
            activities or inquire about custom trips. Check out our popular
            activities.
          </p> */}
      </div>
      <div className="level-img">
        <div className="trekking-level-img ">
          {" "}
          <img src={level} className="level-bg-img" alt="" width="100%" />{" "}
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
        </div>
      </div>
    </>
  );
};

export default Activity;
