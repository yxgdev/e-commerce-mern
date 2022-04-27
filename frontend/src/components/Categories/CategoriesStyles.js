import styled from "styled-components";
import breakpoint from "../breakpoints";

export const Container = styled.div`
  background-color: white;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: white;
  height: 90%;
  width: 50%;
  /* background: ${(props) => `url(${props.bg})`} no-repeat; */
  padding: 0;
  @media ${breakpoint.device.sm} {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
`;

export const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid gray 0.05px;
`;
export const GridImg = styled.img`
  height: 150px;
  width: 150px;
  object-fit: scale-down;
  margin: 0;
`;
