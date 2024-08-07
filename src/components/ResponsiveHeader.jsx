import React from "react";
import { Link } from "react-router-dom";

const ResponsiveHeader = () => {
  return (
    <div className=" max-w-sm  p-5 rounded-md absolute right-0  bg-gradient-to-l z-50 from-zinc-950 to-slate-900 h-auto">
      <div className="z-50">
        <div className="flex inter-md flex-col ">
          <Link to="/">
            <li className=" text-sm smooth w-full hover:bg-violet-600 p-2 py-3 rounded-md list-none   text-white">
              Home
            </li>
          </Link>
          <Link to="/routes/games">
            <li className=" text-sm smooth w-full hover:bg-violet-600 p-2 py-3 rounded-md list-none text-white">
              Games
            </li>
          </Link> 
          <Link to="/routes/online-streaming">
            <li className=" text-sm smooth w-full hover:bg-violet-600 p-2 py-3 rounded-md list-none   text-white">
              Online
            </li>
          </Link>
          <Link to="/routes/features">
            <li className=" text-sm smooth w-full hover:bg-violet-600 p-2 py-3 rounded-md list-none   text-white">
              Features
            </li>
          </Link>
        </div>
        <button className="flex-center w-[200px] mt-5 rounded-sm bg-gradient-to-r inter-md from-violet-600 to-indigo-500 text-white text-sm p-3 smooth hover:bg-gradient-to-tl">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ResponsiveHeader;
