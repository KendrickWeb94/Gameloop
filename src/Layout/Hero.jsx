import HeroBanner from "../Components/HeroBanner";
import Navbar from "../Components/Navbar";
import  { useState, useEffect } from 'react';

const Hero = () => {

    const [navbarBackground, setNavbarBackground] = useState('transparent');
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
  
        // Adjust the scroll threshold as needed
        const scrollThreshold = 100;
  
        if (scrollPosition > scrollThreshold) {
          setNavbarBackground('#'); // Change to your desired background color
        } else {
          setNavbarBackground('transparent');
        }
      };
  
      // Add the event listener when the component mounts
      window.addEventListener('scroll', handleScroll);
  
      // Remove the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <div className="w-full min-h-[100vh]  relative">
      <div className=" absolute -translate-y-20 -translate-x-16">
        <div className=" bg-red-500/60 w-[100px]  absolute h-[100px] blur-[210px]"></div>
        <div className=" bg-yellow-400 w-[100px] absolute h-[200px] blur-[210px]"></div>
      </div>
      <div
      className="w-full fixed nav z-50  top-0 flex items-center justify-center flex-col"
      style={{ backgroundColor: navbarBackground }}
    >
      <div className="max-w-[1100px] w-full p-3">
        <Navbar />
      </div>
    </div>

      <div className=" flex items-center justify-center flex-col pt-8">
        <HeroBanner />
      </div>
    </div>
  );
};

export default Hero;
