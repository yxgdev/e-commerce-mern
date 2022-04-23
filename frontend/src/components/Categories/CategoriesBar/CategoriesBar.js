import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeCategory } from "../../../redux/itemSlice";
import { CatButton, CatButtonDiv, Wrapper } from "./CategoriesBarStyle";

const CategoriesBar = () => {
  const dispatch = useDispatch();

  const onClick = (cat) => {
    dispatch(changeCategory(cat));
  };
  return (
    <div>
      <Wrapper>
        <CatButtonDiv>
          <Link to="/products">
            <CatButton
              onClick={() => {
                onClick(1);
              }}
            >
              GAMING
            </CatButton>
          </Link>
        </CatButtonDiv>
        <CatButtonDiv>
          <Link to="/products">
            <CatButton
              onClick={() => {
                onClick(2);
              }}
            >
              PRODUCTIVITY
            </CatButton>
          </Link>
        </CatButtonDiv>
        <CatButtonDiv>
          <Link to="/products">
            <CatButton
              onClick={() => {
                onClick(3);
              }}
            >
              PHOTOGRAPHY
            </CatButton>
          </Link>
        </CatButtonDiv>
        <CatButtonDiv>
          <Link to="/products">
            <CatButton
              onClick={() => {
                onClick(0);
              }}
            >
              ALL
            </CatButton>
          </Link>
        </CatButtonDiv>
      </Wrapper>
    </div>
  );
};

export default CategoriesBar;
