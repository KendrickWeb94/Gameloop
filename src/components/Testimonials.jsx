import React from "react";
import { user1, user2, user3, user4, user5, user6 } from "../assets/images";

const Testimonials = () => {
  return (
    <div className="content">
        <div className="py-6 w-full flex-col flex items-center justify-center">
        <h1 className="pb-8 md:max-w-md text-balance text-center inter-b ds:text-4xl bg-clip-text text-transparent bg-gradient-to-tl from-violet-600 to-indigo-600 sm:text-5xl ">
          What Our Beloved Users said
        </h1>
        </div>
      <div className=" items-center justify-center grid grid-cat-2 ">
        <div className="rounded-md border-[0.5px] border-gray-500/25 p-4 shadow-xl ds:w-full smooth hover:scale-y-95  xl:w-[280px] h-auto">
          <p className="leading-6 text-sm text-gray-700 inter-rg ">
            i want to really say "goodos" to the creators of this website damn
            this is just superb, please keep the good work up
          </p>
          <div className="py-4 flex items-center justify-between w-full">
            <img
              src={user5}
              alt="user image"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="">
              <h1 className="inter-b text-sm">Evil-Rabbit99</h1>
              <p className="inter-md text-gray-500 text-sm">12th June 2023</p>
            </div>
          </div>
        </div>
        <div className="rounded-md border-[0.5px] border-gray-500/25 p-4 shadow-xl ds:w-full smooth hover:scale-y-95  xl:w-[280px] h-auto">
          <p className="leading-6 text-sm text-gray-700 inter-rg ">
            indeed its breathtaking , especially the online version there's no
            lagging or any kind of slow down during gaming time
          </p>
          <div className="py-4 flex items-center justify-between w-full">
            <img
              src={user6}
              alt="user image"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="">
              <h1 className="inter-b text-sm">Hector Simpson</h1>
              <p className="inter-md text-gray-500 text-sm">
                16th Auguast 2023
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-md border-[0.5px] border-gray-500/25 p-4 shadow-xl ds:w-full smooth hover:scale-y-95  xl:w-[280px] h-auto">
          <p className="leading-6 text-sm text-gray-700 inter-rg ">
            i'd bet my life on this. its sooo good . am just simply excited to
            see what comes, so estathic and beautiful
          </p>
          <div className="py-4 flex items-center justify-between w-full">
            <img
              src={user2}
              alt="user image"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="">
              <h1 className="inter-b text-sm">GamingGurl00</h1>
              <p className="inter-md text-gray-500 text-sm">19th June 2023</p>
            </div>
          </div>
        </div>
        <div className="rounded-md border-[0.5px] border-gray-500/25 p-4 shadow-xl ds:w-full smooth hover:scale-y-95  xl:w-[280px] h-auto">
          <p className="leading-6 text-sm text-gray-700 inter-rg ">
            all i got to say? this is so hot, never seen a gaming website like
            this. its just dope and next level cant wait for the metaverse
          </p>
          <div className="py-4 flex items-center justify-between w-full">
            <img
              src={user3}
              alt="user image"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="">
              <h1 className="inter-b text-sm">GhostHunter</h1>
              <p className="inter-md text-gray-500 text-sm">12th June 2023</p>
            </div>
          </div>
        </div>
        <div className="rounded-md border-[0.5px] border-gray-500/25 p-4 shadow-xl ds:w-full smooth hover:scale-y-95  xl:w-[280px] h-auto">
          <p className="leading-6 text-sm text-gray-700 inter-rg ">
            feels like am back to them old times were things were simple but
            still works, this site has it all, the creators are deeply insane
          </p>
          <div className="py-4 flex items-center justify-between w-full">
            <img
              src={user4}
              alt="user image"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="">
              <h1 className="inter-b text-sm">BradSniperFps</h1>
              <p className="inter-md text-gray-500 text-sm">
                12th September 2023
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-md border-[0.5px] border-gray-500/25 p-4 shadow-xl ds:w-full smooth hover:scale-y-95  xl:w-[280px] h-auto">
          <p className="leading-6 text-sm text-gray-700 inter-rg ">
            woah i mean , its so amazing and  its something we gamers have always wanted and now
            its here, nice christmas gift santa
          </p>
          <div className="py-4 flex items-center justify-between w-full">
            <img
              src={user1}
              alt="user image"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="">
              <h1 className="inter-b text-sm">GhostHunter</h1>
              <p className="inter-md text-gray-500 text-sm">12th June 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
