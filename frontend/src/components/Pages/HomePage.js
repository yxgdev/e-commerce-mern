import React from "react";
import Categories from "../Categories/Categories";
import Footer from "../Categories/Footer/Footer";
import Location from "../Location/Location";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Location />
      <Footer />
    </div>
  );
};

export default HomePage;
