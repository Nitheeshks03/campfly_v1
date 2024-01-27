import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function StayCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <div className="w-[300px] rounded-[10px] h-[240px] object-cover">
            <img
              src="images/stay-image-1.png"
              className="w-full h-full"
              alt="stay-1"
            />
          </div>
        </div>
        <div>
          <div className="w-[300px] rounded-[10px] h-[240px] object-cover">
            <img
              src="images/stay-image-1.png"
              className="w-full h-full"
              alt="stay-1"
            />
          </div>
        </div>
        <div>
          <div className="w-[300px] rounded-[10px] h-[240px] object-cover">
            <img
              src="images/stay-image-1.png"
              className="w-full h-full"
              alt="stay-1"
            />
          </div>
        </div>
        <div>
          <div className="w-[300px] rounded-[10px] h-[240px] object-cover">
            <img
              src="images/stay-image-1.png"
              className="w-full h-full"
              alt="stay-1"
            />
          </div>
        </div>
        <div>
          <div className="w-[300px] rounded-[10px] h-[240px] object-cover">
            <img
              src="images/stay-image-1.png"
              className="w-full h-full"
              alt="stay-1"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default StayCarousel;
