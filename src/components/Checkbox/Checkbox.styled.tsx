import styled from "styled-components";
import { Size } from "./types";
import { CheckboxProps } from "./Checkbox";

export const StyledCheckbox = styled.div<CheckboxProps>`
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  padding: 5px;
  font-size: 1.15rem;
  & input {
    width: ${(p) => (p.size ? Size[p.size] : Size["sm"])};
    height: ${(p) => (p.size ? Size[p.size] : Size["sm"])};
  }
`;
