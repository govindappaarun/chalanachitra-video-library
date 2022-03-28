import styled, { css } from "styled-components";
import { AvatarProps } from "./Avatar";

export const StyledAvatar = styled.span<AvatarProps>`
  border: 1px solid ${(p) => p.theme.primary.main};
  padding: 5px;
  border-radius: 100%;
  object-fit: cover;
  width: 4rem;
  height: 4rem;

  ${(p) =>
    p.type === "span" &&
    css`
      text-align: center;
      display: inline-block;
      line-height: 4rem;
      font-size: 2rem;
      padding: 0;
    `}

  &:hover {
    box-shadow: 1px 2px 8px 0px rgba(0, 0, 0, 0.75);
  }

  &.sm {
    font-size: 2rem;
    width: 2rem;
    height: 2rem;
    line-height: 3.2rem;
  }

  &.md {
    font-size: 2.5rem;
    width: 5rem;
    height: 5rem;
    line-height: 5.2rem;
  }

  &.lg {
    font-size: 3rem;
    width: 7.5rem;
    height: 7.5rem;
    line-height: 7.5rem;
  }
`;
