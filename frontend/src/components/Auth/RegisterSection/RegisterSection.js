import React from "react";
import {
  AskAccountExist,
  AskAccountExistAction,
  AskAccountExistText,
  ConfirmPasswordInput,
  EmailInput,
  Form,
  FormContainer,
  FormTitle,
  FormWrapper,
  LoginButton,
  MainWrapper,
  NameInput,
  PasswordInput,
} from "./RegisterSectionStyles";

const RegisterSection = () => {
  return (
    <MainWrapper>
      <FormContainer>
        <Form>
          <FormWrapper>
            <FormTitle>REGISTER</FormTitle>
            <NameInput placeholder="Enter  your name" type="text" />
            <EmailInput placeholder="Enter  your email" type="email" />
            <PasswordInput placeholder="Enter your password" type="password" />
            <ConfirmPasswordInput
              placeholder="Confirm your password"
              type="password"
            />
            <LoginButton>REGISTER</LoginButton>
            <AskAccountExist>
              <AskAccountExistText>Have an Account?</AskAccountExistText>
              <AskAccountExistAction>Sign In</AskAccountExistAction>
            </AskAccountExist>
          </FormWrapper>
        </Form>
      </FormContainer>
    </MainWrapper>
  );
};

export default RegisterSection;
