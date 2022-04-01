import React from "react";
import { BoxProps } from "../Box/Box";
import { StyledCard } from "./Card.styled";

export type CardProps = {
  children: React.ReactNode;
  className?: string;
  cursor?: string;
  onClick?: () => void;
};
export default function Card({ children, ...rest }: CardProps & BoxProps) {
  return <StyledCard {...rest}>{children}</StyledCard>;
}
