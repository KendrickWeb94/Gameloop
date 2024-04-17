

const Navbar = () => {
  return (
    <div className="w-full z-50 flex   items-center justify-between gap-4 ">
      <h1 className=" nunito uppercase font-extrabold text-lg">Gameloop</h1>
      <div>
        <ul className="items-center cursor-pointer font-normal nunito  text-base text-white flex gap-6">
            <li className=" transition-all delay-500 duration-500 ease-in-out hover:text-red-500/35">Home</li>
            <li  className=" transition-all delay-500 duration-500 ease-in-out hover:text-red-500/35">Games</li>
            <li className=" transition-all delay-500 duration-500 ease-in-out hover:text-red-500/35">Features</li>
            <li className=" transition-all delay-500 duration-500 ease-in-out hover:text-red-500/35">Online</li>
            <li className=" transition-all delay-500 duration-500 ease-in-out hover:text-red-500/35">Blog</li>
         
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
