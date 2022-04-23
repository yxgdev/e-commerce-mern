import React from "react";
import {
  ItemsContainerGrid,
  ItemsListContainer,
  Wrapper,
} from "./ItemsListStyles";
import SingleItem from "./SingleItem/SingleItem";

import { items } from "./itemsInItemsList";

import iPhone from "../../images/iphone-13-pro-family-hero.png";
const ItemsList = () => {
  return (
    <ItemsListContainer>
      <Wrapper>
        <ItemsContainerGrid>
          {items.map((item) => (
            <SingleItem
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
        </ItemsContainerGrid>
      </Wrapper>
    </ItemsListContainer>
  );
};

export default ItemsList;
