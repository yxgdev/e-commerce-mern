import React from "react";
import {
  ItemClickAddCard,
  ItemClickView,
  ItemImage,
  ItemName,
  ItemPrice,
  ItemPriceNameContainer,
  SingleItemContainer,
} from "./SingleItemStyles";

const SingleItem = ({ image, price }) => {
  return (
    <div>
      <SingleItemContainer>
        <ItemImage src={image}></ItemImage>
        <ItemPriceNameContainer>
          <ItemName>iPhone 13</ItemName>
          <ItemPrice>${price}</ItemPrice>
        </ItemPriceNameContainer>
        <ItemClickView>VIEW</ItemClickView>
        <ItemClickAddCard>ADD TO CART</ItemClickAddCard>
      </SingleItemContainer>
    </div>
  );
};

export default SingleItem;
