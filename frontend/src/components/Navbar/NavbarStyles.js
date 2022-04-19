import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0px 50px;
  padding: 15px;
`;

export const Left = styled.div`
  flex: 1;
`;
export const Mid = styled.div`
  flex: 1;
`;
export const Right = styled.div`
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
  width: 70%;
  margin-right: 5px;
  margin-left: 60px;
`;

// user and cart buttons
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const DropDownContainer = styled.div`
  cursor: pointer;
  margin: 0px 10px;
  position: relative;
  display: flex;
  justify-content: center;
`;
export const DropDownButton = styled.div`
  cursor: pointer;
  margin: 0px 10px;
`;

export const DropDownContent = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  margin-top: 30px;
`;

export const DropDownLink = styled.a`
  padding: 20px;

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
