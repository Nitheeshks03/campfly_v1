import Navbar from "../components/Navbar";
import TrendingCard from "../components/TrendingCard";
import ExploreCultureCard from "../components/ExploreCultureCard";
import OurPackagesSection from "../components/OurPackagesSection";
import BannerCarousel from "../components/BannerCarousel";
import GetRecommendation from "../components/GetRecommendation";
import Footer from "../components/Footer";
import TrendingCarousel from "../components/TrendingCarousel";
import ExploreCultureCarousel from "../components/ExploreCultureCarousel";
import "../components/BookingModal.css";
import BookingModal from "../components/BookingModal";
import { useState } from "react";

function HomePage() {
  const [bookingModal, setBookingModal] = useState(false);

  const handleBookingModalOpen = () => {
    setBookingModal(true);
  };
  const handleBookingModalClose = () => {
    setBookingModal(false);
  };
  console.log(bookingModal);
  return (
    <div>
      <div className="relative h-screen">
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
        <h2 className="text-[40px]">Trending Getaways</h2>
      </div>
      <div className=" lg:flex  justify-around hidden">
        <TrendingCard handleBookingModalOpen={handleBookingModalOpen} />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
      </div>

      <div className="lg:hidden  xs:block">
        <TrendingCarousel />
      </div>

      <div className="text-center my-10">
        <h2 className="text-[48px]">Explore New Cultures</h2>
        <p>Browse destinations for your next holiday plan.</p>
      </div>
      <div className="lg:flex hidden px-20 justify-around">
        <ExploreCultureCard />
        <ExploreCultureCard />
      </div>
      <div className="lg:hidden block">
        <ExploreCultureCarousel />
      </div>
      <div className="text-center my-10 ">
        <button className="w-[120px]  p-2 rounded-md bg-[#1ED760]">
          View More
        </button>
      </div>
      <div>
        <OurPackagesSection />
      </div>
      <div className="p-20">
        <BannerCarousel />
      </div>
      <div className="m-20">
        <GetRecommendation />
      </div>
      <div>
        <Footer />
      </div>
      {bookingModal && (
        <>
          <div className="booking-overlay" />
          <div className="booking-modal">
            <BookingModal handleBookingModalClose={handleBookingModalClose} />
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;
