import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Categories/Footer/Footer";
import { items } from "../ItemsList/itemsInItemsList";
import Navbar from "../Navbar/Navbar";
import SearchResult from "../SearchResult/SearchResult";

const SearchResultPage = () => {
  let location = useLocation();

  const searchKeyword = location.state;

  const filteredItems = searchKeyword
    ? items.filter((item) => {
        const lowerCaseTitle = item.title.toLowerCase();
        const lowerCaseKeyword = searchKeyword.toLowerCase();
        return lowerCaseTitle.includes(lowerCaseKeyword);
      })
    : items;
  return (
    <div>
      <Navbar />
      <SearchResult items={filteredItems} keyword={searchKeyword} />
      <Footer />
    </div>
  );
};

export default SearchResultPage;
