import styled from "styled-components";
import breakpoint from "../breakpoints";

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
  @media ${breakpoint.device.sm} {
    flex-direction: column;
  }
`;

export const ItemImageContainer = styled.div`
  width: 30vw;
  @media ${breakpoint.device.sm} {
    width: 50vw;
  }
`;
export const ItemImage = styled.img`
  margin-left: 15vw;
  width: 25vw;
  @media ${breakpoint.device.sm} {
    flex-direction: column;
    margin-left: 0;
    width: 50vw;
  }
`;

export const ItemDesc = styled.div`
  width: 69vw;
  display: flex;
  flex-direction: column;
  align-items: center;
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
