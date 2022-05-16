import React, { useState } from "react";
import { ColorTypes, SizeTypes } from "../types/types";
import { StyledAlert } from "./Alert.styled";
import { BsFillCheckCircleFill, BsFillInfoCircleFill } from "react-icons/bs";

export type AlertProps = {
  size?: SizeTypes;
  color?: ColorTypes;
  message: string;
  show: boolean;
};

export default function Alert({ show, message, ...rest }: AlertProps) {
  return show ? (
    <StyledAlert {...rest}>
      <BsFillInfoCircleFill className="icon" />
      {message}
    </StyledAlert>
  ) : null;
}
