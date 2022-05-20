import { Card } from "src/components";
import styled from "styled-components";

import {
  MdPlayArrow,
  MdOutlineQueue,
  MdOutlineWatchLater,
  MdOutlineComment,
  MdMoreVert,
} from "react-icons/md";

import { RiEyeLine } from "react-icons/ri";

export const CommentIcon = styled(MdOutlineComment)``;
export const EyelineIcon = styled(RiEyeLine)``;

export const MoreIcon = styled(MdMoreVert)`
  font-size: 1.5rem;
  cursor: pointer;
`;

export const PlayIcon = styled(MdPlayArrow)`
  font-size: 2.5rem;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  visibility: hidden;
  border: 1px solid grey;
`;

export const StyledCard = styled(Card)`
  border: none;
  background-color: transparent;
  cursor: pointer;

  .typography {
    color: ${(p) => p.theme.text.body};
    background-color: transparent;
    line-height: 1.5rem;
  }

  .card-body {
    padding: 0.5rem 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-start;
    .popover-menu {
      position: absolute;
      top: 10px;
      right: 10px;
    }
    .category {
      font-weight: 700;
    }
  }

  .card-media {
    position: relative;
    padding: 0.5rem 1rem;
    transition: all 0.3 ease-in-out;

    .views {
      position: absolute;
      left: 10%;
      bottom: 1.5rem;
      background-color: black;
      text-transform: uppercase;
    }
    .duration {
      position: absolute;
      bottom: 0;
      transform: translate(calc(-100% - 1rem), -100%);
      background-color: black;
    }

    img:hover {
      opacity: 0.5;
    }
  }

  &:hover {
    .play {
      visibility: visible;
    }
  }

  &.horizontal {
    flex-direction: row;
    min-width: 50vw;

    .card-media {
      flex-grow: 2;
    }

    .card-body {
      flex-grow: 1;
    }
  }
`;
