import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(p) => p.theme.neutral.dark};
  padding: 1rem;
  color: ${(p) => p.theme.primary.contrastText};
`;
