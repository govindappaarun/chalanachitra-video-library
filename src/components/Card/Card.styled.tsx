import styled from "styled-components";
import Box from "../Box";
import { CardProps } from "./Card";

export const StyledCard = styled(Box)<CardProps>`
  background: ${(p) => p.theme.base.main};
  border: 1px solid ${(p) => p.theme.text.secondary};
  display: inline-flex;
  flex-direction: column;
  position: relative;
  min-width: 20rem;
  cursor: ${(p) => p.cursor || "auto"};
  margin: 0.5rem;

  & > * {
    padding: 0.5rem;
  }

  &:hover .card-media img {
    transform: scale(1.02);
    transition: all 0.3s;
  }

  .card-title {
    margin: 0.5rem 0;
    font-weight: 700;
    font-size: 1.5rem;
  }

  .card-sub-title {
    margin: 0.5rem 0;
    font-size: 1.25rem;
    font-weight: 700;
  }

  .card-media {
    position: relative;
    img {
      width: 100%;
      object-fit: cover;
      max-height: 200px;
    }

    .card-body {
      color: ${(p) => p.theme.warning.main};
      font-size: 1rem;
    }
  }

  .card.horizontal {
    width: 25rem;

    .card-body {
      display: flex;
      gap: 10px;
    }
    .card-media img {
      height: 100px;
      width: 100px;
    }

    .card-footer {
      border-top: 1px solid ${(p) => p.theme.text.secondary};
    }
  }
`;
