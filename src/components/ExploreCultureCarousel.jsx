import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExploreCultureCard from "./ExploreCultureCard";

function ExploreCultureCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <ExploreCultureCard />
      </div>
      <div>
        <ExploreCultureCard />
      </div>
      <div>
        <ExploreCultureCard />
      </div>
      
    </Slider>
  );
}

export default ExploreCultureCarousel;
