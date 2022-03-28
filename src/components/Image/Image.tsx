import React from "react";
import StyledImage from "./Image.styled";

export type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
};

export default function Image({ src, alt, ...rest }: ImageProps) {
  return <StyledImage src={src} alt={alt} {...rest}></StyledImage>;
}
