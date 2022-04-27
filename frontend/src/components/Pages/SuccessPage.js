import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCartAndUrlSuccess } from "../../redux/authSlice";
import Footer from "../Categories/Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Success from "../Success/Success";

const SuccessPage = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    user && clearCartAndUrlSuccess(dispatch, user);
  }, []);

  return (
    <div>
      <Navbar />
      <Success />
      <Footer />
    </div>
  );
};

export default SuccessPage;
