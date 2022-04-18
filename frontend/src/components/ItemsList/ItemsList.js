import React from "react";
import {
  ItemsContainerGrid,
  ItemsListContainer,
  Wrapper,
} from "./ItemsListStyles";
import SingleItem from "./SingleItem/SingleItem";

import iPhone from "../../images/iphone-13-pro-family-hero.png";
const ItemsList = () => {
  return (
    <ItemsListContainer>
      <Wrapper>
        <ItemsContainerGrid>
          <SingleItem image={iPhone} price={20.0} />
          <SingleItem image={iPhone} price={20.0} />
          <SingleItem image={iPhone} price={20.0} />
          <SingleItem image={iPhone} price={20.0} />
          <SingleItem image={iPhone} price={20.0} />
          <SingleItem image={iPhone} price={20.0} />
        </ItemsContainerGrid>
      </Wrapper>
    </ItemsListContainer>
  );
};

export default ItemsList;
