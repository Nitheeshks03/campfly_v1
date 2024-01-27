import Navbar from "../components/Navbar";
import OurPackagesSection from "../components/OurPackagesSection";
import BannerCarousel from "../components/BannerCarousel";
import GetRecommendation from "../components/GetRecommendation";
import Footer from "../components/Footer";
import TrendingCarousel from "../components/TrendingCarousel";
import ExploreCultureCarousel from "../components/ExploreCultureCarousel";
import "../components/BookingModal.css";
import BookingModal from "../components/BookingModal";
import { useEffect, useState } from "react";
import BannerHomeCarousel from "../components/BannerHomeCarousel";

function HomePage() {
  const [bookingModal, setBookingModal] = useState(false);
  const [trendingData, setTrendingData] = useState(null);
  const [exploreData, setExploreData] = useState(null);
  const [bookingData, setBookingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleBookingModalOpen = (packageData) => {
    setBookingModal(true);
    setBookingData(packageData);
  };
  const handleBookingModalClose = () => {
    setBookingModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trendingResponse = await fetch(
          "https://script.google.com/macros/s/AKfycbzxFMhGOKEClESET0TCxOYqQpodkGQPtnyXkwCSd5dVbzAxjf48BfC4VqFPkp6JuXG4/exec?dbTableName=TrendingGetawayB"
        );
        const exploreResponse = await fetch(
          "https://script.google.com/macros/s/AKfycbzxFMhGOKEClESET0TCxOYqQpodkGQPtnyXkwCSd5dVbzAxjf48BfC4VqFPkp6JuXG4/exec?dbTableName=ExploreNewCultureB"
        );

        if (!trendingResponse.ok) {
          throw new Error("Network response was not ok");
        }
        if (!exploreResponse.ok) {
          throw new Error("Network response was not ok");
        }

        const trendingResult = await trendingResponse.json();
        const exploreResult = await exploreResponse.json();
        setTrendingData(trendingResult);
        setExploreData(exploreResult);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="max-w-full overflow-hidden">
      <div className="relative sm:h-[80vh] h-[550px]">
        <Navbar />
        <div className="absolute object-cover h-full w-full top-0 left-0 z-10">
          <img
            className="w-full h-full"
            src="/images/carousel_1.png"
            alt="carousel-1"
          />
        </div>
      </div>
      <div className="text-center my-10">
        <h2 className="sm:text-[40px] text-4xl">Trending Getaways</h2>
      </div>
      <div className="px-10">
        <TrendingCarousel
          trendingData={trendingData}
          handleBookingModalOpen={handleBookingModalOpen}
        />
      </div>

      <div className="text-center my-10">
        <h2 className="sm:text-[48px] text-4xl">Explore New Cultures</h2>
        <p className="sm:text-sm text-sm sm:mt-0 mt-3">
          Browse destinations for your next holiday plan.
        </p>
      </div>
      <div className="my-auto max-w-full">
        <ExploreCultureCarousel exploreData={exploreData} />
      </div>
      <div className="text-center my-10 ">
        <button className="w-[120px]  p-2 rounded-md bg-[#1ED760]">
          View More
        </button>
      </div>
      <div>
        <OurPackagesSection />
      </div>
      <div className="my-10">
        <BannerHomeCarousel />
      </div>
      <div className="sm:m-20 xs:m-5">
        <GetRecommendation />
      </div>
      <div>
        <Footer />
      </div>
      {bookingModal && (
        <>
          <div className="booking-overlay" />
          <div className="booking-modal">
            <BookingModal bookingData={bookingData} handleBookingModalClose={handleBookingModalClose} />
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;
