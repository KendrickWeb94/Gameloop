import Information from "../Components/Information";
import { apple, google, mobile } from "../assets/images";

const DownloadApp = () => {
  return (
    <div className=" min-h-[100vh]  bg-orange-950 flex justify-center  flex-col items-center w-full">
      <div className=" max-w-[1100px] w-full">
        <div className=" flex items-center flex-wrap gap-[18rem]">
          <div>
            <h1 className=" nunito font-bold text-[35px]">DOWNLOAD THE APP</h1>
            <Information title="Available For IOS devices" paragraph="you can download the app if you have access to an Ios device like Iphone and more  and more, download and play with ease and surf difrent games we have in stock" />
            <Information title="Available For Andriod Devices" paragraph="you can download the app if you have access to an Ios device like Andriod and more, download and play with ease and surf difrent games we have in stock" />
            <Information title="Compactible with Web on PC and Mobile" paragraph="you can download the app if you have access to an Ios device like Andriod and more, download and play with ease and surf difrent games we have in stock" />
          </div>
          <div className=" relative">
            <div className=" translate-y-16 -z-30 opacity-50">
              <div className=" bg-red-500/60 w-[100px]  absolute h-[100px] blur-[210px]"></div>
              <div className=" bg-yellow-400 w-[100px] absolute h-[100px] blur-[210px]"></div>
            </div>
         <div className=" z-50">
         <img src={mobile} alt="" className=" w-[250px] z-50 opacity-100 animate-pulse " />
         </div>
         <div className=" justify-center flex items-center gap-4">
          <img src={google} alt=""  className=" w-[100px]"/>
          <img src={apple} alt=""  className=" w-[100px]"/>
         </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadApp;
