import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthNavbar from "../Auth/AuthNavbar/AuthNavbar";
import LoginSection from "../Auth/LoginSection/LoginSection";
import Footer from "../Categories/Footer/Footer";

const LoginPage = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  auth.user && navigate("/");
  return (
    <div>
      <AuthNavbar></AuthNavbar>
      <LoginSection></LoginSection>
      <Footer></Footer>
    </div>
  );
};

export default LoginPage;
