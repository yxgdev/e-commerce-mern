import React from "react";
import Categories from "../Categories/Categories";
import Footer from "../Categories/Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ProductItem from "../ProductItem/ProductItem";

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <ProductItem />
      <Footer />
    </div>
  );
};

export default ProductPage;
