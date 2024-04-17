import CategoryBender from "../Components/CategoryBender";
import { cod, cyber, fifa,  gtav, spiderman } from "../assets/images";

const Categories = () => {
  return (
    <div className="z-50 min-h-[40vh] w-full flex relative items-center pb-12  flex-col">
      <div className=" absolute left-0">
        <div className=" bg-red-500/60 w-[200px]  absolute h-[200px] blur-[210px]"></div>
      </div>
      <div className="w-full max-w-[1100px] ">
        <div className="w-full flex items-center flex-wrap justify-between ">
          <h3 className=" nunito font-black">
            TOP TRENDING GAMES OF THE MOMENT
          </h3>
          <p className=" text-zinc-400 text-[12px] nunito flex items-center gap-4 font-normal">
            VIEW MORE <i className="bx bx-chevron-right text-xl"></i>
          </p>
        </div>
        <div className="grid grid-cat gap-3 items-center justify-center pt-6 z-50 ">
          <CategoryBender image={spiderman} players="350 Players" />
          <CategoryBender image={gtav} players="150 Players" />
          <CategoryBender image={fifa} players="450 Players" />
          <CategoryBender image={cod} players="880 Players" />
          <CategoryBender image={cyber} players="570 Players" />
          
        </div>
      </div>
    </div>
  );
};

export default Categories;
