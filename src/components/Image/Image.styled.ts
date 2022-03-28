import styled from "styled-components";
import { ImageProps } from "./Image";

const StyledImage = styled.img<ImageProps>`
  &.img-responsive {
    object-fit: cover;
    width: 100%;
    height: auto;
  }

  &.img-round-corner {
    border-radius: 8px;
  }
  &.img-round {
    clip-path: circle();
  }

  &.img-thumbnail {
    border: 1px solid var(--info-main);
    border-radius: 4px;
    padding: 5px;
    width: 15rem;
  }

  &.img-thumbnail:hover {
    box-shadow: 1px 2px 8px 0px rgba(0, 0, 0, 0.75);
  }
`;

export default StyledImage;
