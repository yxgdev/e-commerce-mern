import React from "react";
import { Link } from "react-router-dom";
import { CatButton, CatButtonDiv, Wrapper } from "./CategoriesBarStyle";

const CategoriesBar = () => {
  return (
    <div>
      <Wrapper>
        <CatButtonDiv>
          <Link to="/products/w">
            <CatButton>GAMING</CatButton>
          </Link>
        </CatButtonDiv>
        <CatButtonDiv>
          <Link to="/products/w">
            <CatButton>PRODUCTIVITY</CatButton>
          </Link>
        </CatButtonDiv>
        <CatButtonDiv>
          <Link to="/products/w">
            <CatButton>PHOTOGRAPHY</CatButton>
          </Link>
        </CatButtonDiv>
        <CatButtonDiv>
          <Link to="/products/w">
            <CatButton>ALL</CatButton>
          </Link>
        </CatButtonDiv>
      </Wrapper>
    </div>
  );
};

export default CategoriesBar;
