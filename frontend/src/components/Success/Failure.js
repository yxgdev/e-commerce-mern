import React from "react";
import {
  BackToCheckOut,
  FailureContainer,
  FailureText,
  Wrapper,
} from "./FailureStyles";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useNavigate } from "react-router-dom";
const Failure = () => {
  let navigate = useNavigate();
  const onClick = () => {
    navigate("/checkout");
  };
  return (
    <FailureContainer>
      <Wrapper>
        <ErrorOutlineIcon
          style={{ transform: "scale(5)", marginBottom: "75px" }}
        />
        <FailureText>Payment Unsuccessful</FailureText>
        <BackToCheckOut onClick={onClick}>Back To CheckOut</BackToCheckOut>
      </Wrapper>
    </FailureContainer>
  );
};

export default Failure;
