import React from "react";
import { useNavigate } from "react-router-dom";
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
  return (
    <div>
      <SingleItemContainer>
        <ItemImage src={image}></ItemImage>
        <ItemPriceNameContainer>
          <ItemName>{title}</ItemName>
          <ItemPrice>${price}</ItemPrice>
        </ItemPriceNameContainer>
        <ItemClickView onClick={onViewClick}>VIEW</ItemClickView>
        <ItemClickAddCard>ADD TO CART</ItemClickAddCard>
      </SingleItemContainer>
    </div>
  );
};

export default SingleItem;
