import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Typography } from "src/components";
import userService from "src/services/userService";
import Video from "../components/video";

export default function ViewPlaylist() {
  const params = useParams();
  const [playlist, setPlaylist] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getVideosInPlaylist(params);
  }, [params]);

  const getVideosInPlaylist = (params) => {
    userService
      .getVideosInPlaylist({ _id: params.playlistId })
      .then((response) => {
        setPlaylist(response.playlist);
      });
  };

  const deleteVideoFromPlaylist = async ({ _id }) => {
    try {
      await userService.deleteVideoFromPlaylist({
        _id,
        playlistId: playlist._id,
      });
      getVideosInPlaylist(params);
    } catch (err) {
      console.log("catch err", err);
    }
  };

  return (
    <div>
      <Typography variant="h2">Video List: </Typography>
      <div className="videos-container">
        {playlist?.videos?.map((video, index) => {
          return (
            <Video
              video={video}
              key={index}
              showDelete
              deleteText="Delete"
              onDelete={deleteVideoFromPlaylist}
              className="view-video"
            />
          );
        })}
        {playlist?.videos?.length <= 0 && (
          <div className="no-videos">
            No videos found
            <Button className="m-1" onClick={() => navigate("/home")}>
              Add Videos
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
