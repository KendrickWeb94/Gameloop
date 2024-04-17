import Profiles from "../Components/Profiles";
import { demon, user1 } from "../assets/images";

import { useState } from "react";

const Testimonials = () => {
  const [isDemonProfile, setDemonProfile] = useState(true);

  const handleCarouselClick = () => {
    // Toggle between Demon and Eric profiles
    setDemonProfile((prevValue) => !prevValue);
  };

  return (
    <div className=" min-h-[100vh] w-full bg-red-400/30 flex relative justify-center items-center  flex-col">
      <div className="w-full max-w-[1100px] f">
        <div className=" absolute translate-y-[10rem]  translate-x-[20rem]">
          <div className=" bg-red-500/60 w-[200px]  absolute h-[200px] blur-[210px]"></div>
          <div className=" bg-yellow-400 w-[100px] absolute h-[200px] blur-[210px]"></div>
        </div>
        {isDemonProfile ? (
          <Profiles
            image={demon}
            name="DemonTruth4kLast"
            comment="just what i need, this is amazing like everything was massive and i enjoy the graphics keep it up Gameloop you should also do more on the speed it lags sometimes but after all said and done its really good"
            date="JUNE 3RD 2023"
          />
        ) : (
          <Profiles
            image={user1}
            name="EricHualAssult"
            comment="this so good, like I've never seen anything like it in my life i spent my whole on this website , am using PC so the feeling is just something else, keep up the good work GAMELOOP!"
            date="MAY 25TH 2023"
          />
        )}

        <div className="flex items-center cursor-pointer justify-center grid-cols-6 mt-20 gap-6">
        
        
          <span
            className="w-3 h-3 hover:w-8 hover:bg-red-500/45 transition-all ease-in-out delay-700 duration-700  rounded-full backdrop-bg"
            onClick={handleCarouselClick}
          ></span>
          <span
            className="w-3 h-3 hover:w-8 hover:bg-red-500/45 transition-all ease-in-out delay-700 duration-700   rounded-full backdrop-bg"
            onClick={handleCarouselClick}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
