import React from "react";
import { useLocation } from "react-router-dom";
import Categories from "../Categories/Categories";
import Footer from "../Categories/Footer/Footer";
import { items } from "../ItemsList/itemsInItemsList";
import Navbar from "../Navbar/Navbar";
import ProductItem from "../ProductItem/ProductItem";

const ProductPage = () => {
  let location = useLocation();

  // read from url using location
  const currentPath = location.pathname.split("/");

  const itemId = parseInt(currentPath.pop());
  const item = items.find((item) => item.id == itemId);

  console.log(item);
  return (
    <div>
      <Navbar />
      <ProductItem />
      <Footer />
    </div>
  );
};

export default ProductPage;
