import { RatingBar } from "../components/RatingBar";
import {
    ButtonC,
    ButtonD,
    Para,
    Heading,
    ImageS,
    Faqs,
    StayPlace,
    ActivitiesToDo,
    SimilarPackages,
  } from "../components/ButtonC";
import { FaqCp } from "../components/FaqCp";
import { ImgGridTemplate } from "../components/ImgGridTemplate";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
//-----------------------icons import starting----------------
import {
    FaAngleLeft,
    FaAngleRight,
    FaInfoCircle,
    FaRegMoneyBillAlt,
    FaStar,
    FaWifi,
  } from "react-icons/fa";
  import { GoChevronDown } from "react-icons/go";
  import { CiBookmark, CiCalendar } from "react-icons/ci";
  import { IoMdBed } from "react-icons/io";
  import { IoFastFoodOutline, IoPeopleOutline } from "react-icons/io5";
  import { FiShare2 } from "react-icons/fi";
  import {
    MdOutlineCleaningServices,
    MdOutlineFoodBank,
    MdOutlineStar,
    MdOutlineWorkspacePremium,
    MdPeopleOutline,
  } from "react-icons/md";
  import { TbHeartCheck } from "react-icons/tb";
  import { BsPeople } from "react-icons/bs";
  import { GiCommercialAirplane, GiSandsOfTime } from "react-icons/gi";
  import { LuKeyRound, LuTrain } from "react-icons/lu";
  import { PiTicketThin, PiVanLight } from "react-icons/pi";
  //-----------------------icons import End----------------
