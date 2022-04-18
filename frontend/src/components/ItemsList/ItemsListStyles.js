import styled from "styled-components";

export const ItemsListContainer = styled.div`
  min-height: 70vh;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const ItemsContainerGrid = styled.div`
  display: grid;
  column-gap: 50px;
  row-gap: 50px;
  grid-template-columns: repeat(3, 1fr);
  padding: 50px;
`;
