import { IoFastFoodOutline } from "react-icons/io5";
import { GiSurferVan } from "react-icons/gi";
import { IoTicketOutline } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";
import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import ContactForm from "./ContactForm.jsx";
import PreviewBooking from "./PreviewBooking.jsx";
import BookingSuccess from "./BookingSuccess.jsx";
import { IoMdClose } from "react-icons/io";
import { Divider } from "@mantine/core";

function BookingModal({ handleBookingModalClose, bookingData }) {
  const [stepper, setStepper] = useState(false);
  const [active, setActive] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState(null);

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
                description="Create an account"
              ></Stepper.Step>
              <Stepper.Step label="Second step" description="Verify email">
                <ContactForm />
              </Stepper.Step>
              <Stepper.Step label="Final step" description="Get full access">
                <PreviewBooking />
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
              <Button variant="default" onClick={nextStep}>
                Next step
              </Button>
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
              <div >
                <p className="text-xl font-medium">{bookingData?.destinationName}</p>
                <p>{bookingData?.destinationMetaData}</p>

              </div>
              {bookingData?.memberPriceAvailable == "Yes" && (
                <div className="w-[160px] h-[25px] flex items-center justify-center px-4 text-[10px] rounded-[10px] bg-[rgba(30,215,96,0.37)]">
                  <p>Member price available</p>
                </div>
              )}
            </div>
            <div className="sm:flex grid grid-cols-2 sm:flex-row flex-col mt-10 mdl:w-[60%] w-full justify-between">
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
            <div className="sm:flex  mdl:w-[70%] w-full mt-4 mdl:justify-between ">
              <div className="bg-[#1ED760] border drop-shadow-lg text-center rounded-xl  py-2 px-4">
                <p className="font-medium">Premium package</p>
                <p className="text-xs">₹ 11250 per adult</p>
              </div>
              <div className="border drop-shadow-lg text-center rounded-xl  py-2 px-4">
                <p className="font-medium">Mid range package</p>
                <p className="text-xs">₹ 11250 per adult</p>
              </div>
              <div className="border drop-shadow-lg text-center rounded-xl  py-2 px-4">
                <p className="font-medium">Budget package</p>
                <p className="text-xs">₹ 11250 per adult</p>
              </div>
            </div>
            <div>
              <p>start and end date </p>
            </div>
            <hr />
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
            <hr />
            <div className="flex w-full mt-5">
              <div className="sm:w-1/2 sm:border-r">
                <p className="text-xl font-medium">
                  {bookingData?.destinationName}: {selectedPackage && `${selectedPackage} package`}
                </p>
                <div className="mt-2">
                  <span className="text-[#F00]">-25%</span>
                  <span className="line-through opacity-70 text-xs">
                    {bookingData?.originalPrice}
                  </span>
                  <span className="">
                    ₹ {bookingData?.offerPrice}x 2 Adults
                  </span>
                </div>
                <p className="text-xl font-medium mt-2">
                  Total - {bookingData?.offerPrice * 2}{" "}
                </p>
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
              Members can save up to 2.5%.{" "}
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
              modifications, please contact a trip expert from our{" "}
              <span className="text-[#161EDD]">customer servce </span> team
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default BookingModal;
