import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0px 50px;
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
`;
export const SearchBar = styled.input`
  padding: 10px;
`;

// user and cart buttons
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Button = styled.div`
  cursor: pointer;
  margin: 0px 10px;
`;
