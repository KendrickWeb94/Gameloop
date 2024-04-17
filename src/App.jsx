import Hero from "./Layout/Hero";
import Categories from "./Layout/Categories";
import DownloadApp from "./Layout/DownloadApp";
import Contact from "./Layout/Contact";
import Testimonials from "./Layout/Testimonials";
import Metaverse from "./Layout/Mataverse";
import Newsletter from "./Layout/Newsletter";
import Footer from "./Layout/Footer";

const App = () => {
  return (
    <div className="bg-black h-auto overflow-hidden w-full text-white flex flex-col items-center justify-center ">
      <Hero />
      <Categories />
      <DownloadApp />
      <Contact />
      <Testimonials />
      <Metaverse />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
