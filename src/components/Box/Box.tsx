import React from "react";
import { SizeTypes } from "../types/types";
import { StyledBox } from "./Box.styled";
import { JC, AI, Wrap, AS, Direction, Display } from "./types";

export type BoxProps = {
  display?: Display;
  justifyContent?: JC;
  alignItems?: AI;
  alignSelf?: AS;
  gap?: SizeTypes;
  children?: React.ReactNode;
  wrap?: Wrap;
  direction?: Direction;
  shrink?: 0 | 1;
  grow?: 0 | 1;
  order?: number;
  className?: string;
  onClick?: () => void;
};

export default function Box({ display, children, ...rest }: BoxProps) {
  return (
    <StyledBox display={display} {...rest}>
      {children}
    </StyledBox>
  );
}
