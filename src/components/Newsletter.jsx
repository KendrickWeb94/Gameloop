import React from "react";
import { newsperson } from "../assets/images";
import { ThumbsUpIcon } from "lucide-react";

const Newsletter = () => {
  return (
    <div className=" relative mx-auto h-auto my-24 w-full min-h-[40vh] flex items-center justify-center max-w-[91%]">
      <div className="rounded-md flex items-center justify-center px-5 flex-wrap w-full bg-gradient-to-r  from-violet-600/25 to-indigo-600 h-36/10">
        <img src={newsperson} alt="" className="self-start z-20 " />
        <div className="space-y-4 py-4">
          <h1 className=" text-white text-3xl inter-b ">
            Subscribe to ur Newsletter
          </h1>
          <p className=" text-white text-sm inter-rg max-w-lg">
            Subscribe to our newsletter for daily news and updates that we offer
            to our users
          </p>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter your Email"
            className="w-full border-0 outline-none p-3 rounded-md shadow-2xl"
          />
          <button className="  flex items-center justify-center gap-4 w-[200px] text-sm inter-md bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-md p-3">
            <p className=" inter-md text-lg">Subscribe</p> <ThumbsUpIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
