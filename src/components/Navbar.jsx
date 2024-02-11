import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleIsOpen = () => {
    setIsOpen(true);
  };

  const handleIsClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div
        className={`h-[80px] fixed w-full font-sans px-[80px] md:flex hidden justify-between items-center z-[110] ${
          scrolled ? "bg-white" : ""
        }`}
      >
        <div className="z-50 cursor-pointer" onClick={() => navigate("/")}>
          <img src="/images/campfly_logo.png" alt="campfly" />
        </div>
        <div className="flex md:w-[50%] w-[40%] md:justify-end gap-[27px] items-center">
          <p className="z-50">Honeymoon</p>
          <p className="z-50">Family/Friends</p>
          <p className="z-50">Solo</p>
          <div>
            <button className="z-50 w-[120px] h-[40px] bg-[#1ED760] rounded-[10px]">
              Sign in
            </button>
          </div>
        </div>
      </div>
      <div
        className={`flex md:hidden w-full px-5 fixed z-[20] justify-between items-center ${
          scrolled ? "bg-white" : ""
        }`}
      >
        <div className="sm:w-[205px] w-[160px] sm:h-[45px]">
          <img
            src="/images/campfly_logo.png"
            className="w-full h-full"
            alt="campfly"
          />
        </div>
        {isOpen ? (
          <div className="z-50 p-3" onClick={handleIsClose}>
            <IoMdClose className="text-4xl" />
          </div>
        ) : (
          <div className="z-50 p-3" onClick={open}>
            <RxHamburgerMenu className="text-4xl" />
          </div>
        )}
      </div>
      <Drawer
        radius="md"
        size="md"
        className="text-2xl leading-10"
        opened={opened}
        onClose={close}
      >
        <p>Home</p>
        <p>Family</p>
        <p>Friends</p>
        <p>Solo</p>
      </Drawer>
    </>
  );
}

export default Navbar;
