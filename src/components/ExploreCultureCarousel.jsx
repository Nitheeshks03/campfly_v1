import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExploreCultureCard from "./ExploreCultureCard";

function ExploreCultureCarousel({ exploreData }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {exploreData?.ExploreNewCultureB?.map((item) => (
        <div className="my-auto" key={item.IdForExplore}>
          <ExploreCultureCard
            mainImageToBeDisplayed={item.MainImageToBeDisplayed}
            placeName={item.PlaceName}
            placeNameMetaDescription={item.PlaceNameMetaDescription}
            placeBriefDescription={item.PlaceBriefDescription}
            getThereBestSeason={item.GetThereBestSeason}
            getThereNearestAirport={item.GetThereNearestAirport}
            getThereNearestMainRailwayStation={
              item.GetThereNearestMainRailwayStation
            }
            thingsToDoOneName={item.ThingsToDoOneName}
            thingsToDoOneImageURL={item.ThingsToDoOneImageURL}
            thingsToDoTwoName={item.ThingsToDoTwoName}
            thingsToDoTwoImageURL={item.ThingsToDoTwoImageURL}
            thingsToDoThreeName={item.ThingsToDoThreeName}
            thingsToDoThreeImageURL={item.ThingsToDoThreeImageURL}
          />
        </div>
      ))}
    </Slider>
  );
}

export default ExploreCultureCarousel;
