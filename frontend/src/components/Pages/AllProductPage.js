import React from "react";
import CategoriesBar from "../Categories/CategoriesBar/CategoriesBar";
import Footer from "../Categories/Footer/Footer";
import ItemsList from "../ItemsList/ItemsList";
import Navbar from "../Navbar/Navbar";

const AllProductPage = () => {
  return (
    <div>
      <Navbar />
      <CategoriesBar />
      <ItemsList />
      <Footer />
    </div>
  );
};

export default AllProductPage;
