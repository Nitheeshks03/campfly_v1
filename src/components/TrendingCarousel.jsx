import TrendingCard from "./TrendingCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TrendingCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div>
        <TrendingCard />
      </div>
      <div>
        <TrendingCard />
      </div>
      <div>
        <TrendingCard />
      </div>
      <div>
        <TrendingCard />
      </div>
    </Slider>
  );
}

export default TrendingCarousel;
