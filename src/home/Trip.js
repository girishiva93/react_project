import React, { useRef, memo } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { items } from "./data";
import "./css/home.css";

const Trip = (check) => {
  const breakPoints = check.c;
  console.log(breakPoints);
  const carouselRef = useRef(null);
  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(0);
    }
  };
  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(items.length);
    }
  };
  return (
    <div className="container">
      <Carousel
        className="carousel-university"
        breakPoints={breakPoints}
        ref={carouselRef}
        onPrevStart={onPrevStart}
        onNextStart={onNextStart}
        disableArrowsOnEnd={false}
        autoPlaySpeed={10000}
        enableAutoPlay
        pagination={false}
      >
        {items.map((item, index) => (
          <div key={item.id}>
            <Item>
              <img src={item.image} className="trip-img" alt={item.title} />
            </Item>
            <div className="trip-items-col">
              <h3 className="trip-title">{item.title}</h3>
              <p className="trip-date">{item.starton}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default memo(Trip);
