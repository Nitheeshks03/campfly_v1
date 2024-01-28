import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { IoAirplaneSharp } from "react-icons/io5";
import { FaTrainSubway } from "react-icons/fa6";

function ExploreCultureCard({
  mainImageToBeDisplayed,
  placeName,
  placeNameMetaDescription,
  placeBriefDescription,
  getThereBestSeason,
  getThereNearestAirport,
  getThereNearestMainRailwayStation,
  thingsToDoOneName,
  thingsToDoOneImageURL,
  thingsToDoTwoName,
  thingsToDoTwoImageURL,
  thingsToDoThreeName,
  thingsToDoThreeImageURL,
}) {
  return (
    <div className="sm:w-[532px] font-sans w-[350px] mx-auto p-1 border rounded-xl">
      <div className="cover w-full h-[161px] overflow-hidden mx-auto">
        <img
          src={mainImageToBeDisplayed}
          className="w-full h-full rounded-[10px]"
          alt={`Explore ${placeName}`}
        />
      </div>
      <div className="p-2">
        <div className="mt-3">
          <p className="text-xl font-medium">
            {placeName}
            <span className="text-xs text-[#787878] ml-2">
              {placeNameMetaDescription}
            </span>
          </p>
        </div>
        <div className="mt-3">
          <p className="text-[#787878] text-[10px]">{placeBriefDescription}</p>
        </div>
        <div className="font-medium text-[14px] mt-3">Get there</div>
        <div className="flex mt-3 text-xs">
          <div className="w-[104px] h-[33px] px-2 rounded-lg bg-gray-300 flex  items-center  text-gray-600">
            <span className="text-[19px mr-1">
              <MdOutlineDateRange />
            </span>
            {getThereBestSeason}
          </div>
          <div className="w-[104px] h-[33px] px-2 truncate rounded-lg bg-gray-300 flex items-center  text-gray-600 ml-3">
            <span className="text-[19px mr-1">
              <IoAirplaneSharp />
            </span>
            {getThereNearestAirport}
          </div>
          <div className="w-[104px] h-[33px] px-2 truncate rounded-lg bg-gray-300 flex  items-center  text-gray-600 ml-3">
            <span className="text-[19px mr-1">
              <FaTrainSubway />
            </span>
            {getThereNearestMainRailwayStation}
          </div>
        </div>
        <div className="font-medium text-[14px] mt-3">Things to do</div>
        <div className="grid sm:grid-cols-4 grid-cols-3 text-[10px] mt-3">
          <div className="text-center">
            <div className="sm:w-[116px] w-[88px] h-[88px] mx-auto object-cover">
              <img
                src={thingsToDoOneImageURL}
                className="rounded-md w-full h-full "
                alt={`${thingsToDoOneName}`}
              />
            </div>
            <p className="truncate mt-2">{thingsToDoOneName}</p>
          </div>
          <div className="text-center">
            <div className="sm:w-[116px] w-[88px] h-[88px] mx-auto object-cover">
              <img
                src={thingsToDoTwoImageURL}
                className="rounded-md w-full h-full "
                alt={`${thingsToDoTwoName}`}
              />
            </div>
            <p className="truncate mt-2">{thingsToDoTwoName}</p>
          </div>
          <div className="text-center sm:block hidden">
            <div className="sm:w-[116px] w-[88px] h-[88px] mx-auto object-cover">
              <img
                src={thingsToDoThreeImageURL}
                className="rounded-md w-full h-full "
                alt={`${thingsToDoThreeName}`}
              />
            </div>
            <p className="truncate mt-2">{thingsToDoThreeName}</p>
          </div>
          <div className="p-3">
            <p className="sm:text-[32px] text-xl text-[#787878]">10+</p>
            <a href="#" className="text-[#787878] text-[10px] underline">
              more things to do
            </a>
          </div>
        </div>
        <div className="w-full  mx-auto my-5">
          <button className="flex justify-center w-[222px] mx-auto px-4 items-center  text-xs rounded-md h-[30px] bg-[#1ED760]">
            <p>Explore packages</p>
            <span className="ml-1">
              <MdArrowRightAlt className="text-[15px]" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExploreCultureCard;
