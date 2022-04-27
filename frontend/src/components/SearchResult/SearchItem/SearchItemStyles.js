import styled from "styled-components";

export const Container = styled.div`
  /* background-color: darkred; */
  min-width: 100%;
  display: flex;
  min-height: 27vh;
  max-height: 27vh;
  align-items: center;
`;

//ItemPic
export const ItemPicContainer = styled.div`
  width: 25%;
  margin-left: 250px;
`;
export const ItemPic = styled.img`
  max-width: 200px;
`;

// Item name
export const ItemNameContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const ItemNameHeading = styled.h4``;
export const ItemName = styled.h1``;

// ItemPrice
export const ItemPriceContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const ItemPriceHeading = styled.h4``;
export const ItemPrice = styled.h1``;

// item view button
export const ItemButtonContainer = styled.div`
  width: 25%;
  display: flex;
`;
export const ItemViewButton = styled.button`
  padding: 15px 30px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  :hover {
    background-color: gold;
  }
`;
