import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(p) => p.theme.neutral.dark};
  padding: 1rem;
  color: ${(p) => p.theme.primary.contrastText};
  display: flex;
`;

export const StyledAnchor = styled.a`
  color: ${(p) => p.theme.white};
  margin: 0 0.5rem;
  font-size: 1.2rem;
`;
