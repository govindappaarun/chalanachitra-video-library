import React from "react";
import axios from "axios";
import { Input, Button, Box, Typography } from "src/components";
import { useNavigate } from "react-router-dom";
import { useForm } from "src/hooks/useForm";
import { StyledForm, Wrapper } from "./SignUp.styled";
import authService from "src/services/authService";
import Header from "../header";
import Footer from "../footer";

export default function SingnUp() {
  const navigate = useNavigate();

  const initialState = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  const { onChange, onSubmit, values } = useForm(() => {
    authService
      .doSignUp(values)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.log({ err });
      });
  }, initialState);

  return (
    <>
      <Header />
      <Wrapper>
        <StyledForm
          action="#"
          className="flex-column flex-gap"
          onSubmit={onSubmit}
        >
          {/* <Typography color="primary" variant="h1">
          Create Your Account
        </Typography> */}
          <div className="flex flex-gap-2">
            <Input
              placeholder="First Name"
              name="firstName"
              onChange={onChange}
              className="my-1 flex-grow-1"
            >
              <label>First Name</label>
            </Input>

            <Input
              placeholder="Last Name"
              name="lastName"
              onChange={onChange}
              className="my-1 flex-grow-1"
            >
              <label>Last Name</label>
            </Input>
          </div>

          <Input
            placeholder="Email Address"
            name="email"
            onChange={onChange}
            className="my-1"
          >
            <label>Email</label>
          </Input>

          <Input
            type="password"
            name="password"
            onChange={onChange}
            placeholder="Create Password"
            className="my-1 flex-grow-1"
          >
            <label>Password</label>
          </Input>

          <Input
            type="password"
            name="confirmPassword"
            onChange={onChange}
            placeholder="Confirm Password"
            className="my-1 flex-grow-1"
          >
            <label>Confirm Password</label>
          </Input>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            className="my-1"
          >
            <Button color="primary" className="my-1">
              Create Account
            </Button>
          </Box>
        </StyledForm>
      </Wrapper>
      <Footer />
    </>
  );
}
