import styled from "styled-components";
import breakpoint from "../breakpoints";
import KL from "./images/beautiful_kl_unsplash.jpg";

export const LocationContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${KL}) no-repeat center;
  background-size: cover;
  height: 50vh;
  max-width: 100vw;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LocationTitle = styled.h1`
  font-size: 50px;
  font-weight: 900;
  @media ${breakpoint.device.sm} {
    font-size: 30px;
  }
`;

export const LocationDesc = styled.p`
  margin-top: 5px;
  font-size: 20px;
  @media ${breakpoint.device.sm} {
    font-size: 15px;
  }
`;
