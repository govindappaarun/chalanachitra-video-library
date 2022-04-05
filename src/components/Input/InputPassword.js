import React, { createRef, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import styled from "styled-components";
import Box from "../Box";

const EyeInVisible = styled(AiOutlineEyeInvisible)`
  cursor: pointer;
  transition: all 0.3 ease-in-out;

  position: absolute;
  top: 2.5rem;
  font-size: 1.2rem;
  right: 0.75rem;

  &:hover {
    opacity: 0.8;
  }
`;

const EyeVisible = styled(AiOutlineEye)`
  cursor: pointer;
  transition: all 0.3 ease-in-out;

  position: absolute;
  top: 2.5rem;
  font-size: 1.2rem;
  right: 0.75rem;

  &:hover {
    opacity: 0.8;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Input = styled.input`
  border: none;
  outline: 1px solid ${(p) => p.theme.info.main};
  padding: 1rem;
  position: relative;
  padding-right: 2.5rem;
`;

export default function InputPassword({ label, className, ...rest }) {
  const inputRef = createRef();
  const [visible, setVisible] = useState(false);

  return (
    <Wrapper className={className}>
      <label>{label ? label : ""}</label>
      <Input ref={inputRef} {...rest} type="password" />
      {!visible && (
        <EyeVisible
          onClick={() => {
            inputRef.current.type = "text";
            setVisible(true);
          }}
        />
      )}
      {visible && (
        <EyeInVisible
          onClick={() => {
            inputRef.current.type = "password";
            setVisible(false);
          }}
        />
      )}
    </Wrapper>
  );
}
