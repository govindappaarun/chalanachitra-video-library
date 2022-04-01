import React from "react";
import { ColorTypes, SizeTypes } from "../types/types";
import StyledBadge from "./Badge.styled";

export type BadgeProps = {
  type?: string;
  size?: SizeTypes;
  color?: ColorTypes;
  children?: React.ReactNode;
  className?: string;
};

export default function Badge({
  size = "md",
  color = "primary",
  children,
  type = "text",
  ...rest
}: BadgeProps) {
  return (
    <StyledBadge {...rest} type={type} size={size} color={color}>
      {children}
    </StyledBadge>
  );
}
