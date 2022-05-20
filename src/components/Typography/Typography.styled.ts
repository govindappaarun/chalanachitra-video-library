import styled, { css } from "styled-components";
import { StyleSize } from "../utils/style";
import { TypographyProps } from "./Typography";

const StyledTypography = styled.div<TypographyProps>`
  color: ${(p) => (p.color ? p.theme[p.color]["main"] : p.theme.text.body)};
  background-color: ${(p) =>
    p.background ? p.theme[p.background]["main"] : "transparent"};
  text-align: ${(p) => p.align || "left"}};
  
  ${(p) => p.size && StyleSize["md"]};
  ${(p) =>
    p.uppercase &&
    css`
      text-transform: uppercase;
    `};

    &.hero {
      font-size: 60px;
      line-height: 4.7rem;
    }

    &.h1 {
      font-size: 2rem;
      line-height: 2.5rem;
      font-weight: 600;
    }

    &.h2 {
      font-size: 1.125rem;
      line-height: 1.375rem;
      font-weight: 600;
    }

    &.h3 {
       font-size: 1rem;
      line-height: 1.25rem;
      font-weight: 500;
    }
    
    &.subtitle {
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 400;
    }

    &.body{
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1rem;
    }

    &.p {
      font-size: 20px;
      line-height: 24px;
    }
    `;

export default StyledTypography;
