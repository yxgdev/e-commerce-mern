import React from "react";
import {
  BackToStore,
  SuccessContainer,
  SuccessText,
  Wrapper,
} from "./SuccessStyles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useNavigate } from "react-router-dom";

const Success = () => {
  let navigate = useNavigate();
  const onClick = () => {
    navigate("/");
  };
  return (
    <SuccessContainer>
      <Wrapper>
        <CheckCircleOutlineIcon
          style={{ transform: "scale(5)", marginBottom: "75px" }}
        />
        <SuccessText>Payment Successful</SuccessText>
        <BackToStore onClick={onClick}>Back To Store</BackToStore>
      </Wrapper>
    </SuccessContainer>
  );
};

export default Success;
