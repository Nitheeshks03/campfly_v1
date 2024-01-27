import TrendingCard from "./TrendingCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TrendingCarousel({ trendingData, handleBookingModalOpen }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: trendingData?.TrendingGetawayB.length > 1 ? 4 : 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {trendingData?.TrendingGetawayB?.map((trendingData) => (
        <div key={trendingData.IdForTrendingGetaway}>
          <TrendingCard
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
            premiumRate={trendingData.PremiumRate}
            budgetRate={trendingData.BudgetRate}
            midRangeRate={trendingData.MidRangeRate}
          />
        </div>
      ))}
    </Slider>
  );
}

export default TrendingCarousel;
