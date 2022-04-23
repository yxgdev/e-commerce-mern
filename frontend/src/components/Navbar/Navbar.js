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
  DropDownLinkButton,
} from "./NavbarStyles";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";

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
              <DropDownButton className="dropdown">
                <PersonIcon style={{ height: "100%" }} />
              </DropDownButton>
              <DropDownContent className="dropdown-content">
                <DropDownLink>
                  <Link
                    to="/login"
                    style={{
                      textDecoration: "none",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <DropDownLinkButton>LOGIN</DropDownLinkButton>
                  </Link>
                </DropDownLink>
                <DropDownLink>
                  <Link
                    to="/register"
                    style={{
                      textDecoration: "none",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <DropDownLinkButton>REGISTER</DropDownLinkButton>
                  </Link>
                </DropDownLink>
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
