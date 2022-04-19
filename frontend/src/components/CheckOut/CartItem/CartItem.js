import React from "react";
import {
  CartItemContainer,
  ItemPicContainer,
  ItemPic,
  ItemTitleContainer,
  ItemTitle,
  ItemQuantityContainer,
  ItemQuantitySelect,
  ItemQuantityOption,
  ItemPriceAndRemoveContainer,
  ItemPrice,
  ItemRemoveButton,
  ItemQuantityTitle,
  ProductTitle,
} from "./CartItemStyles";

import iPhone from "../../../images/iphone-13-pro-family-hero.png";

const CartItem = () => {
  return (
    <CartItemContainer>
      <ItemPicContainer>
        <ItemPic src={iPhone} />
      </ItemPicContainer>

      <ItemTitleContainer>
        <ProductTitle>Product Name </ProductTitle>
        <ItemTitle>iPhone 13</ItemTitle>
      </ItemTitleContainer>

      <ItemQuantityContainer>
        <ItemQuantityTitle>Quantity</ItemQuantityTitle>
        <ItemQuantitySelect>
          <ItemQuantityOption>1</ItemQuantityOption>
          <ItemQuantityOption>2</ItemQuantityOption>
          <ItemQuantityOption>3</ItemQuantityOption>
          <ItemQuantityOption>4</ItemQuantityOption>
          <ItemQuantityOption>5</ItemQuantityOption>
        </ItemQuantitySelect>
      </ItemQuantityContainer>

      <ItemPriceAndRemoveContainer>
        <ItemPrice>$20.00</ItemPrice>
        <ItemRemoveButton>REMOVE</ItemRemoveButton>
      </ItemPriceAndRemoveContainer>
    </CartItemContainer>
  );
};

export default CartItem;
