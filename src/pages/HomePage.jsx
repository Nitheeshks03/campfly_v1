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

const images = [
  "/images/carousel_1.png",
  "/images/carousel_2.png",
  "/images/carousel_3.png",
];

function HomePage() {
  const [bookingModal, setBookingModal] = useState(false);
  const [trendingData, setTrendingData] = useState(null);
  const [exploreData, setExploreData] = useState(null);
  const [bookingData, setBookingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleBookingModalOpen = (packageData) => {
    setBookingModal(true);
    setBookingData(packageData);
  };
  const handleBookingModalClose = () => {
    setBookingModal(false);
  };

  useEffect(() => {
    const changeImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const intervalId = setInterval(changeImage, 2000);

    return () => clearInterval(intervalId);
  }, [images.length]);

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
        <div className="absolute w-full z-[100] sm:top-[40%] top-[45%] text-center right-[50%] translate-x-[50%]">
          <h1 className="sm:text-[64px] text-4xl mb-2 sm:mb-4 font-semibold font-raleway text-[#FFF]">
            Explore the World
          </h1>
          <p className="sm:text-xl font-raleway text-[#FFF]">
            Discover your dream destinations
          </p>
        </div>
        <Navbar />
        <div className="absolute object-cover h-full w-full top-0 left-0 z-10">
          <img
            className="w-full h-full"
            src={images[currentImageIndex]}
            alt={`carousel-image-${currentImageIndex}`}
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

      <div className="text-center font-sans my-10">
        <h2 className="sm:text-[48px] mt-[60px] mb-5 text-4xl">
          Explore New Cultures
        </h2>
        <p className="sm:text-sm text-sm sm:mt-0 mb-[40px]">
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
            <BookingModal
              bookingData={bookingData}
              handleBookingModalClose={handleBookingModalClose}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;
