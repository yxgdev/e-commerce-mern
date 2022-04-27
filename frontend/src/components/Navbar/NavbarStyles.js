import styled from "styled-components";
import breakpoint from "../breakpoints";
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0px 50px;
  padding: 15px;
  @media ${breakpoint.device.sm} {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  flex: 1;
`;
export const Mid = styled.div`
  flex: 1;
  @media ${breakpoint.device.sm} {
    flex: 0;
    display: none;
  }
`;
export const Right = styled.div`
  min-height: 100%;

  height: 100%;
  flex: 1;
`;

export const Brand = styled.div`
  text-align: left;
  cursor: pointer;
`;
export const BrandName = styled.h1``;

// search comps
export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;
export const SearchBar = styled.input`
  padding: 10px;
  width: 90%;
`;

export const SearchBarForm = styled.form`
  width: 70%;
  margin-right: 5px;
  margin-left: 60px;
`;

// user and cart buttons
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 100%;
`;

export const DropDownContainer = styled.div`
  display: none;

  cursor: pointer;
  margin: 0px 10px;
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 3;
`;
export const DropDownButton = styled.div`
  cursor: pointer;
  margin: 0px 10px;
  min-height: 100%;
`;

export const DropDownContent = styled.div`
  visibility: hidden;
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 30px;
`;

export const DropDownLink = styled.div`
  background-color: white;
  text-decoration: none;
  width: 100%;
  height: 100%;

  :hover {
    background-color: #ddd;
  }
`;
export const DropDownLinkButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: white;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #ddd;
  }
`;

export const SearchIconContainer = styled.button`
  padding: 5px 15px;
  border: none;
  background-color: white;
  cursor: pointer;
`;

export const ShoppingCartContainer = styled.div`
  position: relative;
  margin-top: 3px;
`;
export const ShoppingCartCount = styled.div`
  position: absolute;
  bottom: 20px;
  left: 25px;
  background-color: red;
  border-radius: 50%;
  color: white;
  height: 10px;
  width: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;
export const Button = styled.div`
  cursor: pointer;
  margin: 0px 10px;
`;
