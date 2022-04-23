import React, { useState } from "react";
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
import { register } from "../../../redux/authSlice";
import { useDispatch } from "react-redux";

const RegisterSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    register(dispatch, formData);
  };
  return (
    <MainWrapper>
      <FormContainer>
        <Form onSubmit={onSubmit}>
          <FormWrapper>
            <FormTitle>REGISTER</FormTitle>
            <NameInput
              placeholder="Enter  your name"
              type="text"
              name="name"
              onChange={onChange}
            />
            <EmailInput
              onChange={onChange}
              placeholder="Enter  your email"
              type="email"
              name="email"
            />
            <PasswordInput
              placeholder="Enter your password"
              type="password"
              name="password"
              onChange={onChange}
            />
            <ConfirmPasswordInput
              placeholder="Confirm your password"
              type="password"
              name="confirmPassword"
              onChange={onChange}
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
