import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(p) => p.theme.base.main};
  color: ${(p) => p.theme.base.contrast};
  padding: 1rem;
  display: flex;
  font-size: 1.5rem;
`;

export const StyledAnchor = styled.a`
  color: ${(p) => p.theme.base.contrast};
  margin: 0 0.5rem;
  font-size: 1.2rem;
`;
