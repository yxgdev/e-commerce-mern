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

const ProductItem = () => {
  const dispatch = useDispatch();

  // const onAdd = () => {
  //   addToCart(dispatch,)
  // };
  return (
    <ComponentContainer>
      <Wrapper>
        <ItemContainer>
          <ItemImageContainer>
            <ItemImage src={iPhone} />
          </ItemImageContainer>
          <ItemDesc>
            <ItemDescTitle>iPhone 13 Pro</ItemDescTitle>
            <ItemDescParagraph>
              The latest iPhone. Bringing you the best of all worlds, whether
              its for productivity, gaming, communication, we've got you all
              covered. Let this phone be your latest phone for the year.
            </ItemDescParagraph>
            <AddToCartButton>Add to Cart</AddToCartButton>
          </ItemDesc>
        </ItemContainer>
      </Wrapper>
    </ComponentContainer>
  );
};

export default ProductItem;
