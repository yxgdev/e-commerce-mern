import React from "react";
import CategoriesBar from "../Categories/CategoriesBar/CategoriesBar";
import Footer from "../Categories/Footer/Footer";
import ItemsList from "../ItemsList/ItemsList";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";

const AllProductPage = () => {
  const items = useSelector((state) => state.item.items);
  return (
    <div>
      <Navbar />
      <CategoriesBar />
      <ItemsList items={items} />
      <Footer />
    </div>
  );
};

export default AllProductPage;
