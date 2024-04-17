/* eslint-disable react/prop-types */


const CategoryBender = (props) => {
  return (
    <div className=" w-[210px]  ">
      <div className=" hover:animate-pulse  w-[210px] h-[226px] rounded-[30px] overflow-hidden">
        <img src={props.image} alt="" className=" object-cover h-[226px]" />
      </div>
      <div className="flex items-center justify-center p-2 gap-3">
      <i className='bx bxs-hot text-xl text-red-500/45' ></i>
      <p className="nunito text-sm font-semibold text-white">{props.players}</p>
      </div>
    </div>
  );
}

export default CategoryBender;
