import styled from "styled-components";
import breakpoint from "../../breakpoints";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;

  @media ${breakpoint.device.sm} {
    flex-direction: column;
  }
`;
export const CatButtonDiv = styled.div`
  width: 100%;
  padding: 15px;
  background-color: black;
  color: white;
  cursor: pointer;
  @media ${breakpoint.device.sm} {
    max-width: 95%;
  }
`;
export const CatButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: black;
  color: white;
  cursor: pointer;
`;
