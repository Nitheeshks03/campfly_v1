import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  return (
    <div className="bg-black font-sans sm:p-[75px] p-5 sm:flex sm:flex-row flex-col">
      <div className="md:w-1/3 sm:w-1/2 sm:text-left text-center w-full sm:border-r border-white">
        <div className="z-50 sm:w-[205px] sm:mx-0 mx-auto w-[160px] sm:h-[45px]">
          <img
            src="/images/logo-white.png"
            className="w-full h-full"
            alt="campfly"
          />
        </div>
        <p className="text-white mt-2">
          Embark on a journey where every step is a story, and every destination
          is a chapter waiting to be written
        </p>
        <div className="flex justify-around items-center mx-auto sm:mx-0 sm:my-0 my-5 sm:w-[100px] w-[180px] mt-5">
          <FaInstagram className="text-white text-3xl" />
          <FaFacebookSquare className="text-white text-3xl" />
          <AiFillYoutube className="text-white text-[38px]" />
        </div>
      </div>
      <div className="md:w-1/3 sm:w-1/2 w-full flex text-white md:p-10 pl-5 md:border-r border-white">
        <div className="w-full leading-10">
          <p>Home</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
        <div className="w-full leading-10">
          <p onClick={()=> navigate('/policies')} className="cursor-pointer">Privacy Policy</p>
          <p onClick={()=> navigate('/policies')} className="cursor-pointer">Terms & Conditions</p>
          <p>FAQ</p>
        </div>
      </div>
      <div className="w-1/3 md:block hidden text-white p-10">
        <p className="text-xl">
          Unleash the magic of exploration straight to your inbox
        </p>
        <div className="flex h-[48px] mt-3">
          <div className="h-full ">
            <input
              type="text"
              className="bg-black border border-white border-r-0 rounded-s-md h-full"
            />
          </div>
          <div className="h-full">
            <button className="bg-[#1ED760] text-black px-4 h-full rounded-r-lg ">
              Subcribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
