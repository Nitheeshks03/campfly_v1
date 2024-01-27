import { Divider } from "@mantine/core";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiSurferVan } from "react-icons/gi";
import { IoTicketOutline } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";

function PreviewBooking({customPackage}) {
  return (
    <div>
      <div className="grid grid-cols-2 w-1/2 mt-5">
        <div className="leading-10">
          <p>Name</p>
          <p>Email ID</p>
          <p>Phone Number</p>
        </div>
        <div className="leading-10">
          <p>: Smith John</p>
          <p>: smithjohn@gmail.com</p>
          <p>: 1234567890</p>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <div>Destination: {customPackage?.destinationName}</div>
        <Divider orientation="vertical" />
        <div>Package:{customPackage?.packageType}</div>
        <Divider orientation="vertical" />

        <div>{customPackage?.packagePriceType}</div>
      </div>
      <div className="flex justify-between mt-10">
        <div>Start date: {customPackage?.startDate}</div>
        <Divider orientation="vertical" />
        <div>End date: {customPackage?.endDate}</div>
        <Divider orientation="vertical" />

        <div>Headcount : {customPackage?.adultsNum}</div>
      </div>
      <div className="flex mt-10">
        <div className="w-1/2 border-r">
          <p className="text-xl font-medium">{customPackage?.destinationName}: {customPackage?.packageType}</p>
          <div className="mt-2">
            <span className="text-[#F00]">-25%</span>
            <span className="line-through opacity-70 text-xs">₹ 15000</span>
            <span className="">₹ 11250 x {customPackage?.adultsNum} Adults</span>
          </div>
          <p className="text-xl font-medium mt-2">Total - ₹ 22500 </p>
          <p>(No additional taxes or booking fees)</p>
          <p className="text-xs text-[#1ED760] mt-2">
            Offers applied : 1 offer available
          </p>
        </div>
        <div className="flex flex-col w-1/3 items-start mx-auto mt-3 mb-5">
            <h3 className="font-medium">What' included</h3>
          <div className="flex items-center mt-3">
            <GiSandsOfTime className="opacity-70 text-[16px]" />
            <p className="ml-2">5 days / 6 nights</p>
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
      </div>
    </div>
  );
}

export default PreviewBooking;
