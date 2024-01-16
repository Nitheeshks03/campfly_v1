import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
function Footer() {
  return (
    <div className="bg-black p-[75px] flex">
      <div className="md:w-1/3 w-1/2 border-r border-white">
        <img src="/images/logo-white.png" alt="white-logo" />
        <p className="text-white mt-2">
          Embark on a journey where every step is a story, and every destination
          is a chapter waiting to be written
        </p>
        <div className="flex justify-around w-[100px] mt-5">
          <FaInstagram className="text-white text-2xl" />
          <AiOutlineFacebook className="text-white text-2xl" />
          <AiOutlineYoutube className="text-white text-2xl" />
        </div>
      </div>
      <div className="md:w-1/3 w-1/2 flex text-white md:p-10 pl-5 md:border-r border-white">
        <div className="w-full leading-10">
          <p>Home</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
        <div className="w-full leading-10">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
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
              className="bg-black border border-white border-r-0 rounded-md h-full"
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
