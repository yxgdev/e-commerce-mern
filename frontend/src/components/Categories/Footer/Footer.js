import React from "react";
import {
  CopyRightText,
  FooterContainer,
  IconContainer,
  SocialsContainer,
  SocialsText,
} from "./FooterStyles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YoutubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <FooterContainer>
      <SocialsContainer>
        <IconContainer>
          <FacebookIcon />
        </IconContainer>
        <IconContainer>
          <InstagramIcon />
        </IconContainer>
        <IconContainer>
          <TwitterIcon />
        </IconContainer>
        <IconContainer>
          <YoutubeIcon />
        </IconContainer>
      </SocialsContainer>
      <SocialsText>Follow Us, Stay Updated</SocialsText>
      <CopyRightText>© 2022 TECH & GAMES. All Rights Reserved.</CopyRightText>
    </FooterContainer>
  );
};

export default Footer;
