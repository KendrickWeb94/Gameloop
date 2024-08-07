import React from "react";
import { gamesData } from "../constants";

import spiderman from "../assets/spiderman.jpg";
import gtav from "../assets/gta.webp";
import fifa from "../assets/fifa.webp";
import fighter from "../assets/fighter.webp";
import cyber from "../assets/cyber.jpeg"; 
import cod from "../assets/Cod.png";
import { GamepadIcon } from "lucide-react";


const HottestGames = () => {
  return (
    <div className=" w-full mx-auto max-w-[91%] h-auto min-h-[40vh] pt-6 py-[6rem] ">
      <div className="space-y-6">
        <h1 className="text-gray-950 inter-md text-3xl text-balance ">
          Hottest Trending Games
        </h1>
        <div className="grid-cat grid gap-3">
        {/*   {gamesData.map((game) => {
            <div key={game.id} id={game.id} className="h-auto flex gap-4">
              <img src={game.image} alt="" className="" />
              <p className=" text-gray-950">{game.players}</p>
            </div>
          })}*/}
          <div className="h-auto p-1 flex flex-col max-w-54  gap-4">
            <img src={spiderman} alt="" className=" h-[260px] rounded-md shadow-lg hover:-translate-y-3 smooth  object-cover " />
            <div className="flex items-center justify-between gap-5">
              <GamepadIcon className=" text-violet-600"/>
              <p className=" text-gray-950 inter-md">90+ Players</p>
            </div>
          </div>
          <div className="h-auto p-1 flex flex-col max-w-54  gap-4">
            <img src={gtav} alt="" className=" h-[260px] rounded-md shadow-lg  hover:-translate-y-3 smooth object-cover " />
            <div className="flex items-center justify-between gap-5">
              <GamepadIcon className=" text-violet-600"/>
              <p className=" text-gray-950 inter-md">390+ Players</p>
            </div>
          </div>
          <div className="h-auto p-1 flex flex-col max-w-54  gap-4">
            <img src={fifa} alt="" className=" h-[260px] rounded-md shadow-lg hover:-translate-y-3 smooth  object-cover " />
            <div className="flex items-center justify-between gap-5">
              <GamepadIcon className=" text-violet-600"/>
              <p className=" text-gray-950 inter-md">560+ Players</p>
            </div>
          </div>
          <div className="h-auto p-1 flex flex-col max-w-54  gap-4">
            <img src={cod} alt="" className=" h-[260px] rounded-md shadow-lg hover:-translate-y-3 smooth  object-cover " />
            <div className="flex items-center justify-between gap-5">
              <GamepadIcon className=" text-violet-600"/>
              <p className=" text-gray-950 inter-md">370+ Players</p>
            </div>
          </div>
          <div className="h-auto p-1 flex flex-col max-w-54  gap-4">
            <img src={cyber} alt="" className=" h-[260px] rounded-md shadow-lg hover:-translate-y-3 smooth  object-cover " />
            <div className="flex items-center justify-between gap-5">
              <GamepadIcon className=" text-violet-600"/>
              <p className=" text-gray-950 inter-md">684+ Players</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HottestGames;
