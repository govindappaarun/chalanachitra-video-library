import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: ${(p) => p.theme.neutral.lightest};
  display: grid;
  place-items: center;
`;

export const StyledForm = styled.form`
  margin: 0 auto;
  padding: 1rem 2rem;
  min-width: 25rem;
  max-width: 30rem;
  box-shadow: ${(p) => p.theme.bs1};
  background-color: ${(p) => p.theme.neutral.main};
`;
