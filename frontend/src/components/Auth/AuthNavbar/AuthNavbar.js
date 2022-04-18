import React from "react";
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
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const AuthNavbar = () => {
  return (
    <>
      <Wrapper>
        <Brand>
          <BrandName>TECH & GAMES</BrandName>
        </Brand>
      </Wrapper>
    </>
  );
};

export default AuthNavbar;
