import styled from "styled-components";
import { GrLike, GrDislike } from "react-icons/gr";
import { Box, Card } from "src/components";

export const Wrapper = styled.div``;

export const VideoCard = styled(Card)`
  width: 100%;
  height: calc(100vh - 220px);
  padding: 0;
`;

export const LikeIcon = styled(GrLike)`
  cursor: pointer;
  font-size: 1.5rem;
  margin: 0.5rem;
  color: white;
`;
export const DislikeIcon = styled(GrDislike)`
  cursor: pointer;
  font-size: 1.5rem;
  margin: 0.5rem;
`;

export const Details = styled(Box)``;

export const StyledMain = styled.main``;
