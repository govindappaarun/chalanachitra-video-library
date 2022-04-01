import styled, { css } from "styled-components";
import { StyleType, StyleFlex } from "../utils/style";
import { BadgeProps } from "./Badge";

const Badge = styled.span<BadgeProps>`
  ${StyleFlex.flexInline};
  ${(p) => p.color && StyleType[p.color]};
  cursor: pointer;

  ${(p) =>
    p.type === "text" &&
    css`
      padding: 5px 10px;
      border-radius: 5px;
      line-height: 1rem;
    `}

  ${(p) =>
    p.type === "dot" &&
    css`
      border-radius: 50%;
      height: 1rem;
      width: 1rem;
    `}
`;

export default Badge;
