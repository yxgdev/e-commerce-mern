import styled from "styled-components";
export const ComponentContainer = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled.div`
  margin: 0 50px;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemImageContainer = styled.div``;
export const ItemImage = styled.img``;

export const ItemDesc = styled.div`
  width: 600px;
`;
export const ItemDescTitle = styled.h2`
  margin: 5px 0;
  margin-bottom: 20px;
`;
export const ItemDescParagraph = styled.p`
  font-size: 20;
`;

export const AddToCartButton = styled.button`
  margin-top: 20px;
  padding: 15px;
  font-size: 20px;
  border: none;
  color: white;
  background-color: black;
  cursor: pointer;
  :hover {
    background-color: green;
  }
`;
