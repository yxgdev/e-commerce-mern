import React from "react";
import AuthNavbar from "../Auth/AuthNavbar/AuthNavbar";
import LoginSection from "../Auth/LoginSection/LoginSection";
import Footer from "../Categories/Footer/Footer";

const LoginPage = () => {
  return (
    <div>
      <AuthNavbar></AuthNavbar>
      <LoginSection></LoginSection>
      <Footer></Footer>
    </div>
  );
};

export default LoginPage;
