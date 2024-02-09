import React from "react";

//-------------------- Reting Bar starting----------------
//-------------------- Reting Bar Components----------------
export const RatingBar = ({ rating , icon ,title}) => {
  // ratingBar function 
  function ratingToPercentage(rating) {
    // the rating is within the valid range
    if (rating < 0 || rating > 5) {
      // console.error("Rating must be between 0 and 5");
      return null;
    }
    // Convert rating to percentage
    let percentage = (rating / 5) * 100;
    return percentage;
  }
  let percentage = ratingToPercentage(rating);
  return (
    // rating bar components
    <div className="my-4">
      <div className="flex justify-between my-2">
      <div className="flex items-center gap-x-1">
          <span>{icon}</span>
        <p className=" font-semibold text-[0.8rem] text-gray-900">{title}</p>
      </div>
        <span className="text-sm font-medium text-gray-900 pr-3">{rating}</span>
      </div>
      <div className="flex items-center mb-3">
        <div className="w-full bg-gray-200 rounded h-1 me-2">
          <div className="bg-black h-1 rounded" style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
    </div>
  );
};
//-------------------- Reting Bar End----------------
