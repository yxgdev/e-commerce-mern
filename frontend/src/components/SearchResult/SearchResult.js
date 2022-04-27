import Search from "@mui/icons-material/Search";
import React from "react";
import CartItem from "../CheckOut/CartItem/CartItem";
import SearchItem from "./SearchItem/SearchItem";
import {
  Container,
  SearchKeyWordText,
  SearchResultText,
  Wrapper,
} from "./SearchResultStyles";

const SearchResult = ({ items, keyword }) => {
  return (
    <Container>
      <SearchResultText>Search Results</SearchResultText>
      <SearchKeyWordText>
        You Searched for '{keyword ? keyword : "all"}'
      </SearchKeyWordText>
      <Wrapper>
        {items.map((item) => (
          <SearchItem key={item.id} item={item} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default SearchResult;