function IndividualTripPage() {
    return (
        <>
        <Navbar/>
          <div>
            <div>
              <div className=" h-[20.7rem] w-[100%] bg-[url('./pexels-oliver.svg')]  bg-no-repeat bg-cover sm:hidden">
                <div className=" flex justify-between px-3 pt-4">
                  <img width={45} src="./back-icon.svg" alt="" />
                  <div className="flex gap-x-3 ">
                    <img width={38} src="./save-icon.svg" alt="" />
                    <img width={38} src="./share-icon.svg" alt="" />
                  </div>
                </div>
                <div className="mt-[6rem]">
                  <div className="flex justify-between items-center mx-[1rem]">
                    <FaAngleLeft className="invert cursor-pointer" />
                    <FaAngleRight className="invert cursor-pointer" />
                  </div>
                  <div className="mt-[7.6rem] flex justify-end mr-[1rem] ">
                    <p className="text-white rounded-xl bg-[#ffffff3e] text-[0.8rem] py-1 px-2">
                      1/7
                    </p>
                  </div>
                </div>
                {/* img numbering */}
                {/* <div></div> */}
              </div>
            </div>
            <div className="border-b-2 pb-[2rem] mt-4 md:pb-1">
              {/*----------------------Main Heading section staring-----------------------------*/}
              <div className="max-w-[93%] mx-auto">
                <div>
                  {/*------------------Main heading----------------------*/}
                  <div className="lg:flex lg:items-center  ">
                    <div className="lg:mr-[3rem] xl:mr-[8rem]">
                      <h1 className="text-[1.3rem] lg:text-[1.2rem] xl:text-[1.6rem] text-gray-950 font-semibold">
                        6 Night 5 Days Honeymoon Package From Munnar
                      </h1>
                      <div>
                        {/*----------------------------Rating section end----------------------------*/}
                        <div className="flex items-center my-2">
                          <FaStar className="w-[2rem] mb-1 ml-[-0.4rem]" />
                          <div className="mr-2">
                            <h1 className="font-bold text-[1.2rem]">
                              4.5/5{" "}
                              <span className="text-gray-500 text-[1rem] font-normal mx-1">
                                (1k+ ratings){" "}
                              </span>{" "}
                            </h1>
                          </div>
                          <div>
                            <FaInfoCircle className="text-red-300 cursor-pointer" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*----------------------------Rating section end----------------------------*/}
                    <div className="flex flex-wrap gap-1">
                      {/* Button import */}
                      <ButtonC
                        bgColor={"bg-[#53e80d8f]"}
                        icon={<MdOutlineWorkspacePremium />}
                        title={"Premium"}
                      />
                      <ButtonC
                        bgColor={"bg-[#ddfacf] "}
                        icon={<TbHeartCheck />}
                        title={"Honeymoon"}
                      />
                      <ButtonC
                        bgColor={"bg-[#161edd26] "}
                        icon={<BsPeople />}
                        title={"Member price available"}
                      />
                      <div className="hidden lg:visible lg:flex items-center text-[1.3rem]">
                        <CiBookmark />
                        <FiShare2 />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block sm:my-[1rem] lg:my-[1rem]">
                  <ImgGridTemplate />
                </div>
              </div>
              {/*----------------------Main Heading section End-----------------------------*/}
            </div>
    
            <div className="lg:flex max-w-[93%] mx-auto mt-3">
              <div className="lg:w-[55%]">
                {/*---------------------- Get there [Buttons] section Staring----------------------- */}
                {/* Heading Component import */}
                <Heading title={"Get there"} />
                <div className="flex flex-wrap gap-2 my-[0.5rem]">
                  {/* Button import */}
                  <ButtonD
                    icon={<GiCommercialAirplane />}
                    title={"Cochin International Airport"}
                  />
                  <ButtonD icon={<LuTrain />} title={"Ernakulam Junction"} />
                </div>
                {/*---------------------- What's Included section Staring----------------------- */}
                <div className="my-[1rem]">
                  {/* Heading Component import */}
                  <Heading title={"What's included"} />
                  <div className="flex flex-wrap gap-x-1 ">
                    <Para icon={<GiSandsOfTime />} title={"5 days of 6 nights"} />
                    <Para icon={<MdOutlineFoodBank />} title={"Food included"} />
                    <Para icon={<PiVanLight />} title={"Transportaion"} />
                    <Para icon={<PiTicketThin />} title={"All Tickets"} />
                  </div>
                </div>
                {/*---------------------- What's Included section End----------------------- */}
    
                {/*---------------------- What you'll see section Staring----------------------- */}
                <div className="">
                  {/* Heading Component import */}
                  <Heading title={"What you'll see"} />
                  <div className="flex  gap-x-2 overflow-x-auto mt-1">
                    <ImageS
                      img={"./pexels-oliver3.svg"}
                      title={"Lorem ipsum dolor sit amet consectetur."}
                    />
                    <ImageS
                      img={"./pexels-oliver3.svg"}
                      title={"Lorem ipsum dolor sit amet consectetur."}
                    />
                    <ImageS
                      img={"./pexels-oliver3.svg"}
                      title={"Lorem ipsum dolor sit amet consectetur."}
                    />
                    <ImageS
                      img={"./pexels-oliver3.svg"}
                      title={"Lorem ipsum dolor sit amet consectetur."}
                    />
                    <ImageS
                      img={"./pexels-oliver3.svg"}
                      title={"Lorem ipsum dolor sit amet consectetur."}
                    />
                  </div>
                </div>
                {/*---------------------- What you'll see section End----------------------- */}
    
                {/*----------------------Itinerary (div) days Faqs section Staring----------------------- */}
                <div>
                  {/* Heading Component import */}
                  <Heading title={"Itinerary"} />
                  <Faqs title={"Lorem ipsum dolor sit"} Days={"Day 1"} />
                  <Faqs title={"Lorem ipsum dolor sit"} Days={"Day 2"} />
                  <Faqs title={"Lorem ipsum dolor sit"} Days={"Day 3"} />
                  <Faqs title={"Lorem ipsum dolor sit"} Days={"Day 4"} />
                  <Faqs title={"Lorem ipsum dolor sit"} Days={"Day 5"} />
                  <Faqs title={"Lorem ipsum dolor sit"} Days={"Day 6"} />
                  {/* Download box (btn) */}
                  <div className="hidden lg:block py-[0.1rem]">
                  <div className="flex justify-between border-2 rounded-3xl items-center my-1 px-[1rem] py-[0.8rem]">
          <div className="">
            <h1 className="text-[0.8rem] font-semibold">Want to read it later?</h1>
            <p className="text-[0.7rem] text-gray-500">Download this tour's PDF brochure and start tour planning offline</p>
          </div>
         
          <button className="bg-[#1ed760] w-[16%] py-[0.3rem] rounded-lg my-2 text-[0.7rem] font-semibold text-black">
           Download
          </button>
        </div>
                  </div>
                </div>
                {/*----------------------Itinerary (div) days Faqs section End----------------------- */}
    
                {/*----------------------Where you'll stay Boxs(Images) section Staring----------------------- */}
    
                <div className="my-3 pb-2">
                  {/* Heading Component import */}
                  <Heading title={"Where you'll stay"} />
                  <div className="flex gap-x-2 overflow-auto mt-2 pb-2">
                    <StayPlace
                      title="Lorem ipsum dolor sit amet consectetur."
                      img={"./whereYouStayimg.svg"}
                      icon={<MdOutlineStar />}
                    />
                    <StayPlace
                      title="Lorem ipsum dolor sit amet consectetur."
                      img={"./whereYouStayimg.svg"}
                      icon={<MdOutlineStar />}
                    />
                    <StayPlace
                      title="Lorem ipsum dolor sit amet consectetur."
                      img={"./whereYouStayimg.svg"}
                      icon={<MdOutlineStar />}
                    />
                    <StayPlace
                      title="Lorem ipsum dolor sit amet consectetur."
                      img={"./whereYouStayimg.svg"}
                      icon={<MdOutlineStar />}
                    />
                    <StayPlace
                      title="Lorem ipsum dolor sit amet consectetur."
                      img={"./whereYouStayimg.svg"}
                      icon={<MdOutlineStar />}
                    />
                  </div>
                  <div></div>
                </div>
                {/*----------------------Where you'll stay Boxs(Images) section End----------------------- */}
    
                {/*----------------------Activities to-do Boxs(Images) section Staring----------------------- */}
                <div className="my-3 pb-2">
                  {/* Heading Component import */}
                  <Heading title={"Activities to-do"} />
                  <div className="flex gap-x-2 overflow-auto  mt-2 pb-2 ">
                    <ActivitiesToDo
                      title="Half day sunrise tour on top station"
                      img={"ActivitiesToDoimg.svg"}
                      price={"1,388.65"}
                      oldPrice={"1,600.65"}
                      name="Wildlife Watching"
                    />
                    <ActivitiesToDo
                      title="Half day sunrise tour on top station"
                      img={"ActivitiesToDoimg.svg"}
                      price={"1,388.65"}
                      oldPrice={"1,600.65"}
                      name="Wildlife Watching"
                    />
                    <ActivitiesToDo
                      title="Half day sunrise tour on top station"
                      img={"ActivitiesToDoimg.svg"}
                      price={"1,388.65"}
                      oldPrice={"1,600.65"}
                      name="Wildlife Watching"
                    />
                    <ActivitiesToDo
                      title="Half day sunrise tour on top station"
                      img={"ActivitiesToDoimg.svg"}
                      price={"1,388.65"}
                      oldPrice={"1,600.65"}
                      name="Wildlife Watching"
                    />
                    <ActivitiesToDo
                      title="Half day sunrise tour on top station"
                      img={"ActivitiesToDoimg.svg"}
                      price={"1,388.65"}
                      oldPrice={"1,600.65"}
                      name="Wildlife Watching"
                    />
                    <ActivitiesToDo
                      title="Half day sunrise tour on top station"
                      img={"ActivitiesToDoimg.svg"}
                      price={"1,388.65"}
                      oldPrice={"1,600.65"}
                      name="Wildlife Watching"
                    />
                    <ActivitiesToDo
                      title="Half day sunrise tour on top station"
                      img={"ActivitiesToDoimg.svg"}
                      price={"1,388.65"}
                      oldPrice={"1,600.65"}
                      name="Wildlife Watching"
                    />
                    <ActivitiesToDo
                      title="Half day sunrise tour on top station"
                      img={"ActivitiesToDoimg.svg"}
                      price={"1,388.65"}
                      oldPrice={"1,600.65"}
                      name="Wildlife Watching"
                    />
                  </div>
                </div>
                {/*----------------------Activities to-do section End----------------------- */}
    
                {/*----------------(Inclusions) and (FAQ) (cancellation policy) (help) section staring*/}
                <div>
                  <FaqCp />
                </div>
                {/*----------------(Inclusions) and (FAQ) (cancellation policy) (help) section end*/}
                <div>
                  {/* Heading Component import */}
                  <Heading title="Travelers reviews" />
                  <div className="flex mt-3 items-center flex-wrap">
                    <div className="flex  items-center rounded-full bg-[#53e80d33] py-[0.5rem] px-[0.5rem]">
                      <MdOutlineStar className=" text-[1rem]" />
                      <h1 className="font-semibold pl-2 text-[0.9rem]">4.5/5</h1>
                    </div>
                    <p className="px-3 text-[0.8rem] text-gray-800">98 reviews</p>
                    <a href="" className="text-[0.7rem]  text-blue-700 ">
                      Read all reviews
                    </a>
                  </div>
                </div>
    
                {/*--------------------------Travelers reviews Bar staring-----------------------*/}
                <div className=" w-full md:flex ">
                  <div className="w-full md:w-[50%] md:mr-8">
                    <RatingBar
                      title="Cleanliness"
                      rating={"4.5"}
                      icon={<MdOutlineCleaningServices />}
                    />
                    <RatingBar
                      title="Staff"
                      rating={"4.0"}
                      icon={<MdPeopleOutline />}
                    />
                    <RatingBar
                      title="Facilities"
                      rating={"4.8"}
                      icon={<LuKeyRound />}
                    />
                    <RatingBar title="Comfort" rating={"4.9"} icon={<IoMdBed />} />
                  </div>
                  <div className="w-full md:w-[50%]">
                    <RatingBar
                      title="Value for money"
                      rating={"4.0"}
                      icon={<FaRegMoneyBillAlt />}
                    />
                    <RatingBar title="Location" rating={"4.5"} icon={<FaWifi />} />
                    <RatingBar
                      title="Free WiFi"
                      rating={"4.0"}
                      icon={<IoFastFoodOutline />}
                    />
                    <RatingBar title="Food" rating={"4.5"} icon={<LuKeyRound />} />
                  </div>
                </div>
              </div>
              {/*--------------------------Travelers reviews Bar End-----------------------*/}
    
              {/*----------------------------------price box only for laptop size--------------------------------------  */}
              <div className="hidden lg:block  lg:w-[55%] lg:ml-2 relative">
              <div className="sticky top-0">
                <div className="border-2 rounded-xl px-4 ">
                  <p className="my-2 text-[0.7rem] text-gray-500">
                    Starting form <span>₹1500</span>
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-red-600 font-semibold">
                        ₹11250{" "}
                        <span className="text-gray-500 font-normal text-[0.9rem]">
                          per adult
                        </span>
                      </p>
                    </div>
                    <div className="border-[0.1px] rounded-2xl border-[red]">
                      <h1 className="py-[0.2rem] px-[0.5rem] text-[red] font-semibold">
                        25% Off
                      </h1>
                    </div>
                  </div>
                  <p className="text-[0.6rem]  mb-[0.5rem]">
                    EMI available from 1200/month{" "}
                    <span className="text-blue-700">View plans</span>
                  </p>
                </div>
                <div className=" rounded-2xl border-2 mt-3">
                  <div className="max-w-[90%] mx-auto">
                    <div className="border-b-[0.1px]">
                      <h1 className="text-center text-sm font-semibold my-3">
                        Book your spot
                      </h1>
                    </div>
                    <div className="flex items-center ] border-b-[0.1px] gap-x-3 py-5 mb-[0.8rem]">
                      <div className="border-[1.3px] border-gray-300 rounded-lg py-[0.2rem] px-[1rem] flex items-center ">
                        <p className="text-sm">Start date</p>{" "}
                        <span className="pl-2 text-[1.2rem]">
                          <CiCalendar />
                        </span>
                      </div>
                      <div className="border-[1.3px] border-gray-300 text-gray-500 rounded-lg py-[0.2rem] px-[1rem] flex items-center bg-gray-100">
                        <p className="text-sm">End date</p>{" "}
                        <span className="pl-2 text-[1.2rem]">
                          <CiCalendar />
                        </span>
                      </div>
                      <div className="border-[1.3px] border-gray-300 rounded-lg py-[0.2rem] px-[0.5rem] flex items-center ">
                        <span className="pr-1 text-gray-600 ">
                          <IoPeopleOutline />
                        </span>
                        <p className="text-sm">2</p>{" "}
                        <span className="pl-1 text-[1.3rem] text-gray-400">
                          <GoChevronDown />
                        </span>
                      </div>
                    </div>
                    <div className="border-b-[0.1px]">
                      <h1 className="text-sm font-semibold">
                        Munnar: Honey moon Premium package
                      </h1>
                      <p className="text-[0.9rem] mt-[0.5rem] ">
                        {" "}
                        <span className="text-red-500">-25% </span>{" "}
                        <span className="text-gray-400 text-[0.8rem] pl-1">₹</span>
                        <span className=" text-[0.8rem] line-through pr-1 text-gray-400">
                          {" "}
                          15000{" "}
                        </span>{" "}
                        ₹11250 x 2 Adults{" "}
                      </p>
                      <h1 className="text-[1.5rem] font-semibold">Total ₹ 22500</h1>
                      <p className="text-[0.8rem] mt-1.4 mb-0">
                        (No additional taxes or booking fees)
                      </p>
                      <p className="text-[0.7rem] text-red-400 mt-[0.1rem] mb-3">
                        offers applied: 1 offer available
                      </p>
                    </div>
                    <div className="my-2 text-center">
                      <p className="text-[0.7rem] text-center text-gray-600">
                        Members can save uo to 25%. <span className="text-blue-600"> Sign up </span>  to get it.
                      </p>
                      <button className="bg-[#1ed760] w-[80%] py-2 rounded-lg my-3 font-semibold" >Book Now</button>
                      <p className="text-[0.7rem] text-gray-600">if you are unhappy with the package costs or require any modifications, please contact a trip expert our <span className="text-blue-600">customer service </span>team.</p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              {/*----------------------price box only for laptop size end----------------*/}
            </div>
            {/*------------------------similar packages section ----------------------------*/}
            <div className="max-w-[93%] mx-auto mt-3">
              {/* similar packages */}
              <div className="my-3 pb-2">
                {/* Heading Component import */}
                <Heading title={"Similar Packages"} />
                <div className="flex gap-x-2 overflow-auto mt-2 pb-2">
                  <SimilarPackages
                    title="6 Night 5 Days Honeymoon Package From Munnar"
                    img={"Similarpackagesimg.svg"}
                    price={"1,388.65"}
                    oldPrice={"1,600.65"}
                  />
                  <SimilarPackages
                    title="6 Night 5 Days Honeymoon Package From Munnar"
                    img={"Similarpackagesimg.svg"}
                    price={"1,388.65"}
                    oldPrice={"1,600.65"}
                  />
                  <SimilarPackages
                    title="6 Night 5 Days Honeymoon Package From Munnar"
                    img={"Similarpackagesimg.svg"}
                    price={"1,388.65"}
                    oldPrice={"1,600.65"}
                  />
                  <SimilarPackages
                    title="6 Night 5 Days Honeymoon Package From Munnar"
                    img={"Similarpackagesimg.svg"}
                    price={"1,388.65"}
                    oldPrice={"1,600.65"}
                  />
                  <SimilarPackages
                    title="6 Night 5 Days Honeymoon Package From Munnar"
                    img={"Similarpackagesimg.svg"}
                    price={"1,388.65"}
                    oldPrice={"1,600.65"}
                  />
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </>
      );
}

export default IndividualTripPage