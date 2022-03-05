import React from "react";
import { Container, Grid, GridImg, GridItem } from "./CategoriesStyles";

// import iPhone from "../../images/camera-digital.jpg";
import iPhone from "./images/iphone-13-pro-family-hero.png";
import ninSwitch from "./images/Nintendo-Switch.jpg";
import camera from "./images/camera.png";
import iPad from "./images/ipad.jfif";
import laptop from "./images/laptop.jpg";
import ps5 from "./images/ps5.png";
import monitor from "./images/curve-monitor.jpg";
import drawTablet from "./images/draw-tablet.jpg";

const Categories = () => {
  return (
    <Container>
      <Grid bg={iPhone}>
        <GridItem>
          <GridImg src={iPhone}></GridImg>
        </GridItem>
        <GridItem>
          {" "}
          <GridImg src={ninSwitch}></GridImg>
        </GridItem>
        <GridItem>
          <GridImg src={camera}></GridImg>
        </GridItem>
        <GridItem>
          <GridImg src={iPad}></GridImg>
        </GridItem>
        <GridItem>
          <GridImg src={laptop}></GridImg>
        </GridItem>
        <GridItem>
          <GridImg src={ps5}></GridImg>
        </GridItem>
        <GridItem>
          <GridImg src={monitor}></GridImg>
        </GridItem>
        <GridItem>
          <GridImg src={drawTablet}></GridImg>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Categories;
