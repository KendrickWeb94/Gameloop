/* eslint-disable react/no-unescaped-entities */
 import Topics from "../Components/Topics";
import { gamer } from "../assets/images";
import { IoStarOutline } from "react-icons/io5";

const Newsletter = () => {
  return (
    <div className="relative w-full mx-auto max-w-[93%] p-5 min-h-[100vh]">
        <div className="grid md:items-center justify-between gap-16   md:grid-cols-2 grid-cols-2">
          <div className=" max-w-[700px] h-[400px] overflow-hidden rounded-md shadow-lg shadow-red-500/45">
            <img src={gamer} alt="" className="h-[75%] object-cover w-full" />
          <div className="h-[25%] w-full  space-y-4 bg-red-500/40 p-5">
            <h1 className=" text-gray-500 uppercase nunito font-bold">12/6/2023</h1>
            <p className=" nunito text-[1.4vw] text-gray-400 font-semibold">The Decline in Game plays and Settings at an all time high</p>
          </div>
          </div>
          <div className=" space-y-3">
            <div className=" p-3 bg-red-500/10 rounded-3xl gap-4 nunito flex items-center text-xl font-medium">
           <span className=" smooth animate-spin">
            <IoStarOutline />
            </span>   Top Topics
            </div>
          <Topics  topic=" Explore the advancements in gaming technology over time, from the early days of arcade machines and home consoles to modern-day high-performance "/>
          <Topics  topic="  Analyze the rise and fall of gaming trends such as specific genres (e.g., platformers, first-person shooters, battle royale), gaming platforms (e.g., consoles, PC, mobile), and gaming phenomena (e.g., eSports, livestreaming, virtual reality)"/>
          <Topics  topic="Investigate the economic factors behind the growth and decline of the gaming industry. This could include examining sales data, "/>
          <Topics  topic="  Explore the cultural significance of gaming and how it has evolved over time. Discuss how gaming has influenced popular culture"/>
       
        
          </div>
        </div>
    </div>
  );
};

export default Newsletter;
