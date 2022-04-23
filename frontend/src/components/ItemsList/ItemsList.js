import React from "react";
import {
  ItemsContainerGrid,
  ItemsListContainer,
  Wrapper,
} from "./ItemsListStyles";
import SingleItem from "./SingleItem/SingleItem";

// import { items } from "./itemsInItemsList";

import iPhone from "../../images/iphone-13-pro-family-hero.png";
const ItemsList = ({ items }) => {
  return (
    <ItemsListContainer>
      <Wrapper>
        <ItemsContainerGrid>
          {items.map((item) => (
            <SingleItem
              key={item.id}
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
