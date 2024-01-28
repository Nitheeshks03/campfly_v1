import { Divider } from "@mantine/core";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiSurferVan } from "react-icons/gi";
import { IoTicketOutline } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";

function PreviewBooking({ customPackage, contactDetails,FinalPricePerAdult,FinalBookingPriceTotal }) {
  const bookingDetails={
    formType:"quickBookings",
    destinationName:customPackage?.destinationName,
    destinationMetaData:customPackage?.destinationMetaData,
    selectedPackage:customPackage?.selectedPackage,
    packagePriceType:customPackage?.packagePriceType,
    startDate:customPackage?.startDate,
    endDate:customPackage?.endDate,
    adultsNum:customPackage?.adultsNum,
    firstName:contactDetails?.firstName,
    lastName:contactDetails?.lastName,
    phoneNumber:contactDetails?.phoneNumber,
    FinalBookingPriceTotal,
    FinalPricePerAdult,
  }
  const handleBooking = async () => {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby-0gcvcfQBWzBIzxRttcd8xOFoKRPwCvrRuggLKTe9GjToXJzU2-SZdJCLqW0tBbz_Eg/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingDetails),
        }
      );
    } catch (error) {
      console.error("Error sending POST request:", error);
    }
  };
  return (
    <div>
      <div className="grid grid-cols-2 w-1/2 mt-5">
        <div className="leading-10">
          <p>Name</p>
          <p>Email ID</p>
          <p>Phone Number</p>
        </div>
        <div className="leading-10">
          <p>
            : {contactDetails?.firstName}+{contactDetails?.lastName}
          </p>
          <p>: {contactDetails?.email}</p>
          <p>: {contactDetails?.phoneNumber}</p>
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
          <p className="text-xl font-medium">
            {customPackage?.destinationName}: {customPackage?.packageType}
          </p>
          <div className="mt-2">
            <span className="text-[#F00]">-25%</span>
            <span className="line-through opacity-70 text-xs">₹ 15000</span>
            <span className="">
              ₹ 11250 x {customPackage?.adultsNum} Adults
            </span>
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
      <div className="max-w-[520px] h-[63px] mx-auto">
        <button onClick={handleBooking} className="w-full h-full bg-[#1ED760] rounded-[10px] font-medium">
          Confirm booking
        </button>
      </div>
    </div>
  );
}

export default PreviewBooking;
