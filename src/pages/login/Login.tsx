import React, { useEffect, useState } from "react";
import axios from "axios";
import { Wrapper, StyledForm } from "./Login.styled";
import { Input, Button, Box, Typography } from "src/components";
import { useForm } from "src/hooks/useForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "src/contexts";

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

  const { onChange, onSubmit, values } = useForm(async () => {
    try {
      const result = await axios.post("/api/auth/login", { ...values });
      if (result.status === 200) {
        console.log(result.data);
        // save to localstorage
        localStorage.setItem("token", result.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(result.data.foundUser));
        authDispatch({ type: "DO_LOGIN", payload: result.data.foundUser });
        navigate("/home");
      }
    } catch (err) {
      console.log({ err });
    }
  }, initialState);

  return (
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
        <Input
          placeholder="Enter Password"
          className="my-2"
          name="password"
          onChange={onChange}
        >
          <label>Password</label>
        </Input>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          className="my-1"
        >
          <Button color="primary">
            Sign In <i className="fas fa-chevron-right"></i>
          </Button>
        </Box>
      </StyledForm>
    </Wrapper>
  );
}
