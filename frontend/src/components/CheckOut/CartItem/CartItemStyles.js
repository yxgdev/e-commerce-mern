import styled from "styled-components";
import breakpoint from "../../breakpoints";

export const CartItemContainer = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  min-height: 25vh;
  max-height: 25vh;

  @media ${breakpoint.device.sm} {
    flex-direction: column;
    max-height: 100vh;
  }
`;
export const ItemPicContainer = styled.div`
  width: 25%;
  @media ${breakpoint.device.sm} {
    flex-direction: row;
    justify-content: center;

    width: 100%;
    align-items: center;
  }
`;
export const ItemPic = styled.img`
  max-width: 250px;
`;

export const ItemTitleContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media ${breakpoint.device.sm} {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
`;
export const ItemTitle = styled.h1``;
export const ProductTitle = styled.h4``;

export const ItemQuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 25%;
  @media ${breakpoint.device.sm} {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-top: 20px;
  }
`;

export const ItemQuantityTitle = styled.h4`
  margin-bottom: 10px;
`;
export const ItemQuantitySelect = styled.select`
  padding: 10px 20px;
  width: 30%;
  font-size: 20px;
`;
export const ItemQuantityOption = styled.option``;

export const ItemPriceAndRemoveContainer = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  @media ${breakpoint.device.sm} {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-top: 20px;
  }
`;
export const ItemPrice = styled.h2`
  width: 120px;
`;
export const ItemRemoveButton = styled.button`
  background: brown;
  color: white;
  border: none;
  padding: 20px;
  margin-left: 50px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;
