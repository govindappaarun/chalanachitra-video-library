import React from "react";
import { StyledCheckbox } from "./Checkbox.styled";
import { ColorTypes, SizeTypes } from "../types/types";

export type CheckboxProps = {
  children?: React.ReactNode;
  className?: string;
  size?: SizeTypes;
  id?: string;
  label?: string;
  color?: ColorTypes;
  checked?: boolean;
  onChange?: () => void;
};

export default function Checkbox({
  children,
  label,
  id,
  checked,
  onChange,
  ...rest
}: CheckboxProps) {
  return (
    <StyledCheckbox {...rest}>
      <input
        id={id || "checkbox"}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {label && <label htmlFor={id || "checkbox"}>{label}</label>}
    </StyledCheckbox>
  );
}
