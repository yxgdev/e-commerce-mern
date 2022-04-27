import styled from "styled-components";
import breakpoint from "../../breakpoints";

export const Container = styled.div`
  /* background-color: darkred; */
  min-width: 100%;
  display: flex;
  min-height: 27vh;
  max-height: 27vh;
  align-items: center;
  @media ${breakpoint.device.sm} {
    flex-direction: column;
    max-height: 100vh;
    margin-bottom: 5px;
  }
`;

//ItemPic
export const ItemPicContainer = styled.div`
  width: 25%;
  margin-left: 250px;
  @media ${breakpoint.device.sm} {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
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
  @media ${breakpoint.device.sm} {
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    font-size: 12px;
  }
`;
export const ItemNameHeading = styled.h4``;
export const ItemName = styled.h1``;

// ItemPrice
export const ItemPriceContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media ${breakpoint.device.sm} {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    align-items: center;
    font-size: 12px;
  }
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
