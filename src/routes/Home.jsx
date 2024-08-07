import React from "react";
import Navbar from "../components/Header";
import Hero from "../components/Hero";
import HottestGames from "../components/HottestGames";
import DownloadApp from "../components/DownloadApp";
import Testimonials from "../components/Testimonials";
import MetaVerse from "../components/MetaVerse";
import Contact from "../components/Contact";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HottestGames />
      <DownloadApp />
      <Testimonials />
      <MetaVerse />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
