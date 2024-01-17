import TrendingCard from "./TrendingCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TrendingCarousel({ data, handleBookingModalOpen }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
      {data?.TrendingGetawayB?.map((trendingData) => (
        <div>
          <TrendingCard
            key={trendingData.IdForTrendinfGetaway}
            dayAndNightCount={trendingData.DayAndNightCount}
            destinationMetaData={trendingData.DestinationMetaData}
            destinationName={trendingData.DestinationName}
            discountRate={trendingData.DiscountRate}
            entryTicket={trendingData.EntryTicket}
            foodDetail={trendingData.FoodDetail}
            idForTrendingGetaway={trendingData.IdForTrendinfGetaway}
            imageUrl={trendingData.ImageUrl}
            memberPriceAvailable={trendingData.MemberPriceAvailable}
            noOfRating={trendingData.NoOfRating}
            offerPrice={trendingData.OfferPrice}
            originalPrice={trendingData.OriginalPrice}
            rating={trendingData.Rating}
            transportDetail={trendingData.TransportDetail}
            handleBookingModalOpen={handleBookingModalOpen}
          />
        </div>
      ))}
    </Slider>
  );
}

export default TrendingCarousel;
