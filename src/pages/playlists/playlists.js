import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Box, Button } from "src/components";
import userService from "src/services/userService";
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
      <Box display="flex" className="videos-container" alignItems="start">
        {playlists && playlists.length === 0 && (
          <h4 className="no-videos">
            No playlists found, start <Link to="create">creating</Link>{" "}
            playlists
          </h4>
        )}
        {playlists &&
          playlists.map((list, index) => (
            <Playlist
              display="flex"
              gap="md"
              alignItems="center"
              key={index}
              onClick={() => onPlaylistSelect(list)}
            >
              <Box grow="1">
                <h4>{list.name}</h4>
                <p>{list.description}</p>
                <p>{list.videos.length} videos</p>
              </Box>
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
