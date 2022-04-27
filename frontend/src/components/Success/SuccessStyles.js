import styled from "styled-components";

export const SuccessContainer = styled.div`
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SuccessText = styled.h2``;
export const BackToStore = styled.button`
  margin-top: 25px;
  padding: 15px;
  border: none;
  cursor: pointer;
  background-color: black;
  color: white;
  :hover {
    background-color: chocolate;
  }
`;
