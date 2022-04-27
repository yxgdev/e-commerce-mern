import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../redux/authSlice";
import {
  ItemClickAddCard,
  ItemClickView,
  ItemImage,
  ItemName,
  ItemPrice,
  ItemPriceNameContainer,
  SingleItemContainer,
} from "./SingleItemStyles";

const SingleItem = ({ id, title, image, price }) => {
  let navigate = useNavigate();

  const onViewClick = () => {
    navigate(`/products/${id}`, { state: id });
  };

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onAdd = (productId) => {
    addToCart(dispatch, productId, auth.user);
    alert("Item added to cart" + productId);
  };
  return (
    <div>
      <SingleItemContainer>
        <ItemImage src={image}></ItemImage>
        <ItemPriceNameContainer>
          <ItemName>{title}</ItemName>
          <ItemPrice>RM {price}</ItemPrice>
        </ItemPriceNameContainer>
        <ItemClickView onClick={onViewClick}>VIEW</ItemClickView>
        <ItemClickAddCard onClick={() => onAdd(id)}>
          ADD TO CART
        </ItemClickAddCard>
      </SingleItemContainer>
    </div>
  );
};

export default SingleItem;
