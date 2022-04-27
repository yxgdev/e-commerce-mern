import React from "react";
import Footer from "../Categories/Footer/Footer";
import { items } from "../ItemsList/itemsInItemsList";
import Navbar from "../Navbar/Navbar";
import SearchResult from "../SearchResult/SearchResult";

const SearchResultPage = () => {
  return (
    <div>
      <Navbar />
      <SearchResult items={items} />
      <Footer />
    </div>
  );
};

export default SearchResultPage;
