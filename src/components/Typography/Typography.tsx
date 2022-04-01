import React from "react";
import StyledTypography from "./Typography.styled";
import { TextVariants, ColorTypes } from "../types/types";
import clsx from "clsx";

export type TypographyProps = {
  variant: string;
  color?: ColorTypes;
  children: React.ReactNode;
  size?: string;
  align?: "center" | "left" | "right";
  uppercase?: boolean;
  background?: ColorTypes;
  weight?: 400 | 500 | 600;
  className?: string;
};

export default function Typography({
  variant,
  color,
  children,
  className,
  ...rest
}: TypographyProps) {
  const element = variant
    ? TextVariants[variant as keyof typeof TextVariants]
    : "p";
  // update class name based on element or variant
  className = clsx(
    className,
    { [variant]: variant !== element },
    { [element]: variant === element }
  );
  return (
    <StyledTypography
      className={className}
      as={element}
      variant={variant}
      color={color}
      {...rest}
    >
      {children}
    </StyledTypography>
  );
}
