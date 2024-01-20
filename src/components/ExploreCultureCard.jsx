import React from 'react';
import { MdArrowRightAlt } from 'react-icons/md';

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
    <div className="sm:w-[532px] w-[350px] mx-auto p-1 border rounded-xl">
      <div className="cover sm:w-[510px] sm:h-[520px] w-[340px] mx-auto mt-1  ">
        <img src={mainImageToBeDisplayed} className="w-full h-full rounded-[10px]" alt={`Explore ${placeName}`} />
      </div>
      <div className="p-2">
        <div className="mt-3">
          <p className="text-xl font-medium">
            {placeName}
            <span className="text-xs text-[#787878] ml-2">{placeNameMetaDescription}</span>
          </p>
        </div>
        <div className="mt-3">
          <p className="text-[#787878] text-[10px]">{placeBriefDescription}</p>
        </div>
        <div className="font-medium text-[14px] mt-3">Get there</div>
        <div className="flex mt-3">
          <div className="w-[100px] h-[35px] rounded-lg bg-gray-300 flex justify-center items-center  text-gray-600">
            {getThereBestSeason}
          </div>
          <div className="w-[100px] h-[35px] truncate rounded-lg bg-gray-300 flex justify-center items-center  text-gray-600 ml-3">
            {getThereNearestAirport}
          </div>
          <div className="w-[100px]  h-[35px] truncate rounded-lg bg-gray-300 flex justify-center items-center  text-gray-600 ml-3">
            {getThereNearestMainRailwayStation}
          </div>
        </div>
        <div className="font-medium text-[14px] mt-3">Things to do</div>
        <div className="grid grid-cols-4 text-[10px] mt-3">
          <div className='text-center'>
            <img src={thingsToDoOneImageURL} className='sm:w-[90px] w-[75px] h-[50px] rounded-md mx-auto' alt={`${thingsToDoOneName}`} />
            <p className="truncate mt-2">{thingsToDoOneName}</p>
          </div>
          <div className='text-center'>
            <img src={thingsToDoTwoImageURL} className='sm:w-[90px] w-[75px] h-[50px] rounded-md mx-auto' alt={`${thingsToDoTwoName}`} />
            <p className="truncate mt-2">{thingsToDoTwoName}</p>
          </div>
          <div className='text-center'>
            <img src={thingsToDoThreeImageURL} className='sm:w-[90px] w-[75px] h-[50px] rounded-md mx-auto' alt={`${thingsToDoThreeName}`} />
            <p className="truncate mt-2">{thingsToDoThreeName}</p>
          </div>
          <div>
            <p className="text-[32px] text-[#787878]">10+</p>
            <a href="#" className="text-[#787878] text-[10px] underline">
              more things to do
            </a>
          </div>
        </div>
        <div className="flex justify-center my-5">
          <button className="w-[222px] flex items-center justify-center text-xs rounded-md h-[30px] bg-[#1ED760]">
            Explore packages
            <span className="ml-1">
              <MdArrowRightAlt className="text-[15px] " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExploreCultureCard;
