import React from "react";
import { Box, Button, Modal, Typography } from "src/components";
import { LinkButton } from "src/components/Button";

function PlaylistModal({
  showPlaylist,
  playlists,
  addSelectedVideoToList,
  setShowPlaylist,
}) {
  return (
    <Modal
      open={showPlaylist}
      onClose={() => setShowPlaylist(false)}
      className="playlist-selection-modal"
    >
      <Box display="flex" direction="column" gap="sm">
        <Typography variant="h3">Choose a Playlist to add</Typography>
        {playlists.length >= 0 &&
          playlists.map((list, index) => {
            return (
              <Button
                key={index}
                outline
                color="success"
                onClick={() => addSelectedVideoToList(list)}
              >
                {list.name}
              </Button>
            );
          })}
        {playlists.length === 0 && (
          <>
            <Typography variant="p">
              No playlist found, create a playlist
            </Typography>
            <LinkButton
              color="warning"
              onClick={() => setShowPlaylist(false)}
              to="/home/playlists/create"
            >
              Create Playlist
            </LinkButton>
          </>
        )}
      </Box>
    </Modal>
  );
}

export default PlaylistModal;
