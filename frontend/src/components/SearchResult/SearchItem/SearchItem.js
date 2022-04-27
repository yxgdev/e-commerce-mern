import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  ItemPic,
  ItemPicContainer,
  ItemNameContainer,
  ItemNameHeading,
  ItemName,
  ItemPriceContainer,
  ItemPriceHeading,
  ItemPrice,
  ItemButtonContainer,
  ItemViewButton,
} from "./SearchItemStyles";

const SearchItem = ({ item }) => {
  let navigate = useNavigate();

  const onView = (productId) => {
    navigate(`/products/${productId}`);
  };
  return (
    <Container>
      <ItemPicContainer>
        <ItemPic src={item.image} />
      </ItemPicContainer>
      <ItemNameContainer>
        <ItemNameHeading>Product Name</ItemNameHeading>
        <ItemName>{item.title}</ItemName>
      </ItemNameContainer>
      <ItemPriceContainer>
        <ItemPriceHeading>Item Price</ItemPriceHeading>
        <ItemPrice>RM {item.price}</ItemPrice>
      </ItemPriceContainer>
      <ItemButtonContainer>
        <ItemViewButton
          onClick={() => {
            onView(item.id);
          }}
        >
          View
        </ItemViewButton>
      </ItemButtonContainer>
    </Container>
  );
};

export default SearchItem;
