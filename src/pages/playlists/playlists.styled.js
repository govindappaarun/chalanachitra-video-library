import { Box } from "src/components";
import styled from "styled-components";
import { GrTrash } from "react-icons/gr";

export const Playlist = styled(Box)`
  box-shadow: 1px 2px 0px grey;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;
  color: black;
  background-color: white;
  cursor: pointer;
  min-width: 15rem;
  max-width: 20rem;
  &:hover {
    box-shadow: 2px 2px 0px #eee;
  }
`;

export const Trash = styled(GrTrash)`
  cursor: pointer;
  font-size: 1rem;
  margin: 5px 10px;
`;
