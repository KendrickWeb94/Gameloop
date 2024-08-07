import React from "react";
import { meta } from "../assets/images";
import { ArrowUpAz } from "lucide-react";
import { BsRocketTakeoff } from "react-icons/bs";

const MetaVerse = () => {
  return (
    <div className="content relative">
      <div className="absolute  inset-0 w-[200px] h-[300px]  bg-gradient-to-r from-violet-600 to-indigo-600 blur-[300px] rounded-2xl"></div>
      <div className="absolute ds:hidden md:block  right-0 bottom-0 w-[200px] h-[300px]  bg-gradient-to-r from-violet-600 to-indigo-600 blur-[300px] rounded-2xl"></div>
      <div className="w-full lg:h-screen flex items-center justify-center">
        <div className="w-full flex items-center justify-between gap-4 flex-wrap">
          <div className="max-w-lg">
            <img src={meta} alt="" className="w-full z-20 h-full" />
          </div>
          <div className="lg:max-w-lg ds:w-full">
            <div className=" space-y-6">
              <h1 className=" inter-b ds:text-4xl bg-clip-text text-transparent bg-gradient-to-tl from-violet-600 to-indigo-600 sm:text-5xl ">
                Dive into our world of VR Gaming
              </h1>
              <p className="text-sm inter-md text-gray-600 leading-6">
                We newly introduced VR gaming into our system, if you have a VR
                Device you can connect to our servers and enjoy the games that
                you loved while you were in normal mode, exciting right? and it
                comes at a very cheap price, so why not jump in and take the
                ride to VR station
              </p>
              <button className=" rounded-r-md rounded-l-3xl ds:w-full lg:w-56 p-3 bg-violet-600 h-12 flex items-center gap-3">
                <div className=" h-10 w-10 rounded-full bg-black flex-center text-white">
                  <ArrowUpAz />
                </div>
                <p className="text-white inter-md flex items-center gap-3">
                  <p>Lift Off</p>{" "}
                  <BsRocketTakeoff className=" animate-bounce" />{" "}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaVerse;
