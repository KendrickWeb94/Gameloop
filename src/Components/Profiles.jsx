/* eslint-disable react/prop-types */



const Profiles = (props) => {
   
  return (
   
        <div className="flex z-50 transition-all ease-in-out delay-700 duration-700  gap-9 w-full justify-center items-center">
    <img
      src={props.image}
      className=" w-[120px] h-[120px] object-cover rounded-full"
    />
    <div>
      <h3 className=" text-lg nunito font-semibold mb-4 text-white">
      {props.name}
      </h3>
      <p className="flex gap-2 nunito text-sm text-zinc-400 w-[400px]">
       {props.comment}
        <span>
          <i className="bx bxs-quote-right text-red-500/45 text-2xl"></i>
        </span>
      </p>
      <p className=" text-xs text-red-500/45 font-black nunito translate-x-[22rem] -translate-y-4">
      {props.date}
      </p>
    </div>
  </div>
  
      
   
  )
}

export default Profiles
