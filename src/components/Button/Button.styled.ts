import styled, { css } from "styled-components";
import { StyleType } from "../utils/style";
import { ButtonProps } from "./Button";
import { ButtonSize } from "./types";

const Button = styled.button<ButtonProps>`
  border: none;
  outline: 0;
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  padding: 0 2rem;
  text-align: center;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  line-height: ${(p) => (p.size ? ButtonSize[p.size] : ButtonSize.md)};

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow.bs1};
  }

  ${(p) => p.color && StyleType[p.color]};

  ${(p) =>
    p.color &&
    css`
      border: 1px solid ${(props) => p.color && props.theme[p.color]["main"]};
      &:hover {
        transform: translateY(-3px);
        background-color: ${(props) => p.color && props.theme[p.color]["dark"]};
      }
    `}

  ${(p) =>
    p.outline &&
    css`
      color: ${(props) => p.color && props.theme[p.color]["main"]};
      background-color: transparent;
      &:hover {
        color: ${(p) => p.theme.white};
        background-color: ${(props) => p.color && props.theme[p.color]["main"]};
      }
    `}
`;

export default Button;

/*

 border radius to be dynamic 
 link button
 */
