import clsx from "clsx";
import React, { FC, ButtonHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ColorTypes, SizeTypes } from "../types/types";
import StyledButton from "./Button.styled";
import { ButtonTypes } from "./types";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: SizeTypes;
  color?: ColorTypes;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  outline?: boolean;
};

const Button: FC<ButtonProps> = ({
  children,
  color = "primary",
  className,
  ...rest
}: ButtonProps) => {
  const classNames = clsx(className, color);
  return (
    <StyledButton className={classNames} color={color} {...rest}>
      {children}
    </StyledButton>
  );
};

export const LinkButton = styled(NavLink)`
  background-color: transparent;
  border: 0;
  color: ${(p) => (p.color ? p.theme[p.color]["main"] : "white")};
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &.active {
    background-color: lightblue;
  }
  &:hover {
    background-color: aliceblue;
    box-shadow: none;
    transform: none;
  }
`;

export const IconButton = styled(Button)`
  background-color: transparent;
  border: 0;
  padding: 0;
  &:hover {
    transform: none;
    box-shadow: none;
  }
`;

export default Button;
