import React from "react";

const Contact = () => {
  return (
    <div className=" my-24 w-full mx-auto container h-auto flex items-center justify-center">
      <div className="">
        <h1 className=" md:max-w-2xl text-balance text-center inter-b ds:text-4xl bg-clip-text text-transparent bg-gradient-to-tl from-violet-600 to-indigo-600 sm:text-5xl ">
          Now let Us know what you think
        </h1>
        <form action="" method="" className=" space-y-4 max-w-3xl my-10">
          <input
            type="text"
            name="name"
            id=""
            placeholder="Enter your username"
            className="w-full border-0 outline-none p-3 rounded-md shadow-2xl"
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter your Email"
            className="w-full border-0 outline-none p-3 rounded-md shadow-2xl"
          />
          <textarea
            placeholder="Enter Your Message "
            className="p-3 w-full rounded-md shadow-2xl outline-none border-0"
          />
          <input type="submit" value="Now Blast Off" className="w-full outline-none text-white rounded-md hover:bg-gradient-to-t smooth h-12 bg-gradient-to-l from-violet-600 to-indigo-600 " />
        </form>
      </div>
    </div>
  );
};

export default Contact;
