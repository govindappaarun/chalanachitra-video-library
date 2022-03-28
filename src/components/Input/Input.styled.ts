import styled, { css } from "styled-components";
import { InputProps } from "./Input";

export const StyledInput = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 0.4rem;

  .with-icon {
    position: relative;
    flex-direction: row;
  }

  .with-icon > i {
    color: var(--black);
    font-size: 1.25rem;
    left: 1.25rem;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    z-index: 10;
  }

  .with-icon input {
    flex-grow: 1;
    padding-left: 3.4rem;
  }

  .error-msg {
    font-size: 0.85rem;
  }

  input {
    border: none;
    outline: 1px solid ${(p) => p.theme.info.main};
    padding: 1rem;
    position: relative;
    font-size: 1rem;
  }

  input:focus-visible {
    border: none;
    outline-width: 2px;
    outline-color: ${(p) => p.theme.primary.main};
  }
  input:hover {
    border: none;
    outline: 2px solid ${(p) => p.theme.black};
  }
  .is-invalid {
    color: ${(p) => p.theme.error.light};
  }
  .is-invalid input:focus-visible {
    outline-width: 2px;
  }
  .is-invalid input {
    border: none;
    outline: 1px solid ${(p) => p.theme.error.light};
  }
  .is-invalid input::placeholder {
    color: ${(p) => p.theme.error.light};
  }

  .success input {
    border: none;
    outline: 2px solid ${(p) => p.theme.success.main};
  }
  .success input:focus-visible {
    outline: 2px solid ${(p) => p.theme.success.light};
  }

  input[type="checkbox"],
  input[type="radio"] {
    height: 1.25rem;
    width: 1.25rem;
  }

  ${(p) =>
    p.type &&
    p.type === "range" &&
    css`
      &,
      input {
        border: none;
        outline: 0;
      }
      &:hover,
      input:hover {
        outline: 0;
        border: none;
      }
    `}
`;
