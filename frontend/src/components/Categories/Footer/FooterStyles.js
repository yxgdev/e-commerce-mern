import styled from "styled-components";
import breakpoint from "../../breakpoints";

export const FooterContainer = styled.div`
  max-width: 100vw;
  height: 20vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  @media ${breakpoint.device.sm} {
    height: 30vh;
  }
`;

export const SocialsContainer = styled.div`
  display: flex;
  @media ${breakpoint.device.sm} {
    margin-top: 30px;
  }
`;
export const IconContainer = styled.div`
  margin: 0 40px;
  margin-top: 30px;
  transform: scale(2.5);
  cursor: pointer;
`;
export const SocialsText = styled.p`
  margin: 30px 0;
  font-size: 15px;
`;
export const CopyRightText = styled.p`
  font-size: 10px;
`;
