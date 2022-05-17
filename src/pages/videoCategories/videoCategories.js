import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Modal, Typography } from "src/components";
import { LinkButton } from "src/components/Button";
import userService from "src/services/userService";
import videoService from "src/services/videoService";
import Video from "../components/video";
import { Wrapper } from "./videoCategories.styled";

export default function VideoCategories() {
  const { categoryName } = useParams();
  const [videos, setVideos] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    getAllVideos();
    getPlaylists();
  }, []);

  const categoryVideos = useMemo(() => {
    return videos.filter((video) => video.categoryName === categoryName);
  }, [videos, categoryName]);

  const addToPlaylist = (video) => {
    setVideo(video);
    setShowPlaylist(true);
  };

  const addVideoToList = ({ _id }) => {
    userService
      .addVideoToPlaylist({ _id, video })
      .then(() => {
        setShowPlaylist(false);
      })
      .finally(() => {
        setShowPlaylist(false);
      });
  };

  const getAllVideos = () => {
    videoService.getAllVideos().then((response) => {
      setVideos(response.videos);
    });
  };

  const getPlaylists = () => {
    userService.getUserPlaylists().then((response) => {
      setPlaylists(response.playlists);
    });
  };

  return (
    <Wrapper>
      <h3 className="header my-1">{categoryName}</h3>
      <section className="videos-container">
        {categoryVideos && categoryVideos.length === 0 && (
          <h4 className="no-videos">No Videos found for this category</h4>
        )}
        {categoryVideos.map((video) => {
          return (
            <Video
              key={video._id}
              video={video}
              addToPlaylist={addToPlaylist}
            />
          );
        })}
      </section>
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
                  onClick={() => addVideoToList(list)}
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
              <LinkButton outline color="warning" to="/home/playlists/create">
                Create Playlist
              </LinkButton>
            </>
          )}
        </Box>
      </Modal>
    </Wrapper>
  );
}
