import React from "react";
import { mobile } from "../assets/images";

const DownloadApp = () => {
  return (
    <div className="my-20 relative mx-auto w-full max-w-[91%] pt-5 py-3 h-auto">
       <div className="absolute  inset-0 w-[200px] h-[300px]  bg-gradient-to-r from-violet-600 to-indigo-600 blur-[200px] rounded-2xl"></div>
      <div className="w-full flex items-center justify-center h-full">
      
        <div className=" items-center flex justify-between gap-4">
          <div className="space-y-6">
            <h1 className=" bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 inter-b text-3xl">
              Download The App
            </h1>
          <div className="flex-wrap flex w-full gap-6">
          <div className="flex max-w-lg flex-col text-white gap-2">
                <h1 className=" text-lg  text-violet-600 inter-md">Works On IOS and Andriod Devices</h1>
                <p className=" text-sm inter-rg leading-6 text-gray-700">
                  You can download the app if you own an ios and andriod device like iphone , samsung and more ,download and play with ease and surf different different games we have in stock
                </p>
            </div>
            <div className="flex max-w-lg flex-col text-white gap-2">
                <h1 className=" text-lg text-violet-600  inter-md">Works On PC and Desktop</h1>
                <p className=" text-sm inter-rg leading-6 text-gray-700">
                  You can download the app if you own an laptop device like HP , macbook for the website and more ,download and play with ease and surf different different games we have in stock
                </p>
            </div>
            <div className="flex max-w-lg flex-col text-white gap-2">
                <h1 className=" text-lg text-violet-600  inter-md">Works On PC and Desktop</h1>
                <p className=" text-sm inter-rg leading-6 text-gray-700">
                  You can download the app if you own an laptop device like HP , macbook for the website and more ,download and play with ease and surf different different games we have in stock
                </p>
            </div>
          </div>
          </div>
            <img src={mobile} alt="" className="hidden w-[250px]" />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
