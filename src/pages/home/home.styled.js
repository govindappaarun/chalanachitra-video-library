import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  color: ${(p) => p.theme.text.body};
  .container {
    min-height: calc(100vh - 156px);
  }
`;

export const StyledMain = styled.div`
  flex: 1;
  padding: 0.5rem 1.5rem;
  min-height: 80vh;
  background-color: ${(p) => p.theme.base.main};
  color: ${(p) => p.theme.base.contrast};
`;
