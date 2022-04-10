import { css } from "styled-components";

const StyleType = {
  primary: css`
    background-color: ${(p) => p.theme.primary.main};
    color: ${(p) => p.theme.primary.contrast};
  `,
  secondary: css`
    background-color: ${(p) => p.theme.secondary.main};
    color: ${(p) => p.theme.secondary.contrast};
    border: 1px solid ${(p) => p.theme.secondary.contrast};
  `,
  warning: css`
    background-color: ${(p) => p.theme.warning.main};
    color: ${(p) => p.theme.base.main};
  `,
  error: css`
    background-color: ${(p) => p.theme.error.main};
    color: ${(p) => p.theme.base.main};
  `,
  success: css`
    background-color: ${(p) => p.theme.success.main};
    color: ${(p) => p.theme.base.main};
  `,
  info: css`
    background-color: ${(p) => p.theme.background.bg70};
    color: ${(p) => p.theme.base.main};
  `,
};

const StyleFlex = {
  flex: css`
    display: flex;
  `,
  flexInline: css`
    display: inline-flex;
  `,

  flexRow: css`
    display: flex;
    flex-direction: row;
  `,
  flexCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  flexCenterX: css`
    display: flex;
    justify-content: center;
  `,
  flexCenterY: css`
    display: flex;
    align-items: center;
  `,
  flexWrap: css`
    display: flex;
    flex-wrap: wrap;
  `,

  flexGap0: css`
    gap: 0.5rem;
  `,
  flexGap1: css`
    gap: 1rem;
  `,
  flexGap2: css`
    gap: 2rem;
  `,
  flexGap3: css`
    gap: 3rem;
  `,
  flexGap4: css`
    gap: 4rem;
  `,
  flexGap5: css`
    gap: 5rem;
  `,
};

const StyleSize = {
  sm: css`
    font-size: 16px;
  `,
  md: css`
    font-size: 20px;
  `,
  lg: css`
    font-size: 36px;
  `,
  xlg: css`
    font-size: 42px;
  `,
};

export { StyleType, StyleFlex, StyleSize };
