import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerCarousel = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    cssEase: "linear",
    className: "center",
    centerMode: true,
    centerPadding: "240px",
    slidesToShow: 1,
    speed: 1000,
    dots: false,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="/images/banner-1.png" alt="banner-1" />
        </div>
        <div>
          <img src="/images/banner-2.png" alt="banner-2" />
        </div>
        <div>
          <img src="/images/banner-3.png" alt="banner-3" />
        </div>
        <div>
          <img src="/images/banner-1.png" alt="banner-1" />
        </div>
        <div>
          <img src="/images/banner-2.png" alt="banner-2" />
        </div>
        <div>
          <img src="/images/banner-3.png" alt="banner-3" />
        </div>
      </Slider>
    </div>
  );
};

export default BannerCarousel;
