import React, { useState } from "react";
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
import { Snackbar } from "@mui/material";

const ProductItem = ({ item }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const onAdd = (productId) => {
    addToCart(dispatch, productId, auth.user);
    // alert("Item added to cart" + productId);
    setOpen(true);
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
            <Snackbar
              open={open}
              autoHideDuration={2000}
              message="item added to cart"
              onClose={() => setOpen(false)}
            />
          </ItemDesc>
        </ItemContainer>
      </Wrapper>
    </ComponentContainer>
  );
};

export default ProductItem;
