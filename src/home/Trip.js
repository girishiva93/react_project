import React, { useRef } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { items } from "./data";
import "./css/home.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const Trip = () => {
  const carouselRef = React.useRef(null);
  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the last item, go to first item
      carouselRef.current.goTo(0);
    }
  };
  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the first item, go to last item
      carouselRef.current.goTo(items.length);
    }
  };
  return (
    <section>
      <div className="container">
        <h1>Most Selling Trip</h1>
        <div className="App">
          <Carousel
            className="carousel-university"
            breakPoints={breakPoints}
            ref={carouselRef}
            onPrevStart={onPrevStart}
            onNextStart={onNextStart}
            disableArrowsOnEnd={false}
            autoPlaySpeed={1500}
            enableAutoPlay
            pagination={false}
          >
            {items.map((item) => (
              <Item key={item.id}>{item.title}</Item>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Trip;
