import { heroimg, unity, unreal, xbox } from "../assets/images";
import GetStartedBtn from "./GetStartedBtn";

const HeroBanner = () => {
    return (
        <div className="flex-wrap pt-10 flex items-center z-50 gap-">
            <div className=" -translate-x-16  -translate-y-16">
                <p className=" text-red-500/45 text-sm uppercase -translate-y-5 nunito font-bold">
                    3D GAMES FOR FREE
                </p>
                <h1 className="text-white nunito uppercase font-semibold text-5xl translate-y-2">
                    All Your
                </h1>
                <span className=" flex items-center gap-5 text-2xl">
                    <h1 className="text-red-500/45 notica uppercase font-bold text-7xl ">Favorite</h1>

                    <span>
                        <GetStartedBtn />
                    </span>
                </span>
                <h1 className="text-white nunito uppercase font-semibold text-4xl mb-3  -translate-y-2">GAMES IN ONE PLACE</h1>
                <p className="nunito text-sm w-[450px] leading-6 text-white">
                    enjoy all your games in one website for free just access the internet
                    we also have online and offline games and the latest new games for
                    your awesome experience
                </p>
            </div>
            <div className=" relative  -translate-y-4">
                <div className=" absolute translate-y-[10rem]  translate-x-[20rem]">
                    <div className=" bg-red-500/60 w-[200px]  absolute h-[200px] blur-[210px]"></div>
                    <div className=" bg-yellow-400 w-[100px] absolute h-[200px] blur-[210px]"></div>
                </div>
                <img src={xbox} alt="" className="w-16 translate-x-[20rem] translate-y-[2rem] " />
                <img src={heroimg} alt="" className=" translate-x-[9rem] " />
                <img src={unity} alt="" className=" w-36 translate-x-[6rem] -translate-y-[16rem] " />
                <img src={unreal} alt="" className=" w-24 translate-x-[20rem] -translate-y-[10rem] " />
            </div>
        </div>
    );
};

export default HeroBanner;
