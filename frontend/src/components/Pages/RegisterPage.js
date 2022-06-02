import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthNavbar from "../Auth/AuthNavbar/AuthNavbar";
import RegisterSection from "../Auth/RegisterSection/RegisterSection";
import Footer from "../Categories/Footer/Footer";

const RegisterPage = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    auth.user && navigate("/");
  }, [auth]);
  return (
    <div>
      <AuthNavbar />
      <RegisterSection />
      <Footer />
    </div>
  );
};

export default RegisterPage;
