import React from "react";
import {
  AskAccountExist,
  AskAccountExistAction,
  AskAccountExistText,
  EmailInput,
  Form,
  FormContainer,
  FormTitle,
  FormWrapper,
  LoginButton,
  MainWrapper,
  PasswordInput,
} from "./LoginSectionStyles";

const LoginSection = () => {
  return (
    <MainWrapper>
      <FormContainer>
        <Form>
          <FormWrapper>
            <FormTitle>LOGIN</FormTitle>
            <EmailInput placeholder="Enter  your email" type="email" />
            <PasswordInput placeholder="Enter your password" type="password" />
            <LoginButton>LOGIN</LoginButton>
            <AskAccountExist>
              <AskAccountExistText>Don't have an Account?</AskAccountExistText>
              <AskAccountExistAction>Sign Up</AskAccountExistAction>
            </AskAccountExist>
          </FormWrapper>
        </Form>
      </FormContainer>
    </MainWrapper>
  );
};

export default LoginSection;
