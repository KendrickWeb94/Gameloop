import { arrowup, meta } from "../assets/images";

const Mataverse = () => {
  return (
    <div className="w-full   h-auto min-h-[100vh]">
      <div className="w-full relative flex flex-col justify-center max-w-[1100px] ">
        <div className=" absolute translate-y-[8rem]  translate-x-[20rem]">
          <div className=" bg-red-500/60 w-[200px]  absolute h-[200px] blur-[210px]"></div>
          <div className=" bg-yellow-400 w-[100px] absolute h-[200px] blur-[210px]"></div>
        </div>
        <div className="flex items-center relative justify-center gap-10">
          <img src={meta} className=" max-w-[1000px]" />
          <div>
            <h3 className="nunito text-white text-3xl font-bold">
              Dive Into Our VR World of Gaming
            </h3>
            <p className="mt-5 leading-7 text-sm text-zinc-400">
            In the ever-evolving landscape of online gaming, Gameloop, a pioneering game store, has taken a bold leap into the realm of the metaverse. Embracing cutting-edge technology, Gameloop has seamlessly integrated the metaverse into its platform
            </p>
            <button className=" absolute bottom-0 flex tion-700  items-center justify-between p-2 bg-red-500/90 rounded-r-full  w-[220px] h-[60px]">
              <p className=" text-white ml-5 font-semibold text-base nunito">Enter Metaverse</p>
              <span className=" bg-black transition-all ease-in-out delay-700 duration-700 animate-bounce rounded-full p-3">
                <img src={arrowup} alt="" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mataverse;
