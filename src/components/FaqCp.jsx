import React from "react";
import { BsDot } from "react-icons/bs";
export const FaqCp = () => {
  return (
    <div className="space-y-4 mb-4">
      {/* <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
          <h2 className="font-semibold text-[0.875rem] ">{title}</h2>

          <svg
            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>
        <div className="flex mt-4">
          <span className="pl-3 mr-1  text-gray-700 text-[1.2rem] ">
            <BsDot />
          </span>
          <p className=" pr-4 leading-relaxed text-gray-700">
           {des}
          </p>
        </div>
        <div className="flex mt-4">
          <span className="pl-3 mr-1  text-gray-700 text-[1.2rem] ">
            <BsDot />
          </span>
          <p className=" pr-4 leading-relaxed text-gray-700">
          {des2}
          </p>
        </div>
       
      </details> */}
      {/* Inclusions and exclusions */}
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
          <h2 className="font-semibold text-[0.875rem] ">
            Inclusions and exclusions
          </h2>
          <svg
            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>
        <div className=" py-4  bg-gray-50 rounded-t-lg mt-[0.1rem]">
          <h1 className="font-semibold pl-5 text-[0.9rem]">Included</h1>

          <div className="flex mt-1 items-center">
            <span className="pl-3 mr-1  text-gray-700 text-[1.4rem] ">
              <BsDot />
            </span>
            <p className=" pr-4 leading-relaxed text-gray-700 text-[0.8rem]">
              5 days or nights
            </p>
          </div>
          <div className="flex mt-1 items-center">
            <span className="pl-3 mr-1  text-gray-700 text-[1.4rem] ">
              <BsDot />
            </span>
            <p className=" pr-4 leading-relaxed text-gray-700 text-[0.8rem]">
              Food
            </p>
          </div>
          <div className="flex mt-1 items-center">
            <span className="pl-3 mr-1  text-gray-700 text-[1.4rem] ">
              <BsDot />
            </span>
            <p className=" pr-4 leading-relaxed text-gray-700 text-[0.8rem]">
              Transportaion
            </p>
          </div>
          <div className="flex mt-1 items-center ">
            <span className="pl-3 mr-1  text-gray-700 text-[1.4rem] ">
              <BsDot />
            </span>
            <p className=" pr-4 leading-relaxed text-gray-700 text-[0.8rem]">
              All ticke
            </p>
          </div>
          <div className="flex mt-1 items-center ">
            <span className="pl-3 mr-1  text-gray-700 text-[1.4rem] ">
              <BsDot />
            </span>
            <p className=" pr-4 leading-relaxed text-gray-700 text-[0.8rem]">
              Bottled water
            </p>
          </div>
        </div>
        <div className=" py-4 bg-gray-50  rounded-b-lg ">
          <h1 className="font-semibold pl-5 text-[0.8rem]">Included</h1>

          <div className="flex mt-1 ">
            <span className=" pl-3 mr-1  text-gray-700 text-[1.4rem] ">
              <BsDot />
            </span>
            <p className=" pr-4 leading-relaxed text-gray-700 text-[0.8rem]">
              Extra fee of 500 Rupess will added for pick-up, (2km-8km)
            </p>
          </div>
          <div className="flex mt-1 items-center">
            <span className="pl-3 mr-1  text-gray-700 text-[1.4rem] ">
              <BsDot />
            </span>
            <p className=" pr-4 leading-relaxed text-gray-700 text-[0.8rem]">
              Extra activity tickets
            </p>
          </div>
          <div className="flex mt-1 items-center ">
            <span className="pl-3 mr-1  text-gray-700 text-[1.4rem] ">
              <BsDot />
            </span>
            <p className=" pr-4 leading-relaxed text-gray-700 text-[0.8rem]">
              Guide
            </p>
          </div>
        </div>
      </details>
      {/* FQA */}
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
          <h2 className="font-semibold text-[0.875rem] ">FAQ</h2>

          <svg
            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>
        <div className=" py-4  bg-gray-50 rounded-lg mt-[0.1rem]">
          <h1 className="font-semibold pl-5 text-[0.9rem]">
            Which attractions will i visit with half sunrise tour on top
            station, Munnar (By Munnar info)?{" "}
          </h1>

          <div className="flex mt-1 items-start">
            <span className="pl-3 mr-1  text-gray-700 text-[1.4rem] ">
              <BsDot />
            </span>
            <p className=" pr-4 leading-relaxed text-gray-700 text-[0.8rem]">
              During this experience, places you will visit include:
            </p>
          </div>
          <div className="flex mt-1 items-center">
            <span className="pl-3 mr-1  text-gray-700 text-[1.4rem] ">
              <BsDot />
            </span>
            <p className=" pr-4 leading-relaxed text-gray-700 text-[0.8rem]">
              Top Station
            </p>
          </div>
          <div className="flex mt-1 items-start">
            <span className="pl-3 mr-1  text-gray-700 text-[1.4rem] ">
              <BsDot />
            </span>
            <p className=" pr-4 leading-relaxed text-gray-700 text-[0.8rem]">
              Discover and book Half Day Sunrise Tour on Top Station, Munnar (
              By Munnar Info) on campfly
            </p>
          </div>
          <div className="flex mt-1 items-start ">
            <span className="pl-3 mr-1  text-gray-700 text-[1.4rem] ">
              <BsDot />
            </span>
            <p className=" pr-4 leading-relaxed text-gray-700 text-[0.8rem]">
              How much is Half Day Sunrise Tour on Top Station, Munnar ( By
              Munnar Info)?{" "}
            </p>
          </div>
          <div className="flex mt-1 items-start ">
            <span className="pl-3 mr-1  text-gray-700 text-[1.4rem] ">
              <BsDot />
            </span>
            <p className=" pr-4 leading-relaxed text-gray-700 text-[0.8rem]">
              Half Day Sunrise Tour on Top Station, Munnar ( By Munnar Info)
              price starts from ₹ 6,266.10. Discover and book Half Day Sunrise
              Tour on Top Station, Munnar ( By Munnar Info) on campfly{" "}
            </p>
          </div>
          <h1 className="font-semibold pl-5 text-[0.9rem] mt-3">
            What is the Half Day Sunrise Tour on Top Station, Munnar ( By Munnar
            Info) cancellation policy?{" "}
          </h1>

          <div className="flex mt-1 items-start">
            <span className="pl-3 mr-1  text-gray-700 text-[1.4rem] ">
              <BsDot />
            </span>
            <p className=" pr-4 leading-relaxed text-gray-700 text-[0.8rem]">
              Half Day Sunrise Tour on Top Station, Munnar ( By Munnar Info)
              cancellation policy: For a full refund, cancel at least 24 hours
              in advance of the start date of the experience. Discover and book
              Half Day Sunrise Tour on Top Station, Munnar ( By Munnar Info) on
              campfly
            </p>
          </div>
          <h1 className="font-semibold pl-5 text-[0.9rem] mt-3">
            Which company provides Half Day Sunrise Tour on Top Station, Munnar
            ( By Munnar Info)?{" "}
          </h1>

          <div className="flex mt-1 items-start pb-4">
            <span className="pl-3 mr-1  text-gray-700 text-[1.4rem] ">
              <BsDot />
            </span>
            <p className=" pr-4 leading-relaxed text-gray-700 text-[0.8rem]">
              Half Day Sunrise Tour on Top Station, Munnar ( By Munnar Info) is
              hosted by Munnar Info. Read reviews, discover additonal
              experiences or contact Munnar Info on campfly. Discover and book
              Half Day Sunrise Tour on Top Station, Munnar ( By Munnar Info) on
              campfly
            </p>
          </div>
        </div>
      </details>
      {/* Cancellation policy */}
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
          <h2 className="font-semibold text-[0.875rem] ">
            Cancellation policy
          </h2>

          <svg
            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>
        <div className=" py-4 pt-4  bg-gray-50 rounded-lg mt-[0.1rem]">
          {/* <h1 className="font-semibold pl-5 text-[0.9rem]">  </h1> */}

          <div className="flex mt-1 items-start">
            <span className="pl-3 mr-1  text-gray-700 text-[1.4rem] ">
              <BsDot />
            </span>
            <p className=" pr-4 leading-relaxed text-gray-700 text-[0.8rem]">
              For a full refund, cancel at least 24 hours in advance of the
              start date of the experience.
            </p>
          </div>
        </div>
      </details>
      {/* Help */}
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
          <h2 className="font-semibold text-[0.875rem] ">Help</h2>
          <svg
            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>
        <div className=" py-4  bg-gray-50 rounded-lg mt-[0.1rem]">
          {/* <h1 className="font-semibold pl-5 text-[0.9rem]">  </h1> */}
          <div className="flex mt-1 items-start">
            <span className="pl-3 mr-1  text-gray-700 text-[1.4rem] ">
              <BsDot />
            </span>
            <p className=" pr-4 leading-relaxed text-gray-700 text-[0.8rem]">
              If you have questions about this tour or need help making your
              booking, we’d be happy to help. Just call the number below and
              reference the product code: 139397P17
            </p>
          </div>
          <div className="flex mt-1 items-start">
            <span className="pl-3 mr-1  text-gray-700 text-[1.4rem] ">
              <BsDot />
            </span>
            <p className=" pr-4 leading-relaxed text-gray-700 text-[0.8rem]">
              Call: 9087 6543 21
            </p>
          </div>
        </div>
      </details>
    </div>
  );
};
