import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../Categories/Footer/Footer";
import CheckOutSection from "../CheckOut/CheckOutSection/CheckOutSection";
import Navbar from "../Navbar/Navbar";

const CheckOutPage = () => {
  const auth = useSelector((state) => state.auth);
  const { token, isAuthenticated, isLoading, user } = auth;
  let navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuthenticated) navigate("/login");
  }, []);
  return (
    <div>
      <Navbar />
      <CheckOutSection
        cart={auth && auth.user ? auth.user.cart : null}
        user={auth ? auth.user : null}
      />
      <Footer />
    </div>
  );
};

export default CheckOutPage;
