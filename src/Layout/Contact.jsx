const Contact = () => {
  return (
    <div className=" min-h-[100vh] w-full flex items-center justify-center relative flex-col ">
       <div className=" absolute left-0">
                    <div className=" bg-red-500/60 w-[300px]  absolute h-[200px] blur-[210px]"></div>
                   
                </div>
      <div className="z-50 max-w-[1100px] w-full">
        <h1 className="nunito text-xl uppercase font-black mb-5">
          Lets Hear from you
        </h1>
        <div className=" z-50">
          <div className="w-full relative mb-5 rounded-lg p-3 backdrop-invert-0 backdrop-bg flex items-center justify-center h-[52px]">
            <p className="nunito text-sm text-zinc-400 absolute left-0 p-3">
              
              <input type="text" name="" id="" placeholder="example: John H. Forster" className="outline-none focus:no-underline border-0 bg-transparent w-full" />
            </p>
          </div>
          <div className="flex items-center mb-5 gap-3">
            <div className="w-[50%]  relative rounded-lg p-3 backdrop-invert-0 backdrop-bg flex items-center justify-center h-[52px]">
              <p className="nunito text-sm text-zinc-400 absolute left-0 p-3">
                <input type="text" name="" id="" placeholder="example: HueyJackPackam" className="outline-none focus:no-underline border-0 bg-transparent w-full" />
              </p>
            </div>
            <div className="w-[50%]  relative rounded-lg p-3 backdrop-invert-0 backdrop-bg flex items-center justify-center h-[52px]">
              <p className="nunito text-sm text-zinc-400 absolute left-0 p-3">
                <input type="email" name="" id="" placeholder="JohnDoe@example.com" className="outline-none focus:no-underline border-0 bg-transparent w-full" />
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-[80%]  relative rounded-lg p-3 backdrop-invert-0 backdrop-bg flex items-center justify-center h-[52px]">
              <p className="nunito text-sm text-zinc-400 absolute left-0 p-3">
             
                <input type="text" name="" id="" placeholder="What Your Message?" className="outline-none focus:no-underline border-0 bg-transparent w-full" />
              </p>
            </div>
            <div className="w-[20%]  relative rounded-lg p-3 backdrop-invert-0 backdrop-bg flex items-center justify-center h-[52px]">
              <p className="nunito text-sm text-zinc-400 absolute left-0 p-3">
                
                <input type="number" name="" id="" placeholder="Age" className="outline-none focus:no-underline border-0 bg-transparent w-full" />
              </p>
            </div>
          </div>
          <button className="hover:delay-500 hover:transition-all hover:duration-500 hover:ease-in-out bg-red-500/75 text-lg nunito hover:bg-gradient-to-r from-red-500/80 to-red-600 mt-5 p-2 h-[50px] rounded-sm w-[200px]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
