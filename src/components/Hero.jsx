import React from "react";
import { user1, user3, user4, user5, user6 } from "../assets/images";
import { ArrowRight } from "lucide-react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="pt-[8rem] w-full relative mx-auto max-w-[91%] min-h-[600px]">
      <div className="absolute  inset-0 w-[200px] h-[300px]  bg-gradient-to-r from-violet-600 to-indigo-600 blur-[200px] rounded-2xl"></div>
      <div className="absolute ds:hidden md:block  right-0 bottom-0 w-[200px] h-[300px]  bg-gradient-to-r from-violet-600 to-indigo-600 blur-[200px] rounded-2xl"></div>
      <div className="w-full flex items-center  justify-center gap-6">
        <div className=" md:max-w-4xl md:text-center py-3 space-y-6">
          <p className="text-violet-600 logo__container w-full uppercase text-sm">
            3d games for free
          </p>
          <h1 className="inter-md xxs:text-4xl ds:text-3xl sm:text-6xl text-balance leading-[4rem] text-gray-950">
            All The{" "}
            <span className="inter-eb text-violet-600">
              <ReactTyped
                strings={[
                  "Latest",
                  "Amazing",
                  "Spontaneous",
                  "3D Rendered",
                  "Breathtaking",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              ></ReactTyped>{" "}
            </span>
            Games <br className=" mt-2 hidden md:block"></br> in One place
          </h1>
          <p className=" text-gray-700 inter-rg text-base leading-8">
            enjoy all your games in one website for free , just access the
            internet, we also have online and offline games and the latest new
            games for your awesome experience
          </p>
          <div className="flex items-center w-full md:justify-center gap-5">
            <p className=" text-sm text-gray-950">
              More than <span className="text-violet-600 inter-b">50K</span>{" "}
              Users
            </p>
            <div className=" w-[0.5px] h-6 bg-violet-600"></div>
            <div className="-space-x-2 flex items-center">
              <img
                src={user1}
                alt="user of gameloop"
                className=" w-7  h-7  rounded-full object-cover"
              />
              <img
                src={user6}
                alt="user of gameloop"
                className=" w-7  h-7  rounded-full object-cover"
              />
              <img
                src={user5}
                alt="user of gameloop"
                className=" w-7  h-7  rounded-full object-cover"
              />
              <img
                src={user4}
                alt="user of gameloop"
                className=" w-7  h-7  rounded-full object-cover"
              />
              <img
                src={user3}
                alt="user of gameloop"
                className=" w-7  h-7  rounded-full object-cover"
              />
              <div className=" w-7  h-7  rounded-full object-cover bg-violet-600 text-xs text-white flex-center">
                +50
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <button className="flex gap-3 md:rounded-3xl items-center md:w-[250px] justify-center rounded-sm w-full  bg-gradient-to-r inter-md from-violet-600 to-indigo-500 text-white text-sm p-3 smooth hover:bg-gradient-to-tl">
              <p> Get Started</p>{" "}
              <p>
                <ArrowRight />
              </p>
            </button>
          </div>
        </div>
        {/*   <div className=" max-w-2xl lg:block hidden">
          <img src={hero2} alt="gaming pad" className=" w-[900px]"/>
        </div>*/}
      </div>
    </div>
  );
};

export default Hero;
