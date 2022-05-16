import styled, { css, keyframes } from "styled-components";

const appear = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0%);
  }
`;

export const StyledAlert = styled.div(({ color }) => [
  css`
    border-radius: 4px;
    margin: 0.5rem;
    padding: 1rem;
    position: relative;
    font-size: 1.2rem;
    color: white;
    display: inline-flex;
    align-items: center;
    width: 25rem;
    gap: 0.5rem;
    animation: ${appear} 0.3s linear;
    position: absolute;
    bottom: 20px;
    right: 0;
    .icon {
      flex-shrink: 0;
    }
  `,
  color === "primary" &&
    css`
      background-color: ${(p) => p.theme.primary.main};
    `,
  color === "secondary" &&
    css`
      background-color: ${(p) => p.theme.secondary.main};
    `,
  color === "warning" &&
    css`
      background-color: ${(p) => p.theme.warning.main};
    `,
  color === "success" &&
    css`
      background-color: ${(p) => p.theme.success.main};
    `,
  color === "error" &&
    css`
      background-color: ${(p) => p.theme.error.main};
    `,
]);

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
