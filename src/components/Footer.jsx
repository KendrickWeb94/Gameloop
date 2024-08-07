import React from "react";
import { heroimg } from "../assets/images";
import { Link } from "react-router-dom";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";
import { Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="h-auto max-w-[91%] w-full mt-32 mx-auto relative">
      <div className="grid-cat-2 grid gap-4">
        <div className="">
          <div className="logo__container text-gray-950 flex items-center gap-2">
            <img
              src={heroimg}
              alt="hero image"
              width={60}
              height={60}
              className=" -rotate-45"
            />
            <h1 className=" text-lg">GAMELOOP</h1>
          </div>
          <div className=" max-w-sm">
            <p className=" text-gray-700 inter-rg text-sm leading-6">
              enjoy all your games in one website for free , just access the
              internet, we also have online and offline games and the latest new
              games for your awesome experience
            </p>
          </div>
        </div>
        <div className="">
          <h1 className=" inter-b py-3 text-xl">Quick Links</h1>
          <div className="flex inter-md flex-col ">
            <Link to="/">
              <li className=" text-sm smooth w-auto hover:translate-x-4 hover:text-violet-600 p-2 py-3 rounded-md list-none   text-gray-700">
                Home
              </li>
            </Link>
            <Link to="/routes/games">
              <li className=" text-sm smooth w-auto hover:translate-x-4 hover:text-violet-600 p-2 py-3 rounded-md list-none text-gray-700">
                Games
              </li>
            </Link>
            <Link to="/routes/online-streaming">
              <li className=" text-sm smooth w-auto hover:translate-x-4 hover:text-violet-600 p-2 py-3 rounded-md list-none  text-gray-700">
                Online
              </li>
            </Link>
            <Link to="/routes/features">
              <li className=" text-sm smooth w-auto hover:translate-x-4 hover:text-violet-600 p-2 py-3 rounded-md list-none   text-gray-700">
                Features
              </li>
            </Link>
          </div>
        </div>
        <div className="">
          <h1 className=" inter-b py-3 text-xl">Services</h1>
          <div className="flex inter-md flex-col ">
            <Link to="#/">
              <li className=" text-sm smooth w-auto hover:translate-x-4 hover:text-violet-600 p-2 py-3 rounded-md list-none   text-gray-700">
                Online Gaming
              </li>
            </Link>
            <Link to="#/routes/games">
              <li className=" text-sm smooth w-auto hover:translate-x-4 hover:text-violet-600 p-2 py-3 rounded-md list-none text-gray-700">
                Game Pass
              </li>
            </Link>
            <Link to="#/routes/online-streaming">
              <li className=" text-sm smooth w-auto hover:translate-x-4 hover:text-violet-600 p-2 py-3 rounded-md list-none  text-gray-700">
                Game Sales
              </li>
            </Link>
            <Link to="#/routes/features">
              <li className=" text-sm smooth w-auto hover:translate-x-4 hover:text-violet-600 p-2 py-3 rounded-md list-none   text-gray-700">
                Virtual Reality
              </li>
            </Link>
            <Link to="#/routes/features">
              <li className=" text-sm smooth w-auto hover:translate-x-4 hover:text-violet-600 p-2 py-3 rounded-md list-none   text-gray-700">
                Game Updates
              </li>
            </Link>
            <Link to="#/routes/features">
              <li className=" text-sm smooth w-auto hover:translate-x-4 hover:text-violet-600 p-2 py-3 rounded-md list-none   text-gray-700">
                Online Gaming Streaming
              </li>
            </Link>
          </div>
        </div>
        <div className="">
          <h1 className=" inter-b py-3 text-xl">Social Media</h1>
          <div className="flex inter-md flex-col ">
            <div className="flex items-center text-violet-600 gap-4">
              <FaFacebook />
              <FaWhatsapp />
              <FaDiscord />
              <Github size={17} />
              <FaInstagram />
            </div>
            <p className=" py-5 text-sm max-w-lg">
              Subscribe to our newsletter for daily news and updates that we
              offer to our users
            </p>
          </div>
        </div>
      </div>
      <hr className="my-6"></hr>
      <div className="w-full flex justify-between items-center py-3 gap-4">
        <div className="text-gray-700 inter-md text-sm">
          &copy; {currentYear} GAMELOOP. All rights reserved.
        </div>
        <div className="flex-wrap flex gap-3 text-gray-600 inter-md ">
          <p>Privacy Policy</p>
          <p>Cookies and Info </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
