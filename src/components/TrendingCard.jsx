import { CiTimer } from "react-icons/ci";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiSurferVan } from "react-icons/gi";
import { IoTicketOutline } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";
import { IoMdStar } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { BsFillLightningChargeFill } from "react-icons/bs";

function TrendingCard({
  dayAndNightCount,
  destinationMetaData,
  destinationName,
  discountRate,
  entryTicket,
  foodDetail,
  idForTrendingGetaway,
  imageUrl,
  memberPriceAvailable,
  noOfRating,
  offerPrice,
  originalPrice,
  rating,
  transportDetail,
  premiumRate,
  budgetRate,
  midRangeRate,
  handleBookingModalOpen
}) {
  const handleQuickBook = () => {
    const packageData = {
      dayAndNightCount,
      destinationMetaData,
      destinationName,
      discountRate,
      entryTicket,
      foodDetail,
      idForTrendingGetaway,
      imageUrl,
      memberPriceAvailable,
      noOfRating,
      offerPrice,
      originalPrice,
      rating,
      transportDetail,
      premiumRate,
      budgetRate,
      midRangeRate,
    };
    handleBookingModalOpen(packageData);
  };
  return (
    <div className="w-[308px] mx-auto border rounded-2xl p-2">
      <div className="cover w-[290px] h-[210px] relative">
        <img
          src={imageUrl}
          className="w-full h-full rounded-[10px]"
          alt={`Trending Getaway - ${destinationName}`}
        />
        {memberPriceAvailable === "Yes" && (
          <div className="bg-[#E8AB0D] absolute bottom-2 right-2 w-[140px] flex justify-center items-center h-[20px] text-[10px] rounded-xl">
            member price available
          </div>
        )}
      </div>
      <div className="w-full mt-3">
        <div>
          <p className="font-medium text-xl">{destinationName}</p>
        </div>
        <div className="flex w-full justify-between">
          <div className="opacity-70 text-xs w-[150px]">
            {destinationMetaData}
          </div>
          <div className="flex w-[140px] justify-end items-center">
            <IoMdStar />
            <div className="text-xs">{`${rating}/5`}</div>
            <div className="flex items-center text-xs opacity-70">
              ({noOfRating} ratings)
              <IoIosInformationCircleOutline />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-3" />
      <div className="grid grid-cols-2 gap-[10px] pl-5 text-[10px]">
        <div className="flex items-center">
          <GiSandsOfTime className="opacity-70 text-[16px]" />
          <p className="ml-2">{dayAndNightCount}</p>
        </div>
        <div className="flex items-center">
          <IoFastFoodOutline className="opacity-70 text-[16px]" />
          <p className="ml-2">{foodDetail}</p>
        </div>
        <div className="flex items-center">
          <GiSurferVan className="opacity-70 text-[16px]" />
          <p className="ml-2">{transportDetail}</p>
        </div>
        <div className="flex items-center">
          <IoTicketOutline className="opacity-70 text-[16px]" />
          <p className="ml-2">{entryTicket}</p>
        </div>
      </div>
      <hr className="mt-3" />
      <div className="flex items-center p-5">
        <div className="flex items-center">
          <p className="opacity-70">From</p>
          <p className="ml-2 text-2xl font-medium">{`₹${offerPrice}`}</p>
          <p className="opacity-70 line-through ml-2">{`₹${originalPrice}`}</p>
        </div>
        {discountRate && (
          <div className="border border-[#FF0000] ml-2 text-[#FF0000] w-[66px] h-[27px] flex items-center justify-center  rounded-[17px] text-center text-xs font-medium">
            {`${discountRate}% off`}
          </div>
        )}
      </div>
      <div className="flex justify-center mb-3">
        <button onClick={handleQuickBook} className="w-[230px] h-[33px] text-xs justify-center flex items-center  p-2 rounded-[10px] bg-[#1ED760]">
          Quick Book
          <span>
            <BsFillLightningChargeFill />
          </span>
        </button>
      </div>
    </div>
  );
}

export default TrendingCard;
