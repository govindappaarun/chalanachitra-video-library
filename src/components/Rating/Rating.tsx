import React from "react";
import { StyledRating } from "./Rating.styled";
export type RatingProps = {
  children?: React.ReactNode;
  className?: string;
  rating: string;
};
export default function Rating({ children, ...rest }: RatingProps) {
  return (
    <StyledRating className="rating" {...rest}>
      {children}
    </StyledRating>
  );
}
