import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  height: calc(100vh - 160px);
  display: grid;
  place-items: center;
  background-color: ${(p) => p.theme.base.main};
`;

export const StyledForm = styled.form`
  margin: 0 auto;
  padding: 1rem 2rem;
  min-width: 25rem;
  max-width: 30rem;
  box-shadow: ${(p) => p.theme.bs1};
  background-color: ${(p) => p.theme.background.bg05};
  color: ${(p) => p.theme.base.main};
  border-radius: 5px;
`;
