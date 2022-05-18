import React from "react";
import styled from "styled-components";
import { Box, Button } from "src/components";

const Wrapper = styled.div`
  position: relative;
  &:hover > .menu {
    opacity: 1;
  }

  .menu {
    background-color: ${(p) => p.theme.background.bg20};
    position: absolute;
    right: 0;
    top: 50px;
    padding: 10px 1rem;
    border-radius: 4px;
    opacity: 0;
    z-index: 99;
    width: 18rem;
  }
`;

const PopoverMenu = ({
  children,
  addToPlaylist,
  isInWatchList,
  addWatchLater,
  removeWatchLater,
  ...rest
}) => {
  const isInWList = isInWatchList();
  return (
    <Wrapper {...rest}>
      <div className="trigger">{children}</div>
      <Box display="flex" direction="column" gap="sm" className="menu">
        <Button color="warning" outline onClick={addToPlaylist}>
          Add to Playlist
        </Button>
        <Button
          color="success"
          outline
          onClick={isInWList ? removeWatchLater : addWatchLater}
        >
          {isInWList ? "Remove Watchlater" : "Add to Watchlater"}
        </Button>
      </Box>
    </Wrapper>
  );
};

export default PopoverMenu;
