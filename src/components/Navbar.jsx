import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(true);
  };

  const handleIsClose = () => {
    setIsOpen(false);
  };
  console.log(isOpen);
  return (
    <>
      <div className="h-[80px] mx-5   md:flex hidden justify-between items-center z-50">
        <div className="z-50">
          <img src="/images/campfly_logo.png" alt="campfly" />
        </div>
        <div className="flex lg:w-[40%] w-[40%] lg:justify-between justify-around items-center lg:px-20">
          <p className="z-50">Honeymoon</p>
          <p className="z-50">Family/Friends</p>
          <p className="z-50">Solo</p>
          <button className="z-50">Sign in</button>
        </div>
      </div>
      <div className="flex md:hidden mx-5 justify-between items-center">
        <div className="z-50 sm:w-[205px] w-[160px] sm:h-[45px]">
          <img src="/images/campfly_logo.png" className="w-full h-full" alt="campfly" />
        </div>
        {isOpen ? (
          <div className="z-50 p-3" onClick={handleIsClose}>
            <IoMdClose className="text-4xl" />
          </div>
        ) : (
          <div className="z-50 p-3" onClick={handleIsOpen}>
            <RxHamburgerMenu className="text-4xl" />
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
