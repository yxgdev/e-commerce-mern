import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkOutFail } from "../../redux/authSlice";
import Categories from "../Categories/Categories";
import Footer from "../Categories/Footer/Footer";
import Location from "../Location/Location";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkOutFail());
  }, []);
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
