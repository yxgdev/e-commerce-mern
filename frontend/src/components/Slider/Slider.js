import React, { useState } from "react";
import {
  ButtonContainer,
  Carousel,
  CarouselItem,
  InfoAndButtonsContainer,
  InfoButton,
  InfoContainer,
  InfoTitle,
  Inner,
  SliderSwitchLeft,
  SliderSwitchRight,
  Wrapper,
} from "./SliderStyles";

const digitalCamera =
  "https://images.unsplash.com/photo-1515042861662-e2a2e63e9647?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80";

const nintendoSwitch =
  "https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const varietyTech =
  "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const onSliderSwitch = (direction) => {
    const change = direction === "left" ? -1 : +1;

    if (sliderIndex + change < 0) {
      console.log(sliderIndex + change);

      setSliderIndex(2);
    } else if (sliderIndex + change > 2) {
      setSliderIndex(0);
    } else {
      setSliderIndex(sliderIndex + change);
    }
  };
  //   setInterval(() => {
  //     onSliderSwitch("right");
  //   }, 1000);

  return (
    <Wrapper>
      <SliderSwitchLeft
        direction="left"
        onClick={() => {
          onSliderSwitch("left");
        }}
      />
      <SliderSwitchRight
        direction="right"
        onClick={() => {
          onSliderSwitch("right");
        }}
      />
      <Carousel>
        <Inner sliderIndex={sliderIndex}>
          <CarouselItem bg={varietyTech}>
            <InfoAndButtonsContainer>
              <InfoContainer>
                <InfoTitle>All variety of Gadgets in 1 Shop</InfoTitle>
                <p>Latest Gadgets in the World</p>
                <InfoButton>SHOP</InfoButton>
              </InfoContainer>
              <ButtonContainer></ButtonContainer>
            </InfoAndButtonsContainer>
          </CarouselItem>
          <CarouselItem bg={nintendoSwitch}>
            <InfoAndButtonsContainer>
              <InfoContainer>
                <InfoTitle>All Your Favorite Gaming Gears</InfoTitle>
                <p>Supports games of recent release</p>
                <InfoButton>Explore</InfoButton>
              </InfoContainer>
              <ButtonContainer></ButtonContainer>
            </InfoAndButtonsContainer>
          </CarouselItem>
          <CarouselItem bg={digitalCamera}>
            <InfoAndButtonsContainer>
              <InfoContainer>
                <InfoTitle>All High End Camera Gears </InfoTitle>
                <p>For passionate photographers</p>
                <InfoButton>Explore</InfoButton>
              </InfoContainer>
              <ButtonContainer></ButtonContainer>
            </InfoAndButtonsContainer>
          </CarouselItem>
        </Inner>
      </Carousel>
    </Wrapper>
  );
};

export default Slider;
