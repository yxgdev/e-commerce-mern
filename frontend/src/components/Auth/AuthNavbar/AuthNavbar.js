import React from "react";
import { Link } from "react-router-dom";
import {
  Brand,
  BrandName,
  Button,
  ButtonsContainer,
  Left,
  Mid,
  Right,
  SearchBar,
  SearchContainer,
  SearchIconContainer,
  Wrapper,
} from "./AuthNavbarStyles";

const AuthNavbar = () => {
  return (
    <>
      <Wrapper>
        <Brand>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <BrandName>TECH & GAMES</BrandName>
          </Link>
        </Brand>
      </Wrapper>
    </>
  );
};

export default AuthNavbar;
