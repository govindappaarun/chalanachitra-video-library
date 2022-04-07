import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box, Button } from "src/components";
import userService from "src/services/userService";
import Video from "../components/video";
import { Playlist, Trash } from "./playlists.styled";

export default function Playlists() {
  const [activePlaylist, setActivePlaylist] = useState(null);
  const navigate = useNavigate();
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    getPlaylists();
  }, []);

  const getPlaylists = () => {
    userService.getUserPlaylists().then((response) => {
      setPlaylists(response.playlists);
    });
  };

  const deletePlaylist = (list) => {
    userService.deletePlayList(list).then((response) => {
      setPlaylists(response.playlists);
    });
  };

  const onPlaylistSelect = (list) => {
    setActivePlaylist(list);
    navigate(`/home/playlists/${list._id}`);
  };

  const onCreatePlaylist = (list) => {
    userService.createPlayList(list).then(() => {
      getPlaylists();
    });
  };

  return (
    <div>
      <Box display="flex" justifyContent="space-between" className="my-1">
        <h2>Playlists</h2>
        <Button
          color="primary"
          outline
          onClick={() => navigate("/home/playlists/create")}
        >
          Add Playlist
        </Button>
      </Box>
      <hr />
      <Box display="flex">
        {playlists && playlists.length === 0 && <h4>No playlists found</h4>}
        {playlists &&
          playlists.map((list, index) => (
            <Playlist
              display="flex"
              gap="md"
              alignItems="center"
              key={index}
              onClick={() => onPlaylistSelect(list)}
            >
              <div>{list.name}</div>
              <Trash
                onClick={(e) => {
                  e.stopPropagation();
                  deletePlaylist(list);
                }}
              />
            </Playlist>
          ))}
      </Box>
    </div>
  );
}
