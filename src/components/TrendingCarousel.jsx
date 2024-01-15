import TrendingCard from "./TrendingCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TrendingCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
      };
  return (
    <Slider {...settings}>
        <div>
            <TrendingCard/>
        </div>
        <div>
            <TrendingCard/>
        </div>
        <div>
            <TrendingCard/>
        </div>
        <div>
            <TrendingCard/>
        </div>

    </Slider>
    
  )
}

export default TrendingCarousel