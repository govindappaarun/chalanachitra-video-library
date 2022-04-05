import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${(p) => p.theme.primary.p800};
  color: ${(p) => p.theme.primary.contrastText};
`;

export const StyledMain = styled.div`
  flex: 1;
  padding: 0.5rem 1.5rem;
  min-height: 80vh;
`;
