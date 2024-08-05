import React from "react";
import { heroimg } from "../assets/images";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".header",
      { y: -999, delay: 1, opacity: 0, duration: 2, ease: "power1.inOut" },
      { y: 0, delay: 1, opacity: 1, duration: 2, ease: "power1.inOut"  }
    );
  }, []);

  return (
    <div className="w-full header h-auto py-2 mx-auto max-w-[91%]">
      <div className="w-full flex items-center justify-between">
        <div className="logo__container text-white flex items-center gap-2">
          <img
            src={heroimg}
            alt="hero image"
            width={40}
            height={40}
            className=" -rotate-45"
          />
          <h1 className=" text-lg">GAMELOOP</h1>
        </div>
        <div className="flex inter-md items-center gap-6">
          <Link to="/">
            <li className=" text-sm smooth list-none  hover:text-violet-600 text-white">
              Home
            </li>
          </Link>
          <Link to="/routes/games">
            <li className=" text-sm smooth list-none  hover:text-violet-600 text-white">
              Games
            </li>
          </Link>
          <Link to="/routes/online-streaming">
            <li className=" text-sm smooth list-none  hover:text-violet-600 text-white">
              Online
            </li>
          </Link>
          <Link to="/routes/features">
            <li className=" text-sm smooth list-none  hover:text-violet-600 text-white">
              Features
            </li>
          </Link>
        </div>
        <button className="flex-center rounded-3xl px-5  bg-gradient-to-r inter-md from-violet-600 to-indigo-500 text-white text-sm p-3 smooth hover:bg-gradient-to-tl">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
