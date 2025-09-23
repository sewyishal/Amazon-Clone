import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import classes from "./Carousel.module.css";
const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink) => {
          return (
            <img
              src={imageItemLink}
              alt="Product carousel"
              key={imageItemLink}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselEffect;
