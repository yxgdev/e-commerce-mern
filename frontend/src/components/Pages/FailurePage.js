import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkOutFail } from "../../redux/authSlice";
import Footer from "../Categories/Footer/Footer";
import Navbar from "../Navbar/Navbar";

const FailurePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkOutFail());
  }, []);
  return (
    <div>
      <Navbar />
      <div>Failure</div>
      <Footer />
    </div>
  );
};

export default FailurePage;
