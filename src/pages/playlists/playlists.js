import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box, Button } from "src/components";
import userService from "src/services/userService";
import Video from "../components/video";
import { Playlist, Trash } from "./playlists.styled";

export default function Playlists() {
  const [activePlaylist, setActivePlaylist] = useState(null);
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    getPlaylists();
  }, []);

  const getPlaylists = () => {
    userService.getUserPlaylists().then((response) => {
      console.log({ response });
      setPlaylists(response.playlists);
    });
  };

  const deletePlaylist = (list) => {
    userService.deletePlayList(list).then(() => {
      getPlaylists();
    });
  };

  const onPlaylistSelect = (list) => {
    setActivePlaylist(list);
    navigate(`/playlists/${list.id}`);
    userService
      .getVideosInPlaylist(list)
      .then((response) => setVideos(response.videos));
  };

  const onCreatePlaylist = (list) => {
    userService.createPlayList(list).then(() => {
      getPlaylists();
    });
  };

  return (
    <div>
      <Box display="flex" justifyContent="space-between">
        <h2>Playlists</h2>
        <Button
          color="primary"
          outline
          onClick={() => navigate("/playlists/create")}
        >
          Add Playlist
        </Button>
      </Box>
      <hr />
      <Box display="flex">
        {playlists && playlists.length === 0 && <h4>No playlists found</h4>}
        {playlists &&
          playlists.map((list, index) => (
            <Playlist key={index} onClick={() => onPlaylistSelect(list)}>
              {list.name}
              <Trash
                onClick={(e) => {
                  e.stopPropagation();
                  deletePlaylist(list);
                }}
              />
            </Playlist>
          ))}
      </Box>
      <Outlet />
      {activePlaylist && (
        <div>
          <h3>{activePlaylist.title}</h3>
          <hr />
          <div>
            {videos &&
              videos.map((video, index) => {
                <Video video={video} key={index} />;
              })}
          </div>
        </div>
      )}
    </div>
  );
}
