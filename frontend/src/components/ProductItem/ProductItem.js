import React from "react";
import {
  AddToCartButton,
  ComponentContainer,
  ItemContainer,
  ItemDesc,
  ItemDescParagraph,
  ItemDescTitle,
  ItemImage,
  ItemImageContainer,
  Wrapper,
} from "./ProductItemStyles";

import iPhone from "../../images/iphone-13-pro-family-hero.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();

  const onAdd = () => {
    // addToCart(dispatch,)
    alert("Item added to cart");
  };
  return (
    <ComponentContainer>
      <Wrapper>
        <ItemContainer>
          <ItemImageContainer>
            <ItemImage src={item.image} />
          </ItemImageContainer>
          <ItemDesc>
            <ItemDescTitle>{item.title}</ItemDescTitle>
            <ItemDescParagraph>{item.desc}</ItemDescParagraph>
            <AddToCartButton onClick={onAdd}>Add to Cart</AddToCartButton>
          </ItemDesc>
        </ItemContainer>
      </Wrapper>
    </ComponentContainer>
  );
};

export default ProductItem;
