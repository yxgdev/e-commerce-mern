import styled from "styled-components";
import breakpoint from "../../breakpoints";
import KL from "./images/beautiful_kl_unsplash.jpg";

export const MainWrapper = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${KL}) no-repeat center;
  background-size: cover;
  height: 75vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormContainer = styled.div`
  height: 70%;
  width: 30%;
  @media ${breakpoint.device.sm} {
    width: 90%;
  }
`;

export const Form = styled.form`
  height: 100%;
  width: 100%;
`;

export const FormWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormTitle = styled.h2`
  text-align: left;
  color: white;
`;
export const EmailInput = styled.input`
  padding: 20px;
  margin: 15px 0;
  width: 80%;
`;
export const PasswordInput = styled.input`
  padding: 20px;
  width: 80%;
`;

export const LoginButton = styled.button`
  background-color: black;
  color: white;
  width: 90%;
  border: none;
  padding: 20px;
  margin-top: 15px;
  cursor: pointer;
  :hover {
    background-color: gold;
  }
`;

export const AskAccountExist = styled.div`
  display: flex;
  margin-top: 10px;
  width: 80%;
  justify-content: space-between;
  padding: 0;
`;

export const AskAccountExistText = styled.span`
  color: white;
`;
export const AskAccountExistAction = styled.div`
  margin-right: 10px;
  text-align: right;
  cursor: pointer;
  color: white;
`;
