import React from "react";
import { CatButton, Wrapper } from "./CategoriesBarStyle";

const CategoriesBar = () => {
  return (
    <div>
      <Wrapper>
        <CatButton>GAMING</CatButton>
        <CatButton>PRODUCTIVITY</CatButton>
        <CatButton>PHOTOGRAPHY</CatButton>
      </Wrapper>
    </div>
  );
};

export default CategoriesBar;
