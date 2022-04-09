import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(p) => p.theme.background.bg90};
  padding: 1rem;
  color: ${(p) => p.theme.text.body};
  display: flex;
`;

export const StyledAnchor = styled.a`
  color: ${(p) => p.theme.base.main};
  margin: 0 0.5rem;
  font-size: 1.2rem;
`;
