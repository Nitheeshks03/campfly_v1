import { IoFastFoodOutline } from "react-icons/io5";
import { GiSurferVan } from "react-icons/gi";
import { IoTicketOutline } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";
import { MdOutlineDateRange } from "react-icons/md";
import { forwardRef, useState } from "react";
import { Stepper, Button, Group, Divider, Accordion, rem } from "@mantine/core";
import ContactForm from "./ContactForm.jsx";
import PreviewBooking from "./PreviewBooking.jsx";
import BookingSuccess from "./BookingSuccess.jsx";
import { IoMdClose } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StartDatePickerInput = forwardRef(({ value, onClick }, ref) => (
  <div
    className="border flex items-center w-[130px] h-[30px] rounded-[10px] p-2"
    onClick={onClick}
    ref={ref}
  >
    <span className="mr-2">
      <MdOutlineDateRange />
    </span>
    {value || "Start date"}
  </div>
));

const EndDatePickerInput = forwardRef(({ value, onClick }, ref) => (
  <div
    className="border flex items-center rounded-[10px] w-[130px] h-[30px] p-2"
    onClick={onClick}
    ref={ref}
  >
    <span className="mr-2">
      <MdOutlineDateRange />
    </span>
    {value || "End date"}
  </div>
));

function BookingModal({ handleBookingModalClose, bookingData }) {
  const [stepper, setStepper] = useState(false);
  const [active, setActive] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [adultsNum, setAdultsNum] = useState(1);
  const [packagePriceType, setPackagePriceType] = useState("");
  const [contactDetails, setContactDetails] = useState(null);
  const [value, setValue] = useState("premium");

  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  const handleStepperOpen = () => {
    setStepper(true);
  };
  const handleStepperClose = () => {
    setStepper(false);
  };
  const handleAdultsNum = (e) => {
    setAdultsNum(parseInt(e.target.value, 10));
  };

  const customPackage = {
    destinationName: bookingData?.destinationName,
    destinationMetaData: bookingData?.destinationMetaData,
    selectedPackage,
    packagePriceType,
    startDate: startDate ? startDate.toISOString().split("T")[0] : null,
    endDate: endDate ? endDate.toISOString().split("T")[0] : null,
    adultsNum,
  };
  const getPackageRate = () => {
    switch (packagePriceType) {
      case "Premium":
        return bookingData?.premiumRate;
      case "MidRange":
        return bookingData?.midRangeRate;
      case "Budget":
        return bookingData?.budgetRate;
      default:
        return bookingData?.offerPrice;
    }
  };
  const FinalPricePerAdult = getPackageRate();
  const total = getPackageRate() * adultsNum;

  return (
    <>
      {stepper ? (
        <>
          <div onClick={handleBookingModalClose}>
            <IoMdClose className="text-3xl absolute cursor-pointer top-0 right-0" />
          </div>
          <div className="w-full h-full p-5 border rounded-xl">
            <Stepper active={active} onStepClick={setActive}>
              <Stepper.Step
                label="First step"
                description="Customize package"
              ></Stepper.Step>
              <Stepper.Step label="Second step" description="Contact details">
                <ContactForm
                  setContactDetails={setContactDetails}
                  nextStep={nextStep}
                />
              </Stepper.Step>
              <Stepper.Step label="Final step" description="Confirm booking">
                <PreviewBooking
                  customPackage={customPackage}
                  contactDetails={contactDetails}
                  FinalPricePerAdult={FinalPricePerAdult}
                  FinalBookingPriceTotal={total}
                />
              </Stepper.Step>
              <Stepper.Completed>
                <BookingSuccess />
              </Stepper.Completed>
            </Stepper>

            <Group justify="center" mt="xl">
              {active == 1 ? (
                <Button variant="default" onClick={handleStepperClose}>
                  Back
                </Button>
              ) : (
                <Button variant="default" onClick={prevStep}>
                  Back
                </Button>
              )}
            </Group>
          </div>
        </>
      ) : (
        <>
          <div className="w-full h-max p-5 border rounded-xl">
            <div onClick={handleBookingModalClose}>
              <IoMdClose className="text-3xl absolute cursor-pointer sm:top-0 sm:right-0 top-3 right-2" />
            </div>
            <div className="flex justify-between w-full">
              <div>
                <p className="text-xl font-medium">
                  {bookingData?.destinationName}
                </p>
                <p>{bookingData?.destinationMetaData}</p>
              </div>
              {bookingData?.memberPriceAvailable == "Yes" && (
                <div className="w-[160px] h-[25px] flex items-center justify-center px-4 text-[10px] rounded-[10px] bg-[rgba(30,215,96,0.37)]">
                  <p>Member price available</p>
                </div>
              )}
            </div>
            <div className="sm:flex grid grid-cols-2 sm:flex-row flex-col mt-5 mdl:w-[60%] w-full justify-between">
              <div>
                <input
                  className="transform scale-150 checked:bg-black"
                  type="radio"
                  id="honeymoon"
                  name="packageType"
                  onChange={() => setSelectedPackage("honeymoon")}
                />
                <label className="ml-2" htmlFor="honeymoon">
                  Honeymoon package
                </label>
              </div>
              <div>
                <input
                  className="transform scale-150"
                  type="radio"
                  id="family"
                  name="packageType"
                  onChange={() => setSelectedPackage("family/friends")}
                />
                <label className="ml-2" htmlFor="family">
                  Family/Friends
                </label>
              </div>
              <div>
                <input
                  className="transform scale-150"
                  type="radio"
                  id="solo"
                  name="packageType"
                  onChange={() => setSelectedPackage("solo")}
                />
                <label className="ml-2" htmlFor="solo">
                  Solo
                </label>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-5  w-full mt-4 justify-between">
              <div
                onClick={() => setPackagePriceType("Premium")}
                className={`${
                  packagePriceType === "Premium" ? "bg-[#1ED760]" : "bg-white"
                } cursor-pointer border sm:mb-0 mb-2  drop-shadow-lg text-center rounded-xl py-2 px-4`}
              >
                <p className="font-medium">Premium package</p>
                <p className="text-xs">₹ {bookingData?.premiumRate}</p>
              </div>
              <div
                onClick={() => setPackagePriceType("MidRange")}
                className={`${
                  packagePriceType === "MidRange" ? "bg-[#1ED760]" : "bg-white"
                } cursor-pointer border sm:mb-0 mb-2  drop-shadow-lg text-center rounded-xl py-2 px-4`}
              >
                <p className="font-medium">Mid range package</p>
                <p className="text-xs">₹{bookingData?.midRangeRate} </p>
              </div>
              <div
                onClick={() => setPackagePriceType("Budget")}
                className={`${
                  packagePriceType === "Budget" ? "bg-[#1ED760]" : "bg-white"
                } cursor-pointer border sm:mb-0 mb-2 drop-shadow-lg text-center rounded-xl py-2 px-4`}
              >
                <p className="font-medium">Budget package</p>
                <p className="text-xs">₹ {bookingData?.budgetRate}</p>
              </div>
            </div>

            <div className="sm:flex grid grid-cols-2 gap-2 sm:w-[65%] items-center justify-between my-5">
              <div>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  customInput={<StartDatePickerInput />}
                />
              </div>
              <div>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  customInput={<EndDatePickerInput />}
                />
              </div>

              <div className="flex border rounded-[10px] w-[130px] h-[30px] px-2 items-center">
                <select
                  name="adults"
                  id="adults"
                  value={adultsNum}
                  onChange={handleAdultsNum}
                >
                  {[...Array(10)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1} Adult{index !== 0 && "s"}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <hr />
            <div className="sm:block hidden">
              <h3 className="font-medium mt-5">What's included</h3>
              <div className="sm:flex mdl:w-[70%] w-full sm:justify-between mt-3 mb-5 grid grid-cols-2">
                <div className="flex items-center">
                  <GiSandsOfTime className="opacity-70 text-[16px]" />
                  <p className="ml-2">{bookingData?.dayAndNightCount}</p>
                </div>
                <div className="flex items-center">
                  <IoFastFoodOutline className="opacity-70 text-[16px]" />
                  <p className="ml-2">{bookingData?.foodDetail}</p>
                </div>
                <div className="flex items-center">
                  <GiSurferVan className="opacity-70 text-[16px]" />
                  <p className="ml-2">{bookingData?.transportDetail}</p>
                </div>
                <div className="flex items-center">
                  <IoTicketOutline className="opacity-70 text-[16px]" />
                  <p className="ml-2">{bookingData?.entryTicket}</p>
                </div>
              </div>
            </div>

            <div className="sm:hidden block">
              <Accordion>
                <Accordion.Item value="photos">
                  <Accordion.Control>
                    <p className="font-medium"> What's included</p>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <div className="sm:flex w-full sm:justify-between grid grid-cols-2">
                      <div className="flex items-center">
                        <GiSandsOfTime className="opacity-70 text-[16px]" />
                        <p className="ml-2">{bookingData?.dayAndNightCount}</p>
                      </div>
                      <div className="flex items-center">
                        <IoFastFoodOutline className="opacity-70 text-[16px]" />
                        <p className="ml-2">{bookingData?.foodDetail}</p>
                      </div>
                      <div className="flex items-center">
                        <GiSurferVan className="opacity-70 text-[16px]" />
                        <p className="ml-2">{bookingData?.transportDetail}</p>
                      </div>
                      <div className="flex items-center">
                        <IoTicketOutline className="opacity-70 text-[16px]" />
                        <p className="ml-2">{bookingData?.entryTicket}</p>
                      </div>
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>

            <hr />
            <div className="flex w-full mt-5">
              <div className="sm:w-1/2 sm:border-r">
                <p className="text-xl font-medium">
                  {bookingData?.destinationName}
                  {selectedPackage && `:${selectedPackage} package`}
                </p>
                <div className="mt-2">
                  <span className="text-[#F00]">-25%</span>
                  <span className="line-through opacity-70 text-xs">
                    {bookingData?.originalPrice}
                  </span>
                  <span className="">
                    ₹ {getPackageRate()}x {adultsNum} Adults
                  </span>
                </div>
                <p className="text-xl font-medium mt-2">Total - {total}</p>
                <p>(No additional taxes or booking fees)</p>
                <p className="text-xs text-[#1ED760] mt-2">
                  Offers applied : 1 offer available
                </p>
              </div>
              <div className="w-1/2 sm:block hidden pl-10">
                <p className="text-xl font-medium">Book with confidence</p>
                <p className="text-xs">Lowest price guarantee</p>
                <p className="text-[#787878] text-[10px]">
                  Can you find it cheaper? We'll repay the difference
                </p>
                <p className="text-xs">24/7 global support</p>
                <p className="text-[#787878] text-[10px]">
                  Obtain the solutions you require at the appropriate time
                </p>
                <p className="text-xs">Give us a call</p>
                <p className="text-[#787878] text-[10px]">
                  We will be pleased to assist you with your reservation, call-
                  1234567
                </p>
              </div>
            </div>
            <Divider
              my="xs"
              label="Book with confidence"
              labelPosition="center"
            />

            <div className="flex justify-between font-medium text-xs">
              <div>Lowest price guarantee</div>
              <div>24/7 global support</div>
              <div>
                Call - <span className="text-[#161EDD]">1234567890</span>
              </div>
            </div>
          </div>
          <div className="text-xs text-center my-5">
            <p>
              Members can save up to 2.5%.
              <span className="text-[#161EDD]">Sign up</span> to get it
            </p>
          </div>
          <div className="max-w-[520px] h-[63px] mx-auto">
            <button
              onClick={handleStepperOpen}
              className="w-full h-full bg-[#1ED760] rounded-[10px] font-medium"
            >
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
        </>
      )}
    </>
  );
}

export default BookingModal;
