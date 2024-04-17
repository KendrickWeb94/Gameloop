import { arrowup } from "../assets/images";


const GetStartedBtn = () => {
    return (
        <div className=" w-[100px] -translate-y-5 h-[100px] flex items-center justify-center poppins text-sm rounded-full border-4 border-red-500/45">
            <div className=" text-xs flex text-white cursor-pointer flex-col ">
                <h1 className="uppercase gap-1 flex items-center text-white">
                    Get <img src={arrowup} alt="" className=" hover:animate-spin delay-500 transition-all duration-500 ease-in-out" />
                </h1>
                <h1 className="uppercase ">Started</h1>
            </div>
        </div>
    );
}

export default GetStartedBtn;
