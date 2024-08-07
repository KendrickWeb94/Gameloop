import React, { useState } from "react";
import { useEffect } from "react";
import { heroimg } from "../assets/images";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ResponsiveHeader from "./ResponsiveHeader";
import { MenuIcon, X } from "lucide-react";

const Header = () => {
  const [togglenav, settogglenav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  function toggleclick() {
    settogglenav(!togglenav);
  }

  useGSAP(() => {
    gsap.fromTo(
      ".header",
      { y: -999, delay: 1, opacity: 0, duration: 2, ease: "power1.inOut" },
      { y: 0, delay: 1, opacity: 1, duration: 2, ease: "power1.inOut" }
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`top-0 fixed w-full z-30 smooth from-slate-50 to-zinc-50 ${
        isScrolled ? "bg-gradient-to-r" : "bg-transparent"
      }`}
    >
      <div className="w-full header relative h-auto py-3   mx-auto max-w-[91%]">
        <div className="w-full flex items-center relative justify-between">
          <div className="logo__container text-gray-950 flex items-center gap-2">
            <img
              src={heroimg}
              alt="hero image"
              width={40}
              height={40}
              className=" -rotate-45"
            />
            <h1 className=" text-lg">GAMELOOP</h1>
          </div>
          <div className="hidden inter-md md:flex items-center gap-6">
            <Link to="/">
              <li className=" text-sm smooth list-none  hover:text-violet-600 text-gray-950">
                Home
              </li>
            </Link>
            <Link to="/routes/games">
              <li className=" text-sm smooth list-none  hover:text-violet-600 text-gray-950">
                Games
              </li>
            </Link>
            <Link to="/routes/online-streaming">
              <li className=" text-sm smooth list-none  hover:text-violet-600 text-gray-950">
                Online
              </li>
            </Link>
            <Link to="/routes/features">
              <li className=" text-sm smooth list-none  hover:text-violet-600 text-gray-950">
                Features
              </li>
            </Link>
          </div>
          <button className="flex-center hidden md:block rounded-3xl px-5  bg-gradient-to-r inter-md from-violet-600 to-indigo-500 text-white text-sm p-3 smooth hover:bg-gradient-to-tl">
            Get Started
          </button>
          <div
            className="menu_button ds:block md:hidden smooth"
            onClick={toggleclick}
          >
            <div
              className={`text-gray-950 smooth ${
                togglenav ? "hidden" : "block"
              }`}
            >
              <MenuIcon />
            </div>
            <div
              className={`text-gray-950 smooth ${
                togglenav ? "block" : "hidden"
              }`}
            >
              <X />
            </div>
            <div className={`w-auto z-50 ${togglenav ? "block" : "hidden"}`}>
              <ResponsiveHeader />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
