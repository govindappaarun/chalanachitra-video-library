import styled, { css } from "styled-components";
import { Box, Card } from "src/components";

export const Wrapper = styled.div``;

export const VideoCard = styled(Card)`
  width: 100%;
  height: calc(100vh - 220px);
  padding: 0;
  max-height: none;
  .card-media img {
    height: calc(100vh - 240px);
    max-height: none;
  }
`;

export const Details = styled(Box)``;

export const StyledMain = styled.main``;

export const Icon = styled.span(() => [
  css`
    color: ${(p) => p.theme.base.contrast};
    font-size: 1.5rem;
    cursor: pointer;
    &:hover,
    .active {
      color: ${(p) => p.theme.secondary.main};
    }
  `,
]);
