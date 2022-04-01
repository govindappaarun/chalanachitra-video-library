import React from "react";
import { ColorTypes, SizeTypes } from "../types/types";

export type AlertProps = {
  size?: SizeTypes;
  color?: ColorTypes;
};

export default function Alert({ ...rest }: AlertProps) {
  return <div>Alert</div>;
}
