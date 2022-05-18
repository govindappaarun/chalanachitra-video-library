import React from "react";
import { ColorTypes } from "../types/types";
import Alert from "./Alert";
import { StyledContainer } from "./Alert.styled";

type AlertItem = {
  show: boolean;
  message: string;
  type: ColorTypes;
};

type Props = {
  alert: AlertItem[] | undefined;
};

export default function AlertContainer({ alert }: Props) {
  return (
    <StyledContainer>
      {alert &&
        alert.map((item: AlertItem, index) => (
          <Alert key={index} show color={item.type} message={item.message} />
        ))}
    </StyledContainer>
  );
}
