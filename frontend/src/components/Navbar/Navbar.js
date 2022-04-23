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
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";

const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const { token, isAuthenticated, isLoading, user } = auth;
  const dispatch = useDispatch();

  console.log(auth);
  return (
    <>
      <Wrapper>
        <Left>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Brand>
              <BrandName>TECH & GAMES</BrandName>
            </Brand>
          </Link>
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
            <h3>{user && user.name}</h3>
            <DropDownContainer className="dropdown">
              <DropDownButton className="dropdown">
                <PersonIcon style={{ height: "100%" }} />
              </DropDownButton>
              <DropDownContent className="dropdown-content">
                {user && (
                  <DropDownLink>
                    <Link
                      onClick={dispatch(logout())}
                      to="/"
                      style={{
                        textDecoration: "none",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <DropDownLinkButton>LOGOUT</DropDownLinkButton>
                    </Link>
                  </DropDownLink>
                )}

                {!user && (
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
                )}
                {!user && (
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
                )}
              </DropDownContent>
            </DropDownContainer>
            <ShoppingCartContainer>
              <Link
                to="/checkout"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Button>
                  <ShoppingCartIcon />
                  <ShoppingCartCount>1</ShoppingCartCount>
                </Button>
              </Link>
            </ShoppingCartContainer>
          </ButtonsContainer>
        </Right>
      </Wrapper>
    </>
  );
};

export default Navbar;
