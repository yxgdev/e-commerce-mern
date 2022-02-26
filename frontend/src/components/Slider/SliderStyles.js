import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  overflow: hidden;
`;

export const Carousel = styled.div`
  padding: 0;
  margin: 0;
  height: 30vh;
  width: 100%;

  display: flex;
`;

export const Inner = styled.div`
  height: 100%;
  min-width: 100%;
  display: flex;
  transition: all 1s ease-in-out;
  transform: translateX(${(props) => props.sliderIndex * -100}%);
`;

export const CarouselItem = styled.div`
  height: 100%;
  min-width: 100%;

  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.bg});
  margin: 0;
  padding: 0;
`;

export const InfoAndButtonsContainer = styled.div``;

export const ButtonContainer = styled.div``;

export const InfoContainer = styled.div``;

export const SliderSwitchLeft = styled.div`
  border-radius: 50%;
  background-color: gray;
  opacity: 30%;
  height: 60px;
  width: 60px;
  position: fixed;
  top: 17vh;
  left: 2vw;
  z-index: 3;
`;
export const SliderSwitchRight = styled.div`
  border-radius: 50%;
  background-color: gray;
  opacity: 30%;
  height: 60px;
  width: 60px;
  position: fixed;
  top: 17vh;
  right: 2vw;
  z-index: 3;
`;
