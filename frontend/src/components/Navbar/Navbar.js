import React from "react";
import {
  Brand,
  BrandName,
  Button,
  ButtonsContainer,
  DropDownButton,
  DropDownContent,
  DropDownContainer,
  Left,
  Mid,
  Right,
  SearchBar,
  SearchContainer,
  SearchIconContainer,
  Wrapper,
  DropDownLink,
  ShoppingCartCount,
  ShoppingCartContainer,
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
            <DropDownContainer className="dropdown">
              <DropDownButton>
                <PersonIcon />
              </DropDownButton>
              <DropDownContent className="dropdown-content">
                <DropDownLink>LOGIN</DropDownLink>
                <DropDownLink>REGISTER</DropDownLink>
              </DropDownContent>
            </DropDownContainer>
            <ShoppingCartContainer>
              <Button>
                <ShoppingCartIcon />
                <ShoppingCartCount>1</ShoppingCartCount>
              </Button>
            </ShoppingCartContainer>
          </ButtonsContainer>
        </Right>
      </Wrapper>
    </>
  );
};

export default Navbar;
