import Navbar from "../components/Navbar";
import { IoIosStar } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiSurferVan } from "react-icons/gi";
import { IoTicketOutline } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";
import StayCarousel from "../components/StayCarousel";

function PackagePage() {
  return (
    <div className="max-w-full">
      <div className="relative w-full h-[60vh]">
        <Navbar />
        <div className="absolute object-cover h-full w-[100vw] top-0 left-0 z-10">
          <img
            className="w-full h-full"
            src="/images/munnar.png"
            alt="carousel-1"
          />
        </div>
      </div>
      <div className="flex w-full mt-5">
        <div className=" w-[60%]">
          <div className="border p-[35px] h-[157px] rounded-[20px]">
            <h3 className="text-[26px] font-semibold">
              6 Night 5 Days Honeymoon Package From Munnar
            </h3>
            <div className="flex justify-between">
              <div className="flex items-center">
                <IoIosStar />{" "}
                <span className="text-xl font-semibold ml-2">4.5/5</span>
                <span className="text-xs text-[#787878] ml-3">
                  (1000+ ratings)
                </span>
              </div>
              <div className="flex mt-5">
                <div className="w-[200px] text-xs font-medium flex items-center justify-center   bg-[#101EDD26] rounded-[80px]">
                  <p>Member price available</p>
                </div>
                <div className="w-[100px] mx-3 bg-[#35E80D8E] text-xs font-medium  flex items-center justify-center rounded-[80px]">
                  <p>Premium</p>
                </div>
                <div>
                  <IoBookmarkOutline className="text-[26px]" />
                </div>
                <div>
                  <IoShareSocialOutline className="text-[26px]" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-xl font-medium my-3">Get there</p>
          <div className="flex w-1/2 justify-around">
            <div className="w-max h-[35px] px-3  truncate rounded-lg bg-[#53E80D33] flex justify-center items-center  text-gray-600">
              Cochin international airport
            </div>
            <div className="w-max h-[35px] px-3 truncate rounded-lg bg-[#53E80D33]  flex justify-center items-center  text-gray-600">
              Ernakulam junction
            </div>
          </div>
          <p className="text-xl font-medium my-3">What's included</p>
          <div className="flex w-full sm:justify-between mt-3 mb-5">
            <div className="flex items-center">
              <GiSandsOfTime className="opacity-70 text-[16px]" />
              <p className="ml-2">Food included</p>
            </div>
            <div className="flex items-center">
              <IoFastFoodOutline className="opacity-70 text-[16px]" />
              <p className="ml-2">Food included</p>
            </div>
            <div className="flex items-center">
              <GiSurferVan className="opacity-70 text-[16px]" />
              <p className="ml-2">Transportation</p>
            </div>
            <div className="flex items-center">
              <IoTicketOutline className="opacity-70 text-[16px]" />
              <p className="ml-2">All tickets</p>
            </div>
          </div>
          <p className="text-xl font-medium my-3">What you'll see</p>
          <div className="w-[100vw]">
            <StayCarousel />
          </div>
        </div>
        <div className="w-[40%] bg-white ml-5 ">
          <div className="border px-[35px] h-[157px] py-[20px] rounded-[20px]   font-medium">
            <p className="text-[#787878]">
              Starting from <span className="line-through">₹15000</span>
            </p>
            <div className="flex justify-between">
              <div>
                <p className="text-[32px] mt-2 text-[#F00]">
                  ₹15000
                  <span className="text-[#787878] text-[16px]">per adult</span>
                </p>
              </div>
              <div className="border border-[#F00] rounded-[30px] flex items-center justify-center p-2 ">
                <p className="text-2xl text-[#F00]">25% off</p>
              </div>
            </div>
            <p className="text-[14px] mt-3">
              EMI available from ₹1200/month.
              <span className="text-[#161EDD]">View plans</span>
            </p>
          </div>
          <div className="w-full border p-[30px] rounded-[20px] mt-5">
            <p className="text-center text-xl font-medium mb-[20px]">
              Book your spot
            </p>
            <hr className="mb-[20px]" />
            <p className="text-xl font-medium">
              Munnar: Honeymoon premium package
            </p>
            <div className="mt-2">
              <span className="text-[#F00]">-25%</span>
              <span className="line-through opacity-70 text-xs">₹10000</span>
              <span className="">₹ 7000x 2 Adults</span>
            </div>
            <p className="text-xl font-medium mt-2">Total - 14000</p>
            <p>(No additional taxes or booking fees)</p>
            <p className="text-xs text-[#1ED760] mt-2">
              Offers applied : 1 offer available
            </p>
            <hr className="my-5" />
            <div className="text-xs text-center my-5">
              <p>
                Members can save up to 2.5%.{" "}
                <span className="text-[#161EDD]">Sign up</span> to get it
              </p>
            </div>
            <div className="max-w-[520px] h-[63px] mx-auto">
              <button className="w-full h-full bg-[#1ED760] rounded-[10px] font-medium">
                Book Now
              </button>
            </div>
            <div className="text-center mt-3 text-xs">
              <p className="text-[#404040]">
                If you are unhappy with the package costs or require any
                modifications, please contact a trip expert from our
                <span className="text-[#161EDD]">customer servce </span> team
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackagePage;
