import React from "react";
import { useSelector } from "react-redux";
import AuthNavbar from "../Auth/AuthNavbar/AuthNavbar";
import RegisterSection from "../Auth/RegisterSection/RegisterSection";
import Footer from "../Categories/Footer/Footer";

const RegisterPage = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <div>
      <AuthNavbar />
      <RegisterSection />
      <Footer />
    </div>
  );
};

export default RegisterPage;
