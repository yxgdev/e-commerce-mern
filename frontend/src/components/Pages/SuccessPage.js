import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCartAndUrlSuccess } from "../../redux/authSlice";
import Footer from "../Categories/Footer/Footer";
import Navbar from "../Navbar/Navbar";

const SuccessPage = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    user && clearCartAndUrlSuccess(dispatch, user);
  }, []);

  return (
    <div>
      <Navbar />
      <div>success</div>
      <Footer />
    </div>
  );
};

export default SuccessPage;
