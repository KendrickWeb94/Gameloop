/* eslint-disable react/no-unescaped-entities */
import { gamer } from "../assets/images";

const Newsletter = () => {
  return (
    <div className="relative w-full p-5 min-h-[100vh]">
       <div className=" absolute  right-0  ">
          <div className=" bg-red-500/60 w-[200px]  absolute h-[200px] blur-[210px]"></div>
          <div className=" bg-yellow-400 w-[400px] absolute h-[200px] blur-[210px]"></div>
        </div>
      <div className="z-50  flex items-center flex-col justify-center max-w-[1100px] w-full">
        <div className="flex flex-wrap  items-center flex-row-reverse gap-20 justify-between">
          <div className="relative overflow-hidden rounded-md h-[400px] max-w-[300px]">
            <img src={gamer} className=" object-cover h-full w-full " />
            <div className=" absolute bottom-0 flex items-center justify-between bg-black p-4 w-full">
            <h3 className="uppercas mushin font-bold text-white">
            OUR LATEST BLOG 
            </h3>
            <p className="poppins text-xs text-zinc-300">
            Feb 18th 2023
            </p>
            </div>
          </div>
          <div>
            <h3 className="uppercase text-2xl nunito font-semibold">
              The
                <span className=" text-red-500/45 font-extrabold">"BIG"</span>
              Decline in gameplay and graphics
            </h3>
            <p className="mt-5 nunito max-w-[400px] text-sm">
              In the ever-evolving landscape of the gaming industry, the
              sentiment that "games aren't just good anymore" encapsulates the
              transformative journey that digital entertainment has.. Players
              now find themselves not just navigating through games but stepping
              into a dynamic, interconnected metaverse where social
              interactions, entertainment, and gaming seamlessly converge
            </p>
            <p className="mt-5 nunito max-w-[400px] float-end text-sm">
              In the ever-evolving landscape of the gaming industry, the
              sentiment that "games aren't just good anymore" encapsulates the
              transformative journey that digital entertainment has u
            </p>
            <p className="mt-24 nunito max-w-[400px]  text-sm">
              In the ever-evolving landscape of the gaming industry, the
              sentiment that "games aren't just good anymore" encapsulates the
              transformative journey that digital entertainment has u
            </p>
          </div>
        </div>
        <p className="mt-5 nunito max-w-[1000px]  text-sm">
       
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
