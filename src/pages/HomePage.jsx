import Navbar from "../components/Navbar";
import TrendingCard from "../components/TrendingCard";
import ExploreCultureCard from "../components/ExploreCultureCard";
import OurPackagesSection from "../components/OurPackagesSection";
import BannerCarousel from "../components/BannerCarousel";
import GetRecommendation from "../components/GetRecommendation";

function HomePage() {
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
      <div className="flex justify-around">
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
      </div>

      <div className="text-center my-10">
        <h2 className="text-[48px]">Explore New Cultures</h2>
      </div>
      <div className="flex justify-around">
      <ExploreCultureCard/>
      <ExploreCultureCard/>
      </div>
      <div className="text-center my-5 ">
        <button className="w-[100px]  p-2 rounded-md bg-[#1ED760]">view more</button>
      </div>
      <div>
        <OurPackagesSection/>
      </div>
      <div className="p-20">
      <BannerCarousel />
      </div>
      <div className="m-20">
        <GetRecommendation/>
      </div>

    </div>
  );
}

export default HomePage;
