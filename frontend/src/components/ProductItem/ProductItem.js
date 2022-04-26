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
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/authSlice";

const ProductItem = ({ item }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onAdd = (productId) => {
    addToCart(dispatch, productId, auth.user);
    alert("Item added to cart" + productId);
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
            <AddToCartButton
              onClick={() => {
                onAdd(item.id);
              }}
            >
              Add to Cart
            </AddToCartButton>
          </ItemDesc>
        </ItemContainer>
      </Wrapper>
    </ComponentContainer>
  );
};

export default ProductItem;
