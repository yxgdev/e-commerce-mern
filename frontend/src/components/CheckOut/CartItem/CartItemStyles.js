import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  background-color: white;
`;
export const ItemPicContainer = styled.div`
  width: 25%;
`;
export const ItemPic = styled.img`
  max-width: 200px;
`;

export const ItemTitleContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const ItemTitle = styled.h1``;
export const ProductTitle = styled.h4``;

export const ItemQuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 25%;
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
`;
export const ItemPrice = styled.h2``;
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
