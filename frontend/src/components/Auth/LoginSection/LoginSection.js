import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../../redux/authSlice";
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
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(dispatch, formData);
  };

  return (
    <MainWrapper>
      <FormContainer>
        <Form onSubmit={onSubmit}>
          <FormWrapper>
            <FormTitle>LOGIN</FormTitle>
            <EmailInput
              placeholder="Enter  your email"
              type="email"
              name="email"
              onChange={onChange}
            />
            <PasswordInput
              placeholder="Enter your password"
              type="password"
              name="password"
              onChange={onChange}
            />
            <LoginButton>LOGIN</LoginButton>
            <AskAccountExist>
              <AskAccountExistText>Don't have an Account?</AskAccountExistText>
              <AskAccountExistAction>
                <Link
                  to="/register"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Sign Up
                </Link>
              </AskAccountExistAction>
            </AskAccountExist>
          </FormWrapper>
        </Form>
      </FormContainer>
    </MainWrapper>
  );
};

export default LoginSection;
