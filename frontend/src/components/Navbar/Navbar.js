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
} from "./NavbarStyles";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Navbar = () => {
  return (
    <>
      <Wrapper>
        <Left>
          <Brand>
            <BrandName>TECH & GAMES</BrandName>
          </Brand>
        </Left>
        <Mid>
          <SearchContainer>
            <SearchBar />
            <SearchIconContainer>
              <SearchIcon />
            </SearchIconContainer>
          </SearchContainer>
        </Mid>
        <Right>
          <ButtonsContainer>
            <Button>
              <PersonIcon />
            </Button>
            <Button>
              <ShoppingCartIcon />
            </Button>
          </ButtonsContainer>
        </Right>
      </Wrapper>
    </>
  );
};

export default Navbar;
