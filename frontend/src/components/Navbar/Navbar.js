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
            <BrandName>BRAND</BrandName>
          </Brand>
        </Left>
        <Mid>
          <SearchContainer>
            <SearchBar />
            <SearchIcon />
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
