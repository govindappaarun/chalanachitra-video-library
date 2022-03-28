import styled from "styled-components";
import { RatingProps } from "./Rating";

export const StyledRating = styled.div<RatingProps>`
  --star-size: 40px;
  --star-color: #fff;
  --star-background: #fc0;
  --percent: calc(${(p) => p.rating} / 5 * 100%);

  display: inline-block;
  font-size: var(--star-size);
  font-family: Times;
  line-height: 1;
  cursor: pointer;

  &::before {
    content: "★★★★★";
    letter-spacing: 3px;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(var(--star-background)),
      to(var(--star-color))
    );
    background: -o-linear-gradient(
      left,
      var(--star-background) var(--percent),
      var(--star-color) var(--percent)
    );
    background: linear-gradient(
      90deg,
      var(--star-background) var(--percent),
      var(--star-color) var(--percent)
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
