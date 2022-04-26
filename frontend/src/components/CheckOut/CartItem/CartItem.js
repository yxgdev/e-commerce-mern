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
import { items } from "../../ItemsList/itemsInItemsList";

const CartItem = ({ item }) => {
  const currentItem = items.find((i) => i.id == item.productId);
  const itemPicture = currentItem.image;
  const onChange = (e) => {
    // console.log(e.target.name, e.target.value);
  };
  return (
    <CartItemContainer>
      <ItemPicContainer>
        <ItemPic src={itemPicture} />
      </ItemPicContainer>

      <ItemTitleContainer>
        <ProductTitle>Product Name </ProductTitle>
        <ItemTitle>{item.title}</ItemTitle>
      </ItemTitleContainer>

      <ItemQuantityContainer>
        <ItemQuantityTitle>Quantity</ItemQuantityTitle>
        <ItemQuantitySelect
          name="quantity"
          onChange={onChange}
          value={item.quantity}
        >
          <ItemQuantityOption>1</ItemQuantityOption>
          <ItemQuantityOption>2</ItemQuantityOption>
          <ItemQuantityOption>3</ItemQuantityOption>
          <ItemQuantityOption>4</ItemQuantityOption>
          <ItemQuantityOption>5</ItemQuantityOption>
        </ItemQuantitySelect>
      </ItemQuantityContainer>

      <ItemPriceAndRemoveContainer>
        <ItemPrice>${item.price * item.quantity}</ItemPrice>
        <ItemRemoveButton>REMOVE</ItemRemoveButton>
      </ItemPriceAndRemoveContainer>
    </CartItemContainer>
  );
};

export default CartItem;
