import React, { useEffect, useState, useMemo } from "react";
import { Box } from "src/components";
import userService from "src/services/userService";
import videoService from "src/services/videoService";
import Video from "../components/video";
import { Wrapper } from "./liked.styled";

export default function LikedVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getLikedVideos();
  }, []);

  const getLikedVideos = () => {
    userService.getUserLikes().then((response) => {
      setVideos(response.likes);
    });
  };

  return (
    <Wrapper>
      <Box display="flex" justifyContent="space-between" className="my-1">
        <h2>Liked Videos</h2>
      </Box>
      <hr />
      {videos && videos.length === 0 && <h4>No videos found</h4>}
      <section>
        {videos.map((video) => {
          return <Video key={video._id} video={video} />;
        })}
      </section>
    </Wrapper>
  );
}
