import { Card } from "src/components";
import styled from "styled-components";
import {
  MdPlayArrow,
  MdOutlineQueue,
  MdOutlineWatchLater,
  MdOutlineComment,
} from "react-icons/md";
import { GrLike, GrDislike } from "react-icons/gr";
import { RiEyeLine } from "react-icons/ri";
export const Wrapper = styled.div`
  background-color: ${(p) => p.theme.neutral.main};
`;

export const StyledMain = styled.main`
  min-height: 80vh;
`;

export const LikeIcon = styled(GrLike)``;
export const DislikeIcon = styled(GrDislike)``;

export const CommentIcon = styled(MdOutlineComment)``;
export const EyelineIcon = styled(RiEyeLine)``;

export const QueueIcon = styled(MdOutlineQueue)`
  color: white;
  font-size: 1.5rem;
  position: absolute;
  right: 2rem;
  top: 1rem;
  transition: opacity 0.3 ease-in-out;

  :hover {
    opacity: 0.7;
  }
`;

export const WatchLaterIcon = styled(MdOutlineWatchLater)`
  color: white;
  font-size: 1.5rem;
  position: absolute;
  right: 2rem;
  top: 3rem;
  transition: opacity 0.3 ease-in-out;

  :hover {
    opacity: 0.7;
  }
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

export const StyleCard = styled(Card)`
  border: none;
  background-color: transparent;

  .typography {
    color: white;
    background-color: transparent;
    line-height: 1.5rem;
  }
  .card-body {
    padding: 0.5rem 1rem;
  }
  .card-media {
    position: relative;
    padding: 0.5rem 1rem;
    transition: all 0.3 ease-in-out;

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
`;
