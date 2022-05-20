import React, { useEffect, useState } from "react";
import axios from "axios";
import { Wrapper, StyledForm } from "./Login.styled";
import { Input, Button, Box, Typography } from "src/components";
import { useForm } from "src/hooks/useForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "src/contexts";
import authService from "src/services/authService";
import { InputPassword } from "src/components/Input";
import Header from "../header";
import Footer from "../footer";

type LoginCredentials = { email: string; password: string };

export default function Login() {
  const navigate = useNavigate();
  const { authState, authDispatch } = useAuth();

  useEffect(() => {
    if (authState.isLoggedIn) {
      navigate("/home"); // auto redirect to home if logged in
    }
  }, [authState.isLoggedIn]);

  const initialState = {
    email: "",
    password: "",
  };

  const { onChange, onSubmit, values } = useForm(() => {
    doLoginApi(values as LoginCredentials);
  }, initialState);

  const doGuestLogin = () => {
    doLoginApi({ email: "vl-guest@gmail.com", password: "guest123" });
  };

  const doLoginApi = (values: LoginCredentials) => {
    if (!(values.email && values.password)) {
      return;
    }
    authService
      .doLogin(values)
      .then((result) => {
        localStorage.setItem("token", result.encodedToken);
        localStorage.setItem("user", JSON.stringify(result.foundUser));
        authDispatch({ type: "DO_LOGIN", payload: result.foundUser });
        navigate("/home");
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <>
      <Header />
      <Wrapper>
        <StyledForm
          action="#"
          className="flex-column flex-gap"
          onSubmit={onSubmit}
        >
          <Typography variant="h1" className="text-center secondary">
            {/* Sign In To Your Account */}
          </Typography>
          <Input
            placeholder="Email Address"
            className="my-2"
            name="email"
            onChange={onChange}
          >
            <label>Email</label>
          </Input>
          <InputPassword
            placeholder="Enter Password"
            className="my-2"
            name="password"
            onChange={onChange}
            label="Password"
          />
          <Box display="flex" gap="md" direction="column">
            <Button
              color="primary"
              style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
            >
              Sign In
            </Button>

            <Button
              color="success"
              outline
              type="button"
              onClick={doGuestLogin}
              style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
            >
              Guest Sign In
            </Button>
          </Box>
        </StyledForm>
      </Wrapper>
      <Footer />
    </>
  );
}
